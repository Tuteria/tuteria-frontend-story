import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import { PricingPage as NewPricingPage } from "@tuteria/shared-lib/src/home-tutoring/request-flow/PricingPage";
import CompletePage from "@tuteria/shared-lib/src/new-request-flow/pages/CompletePage";
import LandingPageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/LandingPage";
import LessonDetailPage from "@tuteria/shared-lib/src/new-request-flow/pages/LessonDetailPage";
import {
  ErrorState,
  SearchResultPage2,
} from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage";
import TutorProfilePageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/TutorProfilePage";
import {
  LocationFieldStore,
  SearchStore,
} from "@tuteria/shared-lib/src/stores";
import searchResultStore from "@tuteria/shared-lib/src/stores/jobs/searchResult";
import { observer } from "mobx-react-lite";
import { ISearchStore } from "packages/shared-lib/src/stores/types";
import React, { useEffect } from "react";
import { adapter, PRICING_INFO } from "./adapter";
import {
  SAMPLEREQUEST,
  SAMPLE_SERVER_REQUEST,
  TUTORSEARCHRESULT_DATA,
  TUTORSEARCHRESULT_DATA_TRIMED,
} from "./sampleData";

// import { SAMPLEREQUEST as SAMPLECLIENTREQUEST } from "./sampleData";

export default {
  title: "Request Flow/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box m={-4} h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

function navigate(path: string) {
  let options = {
    "/pricing": "Pricing Page",
    "/request": "Lesson Detail",
    "/home": "Landing Page",
  };
  linkTo("Request Flow/Pages", options[path])();
}
export const LandingPage = () => {
  const store = LocationFieldStore.create({ country: "Nigeria" }, { adapter });
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    adapter.initializeLandingPage({ regions, countries: allCountries });
    store.updateFields({
      customerType: "student",
      country: "Nigeria",
      country_code: "NG",
      regions,
      countries: allCountries,
    });
  }, []);
  function onSubmitForm(values) {
    store.updateFields(values);
    setLoading(true);
    adapter
      .createIssuedRequest(values)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  return (
    <OverlayRouter>
      <LandingPageComponent
        onDiscountSubmit={(values) => {
          onSubmitForm({ discount: true, ...values });
        }}
        onSubmitForm={onSubmitForm}
        store={store}
        contactNumber="09094526878"
        updateField={store.updateFields}
        setCountryCode={(_code) => {
          store.updateFields({ country_code: _code });
        }}
        isLoading={loading}
        countries={store.countries.map((x) => ({
          label: x.name,
          value: x.name,
          code: x.code,
        }))}
        displayBanner
        bannerText="Wait, You've missed a step"
      />
    </OverlayRouter>
  );
};

export const LessonDetail = () => {
  const viewModel = SearchStore.create(undefined, {
    adapter,
  });
  return (
    <LessonDetailPage
      academicData={ACADEMICS_DATA}
      regions={regions}
      countries={allCountries}
      requestInfo={SAMPLEREQUEST}
      // requestInfo={SAMPLE_SERVER_REQUEST}
      viewModel={viewModel}
      onSubmit={() => {
        // if (
        //   viewModel.splitRequests.length === viewModel.splitToExclude.length
        // ) {
        //   linkTo("External Pages / New Parent Flow", "Client request")();
        // } else {
        //   linkTo("External Pages / Request Flow", "Search Results")();
        // }
        viewModel.useRequestDataProps
          .saveRequestToServer()
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    />
  );
};
const store = SearchStore.create({}, { adapter });
export const PricingPage = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    store.initializeClientRequest({
      pricingInfo: PRICING_INFO,
      tutorResponses: [],
      tutors: SAMPLEREQUEST.splitRequests,
      requestInfo: SAMPLEREQUEST,
    });
    // updateClientStore(store);
    setLoaded(true);
  }, []);
  console.log(store.clientRequest.pricingInfo);
  return loaded ? (
    <NewPricingPage
      onSubmit={() => {}}
      onEditRequest={() => {
        navigate("/request");
      }}
      store={store.clientRequest}
    />
  ) : null;
};

