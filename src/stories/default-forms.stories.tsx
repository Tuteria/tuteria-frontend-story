import { Box, Button } from "@chakra-ui/react";
import { IonApp } from "@ionic/react";
import { Page } from "@tuteria/mobile-lib/src/primitives";
import { RootStore } from "@tuteria/mobile-lib/src/stores";
import "@tuteria/mobile-lib/src/styles";
// import { observer } from "mobx-react-lite";
import React from "react";
import allCountries from "./data/countries.json";
import allRegions from "./data/regions.json";

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
