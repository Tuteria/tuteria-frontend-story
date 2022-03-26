import { linkTo } from "@storybook/addon-links";
import { Meta, Story } from "@storybook/react";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { initializeStore, SubjectStore } from "@tuteria/shared-lib/src/stores";
import {
  APPLICATION_STEPS,
  STEPS,
} from "@tuteria/shared-lib/src/stores/rootStore";
import TutorPageComponent from "@tuteria/shared-lib/src/tutor-revamp/TutorPageComponent";
import { testAdapter } from "../adapter";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import VerificationPage from "@tuteria/shared-lib/src/tutor-application/pages/VerificationPage";
import CompletedApplicationPage from "@tuteria/shared-lib/src/tutor-revamp/CompletedApplicationPage";
import ApplicationCompletedPage from "@tuteria/shared-lib/src/tutor-application/pages/ApplicationCompletedPage";
import PreferencePage from "@tuteria/shared-lib/src/tutor-application/pages/PreferencePage";
import TutorAgreementPage from "@tuteria/shared-lib/src/tutor-application/pages/TutorAgreementPage";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-application/pages/SubjectCreationPage";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";

import {
  TutorApplicationWrapper,
  TutorApplicationWrapperProps,
} from "./tutor-application";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";

export default {
  component: TutorApplicationWrapper,
  title: "Tutor Application/Pages",
} as Meta;

const Template: Story<TutorApplicationWrapperProps> = (args) => (
  <TutorApplicationWrapper {...args} />
);

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
    "/preferences": "Tutor Preference Page",
    "/agreement": "Tuteria Agreement Page",
    "/app-verified": "Application Completed Page",
  };
  linkTo("Tutor Application/Pages", options[path])();
}

export const TutorPage = Template.bind({});
TutorPage.args = {
  children: (
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
        navigate("/subject");
      }}
      onLogout={() => {
        navigate("/landing");
      }}
    />
  ),
  initialize: async (setLoading) => {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: [],
    });
    store.initializeTutorData({
      ...result,
      tutorInfo: {
        ...result.tutorInfo,
        appData: {
          currentStep: APPLICATION_STEPS.APPLY,
          currentEditableForm: STEPS.WORK_HISTORY,
        },
      },
    });
    setLoading(false);
    if (store.currentStep === APPLICATION_STEPS.APPLY) {
    } else {
      navigate("/apply");
    }
  },
};

export const Login = Template.bind({});
Login.args = {
  defaultLoading: false,
  children: (
    <LoginPage
      onCreateAccount={() => {}}
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
  ),
};

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

export const LandingPage = Template.bind({});
LandingPage.args = {
  defaultLoading: false,
  children: (
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
  ),
};

export const Verification = Template.bind({});
Verification.args = {
  children: (
    <VerificationPage
      store={store}
      onLogout={() => {
        navigate("/landing");
      }}
      onNextStep={async () => {
        await store.submitApplication(store.currentStep);
        navigate("/complete");
      }}
    />
  ),
  initialize: async (setLoading) => {
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
  },
};
const subjectStore = SubjectStore.create({}, { adapter });

// export const SubjectCreatePage = Template.bind({});
// SubjectCreatePage.args = {
//   children: (
//     <SubjectCreationPage
//       onLogout={() => {
//         navigate("/landing");
//       }}
//       onNextStep={async () => {
//         await store.submitApplication(store.currentStep);
//         navigate("/verify");
//       }}
//       store={store}
//     />
//   ),
//   async initialize(setLoading) {
//     let result = await testAdapter.initializeApplication(adapter, {
//       regions: allRegions,
//       countries: allCountries,
//       tuteriaSubjects: testAdapter.getTuteriaSubjects(),
//     });
//     store.initializeTutorData({
//       ...result,
//       tutorInfo: {
//         ...result.tutorInfo,
//         appData: {
//           currentStep: APPLICATION_STEPS.SUBJECT,
//         },
//       },
//     });
//     if (store.currentStep === APPLICATION_STEPS.SUBJECT) {
//       setLoading(false);
//     } else {
//       let options = {
//         [APPLICATION_STEPS.APPLY]: "/apply",
//         [APPLICATION_STEPS.VERIFY]: "/verify",
//         [APPLICATION_STEPS.COMPLETE]: "/complete",
//       };
//       navigate(options[store.currentStep]);
//     }
//   },
//   defaultLoading: false,
//   text: "Loading subject details...",
// };

