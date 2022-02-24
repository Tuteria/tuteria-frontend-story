import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import SearchAndAddTutor from "@tuteria/shared-lib/src/new-request-flow/pages/SearchResultPage/SearchSummary/SearchAndAddTutor";
import { AdminSearchStore } from "@tuteria/shared-lib/src/stores";
import { SAMPLEREQUEST, TUTORSEARCHRESULT_DATA_TRIMED } from "./sampleData";
import { adapter, samplePromise } from "./adapter";
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
        findTutorByEmail: async (email) => {
          let currentSearchData = TUTORSEARCHRESULT_DATA_TRIMED[0];
          // return new Promise((resolve, reject) => {
          //   setTimeout(() => {
          //     let searchObj = requestData.splitRequests[currentIndex];
          //     // resolve(currentSearchData)
          //     let result = trimSearchResult(
          //       currentSearchData,
          //       [],
          //       requestData,
          //       searchObj,
          //       specialities,
          //       []
          //     );
          //     resolve(result);
          //   }, 500);
          // });
          return samplePromise({ ...currentSearchData, email }, 4000);
        },
      },
    }
  );

  return <SearchAndAddTutor store={searchStore} />;
};
