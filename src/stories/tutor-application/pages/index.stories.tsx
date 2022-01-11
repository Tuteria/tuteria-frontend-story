import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
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
import TutorPageComponent from "../components/TutorPageComponent";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-application/pages/SubjectCreationPage";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Suspense fallback={null}>
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
    "/apply": "Tutor Page",
    "/verify": "Verification",
    "/subject": "Subject Create Page",
    "/complete": "Completed Page",
    "/skills": "EditSubjectPage",
    "/quiz/select-skill": "TestSelectionPage",
    "/landing": "Landing Page",
  };
  linkTo("Tutor Application/Pages", options[path])();
}
export const TutorPage = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: [],
    });
    store.initializeTutorData(result);
    setLoading(false);
    if (store.currentStep === APPLICATION_STEPS.APPLY) {
    } else {
      navigate("/apply");
    }
  }

  return (
    <LoadingStateWrapper defaultLoading={true} initialize={initialize}>
      <TutorPageComponent
        // currentStep={store.currentEditableForm}
        store={store}
        // currentStep={store.currentStep}
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
        onLogout={() => {
          navigate("/landing");
        }}
      />
    </LoadingStateWrapper>
  );
};

// This variable will come from query parameters

export const Login = () => {
  return (
    <LoginPage
      onLogin={async (data, key) => {
        console.log(key);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (key === "otp-code") {
              navigate("/verify");
            }
            resolve({});
          }, 200);
        });
      }}
    />
  );
};

// export const LandingPage = () => {
//   return (
//     <LandingView
//       onSubmit={(data) => {
//         console.log(data);
//       }}
//     />
//   );
// };
export const LandingPage = () => {
  const isUserLoggedIn = async (): Promise<{
    loggedIn: boolean;
    email: string;
  }> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ loggedIn: false, email: "" });
      }, 200);
    });
  };

  const onSubmit: any = async (data) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ loggedIn: true });
      }, 200);
    });
  };
  const onLogIn = async (values, key) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 200);
    });
  };

  return (
    <LandingView
      displayBanner
      onSubmit={onSubmit}
      continueUrl="/apply"
      beginApplication={() => {
        console.log("to next page");
        navigate("/apply");
      }}
      onLogin={onLogIn}
      isUserLoggedIn={isUserLoggedIn}
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
      tutorInfo: {
        ...result.tutorInfo,
        // email_verified: true,
        appData: {
          currentStep: APPLICATION_STEPS.VERIFY,
          currentEditableForm: STEPS.GUARANTOR_INFO,
        },
        others: { ...(result.tutorInfo?.others || {}), canApply: true },
      },
    });
    if (store.currentStep === APPLICATION_STEPS.VERIFY) {
      setLoading(false);
    } else {
      let options = {
        [APPLICATION_STEPS.COMPLETE]: "/complete",
        [APPLICATION_STEPS.VERIFY]: "/verify",
        [APPLICATION_STEPS.SUBJECT]: "/subjects",
      };
      navigate(options[store.currentStep]);
    }
  }

  return (
    <LoadingStateWrapper
      text="Fetching Tutor details..."
      initialize={initialize}
    >
      <VerificationPage
        store={store}
        onLogout={() => {
          navigate("/landing");
        }}
        onNextStep={async () => {
          await store.submitApplication(store.currentStep);
          navigate("/subject");
        }}
      />
    </LoadingStateWrapper>
  );
};

export const SubjectCreatePage = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: testAdapter.getTuteriaSubjects(),
    });
    store.initializeTutorData({
      ...result,
      tutorInfo: {
        ...result.tutorInfo,
        appData: {
          currentStep: APPLICATION_STEPS.SUBJECT,
        },
      },
    });
    if (store.currentStep === APPLICATION_STEPS.SUBJECT) {
      setLoading(false);
    } else {
      let options = {
        [APPLICATION_STEPS.APPLY]: "/apply",
        [APPLICATION_STEPS.VERIFY]: "/verify",
        [APPLICATION_STEPS.COMPLETE]: "/complete",
      };
      navigate(options[store.currentStep]);
    }
  }
  return (
    <LoadingStateWrapper
      defaultLoading={false}
      initialize={initialize}
      text="Loading subject details..."
    >
      <SubjectCreationPage
        onLogout={() => {
          navigate("/landing");
        }}
        onNextStep={async () => {
          await store.submitApplication(store.currentStep);
          navigate("/complete");
        }}
        store={store}
      />
    </LoadingStateWrapper>
  );
};

export const CompletedPage = () => {
  React.useEffect(() => {
    store.setCurrentStep("complete");
  }, []);

  return (
    <CompletedApplicationPage
      firstName="Chidi"
      store={store}
      photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
    />
  );
};

const subjectStore = SubjectStore.create({}, { adapter });

export const SubjectReviewPage = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: testAdapter.getTuteriaSubjects(),
    });
    subjectStore.initializeTutorSubjects(result.subjectData);
  }
  return (
    <LoadingStateWrapper
      defaultLoading={false}
      initialize={initialize}
      text="Loading subject details..."
    >
      <TutorPageWrapper store={{}}>
        <TutorSubjectsPage
          store={subjectStore}
          showWelcomeModal={false}
          renderPreview={(subjectStore) => {
            return null;
          }}
        />
      </TutorPageWrapper>
    </LoadingStateWrapper>
  );
};
