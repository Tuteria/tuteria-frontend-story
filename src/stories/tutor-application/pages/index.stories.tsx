import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingStateWrapper } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { SAMPLE_QUIZ_DATA } from "@tuteria/shared-lib/src/data/sample-quiz-data";
import { SAMPLE_TUTERIA_SUBJECTS } from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import {
  buildProfileInfo,
  initializeStore,
  TutorSubject,
} from "@tuteria/shared-lib/src/stores";
import { APPLICATION_STEPS } from "@tuteria/shared-lib/src/stores/rootStore";
import { SUBJECT_EDIT_STEPS } from "@tuteria/shared-lib/src/stores/subject";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import CompletedApplicationPage from "@tuteria/shared-lib/src/tutor-revamp/CompletedApplicationPage";
import QuizSelectionView from "@tuteria/shared-lib/src/tutor-revamp/QuizSelectionView";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/Quiz";
import { gradeQuiz } from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quiz-grader";
import QuizStore, {
  IQuizStore,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import SubjectEditView from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditView";
import TutorProfile from "@tuteria/shared-lib/src/tutor-revamp/TutorPreview";
import VerificationPage from "@tuteria/shared-lib/src/tutor-revamp/VerificationPage";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import TutorPageComponent from "../components/TutorPageComponent";

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

function navigate(path: string) {
  let options = {
    "/verify": "Verification",
    "/complete": "Completed Page",
    "/skills": "EditSubjectPage",
    "/quiz/select-skill": "TestSelectionPage",
  };
  linkTo("Tutor Application/Pages", options["path"])();
}
export const TutorPage = () => {
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: allRegions,
      countries: allCountries,
      tuteriaSubjects: testAdapter.getTuteriaSubjects(),
    });
    await store.initializeTutorData(
      result.staticData,
      result.tutorInfo,
      result.subjectData
    );
    if (store.currentStep === APPLICATION_STEPS.APPLY) {
      setLoading(false);
    } else {
      let options = {
        [APPLICATION_STEPS.COMPLETE]: "/complete",
        [APPLICATION_STEPS.VERIFY]: "/verify",
      };
      navigate(options[store.currentStep]);
    }
    await store.fetchBanksInfo();
  }

  return (
    <LoadingStateWrapper initialize={initialize}>
      <TutorPageComponent
        store={store}
        onEditSubject={(subject) => {
          navigate("/skills");
        }}
        onTakeTest={(subject) => {
          console.log({ subject });
          navigate("/quiz/select-skill");
        }}
        onNextStep={() => {
          navigate("/verify");
        }}
      />
    </LoadingStateWrapper>
  );
};

const navigateToSubject = () => {
  linkTo("Tutor Application/Pages", "Tutor Page")();
};

// This variable will come from query parameters

const subjectInfo = SAMPLE_TUTERIA_SUBJECTS[0];

export const TestSelectionPage = () => {
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

  async function initialize(setLoading) {
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
  }

  return (
    <LoadingStateWrapper initialize={initialize} text="Fetching Subjects...">
      <QuizSelectionView
        canTakeQuiz={true}
        generateQuiz={onNextClick}
        testSubject={subjectInfo.name}
        testableSubjects={testableSubjects}
        toSubjectPage={navigateToSubject}
      />
    </LoadingStateWrapper>
  );
};

let pk = 209601;
const subjectStore = TutorSubject.create(
  {},
  { adapter: loadAdapter(testAdapter) }
);
export const EditSubjectPage = () => {
  async function initialize(setLoading) {
    testAdapter.getTutorSubjects({ pk }).then(({ tutorSubjects }) => {
      setLoading(false);
      subjectStore.initialize(tutorSubjects[0]);
      console.log(JSON.parse(JSON.stringify(subjectStore)));
    });
  }

  return (
    <LoadingStateWrapper
      text="Fetching subject details..."
      initialize={initialize}
    >
      <SubjectEditView store={subjectStore}>
        {(currentForm) => {
          if (currentForm === SUBJECT_EDIT_STEPS.PREVIEW) {
            return (
              <TutorProfile
                {...buildProfileInfo(
                  store,
                  subjectStore
                )} /*onBackClick={onBackClick}*/
              />
            );
          }
        }}
      </SubjectEditView>
    </LoadingStateWrapper>
  );
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
  async function initialize(setLoading) {
    let result = await testAdapter.initializeApplication(adapter, {
      regions: [],
      countries: [],
      tuteriaSubjects: [],
    });
    await store.initializeTutorData(
      result.staticData,
      { ...result.tutorInfo, currentStep: APPLICATION_STEPS.VERIFY },
      result.subjectData
    );
    if (store.currentStep === APPLICATION_STEPS.VERIFY) {
      setLoading(false);
    } else {
      navigate("/complete");
    }
  }

  return (
    <LoadingStateWrapper
      text="Fetching Tutor details..."
      initialize={initialize}
    >
      <VerificationPage
        store={store}
        onNextStep={async () => {
          await store.submitApplication(true);
          linkTo("Tutor Application/Pages", "Completed Page")();
        }}
      />
    </LoadingStateWrapper>
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
  const [completed, setCompleted] = React.useState(false);

  async function initialize(setLoaded) {
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
  }

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
  return (
    <LoadingStateWrapper text="Loading quiz..." initialize={initialize}>
      <QuizPage
        store={quizStore}
        quizName={name}
        hasCompletedQuiz={completed}
        onNavigate={redirect}
        onSubmitQuiz={onQuizSubmit}
      />
    </LoadingStateWrapper>
  );
};
