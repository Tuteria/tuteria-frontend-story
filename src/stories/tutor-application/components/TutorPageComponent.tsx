import { Button, Stack } from "@chakra-ui/react";
import FormWrapper, {
  useTutorApplicationFlow,
} from "@tuteria/shared-lib/src/components/FormWrapper";
import { IRootStore } from "@tuteria/shared-lib/src/stores";
import { STEPS } from "@tuteria/shared-lib/src/stores/rootStore";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import { observer } from "mobx-react-lite";
import React from "react";

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

const TeachingProfile = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/SpecialNeeds")
);

const TutorPageComponent: React.FC<{
  store: IRootStore;
  onTakeTest: (subject: string) => string;
  onEditSubject: (subject: any) => any;
  onNextStep?: () => any;
}> = ({ store, onTakeTest, onEditSubject, onNextStep, ...rest }) => {
  const {
    getFormWrapperProps,
    formIndex,
    steps,
    activeStep,
    completedForm,
  } = useTutorApplicationFlow(store);

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
        <PersonalInfo {...getFormWrapperProps(STEPS.PERSONAL_INFO)} />
        <LocationInfo {...getFormWrapperProps(STEPS.LOCATION_INFO)} />
        <EducationHistory {...getFormWrapperProps(STEPS.EDUCATION_HISTORY)} />

        <WorkHistory {...getFormWrapperProps(STEPS.WORK_HISTORY)} />
        <TutorSubjectsPage
          {...getFormWrapperProps(STEPS.SUBJECT_SELECTION)}
          onTakeTest={onTakeTest}
          onEditSubject={onEditSubject}
        />

        <ScheduleCard {...getFormWrapperProps(STEPS.SCHEDULE_INFO)} />
        <TeachingProfile {...getFormWrapperProps(STEPS.TEACHING_PROFILE)} />
        <VerificationIdentity {...getFormWrapperProps(STEPS.VERIFICATION)} />

        <GuarantorsInfoForm {...getFormWrapperProps(STEPS.GUARANTOR_INFO)} />
        <PaymentInfo {...getFormWrapperProps(STEPS.PAYMENT_INFO)} />
        <NewDevelopment {...getFormWrapperProps(STEPS.NEW_DEVELOPMENT)} />
        <Agreements {...getFormWrapperProps(STEPS.AGREEMENT_INFO)} />
      </FormWrapper>
      <Stack>
        <Button
          onClick={() => {
            store.submitApplication().then(() => {
              onNextStep();
            });
          }}
          colorScheme="blue"
          size="lg"
          isLoading={store.applicationLoading}
          isDisabled={!completedForm}
        >
          Submit Application
        </Button>
      </Stack>
    </TutorPageWrapper>
  );
};

export default observer(TutorPageComponent);
