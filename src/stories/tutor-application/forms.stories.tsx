import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import EducationHistoryPage from "@tuteria/shared-lib/src/tutor-revamp/EducationHistory";
import LocationInfoForm from "@tuteria/shared-lib/src/tutor-revamp/LocationInfo";
import PersonalInfoForm from "@tuteria/shared-lib/src/tutor-revamp/PersonalInfo";
import WorkHistoryPage from "@tuteria/shared-lib/src/tutor-revamp/WorkHistory";
import {
  OverlayRouter,
  OverlayWrapper,
} from "@tuteria/shared-lib/src/components/OverlayRouter";
import React from "react";

export default {
  title: "Tutor Application/Forms",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const store = RootStore.create({
  userIsloggedIn: true,
  locationInfo: {
    country: "Nigeria",
    regions: allRegions,
    countries: allCountries,
    state: "Lagos",
    region: "Agege",
    vicinity: "Agege",
  },
  personalInfo: {
    firstName: "Abiola",
    lastName: "Oyeniyi",
    email: "james@example.com",
    gender: "female",
    country: "Nigeria",
    dateOfBirth: "1998-10-12",
    phone: "2347035209922",
    state: "Lagos",
    vicinity: "Agege",
    region: "Agege",
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
      {
        school: "University of Lagos",
        country: "Nigeria",
        course: "Organic Chemistry",
        degree: "MBBS",
        startYear: "2006",
        endYear: "2020",
        grade: "First Class",
      },
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
  subject: {
    tutorSubjects: [
      {
        name: "Logic",
        category: "Academics",
        subcategory: "Secondary",
        status: "pending",
      },
      {
        name: "Business Studies",
        category: "Academics",
        subcategory: "Secondary",
        status: "pending",
      },
      {
        name: "French",
        category: "Academics",
        subcategory: "Secondary",
        status: "denied",
      },
      {
        name: "Spanish",
        category: "Academics",
        subcategory: "Secondary",
        status: "denied",
      },
      {
        name: "Recognition",
        category: "Academics",
        subcategory: "Primary",
        status: "not-started",
      },
      {
        name: "Aptitude",
        category: "Academics",
        subcategory: "Adult",
        status: "pending",
      },
      {
        name: "Speaking",
        category: "Exam Prep",
        subcategory: "GMAT",
        status: "in-progress",
      },
      {
        name: "Listening",
        category: "Exam Prep",
        subcategory: "IELTS",
        status: "active",
      },
    ],
  },
  identity: {
    profilePhotoId: "hello/holla",
    profilePhoto:
      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    isIdVerified: true,
  },

  slug: "tutor-101",
});
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

export const PersonalInfo = () => {
  store.initializeForm("personal-info");
  return (
    <PersonalInfoForm
      store={store}
      onSubmit={(formData: any) => {
        console.log("Form Data", formData);
        store.toNextPath(); //moving to the next page.
      }}
    />
  );
};
export const LocationInfo = () => {
  store.initializeForm("location-info");
  return (
    <LocationInfoForm
      store={store}
      onSubmit={(formData: any) => {
        console.log("Form Data", formData);
        store.toNextPath(); //moving to the next page.
      }}
    />
  );
};

export const EducationHistory = () => {
  store.initializeForm("education-history");
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <EducationHistoryPage store={store} />;
      </OverlayWrapper>
    </OverlayRouter>
  );
};
export const WorkHistory = () => {
  store.initializeForm("work-history");
  return <WorkHistoryPage store={store} />;
};
