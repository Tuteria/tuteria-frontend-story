import { IonRouterOutlet } from "@ionic/react";
import ThemeProvider from "@tuteria/mobile-lib/src/bootstrap";
import {
  SAMPLETUTORSUBJECTS,
  TUTORJOBLIST_DATA,
} from "@tuteria/mobile-lib/src/data/private-lessons/_sampleData";
import Availability from "@tuteria/mobile-lib/src/tutor-revamp/Availability";
import {
  getJobListStore,
  sampleTutorInfo,
} from "@tuteria/mobile-lib/src/data/store";

import allCountries from "@tuteria/mobile-lib/src/data/countries.json";
import allRegions from "@tuteria/mobile-lib/src/data/regions.json";
import AppRouter from "@tuteria/mobile-lib/src/pages/AppRoute";
import Page from "@tuteria/mobile-lib/src/pages/Page";
import JobListPageComponent from "@tuteria/mobile-lib/src/tutor-revamp/JobList";
import Subject from "@tuteria/mobile-lib/src/tutor-revamp/Subject";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { Browser } from "@capacitor/browser";
import "@tuteria/mobile-lib/src/styles";

const appPages = [
  { title: "Jobs", url: "/page/Jobs" },
  {
    title: "Schedule",
    url: "/page/Schedule",
    onClick: async (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("Navigate to schedule");
      await Browser.open({ url: "http://capacitorjs.com/" });
    },
  },
  { title: "Subjects", url: "/page/Subjects" },
  {
    title: "Lessons",
    url: "/page/Bookings",
    onClick: async (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
  },
  { title: "Edit Profile", url: "/page/Profile" },
  {
    title: "Settings",
    url: "/page/settings",
    onClick: async (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
  },
];
export default {
  title: "Mobile Application",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <AppRouter
          appPages={appPages}
          mode="dev"
          initialEntries={["/", "/page/Schedule"]}
          initialIndex={1}
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

const SubjectView = observer(({ store }) => {
  useEffect(() => {
    store.initializeSubjectStore(SAMPLETUTORSUBJECTS);
  }, []);
  return (
    <Page name="Subjects">
      <Subject store={store} />
    </Page>
  );
});

const AvailabilityView = observer(({ store }: any) => {
  useEffect(() => {
    store.updateAvailability({
      availability: {
        Monday: ["Morning", "Late afternoon"],
        Wednesday: ["Evening", "Early evening"],
      },
      maxDays: 2,
      maxHours: 1,
      maxStudents: 3,
      lastCalendarUpdate: "2021-05-14T00:00:00.000Z",
      availabilityStatus: {
        isAvailable: false,
        resumptionDate: "2021-06-18",
      },
      exemptedAreas: ["Apapa", "Ajah", "Epe"],
    });
    store.updateLocationInfo({
      country: "Nigeria",
      countries: allCountries,
      state: "Lagos",
      region: "Agege",
      address: "Agege Estate",
      vicinity: "Agege Bus stop",
      regions: allRegions,
    });
  }, []);

  return (
    <Page name="Schedule">
      <Availability store={store.availability} />
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
      <Route path="/page/Subjects" exact={true}>
        <SubjectView store={jobListStore.subject} />
      </Route>
      <Route path="/page/Schedule" exact={true}>
        <AvailabilityView store={jobListStore} />
      </Route>
    </IonRouterOutlet>
  );
};
