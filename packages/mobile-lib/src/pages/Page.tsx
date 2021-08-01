import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Page: React.FC<{ name?: string }> = ({ children, name }) => {
  return (
    <IonPage>
      {name ? (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : null}

      <IonContent fullscreen>
        {name ? (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
        ) : null}
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
