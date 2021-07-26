import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import { ISampleType } from "../store";
import "./Page.css";

const Page: React.FC<{ store: ISampleType }> = observer(({ store }) => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name + store.name} />
      </IonContent>
    </IonPage>
  );
});

export default Page;
