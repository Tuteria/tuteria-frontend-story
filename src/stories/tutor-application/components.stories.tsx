import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import allCountries from "@tuteria/mobile-lib/src/data/countries.json";
import allRegions from "@tuteria/mobile-lib/src/data/regions.json";
import {
  OverlayRouter,
  OverlayWrapper,
} from "@tuteria/shared-lib/src/components/OverlayRouter";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import ResultsPage from "@tuteria/shared-lib/src/tutor-revamp/Results";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import SubjectAdditionPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectComponents";
import React from "react";
import { Box } from "@chakra-ui/react";

export default {
  title: "Tutor Application/Components",
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

const store2 = RootStore.create({
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
    tutorSubjects: [],
  },
  currentEditableForm: "subject-addition",
  identity: {
    profilePhotoId: "hello/holla",
    profilePhoto:
      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    isIdVerified: true,
  },
  slug: "tutor-101",
});

export const Results = () => {
  return (
    <ResultsPage
      subject={"General Mathematics"}
      navigate={() => {}}
      quizResults={{
        completionRate: 100,
        correctAnswers: 19,
        passRate: 0,
        passedQuiz: true,
        questionsAnswered: 21,
      }}
    />
  );
};

export const SubjectAddition = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <SubjectAdditionPage onSubmit={() => {}} store={store.subject} />;
      </OverlayWrapper>
    </OverlayRouter>
  );
};

export const SubjectTable = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <TutorSubjectsPage onTakeTest={() => {}} store={store.subject} />;
      </OverlayWrapper>
    </OverlayRouter>
  );
};

export const EmptySubjectTable = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <Box w="1000px" mx="auto">
          <TutorSubjectsPage onTakeTest={() => {}} store={store2.subject} />
        </Box>
      </OverlayWrapper>
    </OverlayRouter>
  );
};
