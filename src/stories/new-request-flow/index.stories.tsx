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
import LandingPageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/LandingPage";
import {
  ClientRequestDetail,
  ClientRequestPage as NewClientRequestPage,
} from "@tuteria/shared-lib/src/new-request-flow/pages/ClientRequestPage";

import {
  IRequestFlowStore,
  LocationFieldStore,
} from "@tuteria/shared-lib/src/stores";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { adapter, PRICING_INFO } from "./adapter";
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
      />
    </OverlayRouter>
  );
};

const NewParentFlow: React.FC<{
  viewModel: IRequestFlowStore;
  academicData: any;
  onSubmit: any;
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
        if (
          viewModel.splitRequests.length === viewModel.splitToExclude.length
        ) {
          linkTo("External Pages / New Parent Flow", "Client request")();
        } else {
          linkTo("External Pages / Request Flow", "Search Results")();
        }
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
        students: 1,
        subjectsFx: 1.1,
        curriculumFx: 1.2,
      },
      {
        purposeFx: 1.2,
        baseRate: 1200,
        lessonDays: 1,
        lessonHours: 2,
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
  return loaded ? (
    <NewPricingPage
      pricingData={store.pricingInfo}
      // pricingData={samplePricingData}
      onEditRequest={() => {
        navigate("/request");
      }}
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
      },
      childDetails: SAMPLECLIENTREQUEST.childDetails,
      splitRequests: SAMPLECLIENTREQUEST.tutorDetails.map((o) => ({
        names: o.names,
        tutorId: o.tutorId,
        lessonDays: o.lessonDays,
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
