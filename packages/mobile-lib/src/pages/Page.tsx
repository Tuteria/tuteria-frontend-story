//@ts-ignore
// @ts-nocheck

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
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import TutorPageWrapper from "../components/TutorPageWrapper";
import { useHistory, useLocation } from "react-router";
import { IRootStore } from "../store/types";
import { observer } from "mobx-react-lite";

const Skeletor = ({ children }) => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};

const Page: React.FC<{
  name?: string;
  displayMenu?: boolean;
  store: IRootStore;
}> = ({ children, name = "", displayMenu = true, store }) => {
  let history = useHistory();
  let location = useLocation();
  let options = {
    Jobs: "/page/Jobs",
    Subjects: "/page/Subjects",
    Lessons: "",
    Earnings: "",
    Schedule: "/page/Schedule",
  };
  React.useEffect(() => {
    store.setCurrentPage(name);
  }, []);
  function getKey() {
    let result = Object.entries(options).find((z) => {
      return z[1] === location.pathname;
    });
    return result ? result[0] : "";
  }
  function renderChildren() {
    return displayMenu ? (
      <React.Suspense fallback={<Skeletor />}>
        <TutorPageWrapper
          onSideBarItemClick={(item: any) => {
            if (location.pathname !== options[item]) {
              store.setCurrentPage(item);
              history.push(options[item]);
            }
          }}
          defaultMenu={store.currentPage}
        >
          {children}
        </TutorPageWrapper>
      </React.Suspense>
    ) : (
      children
    );
  }
  return (
    <IonPage>
      {store.currentPage ? (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{store.currentPage}</IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : null}

      <IonContent fullscreen>
        {store.currentPage ? (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{store.currentPage}</IonTitle>
            </IonToolbar>
          </IonHeader>
        ) : null}
        {renderChildren()}
      </IonContent>
    </IonPage>
  );
};

export default observer(Page);
