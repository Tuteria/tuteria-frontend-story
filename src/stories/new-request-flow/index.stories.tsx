import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ClientRequestForm } from "@tuteria/shared-lib/src/home-tutoring/request-flow/ClientRequestForm";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import { PricingPage as NewPricingPage } from "@tuteria/shared-lib/src/home-tutoring/request-flow/PricingPage";
import {
  ClientRequestStore,
  RequestFlowStore,
} from "@tuteria/shared-lib/src/home-tutoring/request-flow/store";
import { CheckoutPage } from "@tuteria/shared-lib/src/new-request-flow/pages/CheckoutPage";
import {
  ClientRequestDetail,
  ClientRequestPage as NewClientRequestPage,
} from "@tuteria/shared-lib/src/new-request-flow/pages/ClientRequestPage";
import CompletePage from "@tuteria/shared-lib/src/new-request-flow/pages/CompletePage";
import LandingPageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/LandingPage";
import {
  ErrorState,
  SearchResultPage2,
} from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage";
import TutorProfilePageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/TutorProfilePage";
import {
  IRequestFlowStore,
  LocationFieldStore,
  SearchStore,
} from "@tuteria/shared-lib/src/stores";
import searchResultStore from "@tuteria/shared-lib/src/stores/jobs/searchResult";
import { observer } from "mobx-react-lite";
import { ISearchStore } from "packages/shared-lib/src/stores/types";
import React, { useEffect, useState } from "react";
import { adapter, PRICING_INFO } from "./adapter";
import {
  SAMPLEREQUEST,
  TUTORSEARCHRESULT_DATA,
  TUTORSEARCHRESULT_DATA_TRIMED,
} from "./sampleData";

// import { SAMPLEREQUEST as SAMPLECLIENTREQUEST } from "./sampleData";

export default {
  title: "Request Flow/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
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

const NewParentFlow: React.FC<{
  viewModel: IRequestFlowStore;
  academicData: any;
  onSubmit: any;
  [key: string]: any;
}> = observer(({ viewModel, academicData, onSubmit, ...rest }: any) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    adapter.updateStaticData(rest);
    viewModel.initializeRequestData(academicData, true).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <OverlayRouter>
      <ClientRequestForm
        loaded={loaded}
        discountFlag={true}
        onSubmit={onSubmit}
        viewModel={viewModel}
      />
    </OverlayRouter>
  );
});

