import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import AdminSearchPage from "@tuteria/shared-lib/src/new-request-flow/pages/AdminSearchPage";
import { AdminSearchStore } from "@tuteria/shared-lib/src/stores";
import { observer } from "mobx-react-lite";
import { SAMPLE_JOB_LIST_DATA } from "@tuteria/shared-lib/src/data/tutor-application/sample_job_data";
import React from "react";
import { adapter, samplePromise } from "./adapter";
import { SAMPLEREQUEST, TUTORSEARCHRESULT_DATA } from "./sampleData";

export default {
  title: "Request Flow/Pages/AdminSearch",
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

const sampleAgent = {
  name: "Benita",
  phone_number: "+2349095121865",
  email: "benita@tuteria.com",
  image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
};
const singleAdapter = (value?: any) => ({
  ...adapter,
  initializeAdminSearch: async () => {
    return samplePromise({
      serverInfo: {
        agent: sampleAgent,
        created: "2021-12-10T09:18:05.415Z",
        modified: "2021-12-10T09:18:05.415Z",
        status: "pending",
        tutorRequestInfo: SAMPLEREQUEST.splitRequests[0],
        rawRequest: {
          budget: 70000,
          hourlyRate: 4000,
        },
      },
      requestInfo: {
        ...SAMPLEREQUEST,
        childDetails: [SAMPLEREQUEST.childDetails[0]],
        splitRequests: value || [SAMPLEREQUEST.splitRequests[0]],
      },
      firstSearch: undefined,
      tutors: [
        TUTORSEARCHRESULT_DATA[0],
        // undefined,
        // TUTORSEARCHRESULT_DATA[1],
        // undefined,
        // // undefined,
        // // undefined,
        // TUTORSEARCHRESULT_DATA[2],
      ],
      specialities: [
        { key: "Primary Math", values: ["Engineering", "Sciences"] },

        //this is where we put specialities
      ],
      academicData: ACADEMICS_DATA,
      // regions: regions,
      // countries: allCountries
    });
  },
});

export const SingleRequest = () => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: singleAdapter(),
    }
  );

  React.useEffect(() => {
    searchStore.useRequestDataProps.lessonLocationStore.updateFields({
      regions,
      countries: allCountries,
    });
    searchStore.editTutorInfo.initWithStaticData({
      regions,
      countries: allCountries,
      countriesSupported: supportedCountries,
    });
  }, []);

  return <AdminSearchPage store={searchStore} agent={sampleAgent} />;
};

export const WithoutSplitRequest = () => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: singleAdapter([]),
    }
  );

  React.useEffect(() => {
    searchStore.useRequestDataProps.lessonLocationStore.updateFields({
      regions,
      countries: allCountries,
    });
    searchStore.editTutorInfo.initWithStaticData({
      regions,
      countries: allCountries,
      countriesSupported: supportedCountries,
    });

    searchStore.jobList.bulkMapToStore([SAMPLE_JOB_LIST_DATA[0]]);
  }, []);

  return <AdminSearchPage store={searchStore} agent={sampleAgent} />;
};

export const MultipleSplitRequest = () => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: {
        ...adapter,
        initializeAdminSearch: async () => {
          return samplePromise({
            serverInfo: {
              agent: sampleAgent,
              created: "2021-12-10T09:18:05.415Z",
              modified: "2021-12-10T09:18:05.415Z",
              status: "pending",
              tutorRequestInfo: SAMPLEREQUEST.splitRequests[0],
              rawRequest: {
                budget: 70000,
                hourlyRate: 4000,
              },
            },
            requestInfo: SAMPLEREQUEST,
            firstSearch: undefined,
            tutors: [
              // TUTORSEARCHRESULT_DATA[0],
              // undefined,
              // TUTORSEARCHRESULT_DATA[1],
              // undefined,
              // // undefined,
              // // undefined,
              // TUTORSEARCHRESULT_DATA[2],
            ],
            specialities: [
              { key: "Primary Math", values: ["Engineering", "Sciences"] },

              //this is where we put specialities
            ],
          });
        },
      },
    }
  );

  return <AdminSearchPage store={searchStore} agent={sampleAgent} />;
};

export const EmptyRequest = () => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: {
        ...adapter,
        initializeAdminSearch: async () => {
          return samplePromise({
            requestInfo: {},
            // requestInfo: {
            //   ...SAMPLEREQUEST,
            //   childDetails: [SAMPLEREQUEST.childDetails[0]],
            //   splitRequests: [SAMPLEREQUEST.splitRequests[0]],
            // },
            firstSearch: undefined,
            tutors: [
              // TUTORSEARCHRESULT_DATA[0],
              // undefined,
              // TUTORSEARCHRESULT_DATA[1],
              // undefined,
              // // undefined,
              // // undefined,
              // TUTORSEARCHRESULT_DATA[2],
            ],
            specialities: [
              { key: "Primary Math", values: ["Engineering", "Sciences"] },

              //this is where we put specialities
            ],
          });
        },
      },
    }
  );
  const sampleAgent = {
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
  };
  return <AdminSearchPage store={searchStore} agent={sampleAgent} />;
};

const EditTutorDetails = observer(() => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: {
        ...adapter,
        initializeAdminSearch: async () => {
          return samplePromise({
            requestInfo: {
              ...SAMPLEREQUEST,
              childDetails: [SAMPLEREQUEST.childDetails[0]],
              splitRequests: [SAMPLEREQUEST.splitRequests[0]],
            },
            firstSearch: undefined,
            tutors: [
              // TUTORSEARCHRESULT_DATA[0],
              // undefined,
              // TUTORSEARCHRESULT_DATA[1],
              // undefined,
              // // undefined,
              // // undefined,
              // TUTORSEARCHRESULT_DATA[2],
            ],
            specialities: [
              { key: "Primary Math", values: ["Engineering", "Sciences"] },

              //this is where we put specialities
            ],
            academicData: ACADEMICS_DATA,
            // regions: regions,
            // countries: allCountries
          });
        },
      },
    }
  );
  const sampleAgent = {
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
  };

  React.useEffect(() => {
    searchStore.useRequestDataProps.lessonLocationStore.updateFields({
      regions,
      countries: allCountries,
    });
    searchStore.editTutorInfo.initWithStaticData({
      regions,
      countries: allCountries,
      countriesSupported: supportedCountries,
    });
  }, []);

  return <AdminSearchPage store={searchStore} agent={sampleAgent} />;
});

export const EditTutorDetailsStory = () => <EditTutorDetails />;
