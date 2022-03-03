import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import SearchAndAddTutor from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage/SearchSummary/SearchAndAddTutor";
import { AdminSearchStore } from "@tuteria/shared-lib/src/stores";
import React from "react";
import { adapter, samplePromise } from "./adapter";
import { SAMPLEREQUEST } from "./sampleData";
import RequestSummaryCard from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage/RequestSummaryCard";
export default {
  title: "Request Flow/Components",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box m={10} h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export const AddTutorToPool = ({}) => {
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
            tutors: [],
            specialities: [
              { key: "Primary Math", values: ["Engineering", "Sciences"] },
            ],
          });
        },
      },
    }
  );

  return <SearchAndAddTutor store={searchStore} />;
};

export const RequestDetailInfo = ({}) => {
  const sampleAgent = {
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
  };
  const store = AdminSearchStore.create(
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
            requestInfo: {
              ...SAMPLEREQUEST,
              childDetails: [SAMPLEREQUEST.childDetails[0]],
              splitRequests: [SAMPLEREQUEST.splitRequests[0]],
            },
            firstSearch: undefined,
            tutors: [],
            specialities: [
              { key: "Primary Math", values: ["Engineering", "Sciences"] },
            ],
          });
        },
      },
    }
  );
  React.useEffect(() => {
    store.initializeAdminSearch();
  }, []);
  return <RequestSummaryCard store={store} />;
};
