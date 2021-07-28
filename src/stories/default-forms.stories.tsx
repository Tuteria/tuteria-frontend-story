import { IonApp } from "@ionic/react";
import "@tuteria/mobile-lib/src/styles";
// import { observer } from "mobx-react-lite";
import React from "react";

export default {
  title: "Default Forms",
  decorators: [
    (Story: React.FC) => (
      <IonApp>
        <Story />
      </IonApp>
    ),
  ],
};
