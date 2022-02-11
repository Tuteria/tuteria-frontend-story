import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import AdminSearchPage from "@tuteria/shared-lib/src/new-request-flow/pages/AdminSearchPage";
import { AdminSearchStore } from "@tuteria/shared-lib/src/stores";
import React from "react";
import { adapter, samplePromise } from "./adapter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";

import { SAMPLEREQUEST } from "./sampleData";

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

export const SingleRequest = () => {
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

export const MultipleSplitRequest = () => {
  const searchStore = AdminSearchStore.create(
    {},
    {
      adapter: {
        ...adapter,
        initializeAdminSearch: async () => {
          return samplePromise({
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