export const CompletedPage = Template.bind({});
CompletedPage.args = {
  children: (
    <CompletedApplicationPage
      firstName="Chidi"
      store={store}
      photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
    />
  ),
  defaultLoading: false,
  effect: () => {
    store.setCurrentStep("complete");
  },
};

// export const SubjectReviewPage = Template.bind({});
// SubjectReviewPage.args = {
//   children: (
//     <TutorPageWrapper store={{}}>
//       <TutorSubjectsPage
//         store={subjectStore}
//         showWelcomeModal={false}
//         renderPreview={(subjectStore) => {
//           return null;
//         }}
//       />
//     </TutorPageWrapper>
//   ),
//   async initialize(setLoading) {
//     let result = await testAdapter.initializeApplication(adapter, {
//       regions: allRegions,
//       countries: allCountries,
//       tuteriaSubjects: testAdapter.getTuteriaSubjects(),
//     });
//     subjectStore.initializeTutorSubjects(result.subjectData);
//   },
// };

// export const NonEditableSubjectPage = Template.bind({});
// NonEditableSubjectPage.args = {
//   children: (
//     <SubjectCreationPage
//       onLogout={() => {
//         navigate("/landing");
//       }}
//       onNextStep={async () => {
//         await store.submitApplication(store.currentStep);
//         navigate("/complete");
//       }}
//       store={store}
//       canEditSubject={false}
//     />
//   ),
//   async initialize(setLoading) {
//     let result = await testAdapter.initializeApplication(adapter, {
//       regions: allRegions,
//       countries: allCountries,
//       tuteriaSubjects: testAdapter.getTuteriaSubjects(),
//     });
//     store.initializeTutorData({
//       ...result,
//       tutorInfo: {
//         ...result.tutorInfo,
//         appData: {
//           currentStep: APPLICATION_STEPS.SUBJECT,
//         },
//       },
//     });
//     if (store.currentStep === APPLICATION_STEPS.SUBJECT) {
//       setLoading(false);
//     } else {
//       let options = {
//         [APPLICATION_STEPS.APPLY]: "/apply",
//         [APPLICATION_STEPS.VERIFY]: "/verify",
//         [APPLICATION_STEPS.COMPLETE]: "/complete",
//       };
//       navigate(options[store.currentStep]);
//     }
//   },
// };

export const TutorPreferencePage = Template.bind({});
TutorPreferencePage.args = {
  children: (
    <PreferencePage
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
  ),
  async initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: [],
    });
    store.initializeTutorData({
      ...result,
      tutorInfo: {
        ...result.tutorInfo,
        appData: {
          currentEditableForm: STEPS.LOCATION_INFO,
          currentStep: APPLICATION_STEPS.TUTOR_PREFERENCES,
        },
      },
    });
    setLoading(false);
    if (store.currentStep === APPLICATION_STEPS.TUTOR_PREFERENCES) {
    } else {
      navigate("/apply");
    }
  },
};
// export const TuteriaAgreementPage = Template.bind({});
// TuteriaAgreementPage.args = {
//   children: (
//     <TutorAgreementPage
//       // currentStep={store.currentEditableForm}
//       store={store}
//       // currentStep={store.currentStep}
//       onEditSubject={(subject) => {
//         return "/skills";
//       }}
//       onTakeTest={(subject) => {
//         console.log({ subject });
//         return "/quiz/select-skill";
//       }}
//       onNextStep={() => {
//         navigate("/verify");
//       }}
//       onLogout={() => {
//         navigate("/landing");
//       }}
//     />
//   ),
//   initialize: async (setLoading) => {
//     let result = await testAdapter.initializeApplication(adapter, {
//       regions: allRegions,
//       countries: allCountries,
//       tuteriaSubjects: [],
//     });
//     store.initializeTutorData({
//       ...result,
//       tutorInfo: {
//         ...result.tutorInfo,
//         appData: {
//           currentEditableForm: STEPS.GUARANTOR_INFO,
//           currentStep: APPLICATION_STEPS.TERMS,
//         },
//       },
//     });
//     setLoading(false);
//     if (store.currentStep === APPLICATION_STEPS.TERMS) {
//     } else {
//       navigate("/apply");
//     }
//   },
// };

export const TutorApplicationCompletedPage = Template.bind({});
TutorApplicationCompletedPage.args = {
  children: (
    <ApplicationCompletedPage
      firstName="Chidi"
      store={store}
      photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
    />
  ),
  effect: () => {
    store.setCurrentStep(APPLICATION_STEPS.VERIFIED_TUTOR);
  },
  defaultLoading: false,
};
