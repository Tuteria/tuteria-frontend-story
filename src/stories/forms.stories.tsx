import React from "react";
import { IonApp } from "@ionic/react";
import WorkHistoryComponent from "@tuteria/mobile-lib/src/forms/WorkHistory";
import "@ionic/react/css/core.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/normalize.css";
import { Box } from "@chakra-ui/react";

export default {
  title: "Ionic Forms",
  decorators: [
    (Story: React.FC) => (
      <IonApp>
        <Story />
      </IonApp>
    ),
  ],
};

export const WorkHistory = () => (
  <Box maxW="600px" m="auto" w="100%">
    <WorkHistoryComponent
      handleFormSubmit={(values) => console.log(values)}
      values={{
        company: "Spotify",
        isTeachingRole: true,
        role: "Backend Developer",
      }}
    />
  </Box>
);
