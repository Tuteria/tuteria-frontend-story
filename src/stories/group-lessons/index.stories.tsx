import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import { GroupLessonsProvider } from "@tuteria/shared-lib/src/group-lessons/GroupLessonsProvider";
import LessonsPage from "@tuteria/shared-lib/src/group-lessons/pages/LessonsPage";
import RegistrationPageComponent from "@tuteria/shared-lib/src/group-lessons/pages/RegistrationPage";
import PaymentPageComponent from "@tuteria/shared-lib/src/group-lessons/pages/PaymentPage";
import ClientBookingDetails from "@tuteria/shared-lib/src/group-lessons/pages/ClientBookingDetails";
import React from "react";
import {
  GROUPLESSON_DATA,
  CheckpointEnglish,
  SAMPLE_USER_INFO,
} from "./sampleData";
import "react-phone-input-2/lib/style.css";

export default {
  title: "Group Lessons/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box m={-4} h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

function Wrapper({ children }) {
  return (
    <OverlayRouter>
      <GroupLessonsProvider
        lessonData={GROUPLESSON_DATA}
        userInfo={SAMPLE_USER_INFO}
        classSelected="CheckpointEnglishBatch1"
        classes={CheckpointEnglish}
        authenticatonLogic={{
          onLogin: () => Promise.reject({}),
          onResetPassword: () => Promise.resolve({}),
        }}
        registrationInfo={{
          venue: "online",
          upsell: {
            type: "Enrollment",
            quantity: 1,
            price: 30600,
            relatedSubject: "Igbo",
            option: "Parts 2 & 3",
          },
          medium: "From a friend",
        }}
      >
        {children}
      </GroupLessonsProvider>
    </OverlayRouter>
  );
}

export const LessonDetails = () => {
  return (
    <Wrapper>
      <LessonsPage />
    </Wrapper>
  );
};

export const RegistrationPage = () => {
  return (
    <Wrapper>
      <RegistrationPageComponent
        countries={allCountries}
        submitted
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </Wrapper>
  );
};

export const PaymentPage = () => {
  return (
    <Wrapper>
      <PaymentPageComponent />
    </Wrapper>
  );
};

export const ClientBookingDetailsPage = () => {
  return (
    <Wrapper>
      <ClientBookingDetails />
    </Wrapper>
  );
};
