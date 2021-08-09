import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import React, { Suspense } from "react";
import allCountries from "@tuteria/mobile-lib/src/data/countries.json";
import allRegions from "@tuteria/mobile-lib/src/data/regions.json";
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

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const adapter = {
  saveTutorInfo: (key: any, value: any, slug: any) => {
    console.log({ key, value, slug });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  },
};

const store = RootStore.create(
  {
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
      firstName: "Abiola",
      lastName: "Oyeniyi",
      email: "james@example.com",
      gender: "female",
      country: "Nigeria",
      dateOfBirth: "1998-10-12",
      phone: "2347035209922",
      whatsappNo: "2348152957065",
      state: "Lagos",
      vicinity: "Charley boy Busstop",
      region: "Gbagada",
      address: "Irabor Street Koto",
    },
    educationWorkHistory: {
      educations: [
        {
          school: "Ikeja Grammar school",
          country: "Nigeria",
          course: "Chemistry",
          degree: "MBBS",
          startYear: "2006",
          endYear: "2020",
          grade: "First Class",
        },
        // {
        //   school: "University of Lagos",
        //   country: "Nigeria",
        //   course: "Organic Chemistry",
        //   degree: "MBBS",
        //   startYear: "2006",
        //   endYear: "2020",
        //   grade: "First Class",
        // },
      ],
      workHistories: [
        {
          company: "Tuteria Limited",
          role: "CEO",
          isTeachingRole: false,
          startYear: "2015",
          endYear: "2020",
          isCurrent: true,
          showOnProfile: true,
        },
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
  },
  // { adapter }
  {
    saveTutorInfo: (key: string, value: any, slug: string) => {
      console.log({ key, value, slug });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({});
        }, 3000);
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
const initialSteps = [
  {
    stepName: "What is this about?",
    path: "/overview",
    canEditStep: true,
    isCompleted: false,
    nextButtonText: "Get started",
  },
  {
    stepName: "Personal details",
    path: "/personal-details",
    canEditStep: true,
    isCompleted: true,
    nextButtonText: "Next",
  },
  {
    stepName: "Education and work",
    path: "/education-work",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Next",
  },
  {
    stepName: "Teaching background",
    path: "/teaching-background",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Next",
  },
  {
    stepName: "Photo and ID",
    path: "/photo-id",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Next",
  },
  {
    stepName: "Availability",
    path: "/availability",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Next",
  },
  {
    stepName: "Agreements",
    path: "/agreements",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Next",
  },
  {
    stepName: "New developments",
    path: "/new-developments",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Ok, sounds great",
  },
  {
    stepName: "Final submission",
    path: "/submission",
    canEditStep: false,
    isCompleted: false,
    nextButtonText: "Submit",
  },
];

export const TutorPage = () => {
  const countries = allCountries.map((country) => country.name);
  return (
    <TutorPageWrapper>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <PersonalInfo
          store={store}
          countries={countries}
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

        <EducationHistory store={store} countries={allCountries} />

        <WorkHistory store={store} countries={allCountries} />
      </Suspense>
    </TutorPageWrapper>
  );
};
