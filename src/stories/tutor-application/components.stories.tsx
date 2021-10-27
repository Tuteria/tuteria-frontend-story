import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingStateWrapper } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import {
  OverlayRouter,
  OverlayWrapper,
} from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import { SAMPLE_TUTERIA_SUBJECTS } from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import {
  buildProfileInfo,
  initializeStore,
  TutorSubject,
} from "@tuteria/shared-lib/src/stores";
import { SUBJECT_EDIT_STEPS } from "@tuteria/shared-lib/src/stores/subject";
import QuizPage, {
  TuteriaQuizPage,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/Quiz";
import ResultsPage from "@tuteria/shared-lib/src/tutor-revamp/Results";
import ScheduleCard from "@tuteria/shared-lib/src/tutor-revamp/Schedule";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import SubjectAdditionPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectComponents";
import { SubjectsCardMobile } from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditForm";
import SubjectEditView from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditView";
import TutorProfile from "@tuteria/shared-lib/src/tutor-revamp/TutorPreview";
import VerificationIdentity from "@tuteria/shared-lib/src/tutor-revamp/VerificationIdentity";
import VideoUploaderComponent from "@tuteria/shared-lib/src/tutor-revamp/VideoUploader";
import LoginModal from "@tuteria/shared-lib/src/tutor-application/Login/LoginModal";
import { gradeQuiz } from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quiz-grader";
import { SAMPLE_QUIZ_DATA } from "@tuteria/shared-lib/src/data/sample-quiz-data";
import QuizStore, {
  IQuizStore,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import React from "react";
import { testAdapter } from "./adapter";

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
          <TutorSubjectsPage onTakeTest={() => {}} store={store.subject} />
        </Box>
      </OverlayWrapper>
    </OverlayRouter>
  );
};

export const SubjectCardView = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <SubjectsCardMobile
          currentSubjects={store.subject.tutorSubjects}
          store={store.subject}
        />
      </OverlayWrapper>
    </OverlayRouter>
  );
};
export const Verification = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <VerificationIdentity store={store.identity} />
      </OverlayWrapper>
    </OverlayRouter>
  );
};

export const VideoUploader = () => {
  return (
    <VideoUploaderComponent
      onSubmit={async (url) => {
        alert(url);
      }}
    />
  );
};

export const Schedule = () => {
  return (
    <OverlayRouter>
      <OverlayWrapper>
        <Box px="200px">
          <ScheduleCard
            handleChange={() => {}}
            formHeader={"Tutor Schedule"}
            label="schedule-info"
            lockedDescription="select your teaching schedule"
            isCollapsed={false}
            store={store.schedule}
            onSubmit={(formData: any) => {}}
          />
        </Box>
      </OverlayWrapper>
    </OverlayRouter>
  );
};

let instance = {
  otherDetails: {
    badges: ["Entrance Prep"],
    clientCountry: "Nigeria",
    isSpecial: false,
    earlyChildArray: ["Montessori"],
    isMonthly: true,
    relevantSubjects: ["Basic Mathematics", "Quantitative Reasoning"],
    isCertificate: false,
    cambridgePrep: [],
    placementExams: [],
    certificateExams: ["JSSCE"],
    isPlacement: false,
    isEarlyChild: false,
    isEntrance: true,
    isCambridge: false,
    isPremium: true,
    specialNeedExpertise: [],
    tutorSummary: [
      {
        title: "Entrance exam expert",
        icon: "exam",
        description:
          "Oyeladun has helped students get into Dansol High School, Berger, The Ambassador Secondary School, Sango and Maryland Comprehensive Secondary School",
      },
      {
        title: "Matching curriculum",
        icon: "homework",
        description:
          "Teaches with the Nigerian, British and Montessori curriculum.",
      },
      {
        title: "Oyeladun is a Premium tutor",
        icon: "premium",
        description:
          "Premium tutors are exceptional, highly-rated tutors who have consistently delivered the best results and learning experience with clients.",
      },
    ],
    classGroup: [],
    education: [
      {
        school: "University of Lagos",
        country: "Nigeria",
        course: "Mathematics Education",
        grade: "Lower Second Class",
        degree: "B.Ed",
        startYear: "2016",
        endYear: "2019",
        isVerified: false,
      },
      {
        school: "Federal College of Education (Technical), Akoka",
        country: "Nigeria",
        course: "Integrated Science/Chemistry",
        grade: "First Class",
        degree: "NCE",
        startYear: "2011",
        endYear: "2014",
        isVerified: false,
      },
    ],
    workHistory: [
      {
        company: "Akoka junior high school, Akoka, Yaba, Lagos",
        role: "Mathematics teacher (JS2) Student teacher",
        startYear: "2017",
        endYear: "2017",
        isCurrent: false,
        isTeachingRole: true,
        showOnProfile: true,
        isVerified: false,
      },
      {
        company: "Mare School Alapere, Lagos",
        role: "Subject teacher (Basic Science and Agricultural) science",
        startYear: "2014",
        endYear: "2015",
        isCurrent: false,
        isTeachingRole: true,
        showOnProfile: true,
        isVerified: false,
      },
    ],
  },
};

const subjectInfo = SAMPLE_TUTERIA_SUBJECTS[2];

const adapter = loadAdapter(testAdapter);
const navigateToSubject = () => {
  linkTo("Tutor Application/Pages", "Tutor Page")();
};

export const TestSelectionPage = () => {
  const [canTakeQuiz, setTakeQuiz] = React.useState(true);
  const [inst, setInst] = React.useState(null);

  async function initialize(setLoading) {
    try {
      let result = await testAdapter.initializeApplication(adapter, {
        regions: allRegions,
        countries: allCountries,
        tuteriaSubjects: testAdapter.getTuteriaSubjects(),
      });
      store.initializeTutorData(result);
      store.subject.setCurrentSubjectId(209699);
      setInst(store.subject.tuteriaSubjectForCurrentSubject);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }
  let _subjectInfo = store.subject.tuteriaSubjectForCurrentSubject;
  console.log({ _subjectInfo });
  return (
    <LoadingStateWrapper initialize={initialize} text="Fetching Subjects...">
      <TuteriaQuizPage
        store={store.subject.currentSubject}
        canTakeQuiz={canTakeQuiz}
        navigateToSubject={navigateToSubject}
        toSubjectEditPage={() => navigate("/skills")}
        subjectInfo={inst}
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
    try {
      let { foundSubject, response: result } =
        await testAdapter.initializeSubject(
          adapter,
          { ...subjectInfo, id: pk },
          "id"
        );

      if (foundSubject) {
        store.initializeTutorData(result);
        subjectStore.initialize(foundSubject);
        setLoading(false);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <LoadingStateWrapper
      text="Fetching subject details..."
      initialize={initialize}
    >
      <SubjectEditView type="hide" store={subjectStore}>
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

const quizStore: IQuizStore = QuizStore.create(
  {},
  {
    adapter: loadAdapter(testAdapter),
  }
);

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
    let _quiz = await testAdapter.buildQuizData(newSubjectInfo, [quiz]);
    quizStore.initializeQuiz(_quiz, subjects);
    setLoaded(false);
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

export const LoginWithModal = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        email=""
        onLogin={testAdapter.authenticateUser}
      />
    </>
  );
};
