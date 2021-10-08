import React from "react";
import { scrollToId } from "@tuteria/shared-lib/src/utils/functions";
import FormWrapper from "@tuteria/shared-lib/src/components/FormWrapper";
import personalInfoData from "@tuteria/shared-lib/src/tutor-revamp/formData/personalInfo.json";
import educationHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/educationHistory.json";
import workHistoryData from "@tuteria/shared-lib/src/tutor-revamp/formData/workHistory.json";
import guarantorInfoData from "@tuteria/shared-lib/src/tutor-revamp/formData/guarantorInfo.json";
import subjectContents from "@tuteria/shared-lib/src/tutor-revamp/formData/subject.json";
import { FormStepType } from "@tuteria/shared-lib/src/stores";
import { IRootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import banksData from "@tuteria/shared-lib/src/data/banks.json";
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
const NewDevelopment = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/NewDevelopment")
);
const GuarantorsInfoForm = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Guarantors")
);
const PaymentInfo = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/PaymentInfo")
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
  { key: "agreement-info", name: "Agreements Information", completed: false },
  { key: "guarantors-info", name: "Guarantor Information", completed: false },
  { key: "payment-info", name: "Payment Information", completed: false },
  {
    key: "new-development-info",
    name: "New Development Information",
    completed: false,
  },
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

  const banks = banksData[store.personalInfo.country_code].map(
    (bank) => bank.name
  );
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
          formsetDescription={educationHistoryData.formTitle.subHeader}
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
          formHeader={workHistoryData.formTitle.header}
          formsetDescription={workHistoryData.formTitle.subHeader}
          loading={store.loading}
          displayType="complex"
          label="work-history"
          isDisabled={store.educationWorkHistory.workHistories.length === 0}
          lockedDescription={workHistoryData.formTitle.subHeader}
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
          store={store.schedule}
          formSummary={[
            `maximum Days: ${store.schedule.maxDays}`,
            `maximum Hours: ${store.schedule.maxHours}`,
            `maximum Students: ${store.schedule.maxStudents}`,
            // [...Object.keys(store.schedule.availability)]
          ]}
          onSubmit={async (formData: any) => {
            nextStep = "agreement-info";
            await store
              .onFormSubmit(formData, "schedule-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "schedule-info");
              });
          }}
        />

        <Agreements
          formHeader={"Tutor Agreements"}
          label="agreement-info"
          lockedDescription="Tutor agreements"
          store={store.agreement}
          loading={store.loading}
          formSummary={[
            `Payment date: ${
              store.agreement.paymentDate === true ? "Agreed" : "Not Agreed"
            }`,
            `Tax compliance: ${
              store.agreement.taxCompliance === true ? "Agreed" : "Not Agreed"
            }`,
            `Lesson Percent: ${
              store.agreement.lessonPercent === true ? "Agreed" : "Not Agreed"
            }`,
            `Contract: ${
              store.agreement.contractAgreement === true
                ? "Agreed"
                : "Not Agreed"
            }`,
          ]}
          onSubmit={async (formData: any) => {
            nextStep = "guarantors-info";
            store.agreement.updateFields(formData);
            await store
              .onFormSubmit(formData, "agreement-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "agreement-info");
              });
          }}
        />

        <GuarantorsInfoForm
          store={store.educationWorkHistory}
          formHeader={guarantorInfoData.formTitle.header}
          formsetDescription={guarantorInfoData.formTitle.subHeader}
          loading={store.loading}
          displayType="complex"
          label="guarantors-info"
          isDisabled={store.educationWorkHistory.guarantors.length === 0}
          lockedDescription={guarantorInfoData.formTitle.subHeader}
          buttonText={guarantorInfoData.buttonText.saveAndContinue}
          textData={guarantorInfoData}
          completed={store.educationWorkHistory.guarantorsCompleted}
          onSubmit={async (formData: any) => {
            nextStep = "payment-info";
            await store
              .onFormSubmit(formData, "guarantors-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "guarantors-info");
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />
        <PaymentInfo
          store={store.paymentInfo}
          banks={banks}
          label="payment-info"
          formHeader={"Payment Information"}
          lockedDescription="Enter your bank details"
          loading={store.loading}
          formSummary={[
            store.paymentInfo.bankName,
            store.paymentInfo.accountName,
            store.paymentInfo.accountNumber,
          ]}
          onSubmit={async (formData: any) => {
            nextStep = "new-development-info";
            store.paymentInfo.updateFields(formData);
            await store
              .onFormSubmit(formData, "payment-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "payment-info");
              })
              .catch((error) => {
                onError();
                throw error;
              });
          }}
        />

        <NewDevelopment
          formHeader={"New development"}
          lockedDescription="Learning process"
          label="new-development-info"
          formSummary={["New development"]}
          store={store.others}
          onSubmit={async (formData: any) => {
            nextStep = "special-needs";
            // store.agreement.updateFields(formData);
            await store
              .onFormSubmit(formData, "new-development-info", nextStep)
              .then(() => {
                handleFormSubmit(nextStep, "new-development-info");
              });
          }}
        />
      </FormWrapper>
    </TutorPageWrapper>
  );
};

export default observer(TutorPageComponent);
