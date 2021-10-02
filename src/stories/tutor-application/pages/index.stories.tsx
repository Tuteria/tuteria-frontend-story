import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { IRootStore, RootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import storage from "@tuteria/shared-lib/src/storage";
import { observer } from "mobx-react-lite";
import React, { Suspense } from "react";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import "katex/dist/katex.min.css";
import "react-phone-input-2/lib/style.css";
import { linkTo } from "@storybook/addon-links";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import { scrollToId } from "@tuteria/shared-lib/src/utils/functions";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import FormWrapper from "@tuteria/shared-lib/src/components/FormWrapper";
import personalInfoData from "@tuteria/shared-lib/src/tutor-revamp/formData/personalInfo.json";
import educationHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/educationHistory.json";
import workHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/workHistory.json";
import subjectContents from "@tuteria/shared-lib/src/tutor-revamp/formData/subject.json";
import { FormStepType } from "@tuteria/shared-lib/src/stores/types";

const PersonalInfo = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/PersonalInfo")
);
const LocationInfo = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/LocationInfo")
);
const WorkHistory = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/WorkHistory")
);
const EducationHistory = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/EducationHistory")
);

const VerificationIdentity = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/VerificationIdentity")
);
const TutorSubjectsPage = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Subject")
);

const ScheduleCard = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Schedule")
);

const Agreements = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Agreements")
);
const LearningProcess = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/NewDevelopment")
);
const PasswordSection = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/PasswordSection")
);

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
const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const SUPPORTED_COUNTRIES_KEY = "TEST-SUPPORTED-COUNTRIES";
const adapter = {
  regionKey: REGION_KEY,
  countryKey: COUNTRY_KEY,
  supportedCountriesKey: SUPPORTED_COUNTRIES_KEY,
  deleteSubject: (id: string) => {
    console.log({ id });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 3000);
    });
  },
  saveTutorInfo: (key: string, value: any, slug: string, nextStep: string) => {
    console.log({ key, value, slug, nextStep });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  },
  updateTutorSubjectInfo: (values: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 3000);
    });
  },
  submitSelectedSubjects: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
  fetchQuizQuestions: async (quizSubjects) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ quiz: DATA.quiz, quizSubjects });
      }, 2000);
    });
  },
  toNextPath: async () => {},
  async getTutorSubjects() {
    let tutor_data = SAMPLE_TUTOR_SUBJECTS;
    // if session storage exists return the tuteria subjects else fetch
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          // tutorSubjects: [],
          tutorSubjects: tutor_data.map((tx) => {
            return {
              id: tx.pk,
              name: tx.skill.name,
              category: tx.category,
              status: tx.status,
              title: tx.heading || "",
              description: tx.description || "",
              teachingStyle: tx.teachingStyle,
              trackRecords: tx.trackRecords,
            };
          }),
          tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
        });
      }, 1000);
    });
  },
  uploadApiHandler: async (files, progressCallback) => {
    console.log(files); //this is where cloudinary implementation is used.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          files.map((o) => ({
            name: o.name,
            size: o.size?.toString(),
            public_id: "the_public_id",
            url:
              "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
          }))
        );
      }, 2000);
    });
    // return files.map((o) => ({
    //   name: o.name,
    //   size: o.size?.toString(),
    //   public_id: "the_public_id",
    //   url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    // }));
  },
  cloudinaryApiHandler: (files, progressCallback) => {
    let promises = files.map((o) =>
      uploadToCloudinary(o, progressCallback).then((b) => {
        let { original_filename, bytes, secure_url } = b.data;
        let newFile = {
          name: original_filename,
          size: `${Math.round(bytes / 1000)}KB`,
          url: secure_url,
        };
        return newFile;
      })
    );
    return Promise.all(promises);
  },
};

const store = RootStore.create(
  {},
  {
    adapter,
  }
);

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

