import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingStateWrapper } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import { APPLICATION_STEPS } from "@tuteria/shared-lib/src/stores/rootStore";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import CompletedApplicationPage from "@tuteria/shared-lib/src/tutor-revamp/CompletedApplicationPage";
import VerificationPage from "@tuteria/shared-lib/src/tutor-revamp/VerificationPage";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import TutorPageComponent from "../components/TutorPageComponent";

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Story />
        </Suspense>
      </ThemeProvider>
    ),
  ],
};
const adapter = loadAdapter(testAdapter);
const store = initializeStore(testAdapter);

function navigate(path: string) {
  let options = {
    "/verify": "Verification",
    "/complete": "Completed Page",
    "/skills": "EditSubjectPage",
    "/quiz/select-skill": "TestSelectionPage",
  };
  linkTo("Tutor Application/Pages", options["path"])();
}
export const TutorPage = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: testAdapter.getTuteriaSubjects(),
    });
    store.initializeTutorData(result);
    if (store.currentStep === APPLICATION_STEPS.APPLY) {
      setLoading(false);
    } else {
      let options = {
        [APPLICATION_STEPS.COMPLETE]: "/complete",
        [APPLICATION_STEPS.VERIFY]: "/verify",
      };
      navigate(options[store.currentStep]);
    }
    await store.fetchBanksInfo();
  }

  return (
    <LoadingStateWrapper initialize={initialize}>
      <TutorPageComponent
        store={store}
        onEditSubject={(subject) => {
          return "/skills";
        }}
        onTakeTest={(subject) => {
          console.log({ subject });
          return "/quiz/select-skill";
        }}
        onNextStep={() => {
          navigate("/verify");
        }}
      />
    </LoadingStateWrapper>
  );
};

// This variable will come from query parameters

export const Login = () => {
  return (
    <LoginPage
      onResendOTP={() => {}}
      onOTPSubmit={() => {}}
      onEmailSubmit={() => {}}
      onNavigate={() => {}}
    />
  );
};

export const LandingPage = () => {
  return (
    <LandingView
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};

export const Verification = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: [],
      countries: [],
      tuteriaSubjects: [],
    });
    store.initializeTutorData({
      ...result,
      tutorInfo: { ...result.tutorInfo, currentStep: APPLICATION_STEPS.VERIFY },
    });
    if (store.currentStep === APPLICATION_STEPS.VERIFY) {
      setLoading(false);
    } else {
      navigate("/complete");
    }
  }

  return (
    <LoadingStateWrapper
      text="Fetching Tutor details..."
      initialize={initialize}
    >
      <VerificationPage
        store={store}
        onNextStep={async () => {
          await store.submitApplication(true);
          linkTo("Tutor Application/Pages", "Completed Page")();
        }}
      />
    </LoadingStateWrapper>
  );
};

export const CompletedPage = () => {
  return (
    <CompletedApplicationPage
      firstName="Chidi"
      isPremium={true}
      photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
    />
  );
};
