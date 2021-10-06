import React from "react";
import { scrollToId } from "@tuteria/shared-lib/src/utils/functions";
import FormWrapper from "@tuteria/shared-lib/src/components/FormWrapper";
import personalInfoData from "@tuteria/shared-lib/src/tutor-revamp/formData/personalInfo.json";
import educationHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/educationHistory.json";
import workHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/workHistory.json";
import subjectContents from "@tuteria/shared-lib/src/tutor-revamp/formData/subject.json";
import { FormStepType } from "@tuteria/shared-lib/src/stores/types";
import { IRootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import { observer } from "mobx-react-lite";
import { useToast } from "@chakra-ui/react";

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
const GuarantorsInfoForm = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Guarantors")
);
const PasswordSection = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/PasswordSection")
);

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
  { key: "agreements-info", name: "Schedule Information", completed: false },
  { key: "new-development-info", name: "Agreements", completed: false },
  { key: "guarantor-info", name: "Guarantor Information", completed: false },
  { key: "special-needs", name: "Special Needs", completed: false },
];

const TutorPageComponent: React.FC<{
  store: IRootStore;
  onTakeTest: any;
}> = ({ store, onTakeTest, ...rest }) => {
  let nextStep: FormStepType;
  const toast = useToast();

  const [formIndex, setFormIndex] = React.useState(1);
  const [steps, setSteps] = React.useState<any[]>(stepsArray);
  const [activeStep, setActiveStep] = React.useState(store.currentEditableForm);
  console.log(activeStep);
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
  function onError() {
    toast({
      title: `An error occured.`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }

  const countries = store.locationInfo.countries.map((country) => country.name);
  // function onSubmitForm(formData: any, nextStep, currentStep, storeSubmission) {
  //     store.personalInfo.onFormSubmit(formData);
  //     store
  //       .onFormSubmit(formData, currentStep, nextStep)
  //       .then(() => {
  //         handleFormSubmit(nextStep, currentStep);
  //       })
  //       .catch((error) => {
  //         onError();
  //         throw error;
  //       });
  //   }
  // }

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
          onSubmit={async (formData: any) => {
            store.personalInfo.onFormSubmit(formData);
            // nextStep = store.hasPassword ? "location-info" : "password-info";
            nextStep = "location-info";
            await store
              .onFormSubmit(formData, "personal-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "personal-info");
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />
        {/* <PasswordSection
          formHeader={"Password Information"}
          label="password-info"
          lockedDescription="Set your password"
          isCollapsed={false}
          onSubmit={(formData: any) => {
            nextStep = "location-info";
            store.password.onFormSubmit(formData);
            store.onFormSubmit(formData, "password-info", nextStep).then(() => {
              store.setPasswordStatus(true);
              handleFormSubmit(nextStep, "password-info");
            });
          }}
          store={store.password}
        /> */}

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
          onSubmit={async (formData: any) => {
            nextStep = "education-history";
            store.locationInfo.updateFields(formData);
            await store
              .onFormSubmit(formData, "location-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "location-info");
              })
              .catch((error) => {
                onError();
                throw error;
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
          onSubmit={async (formData: any) => {
            nextStep = "work-history";
            await store
              .onFormSubmit(formData, "education-history", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "education-history");
              })
              .catch((error) => {
                onError();
                throw error;
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
          onSubmit={async (formData: any) => {
            nextStep = "subject-selection";
            await store
              .onFormSubmit(formData, "work-history", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "work-history");
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />
        <TutorSubjectsPage
          formHeader={subjectContents.lockedForm.title}
          lockedDescription={subjectContents.lockedForm.description}
          store={store.subject}
          label="subject-selection"
          rootStore={store}
          completed={
            (store.subject.tutorSubjects.length > 0 &&
              activeStep === "subject-selection") ||
            (store.subject.tutorSubjects.length === 0 &&
              activeStep === "subject-selection") ||
            store.subject.tutorSubjects.length > 0
          }
          showWelcomeModal={
            activeStep === "subject-selection" &&
            store.subject.tutorSubjects.length === 0
          }
          currentStep={activeStep}
          isCollapsed={false}
          onTakeTest={onTakeTest}
          onSubmit={async (formData: any) => {
            nextStep = "verification-info";
            return await store
              .onFormSubmit(formData, "subject-selection", nextStep)
              .then(() => {
                if (
                  store.subject.tutorSubjects.filter((x) =>
                    ["active", "denied", "pending"].includes(x.status)
                  ).length > 0
                ) {
                  handleFormSubmit(nextStep, "subject-selection");
                }
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />
        <VerificationIdentity
          formHeader={"Identity Verification"}
          lockedDescription="Verify your identity in order to complete steps"
          label="verification-info"
          isCollapsed={false}
          currentStep={activeStep}
          store={store.identity}
          onSubmit={async (formData: any) => {
            nextStep = "schedule-info";
            await store
              .onFormSubmit(formData, "verification-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "verification-info");
              });
          }}
        />
        <ScheduleCard
          formHeader={"Tutor Schedule"}
          label="schedule-info"
          lockedDescription="select your teaching schedule"
          isCollapsed={false}
          store={store.schedule}
          onSubmit={async (formData: any) => {}}
        />

        <Agreements
          formHeader={"Tutor Agreements"}
          lockedDescription="Tutor agreements"
          label="agreements-info"
          isCollapsed={false}
          store={store.agreement}
          onSubmit={(formData: any) => {}}
        />

        <LearningProcess
          formHeader={"New development"}
          lockedDescription="Learning process"
          label="new-development"
          isCollapsed={false}
          store={store.agreement}
          onSubmit={(formData: any) => {}}
        />

        <GuarantorsInfoForm
          store={store.guarantor}
          formHeader={"Guarantor Information"}
          lockedDescription="Information about your guarantor"
          label="guarantor-info"
          // isCollapsed={false}
          loading={store.loading}
          formSummary={[
            store.guarantor.fullName,
            store.guarantor.occupation,
            store.guarantor.email,
            store.guarantor.company,
            store.guarantor.phone,
          ]}
          onSubmit={async (formData: any) => {
            store.guarantor.onFormSubmit(formData);
            nextStep = "special-needs";
            await store
              .onFormSubmit(formData, "guarantor-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "guarantor-info");
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />
      </FormWrapper>
    </TutorPageWrapper>
  );
};

export default observer(TutorPageComponent);