const SAMPLECLIENTREQUEST = {
  created: "2021-05-28T15:03:06Z",
  modified: "2021-05-28T15:03:06Z",
  slug: "XC5TQ0NOJIOH",
  status: "payed",
  childDetails: [
    {
      name: "Emmanuella",
      gender: "male",
      firstName: "Abiola",
      curriculum: ["Montessori", "British"],
      classDetail: {
        class: "Nursery 2",
        purpose: "Early Child Education",
        subjects: ["Literacy & Numeracy", "Phonics"],
      },
      expectation: "He needs improvement",
      learningNeed: "Falling behind",
      special_needs: "None",
    },
    {
      name: "Toluwani",
      gender: "female",
      firstName: "Jane",
      curriculum: ["British", "Nigerian"],
      classDetail: {
        class: "Primary 4",
        purpose: "Entrance Into Top Schools",
        subjects: ["School Entrance Math", "School Entrance English"],
      },
      expectation: "She needs to pass the exam when ready to take it.",
      learningNeed: "Extend learning",
      special_needs: "None",
    },
  ],
  tutorDetails: [
    {
      names: ["Abiola"],
      tutorId: "tolur",
      lessonDays: ["Monday", "Tuesday", "Friday"],
      subjectGroup: ["Literacy & Numeracy", "Phonics"],
      searchSubject: "Literacy & Numeracy",
      tutorResponse: {
        status: "accepted",
        dateSubmitted: "2021-05-20T03:10:00",
      },
      tutorInfo: {
        firstName: "Tolulope",
        level: "premium",
        photo:
          "http://res.cloudinary.com/tuteria/image/upload/v1/media/djypyhyiphhwqkypznlt",
        vicinity: "Eric Moore",
        region: "Surulere",
        rating: 5.0,
        ratingCount: 345,
      },
    },
    {
      names: ["Jane"],
      tutorId: "oluwaferanmis",
      lessonDays: ["Monday", "Tuesday", "Friday", "Thursday"],
      subjectGroup: ["School Entrance Math", "School Entrance English"],
      searchSubject: "School Entrance Math",
      tutorResponse: {
        status: "pending",
        dateSubmitted: "2021-05-20T03:10:00",
      },
      tutorInfo: {
        firstName: "Oluwaferanmi",
        level: "regular",
        photo:
          "http://res.cloudinary.com/tuteria/image/upload/c7x9vpo21lxp5juo0mqd",
        vicinity: "Adeniyi Jones",
        region: "Ikeja",
        rating: 4.5,
        ratingCount: 145,
      },
    },
  ],
  agent: {
    title: "",
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.imagekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
    slack_id: "",
  },
  contactDetails: {
    title: "Mr.",
    firstName: "Abiola",
    preferredComms: {
      number: "",
      channel: "",
    },
    state: "Lagos",
    vicinity: "Abule-ijesha",
  },
  paymentInfo: {
    amountPaid: 250000,
    totalLessons: 32,
    totalTuition: 86616,
    speakingFee: 7500,
    monthsPaid: 1,
  },
  lessonDetails: {
    lessonType: "physical",
    lessonDuration: 4,
    lessonHours: 1,
    lessonTime: "4:00 PM",
  },
};

function updateClientStore(store) {
  store.mapToStore(
    {
      contactDetails: SAMPLECLIENTREQUEST.contactDetails,
      lessonDetails: {
        lessonType: SAMPLECLIENTREQUEST.lessonDetails.lessonType,
        lessonSchedule: SAMPLECLIENTREQUEST.lessonDetails,
        lessonDays: SAMPLEREQUEST.lessonDetails.lessonSchedule.lessonDays,
      },
      childDetails: SAMPLECLIENTREQUEST.childDetails,
      splitRequests: SAMPLECLIENTREQUEST.tutorDetails.map((o, i) => ({
        names: o.names,
        curriculum: SAMPLECLIENTREQUEST.childDetails[i].curriculum,
        purposes: SAMPLEREQUEST.splitRequests[i].purposes || [],
        tutorId: o.tutorId,
        lessonDays: o.lessonDays,
        lessonDuration: 3,
        lessonHours: 1,
        subjectGroup: o.subjectGroup,
        searchSubject: o.searchSubject,
      })),
      slug: SAMPLECLIENTREQUEST.slug,
      created: SAMPLECLIENTREQUEST.created,
      modified: SAMPLECLIENTREQUEST.modified,
      status: SAMPLECLIENTREQUEST.status,
      agent: SAMPLECLIENTREQUEST.agent,
    },
    {
      paymentInfo: {
        walletBalance: 0,
        lessonPayments: [{ lessons: 8 }, { lessons: 8 }],
        monthsPaid: 1,
        speakingFee: 7500,
        tuitionFee: 86616,
        transportFare: 0,
        totalDiscount: 0,
      },
      tutorsData: SAMPLECLIENTREQUEST.tutorDetails.map((o) => ({
        userId: o.tutorId,
        ...o.tutorInfo,
      })),
      tutorResponses: SAMPLECLIENTREQUEST.tutorDetails.map((o) => ({
        ...o.tutorResponse,
        tutor_slug: o.tutorId,
      })),
      pricingInfo: PRICING_INFO,
    }
  );
}

