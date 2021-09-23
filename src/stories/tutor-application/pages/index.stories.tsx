import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import React, { Suspense } from "react";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import "katex/dist/katex.min.css";
import "react-phone-input-2/lib/style.css";
import { linkTo } from "@storybook/addon-links";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";

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

const adapter = {
  deleteSubject: (id: string) => {
    console.log({ id });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 3000);
    });
  },
  saveTutorInfo: (key: string, value: any, slug: string) => {
    console.log({ key, value, slug });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  },
  updateTutorSubjectInfo: (values: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
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
  fetchQuizQuestions: async (quizSubjects) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ quiz: DATA.quiz, quizSubjects });
      }, 2000);
    });
  },
  toNextPath: async () => {},
};

const store = RootStore.create(
  {},
  {
    adapter,
  }
);

async function getTutorData() {
  const data = {
    userIsloggedIn: true,
    locationInfo: {
      country: "Nigeria",
      regions: allRegions,
      countries: allCountries,
      state: "Lagos",
      region: "Gbagada",
      vicinity: "Charley boy Busstop",
      address: "10, Lanre awolokun street",
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
      primaryLanguage: "English",
      medium: "Facebook",
    },
    educationWorkHistory: {
      educations: [
        {
          school: "Ikeja Grammar school",
          country: "Nigeria",
          course: "Chemistry",
          degree: "MBBS",
          speciality: "Mathematics",
          startYear: "2006",
          endYear: "2020",
          grade: "First Class",
        },
        {
          school: "University of Lagos",
          country: "Nigeria",
          course: "Organic Chemistry",
          speciality: "Mathematics",
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
          id: 1,
          name: "General Mathematics",
          category: "Academics",
          subcategory: "Secondary",
          status: "not-started",
          title: "This is title from tutor subject for general mathematics",
          description: "This is a description for general mathematics",
          teachingStyle: "Terrorize my students",
          trackRecords: "Cries everywhere",
        },
        {
          id: 2,
          name: "English",
          category: "Academics",
          subcategory: "Secondary",
          status: "not-started",
        },
        {
          id: 3,
          name: "French",
          category: "Academics",
          subcategory: "Secondary",
          status: "denied",
        },
        {
          id: 4,
          name: "Spanish",
          category: "Academics",
          subcategory: "Secondary",
          status: "denied",
        },
        {
          id: 5,
          name: "Recognition",
          category: "Academics",
          subcategory: "Primary",
          status: "not-started",
        },
        {
          id: 5,
          name: "Aptitude",
          category: "Academics",
          subcategory: "Adult",
          status: "pending",
          title: "This is title from tutor subject for Aptitude",
          description: "This is a description for Aptitude",
        },
        {
          id: 6,
          name: "Speaking",
          category: "Exam Prep",
          subcategory: "IELTS",
          status: "in-progress",
        },
        {
          id: 7,
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
    },
    slug: "tutor-101",
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getTutorData().then((res: TutorStoreType) => {
      store.initializeStore(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingState />;
  }

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
      <TutorSubjectsPage
        store={store.subject}
        onTakeTest={() => linkTo("Tutor Application/Pages", "Subject Test")()}
      />
    </TutorPageWrapper>
  );
};

// This variable will come from query parameters
const params = "General Mathematics";

export const SubjectTest = () => {
  const [loading, setLoading] = React.useState(false);

  const navigateToQuiz = () => {
    linkTo("Tutor Application/Pages/Quiz", "Quiz")();
  };

  React.useEffect(() => {
    store.subject.setTestSubject(params);
    if (store.subject.listOfTestableSubjects.length === 0) {
      setLoading(true);
      store.subject.fetchQuizQuestions().then((res) => navigateToQuiz());
    }
  }, []);

  if (loading) {
    return <LoadingState text="Fetching questions..." />;
  }

  return (
    <TestPage
      store={store}
      navigateToQuiz={navigateToQuiz}
      navigateBack={() => linkTo("Tutor Application/Pages", "Tutor Page")()}
    />
  );
};

export const SubjectCreation = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getTutorData().then((res: TutorStoreType) => {
      store.initializeStore(res);
      store.subject.setCurrentSubjectId(1);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching subject details..." />;
  }

  return <SubjectCreationPage store={store.subject} />;
};

export const Login = () => {
  return <LoginPage />;
};
