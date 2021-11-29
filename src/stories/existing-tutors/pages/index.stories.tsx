import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { SubjectPrompt } from "@tuteria/shared-lib/src/tutor-revamp/SubjectPrompt";

import { Box, VStack } from "@chakra-ui/react";
import { LoadingStateWrapper } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { initializeStore, SubjectStore } from "@tuteria/shared-lib/src/stores";
import {
  APPLICATION_STEPS,
  STEPS,
} from "@tuteria/shared-lib/src/stores/rootStore";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import CompletedApplicationPage from "@tuteria/shared-lib/src/tutor-revamp/CompletedApplicationPage";
import VerificationPage from "@tuteria/shared-lib/src/tutor-application/pages/VerificationPage";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-application/pages/SubjectCreationPage";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";

export default {
  title: "Existing Tutors/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <OverlayRouter>
          <Story />
        </OverlayRouter>
      </ThemeProvider>
    ),
  ],
};
const adapter = loadAdapter(testAdapter);
const store = initializeStore(testAdapter);
const clientAdapter = testAdapter;

export const SubjectsPage = () => {
  async function initialize(setLoading) {
    let result = await clientAdapter.initializeApplication(adapter, {
      regions: [],
      countries: [],
      tuteriaSubjects: clientAdapter.getTuteriaSubjects(),
    });
    store.initializeTutorData({
      ...result,
      tutorInfo: result.tutorInfo,
    });
    setLoading(false);
  }
  const { educations, workHistories } = store.educationWorkHistory.formValues;
  return (
    <LoadingStateWrapper
      // defaultLoading={false}
      initialize={initialize}
      text="Loading subject details..."
    >
      <Box
        as="section"
        className="forms-section"
        maxW={["100%", "100%", "640px"]}
        px={[5, 8, 0]}
        py={[10, 12]}
        mx="auto"
      >
        <VStack justifyContent="stretch" alignItems="stretch" spacing={[6, 8]}>
          <SubjectPrompt store={store.subject} />
          <TutorSubjectsPage
            store={store.subject}
            showWelcomeModal={false}
            educationAndWorkHistoryData={{
              education: educations,
              workHistory: workHistories,
            }}
          />
        </VStack>
      </Box>
    </LoadingStateWrapper>
  );
};