const TutorPageComponent: React.FC<{
  store: IRootStore;
  onTakeTest: any;
}> = observer(({ store, onTakeTest, ...rest }) => {
  let nextStep: FormStepType;
  const stepsArray: any = [
    { key: "personal-info", name: "Personal Information", completed: false },
    { key: "password-info", name: "Password Information", completed: false },
    { key: "location-info", name: "Location Information", completed: false },
    {
      key: "education-history",
      name: "Education History",
      completed: false,
    },
    { key: "work-history", name: "Work History", completed: false },
    { key: "subject-selection", name: "Subject Selection", completed: false },
    {
      key: "verification-info",
      name: "Identity Verification",
      completed: false,
    },
    { key: "schedule-info", name: "Schedule Information", completed: false },
  ];
  const [formIndex, setFormIndex] = React.useState(1);
  const [loadingText, setLoadingText] = React.useState("");
  const [steps, setSteps] = React.useState<any[]>(stepsArray);
  const [activeStep, setActiveStep] = React.useState(store.currentEditableForm);

  React.useEffect(() => {
    scrollToId(activeStep);
  }, []);

  const handleFormSubmit = (id: FormStepType, presentStep: FormStepType) => {
    setFormIndex((index) => index + 1);
    setActiveStep(id);
    store.setEditableForm(id);
    setSteps(
      [...steps].map((object) => {
        if (object.key === presentStep) {
          return {
            ...object,
            completed: true,
          };
        } else return object;
      })
    );
    scrollToId(id);
  };
  const countries = store.locationInfo.countries.map((country) => country.name);
  return (
    <TutorPageWrapper
      formIndex={formIndex}
      steps={steps}
      activeStep={activeStep}
      store={store}
    >
      <FormWrapper
        rootStore={store}
        currentEditableForm={activeStep}
        activeForm={formIndex}
      >
        <PersonalInfo
          formHeader={personalInfoData.formTitle.header}
          formSummary={[
            store.personalInfo.firstName,
            store.personalInfo.nationality,
            store.personalInfo.email,
            store.personalInfo.dateOfBirth,
            store.personalInfo.phone,
            store.personalInfo.gender,
          ]}
          lockedDescription={personalInfoData.formTitle.subHeader}
          label="personal-info"
          loading={store.loading}
          countries={countries}
          viewModel={store.locationInfo}
          store={store.personalInfo}
          onSubmit={(formData: any) => {
            store.personalInfo.onFormSubmit(formData);
            nextStep = store.hasPassword ? "location-info" : "password-info";
            store.onFormSubmit(formData, "personal-info", nextStep).then(() => {
              handleFormSubmit(nextStep, "personal-info");
            });
          }}
        />
        <PasswordSection
          formHeader={"Password Information"}
          label="password-info"
          lockedDescription="Set your password"
          isCollapsed={false}
          displayType="simple"
          onSubmit={(formData: any) => {
            nextStep = "location-info";
            store.password.onFormSubmit(formData);
            store.onFormSubmit(formData, "password-info", nextStep).then(() => {
              store.setPasswordStatus(true);
              handleFormSubmit(nextStep, "password-info");
            });
          }}
          store={store.password}
        />

        <LocationInfo
          store={store.locationInfo}
          label="location-info"
          formHeader={"Location Information"}
          lockedDescription="Enter your location"
          loading={store.loading}
          formSummary={[
            store.locationInfo.country,
            store.locationInfo.state,
            store.locationInfo.region,
            store.locationInfo.vicinity,
          ]}
          onSubmit={(formData: any) => {
            nextStep = "education-history";
            store.locationInfo.updateFields(formData);
            store.onFormSubmit(formData, "location-info", nextStep).then(() => {
              handleFormSubmit(nextStep, "location-info");
            });
          }}
        />
        <EducationHistory
          store={store.educationWorkHistory}
          formHeader={educationHistoryData.formTitle.header}
          formsetDescription={`Please we would love to know more about your education`}
          rootStore={store}
          loading={store.loading}
          isDisabled={!(store.educationWorkHistory.educations.length > 0)}
          displayType="complex"
          label="education-history"
          lockedDescription={educationHistoryData.formTitle.subHeader}
          buttonText={educationHistoryData.buttonText.saveAndContinue}
          textData={educationHistoryData}
          completed={store.educationWorkHistory.educationCompleted}
          onSubmit={(formData: any) => {
            nextStep = "work-history";
            store
              .onFormSubmit(formData, "education-history", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "education-history");
              });
          }}
        />

        <WorkHistory
          store={store.educationWorkHistory}
          formHeader={"Work History"}
          formsetDescription={`Please we would love to know more about your working experience`}
          loading={store.loading}
          displayType="complex"
          label="work-history"
          isDisabled={store.educationWorkHistory.workHistories.length === 0}
          lockedDescription={"Enter your work history"}
          buttonText={workHistoryData.buttonText.saveAndContinue}
          textData={workHistoryData}
          completed={store.educationWorkHistory.workCompleted}
          onSubmit={(formData: any) => {
            nextStep = "subject-selection";
            store.onFormSubmit(formData, "work-history", nextStep).then(() => {
              handleFormSubmit(nextStep, "work-history");
            });
          }}
        />
        <TutorSubjectsPage
          formHeader={subjectContents.lockedForm.title}
          lockedDescription={subjectContents.lockedForm.description}
          store={store.subject}
          label="Subject Selection"
          completed={
            (store.subject.tutorSubjects.length > 0 &&
              activeStep === "subject-selection") ||
            (store.subject.tutorSubjects.length === 0 &&
              activeStep === "subject-selection") ||
            store.subject.tutorSubjects.length > 0
          }
          // showWelcomeModal={false}
          showWelcomeModal={
            activeStep === "subject-selection" &&
            store.subject.tutorSubjects.length === 0
          }
          currentStep={activeStep}
          isCollapsed={false}
          onTakeTest={onTakeTest}
          onSubmit={async (formData: any) => {
            nextStep = "verification-info";
            await store.onFormSubmit(formData, "subject-selection", nextStep);
            handleFormSubmit(nextStep, "subject-selection");
          }}
        />
        <VerificationIdentity
          formHeader={"Identity Verification"}
          lockedDescription="Verify your identity in order to complete steps"
          label="verification-info"
          isCollapsed={false}
          currentStep={activeStep}
          store={store.identity}
          onSubmit={(formData: any) => {
            nextStep = "schedule-info";
            store
              .onFormSubmit(formData, "verification-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "verification-info");
              });
          }}
        />
        <ScheduleCard
          handleChange={() => {}}
          formHeader={"Tutor Schedule"}
          lockedDescription="select your teaching schedule"
          isCollapsed={false}
          store={store.schedule}
          onSubmit={(formData: any) => {}}
        />

        <Agreements
          formHeader={"Tutor Agreements"}
          lockedDescription="Tutor agreements"
          isCollapsed={false}
          store={store.agreement}
          onSubmit={(formData: any) => {}}
        />

        <LearningProcess
          formHeader={"New development"}
          lockedDescription="Learning process"
          isCollapsed={false}
          store={store.agreement}
          onSubmit={(formData: any) => {}}
        />
      </FormWrapper>
    </TutorPageWrapper>
  );
});

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    storage.set(adapter.regionKey, allRegions);
    storage.set(adapter.countryKey, allCountries);
    storage.set(adapter.supportedCountriesKey, supportedCountries);
    store.initializeTutorData(
      allRegions,
      allCountries,
      supportedCountries,
      SAMPLE_TUTOR_DATA
    );
    store.fetchTutorSubjects();
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <TutorPageComponent
      store={store}
      onTakeTest={() => {
        linkTo("Tutor Application/Pages", "Subject Test")();
      }}
    />
  );
};

// This variable will come from query parameters
const params = "General Mathematics";

export const SubjectTest = () => {
  const [loading, setLoading] = React.useState(false);

  const navigateToQuiz = () => {
    linkTo("Tutor Application/Pages/Quiz", "Quiz")();
  };

  React.useEffect(() => {
    store.subject.setTestSubject(params);
    if (store.subject.listOfTestableSubjects.length === 0) {
      setLoading(true);
      store.subject.fetchQuizQuestions().then((res) => navigateToQuiz());
    }
  }, []);

  if (loading) {
    return <LoadingState text="Fetching questions..." />;
  }

  return (
    <TestPage
      store={store}
      navigateToQuiz={navigateToQuiz}
      navigateBack={() => linkTo("Tutor Application/Pages", "Tutor Page")()}
    />
  );
};

let pk = 209528;
export const SubjectCreation = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    store.fetchTutorSubjects().then((res) => {
      store.subject.setCurrentSubjectId(pk);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching subject details..." />;
  }

  return <SubjectCreationPage store={store.subject} />;
};

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
