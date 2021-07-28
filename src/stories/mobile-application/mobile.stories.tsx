import { IonRouterOutlet } from "@ionic/react";
import ThemeProvider from "@tuteria/mobile-lib/src/bootstrap";
import { TUTORJOBLIST_DATA } from "@tuteria/mobile-lib/src/data/private-lessons/_sampleData";
import {
  getJobListStore,
  sampleTutorInfo,
} from "@tuteria/mobile-lib/src/data/store";
import AppRouter from "@tuteria/mobile-lib/src/pages/AppRoute";
import Page from "@tuteria/mobile-lib/src/pages/Page";
import JobListPageComponent from "@tuteria/mobile-lib/src/tutor-revamp/JobList";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

const appPages = [
  { title: "Jobs", url: "/page/Jobs" },
  { title: "Schedule", url: "/page/Schedule" },
  { title: "Subjects", url: "/page/Subjects" },
];
export default {
  title: "Mobile Application",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <AppRouter
          appPages={appPages}
          mode="dev"
          initialEntries={["/"]}
          initialIndex={0}
        >
          <Story />
        </AppRouter>
      </ThemeProvider>
    ),
  ],
};

const JobListView = observer(({ jobListStore }) => {
  useEffect(() => {
    jobListStore.bulkMapToStore(TUTORJOBLIST_DATA);
    console.log(jobListStore.summaryInfo);
  }, []);

  return (
    <Page name="Jobs">
      <JobListPageComponent
        agent={{}}
        host=""
        store={jobListStore}
        bookings={jobListStore.bookings}
        // bookings={sampleBookings}
        tutorInfo={sampleTutorInfo}
      />
    </Page>
  );
});

export const Pages = () => {
  const jobListStore = getJobListStore();
  return (
    <IonRouterOutlet id="main">
      <Route path="/" exact={true}>
        <Redirect to="/page/Jobs" />
      </Route>
      <Route path="/page/Jobs" exact={true}>
        <JobListView jobListStore={jobListStore} />
      </Route>
    </IonRouterOutlet>
  );
};
