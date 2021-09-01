import allCountries from "@tuteria/mobile-lib/src/data/countries.json";
import allRegions from "@tuteria/mobile-lib/src/data/regions.json";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import React, { Suspense } from "react";
const PersonalInfo = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/PersonalInfo")
);
const LocationInfo = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/LocationInfo")
);
const WorkHistory = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/WorkHistory")
);
const EducationHistory = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/EducationHistory")
);

const TutorSubjectsPage = React.lazy(
  () => import("@tuteria/shared-lib/src/tutor-revamp/Subject")
);

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Story />
        </Suspense>
      </ThemeProvider>
    ),
  ],
};

const store = RootStore.create(
  {},
  {
    saveTutorInfo: (key: string, value: any, slug: string) => {
      console.log({ key, value, slug });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({});
        }, 3000);
      });
    },
    submitSelectedSubjects: (data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
    },
    toNextPath: async () => {},
    // remoteDeleteImage: async (file) => {
    //   console.log(file);
    // },
    // uploadApiHandler: async (files: any, progressCallback: any) => {
    //   console.log(files); //this is where cloudinary implementation is used.
    //   return files.map((o) => ({
    //     name: o.name,
    //     size: o.size?.toString(),
    //     public_id: "the_public_id",
    //     url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    //   }));
    // },
    // onLogin: async (values, bag) => {},
    // onResetPassword: async (values) => {},
    // saveTutorAvailability: async (values) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(values);
    //     }, 1000);
    //   });
    // },
    // saveCurrentLocation: async (values) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(values);
    //     }, 1000);
    //   });
    // },
    // saveExemptedAreas: async (values) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(values);
    //     }, 1000);
    //   });
    // },
  }
);

async function getTutorData() {
  const data = {
    userIsloggedIn: true,
    locationInfo: {
      country: "Nigeria",
      regions: allRegions,
      countries: allCountries,
      // state: "Lagos",
      // region: "Gbagada",
      // vicinity: "Charley boy Busstop",
      // address: "10, Lanre awolokun street",
    },
    personalInfo: {
      // firstName: "Abiola",
      // lastName: "Oyeniyi",
      // email: "james@example.com",
      // gender: "female",
      // country: "Nigeria",
      // dateOfBirth: "1998-10-12",
      // phone: "2347035209922",
      // whatsappNo: "2348152957065",
      // state: "Lagos",
      // vicinity: "Charley boy Busstop",
      // region: "Gbagada",
      // address: "Irabor Street Koto",
      // primaryLanguage: "English",
      // medium: "Facebook",
    },
    educationWorkHistory: {
      educations: [
        //   {
        //     school: "Ikeja Grammar school",
        //     country: "Nigeria",
        //     course: "Chemistry",
        //     degree: "MBBS",
        //     startYear: "2006",
        //     endYear: "2020",
        //     grade: "First Class",
        //   },
        //   {
        //     school: "University of Lagos",
        //     country: "Nigeria",
        //     course: "Organic Chemistry",
        //     degree: "MBBS",
        //     startYear: "2006",
        //     endYear: "2020",
        //     grade: "First Class",
        //   },
        // ],
        // workHistories: [
        //   {
        //     company: "Tuteria Limited",
        //     role: "CEO",
        //     isTeachingRole: false,
        //     startYear: "2015",
        //     endYear: "2020",
        //     isCurrent: true,
        //     showOnProfile: true,
        //   },
      ],
    },
    subject: {
      tutorSubjects: [
        // {
        //   id: 1,
        //   name: "Logic",
        //   category: "Academics",
        //   subcategory: "Secondary",
        //   status: "pending",
        // },
        // {
        //   id: 2,
        //   name: "Business Studies",
        //   category: "Academics",
        //   subcategory: "Secondary",
        //   status: "pending",
        // },
        // {
        //   id: 3,
        //   name: "French",
        //   category: "Academics",
        //   subcategory: "Secondary",
        //   status: "denied",
        // },
        // {
        //   id: 4,
        //   name: "Spanish",
        //   category: "Academics",
        //   subcategory: "Secondary",
        //   status: "denied",
        // },
        // {
        //   id: 5,
        //   name: "Recognition",
        //   category: "Academics",
        //   subcategory: "Primary",
        //   status: "not-started",
        // },
        // {
        //   id: 5,
        //   name: "Aptitude",
        //   category: "Academics",
        //   subcategory: "Adult",
        //   status: "pending",
        // },
        // {
        //   id: 6,
        //   name: "Speaking",
        //   category: "Exam Prep",
        //   subcategory: "IELTS",
        //   status: "in-progress",
        // },
        // {
        //   id: 7,
        //   name: "Listening",
        //   category: "Exam Prep",
        //   subcategory: "IELTS",
        //   status: "active",
        // },
      ],
    },
    // teachingProfile: {
    //   classGroup: ["Lower Primary", "Pre-primary"],
    //   curriculums: ["British", "Nigerian"],
    //   examExperience: {
    //     exams: [
    //       "Common Entrance Exam",
    //       "Cambridge Checkpoint",
    //       "13+ Entrance Exam",
    //     ],
    //     schools: ["Greensprings", "Grange"],
    //   },
    //   specialNeeds: ["ADD/ADHD", "Dyslexia"],
    //   tutorDisabilities: ["ADD/ADHD"],
    //   onlineProfile: {
    //     acceptsOnline: true,
    //     hasComputer: true,
    //     hasInternet: true,
    //   },
    // },
    // availability: {
    //   availability: {
    //     Monday: ["Morning", "Late afternoon"],
    //     Wednesday: ["Evening", "Early evening"],
    //   },
    //   maxDays: 3,
    //   maxHours: 1,
    //   maxStudents: 3,
    // },
    identity: {
      profilePhotoId: "hello/holla",
      profilePhoto:
        "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
      isIdVerified: true,
      // uploadStore: {
      //   files: [
      //     {
      //       name: "sample.png",
      //       url:
      //         "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
      //     },
      //   ],
      // },
    },
    // agreement: {
    //   lessonPercent: true,
    //   amountEarned: 567650,
    //   contractAgreement: true,
    //   taxP: 5,
    // },
    slug: "tutor-101",
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

export const TutorPage = () => {
  React.useEffect(() => {
    getTutorData().then((res: TutorStoreType) => {
      store.initializeStore(res);
    });
  }, []);

  return (
    <TutorPageWrapper store={store}>
      <PersonalInfo
        store={store}
        onSubmit={(formData: any) => {
          store.toNextPath();
        }}
      />

      <LocationInfo
        store={store}
        onSubmit={(formData: any) => {
          store.toNextPath(); //moving to the next page.
        }}
      />

      <EducationHistory store={store} />

      <WorkHistory store={store} />
      <TutorSubjectsPage store={store.subject} />
    </TutorPageWrapper>
  );
};
