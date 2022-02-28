import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import SearchAndAddTutor from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage/SearchSummary/SearchAndAddTutor";
import { AdminSearchStore } from "@tuteria/shared-lib/src/stores";
import React from "react";
import { adapter, samplePromise } from "./adapter";
import { SAMPLEREQUEST } from "./sampleData";
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
