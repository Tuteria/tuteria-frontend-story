import { Box } from "@chakra-ui/react";
import React from "react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import LessonsPageComponent from "@tuteria/shared-lib/src/group-lessons/pages/LessonsPage";
import { GroupLessonsProvider } from "@tuteria/shared-lib/src/group-lessons/GroupLessonsProvider";
import { GROUPLESSON_DATA, IELTSClasses, SAMPLE_USER_INFO } from "./sampleData";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";

export default {
  title: "Group Lessons/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export const LessonsPage = () => {
  return (
    <OverlayRouter>
      <GroupLessonsProvider
        lessonData={GROUPLESSON_DATA}
        userInfo={SAMPLE_USER_INFO}
        classSelected="IELTSWeekend01"
        classes={IELTSClasses}
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
        <LessonsPageComponent />
      </GroupLessonsProvider>
    </OverlayRouter>
  );
};
