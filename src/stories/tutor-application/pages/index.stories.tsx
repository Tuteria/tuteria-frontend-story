import { Box } from "@chakra-ui/layout";
import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import { SAMPLE_TUTERIA_SUBJECTS } from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import storage from "@tuteria/shared-lib/src/storage";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import QuizSelectionView from "@tuteria/shared-lib/src/tutor-revamp/QuizSelectionView";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/QuizPage";
import QuizStore, {
  IQuizStore,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import { SAMPLE_QUIZ_DATA } from "@tuteria/shared-lib/src/data/sample-quiz-data";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import TutorPageComponent from "../components/TutorPageComponent";
import ResultsPage from "@tuteria/shared-lib/src/tutor-revamp/Results";
import { gradeQuiz } from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quiz-grader";

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

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

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
    if (store.currentEditableForm === "subject-selection") {
      await store.fetchTutorSubjects();
    }
    setLoading(false);
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
      onTakeTest={() => {
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

let pk = 209528;
export const SubjectCreation = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    store.fetchTutorSubjects().then((res) => {
      store.subject.setCurrentSubjectId(pk);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching subject details..." />;
  }

  return <SubjectCreationPage store={store.subject} />;
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
  if (!loaded) {
    return <LoadingState text="Loading quiz..." />;
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
      quizStore.quiz.questions.length
    );
    let result = await quizStore.handleSubmission(gradedResult);
    quizStore.setQuizResults(gradedResult);
    setCompleted(true);
    return result;
  }
  return (
    <Box>
      {completed ? (
        <ResultsPage
          subject={name}
          quizResults={quizStore.quizResults}
          navigate={redirect}
        />
      ) : (
        <QuizPage
          completed={completed}
          onQuizSubmit={onQuizSubmit}
          index={0}
          store={quizStore}
        />
      )}
    </Box>
  );
};
