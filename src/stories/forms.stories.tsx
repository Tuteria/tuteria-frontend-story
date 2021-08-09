import { Box } from "@chakra-ui/react";
import { IonApp, IonButton } from "@ionic/react";
import EducationComponent from "@tuteria/mobile-lib/src/forms/Education";
import WorkHistoryComponent from "@tuteria/mobile-lib/src/forms/WorkHistory";
import "@tuteria/mobile-lib/src/styles";
import React from "react";

export default {
  title: "Forms",
  decorators: [
    (Story: React.FC) => (
      <IonApp>
        <Story />
      </IonApp>
    ),
  ],
};

export const WorkHistory = () => {
  const formRef = React.useRef<any>();
  return (
    <Box
      m="10px auto"
      w="100%"
      shadow="0 0 2px 2px rgb(0 0 0 / 15%)"
      borderRadius=".25rem"
      maxW="600px"
    >
      <WorkHistoryComponent
        handleSubmit={(values) => console.log(values)}
        initialValues={{
          company: "Spotify",
          isTeachingRole: true,
          role: "Backend Developer",
          endYear: "",
          startYear: "",
          isCurrent: false,
          showOnProfile: false,
        }}
        ref={formRef}
      />
      <IonButton expand="full" onClick={() => formRef.current.handleSubmit()}>
        Submit
      </IonButton>
    </Box>
  );
};

export const Education = () => {
  const formRef = React.useRef<any>();
  return (
    <Box
      m="10px auto"
      w="100%"
      shadow="0 0 2px 2px rgb(0 0 0 / 15%)"
      borderRadius=".25rem"
      maxW="600px"
    >
      <EducationComponent
        handleSubmit={(values) => console.log(values)}
        initialValues={{
          school: "Michigan State University",
          country: "",
          startYear: "",
          endYear: "",
          degree: "",
          grade: "",
          course: "",
        }}
        ref={formRef}
      />
      <IonButton expand="full" onClick={() => formRef.current.handleSubmit()}>
        Submit
      </IonButton>
    </Box>
  );
};
