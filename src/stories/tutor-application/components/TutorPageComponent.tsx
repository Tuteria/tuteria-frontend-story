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

const TutorPageComponent: React.FC<{
  store: IRootStore;
  onTakeTest: any;
}> = ({ store, onTakeTest, ...rest }) => {
  let nextStep: FormStepType;
  const [formIndex, setFormIndex] = React.useState(1);
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
            // nextStep = store.hasPassword ? "location-info" : "password-info";
            nextStep = "location-info";
            store.onFormSubmit(formData, "personal-info", nextStep).then(() => {
              handleFormSubmit(nextStep, "personal-info");
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
};

export default observer(TutorPageComponent);