export const LessonDetail = () => {
  const viewModel = RequestFlowStore.create(undefined, {
    adapter,
  });
  return (
    <NewParentFlow
      academicData={ACADEMICS_DATA}
      regions={regions}
      countries={allCountries}
      viewModel={viewModel}
      onSubmit={() => {
        // if (
        //   viewModel.splitRequests.length === viewModel.splitToExclude.length
        // ) {
        //   linkTo("External Pages / New Parent Flow", "Client request")();
        // } else {
        //   linkTo("External Pages / Request Flow", "Search Results")();
        // }
        viewModel
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
const store = ClientRequestStore.create({}, { adapter });
export const PricingPage = () => {
  const [loaded, setLoaded] = React.useState(false);
  const samplePricingData = {
    standardFx: 1.0,
    premiumFx: 1.4,
    deluxeFx: 1.8,
    stateFx: 1.0,
    vicinityFx: 0.9,
    extraStudentDiscount: 20,
    splitRequest: [
      {
        purposeFx: 1.0,
        baseRate: 1200,
        lessonDays: 2,
        lessonHours: 2,
        lessonDuration: 4,
        hourFx: 1,
        students: 1,
        subjectsFx: 1.1,
        curriculumFx: 1.2,
      },
      {
        purposeFx: 1.2,
        baseRate: 1200,
        lessonDays: 1,
        lessonHours: 2,
        hourFx: 1,
        lessonDuration: 4,
        students: 1,
        subjectsFx: 1.1,
        curriculumFx: 1.2,
      },
      {
        purposeFx: 1.2,
        baseRate: 1200,
        lessonDays: 1,
        lessonHours: 2,
        hourFx: 1,
        lessonDuration: 4,
        students: 1,
        subjectsFx: 1.0,
        curriculumFx: 1.0,
      },
    ],
  };
  React.useEffect(() => {
    updateClientStore(store);
    setLoaded(true);
  }, []);
  console.log(store.pricingInfo);
  return loaded ? (
    <NewPricingPage
      onSubmit={() => {}}
      onEditRequest={() => {
        navigate("/request");
      }}
      store={store}
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

export const ClientRequestPage = () => {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    updateClientStore(store);
    setLoaded(true);
  }, []);
  return loaded ? (
    <NewClientRequestPage
      defaultMenu={"Requests"}
      onSidebarItemClick={() => {}}
      onAddWhatsapp={() => {}}
      store={store}
    >
      <ClientRequestDetail
        noTutorsFound={store.tutors.length === 0}
        currency={store.currency}
        requestInfo={store.info}
        store={store}
      />
    </NewClientRequestPage>
  ) : null;
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

const CPage = observer(
  ({ bookingStore, agent, created, modified, status, loggedIn = false }) => {
    let [paymentLoading, setLoading] = React.useState(false);
    let [madePayment, setMadePayment] = React.useState(false);
    useEffect(() => {
      bookingStore.initializeRequestData(ACADEMICS_DATA).then(() => {
        bookingStore.getBookingInfo("XAB101"); // or use bookingStore.updateBookingInfo with raw data
      });
      if (loggedIn) {
        bookingStore.updateLoggedIn(true);
      } else {
        bookingStore.updateAdminLogin(true);
      }
      // bookingStore.mapToStore(SAMPLEREQUEST);
    }, []);
    // const onSubmit = (selectedClass) => {
    //   console.log(selectedClass);
    //   navigate("/registration");
    // };
    const gateWayFee = bookingStore.bookingInfo?.calculateGateWay;
    function loadSpeakingPaymentDetails(amount) {
      setLoading(true);
      return bookingStore.bookingInfo
        .generateSpeakingInvoice(amount)
        .then((rr) => {
          if (rr.paid) {
            setLoading(false);
            setMadePayment(true);
          } else {
            return rr;
          }
        });
    }
    function loadPaymentDetails(amount) {
      setLoading(true);
      return bookingStore.bookingInfo
        .generateInvoice(amount)
        .then((rr) => {
          if (rr.paid) {
            setLoading(false);
            setMadePayment(true);
          } else {
            return rr;
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
    function onPaymentSuccessful(url) {
      // axios.get(url).then(response => {
      //     this.afterPayment();
      //   });
      // }}
    }
    function onSpeakingPaymentSuccessful(url) {
      bookingStore.bookingInfo.setPaidFee();
      setLoading(false);
    }
    function onPaymentFailed() {
      setLoading(false);
    }
    function onCancelPayment() {
      setLoading(false);
    }
    function onPayWithWallet() {
      setLoading(true);
      bookingInfo
        .onPayWithWallet()
        .then(() => {})
        .catch((error) => {
          setLoading(false);
        });
    }
    let bookingInfo = bookingStore.bookingInfo;
    return bookingInfo ? (
      <OverlayRouter>
        <CheckoutPage
          isLoggedIn={bookingStore.isLoggedIn}
          requestData={bookingStore.requestData}
          isAdminLogin={bookingStore.isAdminLogin}
          sendingToClient={bookingStore.sendingToClient}
          sendRequestToClient={() =>
            bookingStore.sendRequestToClient("checkout")
          }
          bookingDetails={bookingInfo.bookingDetails}
          currency="NGN"
          gatewayFeeFunc={gateWayFee}
          agentInfo={agent}
          paymentInfo={bookingStore.paymentInfo}
          paymentProps={{
            callback: onPaymentSuccessful,
            onClose: onCancelPayment,
            failureCallback: onPaymentFailed,
            paymentLoading,
          }}
          speakingPaymentProps={{
            callback: onSpeakingPaymentSuccessful,
            onClose: onCancelPayment,
            failureCallback: onPaymentFailed,
            paymentLoading,
          }}
          multipleMonthDiscount={bookingInfo.multipleMonthDiscount}
          bankInfo={{
            bankdetails: { name: "Tuteria Limited", number: "0266765638" },
            howToPay: [
              "Copy the bank account details below",
              "Pay with your bank app, USSD or ATM",
            ],
            logoUrl: "https://ik.imagekit.io/gbudoh/GTBank_Logo_dJlcYP6KF.png",
            logoSize: [16, 24],
          }}
          loadSpeakingPaymentDetails={loadSpeakingPaymentDetails}
          loadPaymentDetails={loadPaymentDetails}
          paymentLoading={paymentLoading}
          speakingFee={bookingInfo.speakingFee}
          paidSpeakingFee={bookingInfo.paidSpeakingFee}
          onPayWithWallet={onPayWithWallet}
          triggerAdminAction={bookingStore.triggerAdminAction}
          adminActionOptions={bookingStore.adminActions}
        />
      </OverlayRouter>
    ) : null;
  }
);

export const CheckoutPageView = () => {
  const bookingStore = RequestFlowStore.create(
    {},
    {
      adapter: {
        ...adapter,
        initializeRequestData: async () => {
          return [
            {
              ...SAMPLEREQUEST,
              splitRequest: SAMPLEREQUEST.splitRequests.map((o, i) => {
                let tutors = ["tutorId9", "tutorId12", "tutorId19"];
                return {
                  ...o,
                  tutorId: tutors[o],
                };
              }),
            },
            [
              TUTORSEARCHRESULT_DATA[0][8],
              TUTORSEARCHRESULT_DATA[1][5],
              TUTORSEARCHRESULT_DATA[2][8],
            ],
          ];
        },
      },
    }
  );
  return (
    <CPage
      bookingStore={bookingStore}
      agent={{
        name: "Benita",
        phone_number: "+2349095121865",
        email: "benita@tuteria.com",
        image: "https://ik.imagekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
      }}
      created=""
      modified=""
      status="pending"
      loggedIn
    />
  );
};
