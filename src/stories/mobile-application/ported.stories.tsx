import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/mobile-lib/src/bootstrap";
import LoginAndResetPasswordComponent from "@tuteria/mobile-lib/src/components/LoginAndResetPassword";
import { OverlayRouter } from "@tuteria/mobile-lib/src/components/OverlayRouter";
import MobileMenu from "@tuteria/mobile-lib/src/components/TutorPageWrapper/MobileMenus";
import allCountries from "@tuteria/mobile-lib/src/data/countries.json";
import {
  SAMPLETUTORSUBJECTS,
  TUTORJOBLIST_DATA,
} from "@tuteria/mobile-lib/src/data/private-lessons/_sampleData";
import allRegions from "@tuteria/mobile-lib/src/data/regions.json";
import {
  getJobListStore,
  sampleTutorInfo,
} from "@tuteria/mobile-lib/src/data/store";
import Availability from "@tuteria/mobile-lib/src/tutor-revamp/Availability";
import JobListPageComponent from "@tuteria/mobile-lib/src/tutor-revamp/JobList";
import Subject from "@tuteria/mobile-lib/src/tutor-revamp/Subject";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

export default {
  title: "Mobile Application/Ported",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box height="100vh" overflow="auto">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

const JobListStory = observer(({ jobListStore }: any) => {
  useEffect(() => {
    jobListStore.bulkMapToStore(TUTORJOBLIST_DATA);
    console.log(jobListStore.summaryInfo);
  }, []);

  async function saveWhatsapp(number) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(number);
      }, 1000);
    });
  }

  return (
    <OverlayRouter>
      <Box>
        <JobListPageComponent
          agent={{}}
          host=""
          // bookings={jobListStore.summaryInfo}
          // bookings={jobListStore.summaryInfo.map((o, i) => {
          //   return { ...o, tutorResponse: sampleBookings[i].tutorResponse };
          // })}
          store={jobListStore}
          bookings={jobListStore.bookings}
          // bookings={sampleBookings}
          tutorInfo={sampleTutorInfo}
        />
        <MobileMenu defaultMenu="Jobs" />
      </Box>
    </OverlayRouter>
  );
});

export const JobListPage = () => {
  const jobListStore = getJobListStore();
  return <JobListStory jobListStore={jobListStore} />;
};

const AvailabilityComponent = observer(
  ({ store, availabilityData, locationInfo }: any) => {
    useEffect(() => {
      store.updateAvailability(availabilityData);
      store.updateLocationInfo(locationInfo);
    }, []);

    async function saveWhatsapp(number) {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(number);
        }, 1000);
      });
    }

    return (
      <Box height="100vh" overflow="auto">
        <Availability store={store.availability} />
        <MobileMenu defaultMenu="Schedule" />
      </Box>
    );
  }
);

export const AvailabilityPage = () => {
  const store = getJobListStore();
  return (
    <AvailabilityComponent
      store={store}
      availabilityData={{
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
      }}
      locationInfo={{
        country: "Nigeria",
        countries: allCountries,
        state: "Lagos",
        region: "Agege",
        address: "Agege Estate",
        vicinity: "Agege Bus stop",
        regions: allRegions,
      }}
    />
  );
};

export const SubjectPage = ({}) => {
  const jobListStore = getJobListStore();
  jobListStore.subject.initializeSubjectStore(SAMPLETUTORSUBJECTS);

  async function saveWhatsapp(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number);
      }, 1000);
    });
  }

  return (
    <Box>
      <Subject store={jobListStore.subject} />
      <MobileMenu defaultMenu="Subjects" />
    </Box>
  );
};

export const LoginAndResetPassword = () => {
  const store = getJobListStore();
  return (
    <Box maxW="500px" mx="auto" mt="20px">
      <LoginAndResetPasswordComponent
        onLogin={store.onLogin}
        onSendEmail={store.onSendEmail}
      />
    </Box>
  );
};