export const RequestCompletePage = () => {
  return <CompletePage />;
};
const initialData = {
  tutorResponses: SAMPLECLIENTREQUEST.tutorDetails.map((o) => ({
    ...o.tutorResponse,
    tutor_slug: o.tutorId,
  })),
  pricingInfo: PRICING_INFO,
  tutors: SAMPLECLIENTREQUEST.tutorDetails.map((o) => ({
    userId: o.tutorId,
    ...o.tutorInfo,
  })),
  requestInfo: {
    contactDetails: SAMPLECLIENTREQUEST.contactDetails,
    lessonDetails: {
      lessonType: SAMPLECLIENTREQUEST.lessonDetails.lessonType,
      lessonSchedule: SAMPLECLIENTREQUEST.lessonDetails,
      lessonDays: SAMPLEREQUEST.lessonDetails.lessonSchedule.lessonDays,
    },
    childDetails: SAMPLECLIENTREQUEST.childDetails,
    splitRequests: SAMPLECLIENTREQUEST.tutorDetails.map((o, i) => ({
      names: o.names,
      curriculum: SAMPLECLIENTREQUEST.childDetails[i].curriculum,
      purposes: SAMPLEREQUEST.splitRequests[i].purposes || [],
      tutorId: o.tutorId,
      lessonDays: o.lessonDays,
      lessonDuration: 3,
      lessonHours: 1,
      subjectGroup: o.subjectGroup,
      searchSubject: o.searchSubject,
    })),
    slug: SAMPLECLIENTREQUEST.slug,
    created: SAMPLECLIENTREQUEST.created,
    modified: SAMPLECLIENTREQUEST.modified,
    status: SAMPLECLIENTREQUEST.status,
    agent: SAMPLECLIENTREQUEST.agent,
  },
  bookingInfo: {
    walletBalance: 0,
    lessonPayments: [{ lessons: 8 }, { lessons: 8 }],
    monthsPaid: 1,
    speakingFee: 7500,
    tuitionFee: 86616,
    transportFare: 0,
    totalDiscount: 0,
  },
};

const SearchResultStory2 = observer(
  ({
    searchStore,
    requestInfo,
    firstSearch,
    coupon,
    currencyForCountry,
    agent,
    hasFetchedSearchData,
  }: {
    searchStore: ISearchStore;
    [key: string]: any;
  }) => {
    const [loaded, setLoaded] = React.useState(false);
    useEffect(() => {
      if (currencyForCountry) {
        searchStore.oldSearchContextProps.updateCurrency(currencyForCountry);
      }
      let arr = [
        TUTORSEARCHRESULT_DATA[0],
        // undefined,
        TUTORSEARCHRESULT_DATA[1],
        // undefined,
        // // undefined,
        // // undefined,
        TUTORSEARCHRESULT_DATA[2],
        // SAMPLESEARCH_RESULTS[0][4],
        // SAMPLESEARCH_RESULTS[1][2],
        // SAMPLESEARCH_RESULTS[2][1],
      ];
      if (!agent) {
        arr = [];
      }
      searchStore
        .initializeApplication(SAMPLEREQUEST, coupon, firstSearch, arr, [
          { key: "Primary Math", values: ["Engineering", "Sciences"] },

          //this is where we put specialities
        ])
        .then(() => {
          searchStore.setDeniedTutors([]);
          setLoaded(true);
          if (agent) {
            searchStore.useRequestDataProps.updateAdminLogin(true);
          }
          throw new Error("ooooops");
          // searchStore.oldSearchContextProps.initializeSearchIndex();
        })
        .catch((error) => {
          console.log(error);
          // setTimeout(() => {
          //   setLoaded(true);
          // }, 4000);
        });
    }, []);

    console.log(
      "!!Selected Tutors ID",
      searchStore.useRequestDataProps.selectedTutorsIds
    );
    const sampleAgent = {
      name: "Benita",
      phone_number: "+2349095121865",
      email: "benita@tuteria.com",
      image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
    };
    return loaded ? (
      hasFetchedSearchData ? (
        <OverlayRouter>
          <SearchResultPage2
            requestInfo={SAMPLEREQUEST}
            searchStore={searchStore}
            deniedTutors={[]}
            agent={sampleAgent}
            selectedTutorsId={searchStore.useRequestDataProps.selectedTutorsIds} // selectedTutorIds
          />
        </OverlayRouter>
      ) : (
        <ErrorState />
      )
    ) : null;
  }
);

export const SearchResults = () => {
  const searchStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );
  return (
    <SearchResultStory2 searchStore={searchStore} hasFetchedSearchData={true} />
  );
};

export const TutorProfilePage = () => {
  const store = searchResultStore.create(TUTORSEARCHRESULT_DATA_TRIMED[0]);
  return <TutorProfilePageComponent searchObj={{}} store={store} />;
};
