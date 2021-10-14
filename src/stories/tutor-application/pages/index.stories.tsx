import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { SAMPLE_QUIZ_DATA } from "@tuteria/shared-lib/src/data/sample-quiz-data";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import { SAMPLE_TUTERIA_SUBJECTS } from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import storage from "@tuteria/shared-lib/src/storage";
import { initializeStore, TutorSubject } from "@tuteria/shared-lib/src/stores";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import QuizSelectionView from "@tuteria/shared-lib/src/tutor-revamp/QuizSelectionView";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/Quiz";
import { gradeQuiz } from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quiz-grader";
import QuizStore, {
  IQuizStore,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import SubjectEditView from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditView";
import VerificationPage from "@tuteria/shared-lib/src/tutor-revamp/VerificationPage";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import TutorPageComponent from "../components/TutorPageComponent";
import CompletedApplicationPage from "@tuteria/shared-lib/src/tutor-revamp/CompletedApplicationPage";

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
const adapter = loadAdapter(testAdapter);
const store = initializeStore(testAdapter);

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);
  async function initialize() {
    storage.set(adapter.regionKey, allRegions);
    storage.set(adapter.countryKey, allCountries);
    storage.set(adapter.supportedCountriesKey, supportedCountries);
    storage.set(adapter.tuteriaSubjectsKey, testAdapter.getTuteriaSubjects());
    store.initializeTutorData(
      allRegions,
      allCountries,
      supportedCountries,
      testAdapter.loadExistingTutorInfo()
    );
    await store.subject.fetchTutorSubjects();
    if (!store.completed) {
      if (store.currentEditableForm === "payment-info") {
        await store.fetchBanksInfo();
      }
      setLoading(false);
    } else {
      linkTo("Tutor Application/Pages", "CompletedPage")();
    }
  }

  React.useEffect(() => {
    initialize();
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <TutorPageComponent
      store={store}
      onEditSubject={(subject) => {
        // linkTo("")
      }}
      onTakeTest={(subject) => {
        console.log({ subject });
        linkTo("Tutor Application/Pages", "Subject Test")();
      }}
    />
  );
};

const navigateToSubject = () => {
  linkTo("Tutor Application/Pages", "Tutor Page")();
};

// This variable will come from query parameters

const subjectInfo = SAMPLE_TUTERIA_SUBJECTS[0];

export const SubjectTest = () => {
  const [loading, setLoading] = React.useState(false);
  const [testableSubjects, setTestableSubjects] = React.useState([]);

  const onNextClick = (selectedQuizzesToTake) => {
    console.log(selectedQuizzesToTake);
    console.log("Generating Quiz");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    adapter
      .getTutorSubjects()
      .then(() => {
        // this is supposed to filter the user subjects from the tuteria subjects
        let result = subjectInfo.subjects.map((o) => o.name);
        setTestableSubjects(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching Subjects..." />;
  }
  return (
    <QuizSelectionView
      canTakeQuiz={true}
      generateQuiz={onNextClick}
      testSubject={subjectInfo.name}
      testableSubjects={testableSubjects}
      toSubjectPage={navigateToSubject}
    />
  );
};

let pk = 209601;
const subjectStore = TutorSubject.create(
  {},
  { adapter: loadAdapter(testAdapter) }
);
export const SubjectCreation = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    testAdapter.getTutorSubjects({ pk }).then(({ tutorSubjects }) => {
      setLoading(false);
      subjectStore.initialize(tutorSubjects[0]);
    });
    // store.subject.fetchTutorSubjects().then((res) => {
    //   store.subject.setCurrentSubjectId(pk);
    //   setLoading(false);
    // });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching subject details..." />;
  }

  return <SubjectEditView store={subjectStore} />;
};

export const Login = () => {
  return (
    <LoginPage
      onResendOTP={() => {}}
      onOTPSubmit={() => {}}
      onEmailSubmit={() => {}}
      onNavigate={() => {}}
    />
  );
};

export const LandingPage = () => {
  return (
    <LandingView
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};
export const Verification = () => {
  return <VerificationPage />;
};

const quizStore: IQuizStore = QuizStore.create(
  {},
  {
    adapter: loadAdapter(testAdapter),
  }
);

// This variable will come from query parameters
const name = "General Mathematics";
const params = "general-mathematics";
const query = "jss-math-quiz,checkpoint-math-quiz";

const subjects = [
  { name: "JSS Math", pass_mark: 70 },
  { name: "Checkpoint Math", pass_mark: 70 },
];

const quiz = {
  ...SAMPLE_QUIZ_DATA,
  questions: SAMPLE_QUIZ_DATA.questions.slice(0, 5),
};

export const CompletedPage = () => {
  return (
    <CompletedApplicationPage
      firstName="Chidi"
      isPremium={true}
      photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
    />
  );
};

export const Quiz = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    const subjectsToTake = query;
    const newSubjectInfo = {
      ...subjectInfo,
      subjects: subjectInfo.subjects.filter((o) =>
        subjectsToTake.includes(o.url)
      ),
    };
    testAdapter.buildQuizData(newSubjectInfo, [quiz]).then((_quiz) => {
      quizStore.initializeQuiz(_quiz, subjects);
      setLoaded(true);
    });
  }, []);

  function redirect() {
    if (quizStore.quizResults.passedQuiz) {
      linkTo("Tutor Application/Pages", "Subject Creation")();
    } else {
      linkTo("Tutor Application/Pages", "Tutor Page")();
    }
  }

  async function onQuizSubmit() {
    let gradedResult = gradeQuiz(
      [
        {
          subject: quiz.title,
          passmark: quiz.pass_mark,
          questions: quiz.questions,
        },
      ],
      quizStore.serverAnswerFormat,
      quizStore.quiz.questions.length,
      quizStore.subjectsToTake
    );
    let result = await quizStore.handleSubmission(gradedResult);
    quizStore.setQuizResults(gradedResult);
    setCompleted(true);
    return result;
  }

  if (!loaded) {
    return <LoadingState text="Loading quiz..." />;
  }

  return (
    <QuizPage
      store={quizStore}
      quizName={name}
      hasCompletedQuiz={completed}
      onNavigate={redirect}
      onSubmitQuiz={onQuizSubmit}
    />
  );
};
