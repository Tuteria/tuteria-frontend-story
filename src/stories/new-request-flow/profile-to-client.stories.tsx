import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import TutorSelectPage from "@tuteria/shared-lib/src/new-request-flow/pages/TutorSelectPage";
import { SearchStore } from "@tuteria/shared-lib/src/stores";
import React from "react";
import { adapter, samplePromise } from "./adapter";
import {
  SAMPLEREQUEST,
  TUTORSEARCHRESULT_DATA,
  TUTORSEARCHRESULT_DATA_TRIMED,
} from "./sampleData";

// import { SAMPLEREQUEST as SAMPLECLIENTREQUEST } from "./sampleData";

export default {
  title: "Request Flow/Pages/Profile Sent To Client",
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

export const SingleRequest = () => {
  const searchStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );

  const sampleAgent = {
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
  };
  const firstSearch = TUTORSEARCHRESULT_DATA_TRIMED.slice(0, 3);
  return (
    <TutorSelectPage
      store={searchStore}
      agent={sampleAgent}
      tutors={
        [
          //   firstSearch[0]
        ]
      }
      firstSearch={firstSearch}
      requestInfo={{
        ...SAMPLEREQUEST,
        splitRequests: [SAMPLEREQUEST.splitRequests[0]],
      }}
    />
  );
};

export const MultipleRequests = () => {
  const searchStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );

  const sampleAgent = {
    name: "Benita",
    phone_number: "+2349095121865",
    email: "benita@tuteria.com",
    image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
  };
  const firstSearch = TUTORSEARCHRESULT_DATA_TRIMED.filter((u) =>
    ["adebowalea", "opeyemia2", "bukolaa7"].includes(u.userId)
  );
  const tutors = TUTORSEARCHRESULT_DATA_TRIMED.filter((o) =>
    firstSearch.map((u) => u.userId).includes(o.userId)
  );
  console.log({ tutors });
  return (
    <TutorSelectPage
      store={searchStore}
      agent={sampleAgent}
      firstSearch={firstSearch}
      tutors={tutors}
      requestInfo={SAMPLEREQUEST}
    />
  );
};
