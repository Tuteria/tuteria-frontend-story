import {
  IonApp,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Page } from "@tuteria/mobile-lib/src/primitives";
import React from "react";

export default {
  title: "Documentation Demos",
  decorators: [
    (Story) => (
      <IonApp>
        <IonReactRouter>
          <Story />
        </IonReactRouter>
      </IonApp>
    ),
  ],
};
export const InputDemo: React.FC = () => {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState(1);
  return (
    <Page title="Input Demo" fullscreen>
      <IonList>
        <IonItemDivider>Default Input with Placeholder</IonItemDivider>

        <IonItemDivider>
          Input with clear button when there is a value
        </IonItemDivider>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Number type input</IonItemDivider>
        <IonItem>
          <IonInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Disabled input</IonItemDivider>
        <IonItem>
          <IonInput value={text} disabled></IonInput>
        </IonItem>

        <IonItemDivider>Readonly input</IonItemDivider>
        <IonItem>
          <IonInput value={text} readonly></IonInput>
        </IonItem>

        <IonItemDivider>Inputs with labels</IonItemDivider>

        <IonItem>
          <IonLabel>Default Label</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Floating Label</IonLabel>
          <IonInput value={text}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="fixed">Fixed Label</IonLabel>
          <IonInput value={text}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Stacked Label</IonLabel>
          <IonInput value={text}> </IonInput>
        </IonItem>
      </IonList>
    </Page>
  );
};
