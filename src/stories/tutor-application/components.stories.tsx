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
import { SAMPLE_QUIZ_DATA } from "@tuteria/shared-lib/src/data/sample-quiz-data";
import {
  EXAM_PREP_PREFERENCES,
  SAMPLE_AUDIO_QUESTION,
  SAMPLE_IMAGE_QUESTION,
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import {
  sampleTutorInfo,
  SAMPLE_JOB_LIST_DATA,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_job_data";
import {
  buildProfileInfo,
  initializeStore,
  SubjectStore,
  TutorJobListStore,
  TutorSubject,
} from "@tuteria/shared-lib/src/stores";
import { TutorPricingStore } from "@tuteria/shared-lib/src/stores/pricing";
import { SUBJECT_EDIT_STEPS } from "@tuteria/shared-lib/src/stores/subject";
import LoginModal from "@tuteria/shared-lib/src/tutor-application/Login/LoginModal";
import JobList from "@tuteria/shared-lib/src/tutor-revamp/JobList";
import JobSummary from "@tuteria/shared-lib/src/tutor-revamp/JobSummary";
import TutorPricing from "@tuteria/shared-lib/src/tutor-revamp/Pricing";
import QuestionStyle from "@tuteria/shared-lib/src/tutor-revamp/quizzes/Question";
import QuizPage, {
  TuteriaQuizPage,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/Quiz";
import { gradeQuiz } from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quiz-grader";
import QuizStore, {
  IQuizStore,
} from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import ResultsPage from "@tuteria/shared-lib/src/tutor-revamp/Results";
import ScheduleCard from "@tuteria/shared-lib/src/tutor-revamp/Schedule";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import SubjectAdditionPage, {
  SubjectGroupSelection,
} from "@tuteria/shared-lib/src/tutor-revamp/SubjectComponents";
import { SubjectsCardMobile } from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditForm";
import SubjectEditView from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditView";
import TeachingPreference, {
  MultiSelectCustomAccordion,
  SwitchInput,
} from "@tuteria/shared-lib/src/tutor-revamp/TeachingPreference";
import TutorProfile from "@tuteria/shared-lib/src/tutor-revamp/TutorPreview";
import VerificationIdentity from "@tuteria/shared-lib/src/tutor-revamp/VerificationIdentity";
import VideoUploaderComponent from "@tuteria/shared-lib/src/tutor-revamp/VideoUploader";
import React from "react";
import { observer } from "mobx-react-lite";
import { testAdapter } from "./adapter";

export default {
  title: "Tutor Application/Components",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <OverlayRouter>
          <Story />
        </OverlayRouter>
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
const groupStore = SubjectStore.create(
  {},
  { adapter: loadAdapter(testAdapter) }
);
export const SubjectSelectionModal = () => {
  React.useEffect(() => {
    groupStore.initializeTutorSubjects(testAdapter.getSubjectData());
  }, []);

  return (
    <OverlayWrapper>
      <SubjectGroupSelection store={groupStore} />
    </OverlayWrapper>
  );
};

export const SubjectAddition = () => {
  return (
    <OverlayWrapper>
      <SubjectAdditionPage onSubmit={() => {}} store={store.subject} />;
    </OverlayWrapper>
  );
};

export const SubjectTable = () => {
  return (
    <OverlayWrapper>
      <TutorSubjectsPage onTakeTest={() => {}} store={store.subject} />;
    </OverlayWrapper>
  );
};

export const EmptySubjectTable = () => {
  return (
    <OverlayWrapper>
      <Box w="1000px" mx="auto">
        <TutorSubjectsPage onTakeTest={() => {}} store={store.subject} />
      </Box>
    </OverlayWrapper>
  );
};

export const SubjectCardView = () => {
  return (
    <OverlayWrapper>
      <SubjectsCardMobile
        currentSubjects={store.subject.tutorSubjects}
        store={store.subject}
      />
    </OverlayWrapper>
  );
};
export const Verification = () => {
  return (
    <OverlayWrapper>
      <VerificationIdentity store={store.identity} />
    </OverlayWrapper>
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

const subjectInfo = SAMPLE_TUTERIA_SUBJECTS[0];
const subjectId = 712345;

const adapter = loadAdapter(testAdapter);
const navigateToSubject = () => {
  linkTo("Tutor Application/Pages", "Tutor Page")();
};

export const ReviewTestPage = () => {
  const [canTakeQuiz, setTakeQuiz] = React.useState(true);
  const [inst, setInst] = React.useState(null);

  async function initialize(setLoading) {
    try {
      let result = await testAdapter.initializeApplication(adapter, {
        regions: allRegions,
        countries: allCountries,
        tuteriaSubjects: testAdapter.getTuteriaSubjects(),
      });
      store.initializeTutorData({
        ...result,
        subjectData: {
          ...result.subjectData,
          tutorSubjects: SAMPLE_TUTOR_SUBJECTS,
        },
      });
      store.subject.setCurrentSubjectId(subjectId);
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
        isReview={true}
      />
    </LoadingStateWrapper>
  );
};

let pk = 209601;
const subjectStore = TutorSubject.create(
  {},
  {
    adapter: loadAdapter(testAdapter),
    buildPreferences: testAdapter.buildPreferences,
  }
);
const TUTORDATA = {
  education: [
    {
      school: "University of Lagos",
      country: "Nigeria",
      specialty: "Human resources",
      course: "Systems Engineering",
      grade: "First-Class",
      degree: "B.Sc",
      startYear: "2007",
      endYear: "2013",
    },
  ],
  workHistory: [
    {
      company: "Tuteria Limited",
      role: "Manager",
      isTeachingRole: true,
      startYear: "2012",
      endYear: "2015",
      isCurrent: false,
      showOnProfile: true,
    },
  ],
};

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
        store.subject.setCurrentSubjectId(subjectStore.id);
        setLoading(false);
      }
    } catch (error) {
      throw error;
    }
  }

  let pricingSuggestion = {
    minimum: 2000,
    maximum: 6000,
    recommended: 4000,
  };

  return (
    <LoadingStateWrapper
      text="Fetching subject details..."
      initialize={initialize}
    >
      <SubjectEditView
        type="hide"
        educationAndWorkHistoryData={TUTORDATA}
        subjectStore={store.subject}
        store={subjectStore}
        getPriceSuggestion={() => pricingSuggestion}
      >
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

const tutorData = {
  firstName: "Tolulope",
  photo:
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
  level: "premium",
  isNewTutor: true,
  lessonsTaught: 0,
  subjects: [
    "English Language",
    "Mathematics",
    "Physics",
    "IELTS",
    "Spoken English",
    "Literature",
  ],
  availability: {
    Monday: ["Morning", "Late afternoon"],
    Wednesday: ["Evening", "Early evening"],
  },
};

const pricingStore = TutorPricingStore.create(
  {
    _subjects: tutorData.subjects.map((o) => ({ name: o })),
  },
  {
    adapter: {
      savePricingInfo: async (data, availability) => {
        console.log({ pricingInfo: data, availability });
        return await new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 500);
        });
      },
    },
  }
);

export const Pricing = () => {
  return <TutorPricing {...tutorData} store={pricingStore} />;
};

export const AcademicPreference = () => {
  let preferences = testAdapter.buildPreferences({
    name: "Phonics",
    category: "Academics",
  });

  return (
    <TeachingPreference
      uploadStore={store.identity.uploadStore}
      fields={preferences}
      onSubmit={(values) => console.log(values)}
    />
  );
};
export const TestPrepPreference = () => {
  let preferences = testAdapter.buildPreferences({
    name: "IELTS",
    category: "Test Prep",
  });
  return (
    <TeachingPreference
      uploadStore={store.identity.uploadStore}
      fields={preferences}
      onSubmit={(values) => console.log(values)}
    />
  );
};
export const LanguagePreference = () => {
  let preferences = testAdapter.buildPreferences({
    name: "IELTS",
    category: "Languages",
  });
  return (
    <TeachingPreference
      uploadStore={store.identity.uploadStore}
      fields={preferences}
      onSubmit={(values) => console.log(values)}
    />
  );
};

export const MusicPreference = () => {
  let preferences = testAdapter.buildPreferences({
    name: "IELTS",
    category: "Music",
  });
  return (
    <TeachingPreference
      uploadStore={store.identity.uploadStore}
      fields={preferences}
      onSubmit={(values) => console.log(values)}
    />
  );
};

export const SwitchInputStory = () => {
  let subject = "IELTS";
  let preferences = {
    heading: "Test Results",
    subHeading: "Have you taken the test?",
    id: "test_results",
    options: EXAM_PREP_PREFERENCES.modules[subject],
    type: "radio",
    depends: "modules",
    dependType: "input",
  };

  return (
    <Box w="720px" mx="auto">
      <SwitchInput
        onChange={(vals) => console.log(vals)}
        formField={preferences}
        onSubmit={(values) => console.log(values)}
      />
    </Box>
  );
};
export const MultiSelectAccordion = () => {
  let examsByClass = {
    "Junior Secondary": [
      "JSSCE / BECE",
      "Cambridge Checkpoint",
      "13+ Entrance Exam",
    ],
    "Senior Secondary": [
      "WAEC / JAMB / NECO / JUPEB",
      "IGCSE - Cambridge A/Levels",
      "SAT / PSAT - Reasoning Test",
      "ACT - College Test",
      "SAT II - Subject Tests",
      "Edexcel - International A/Levels",
      "IB - International Baccalaureate",
      "AP - Advanced Placement Exam",
    ],
    "Upper Primary": [
      "Entrance Into Top Schools",
      "Common Entrance Exam",
      "11+ Entrance Exam",
      "Cambridge Primary Exam",
    ],
  };
  let defaultValues = {
    "Junior Secondary": ["JSSCE / BECE"],
    "Senior Secondary": [
      "IB - International Baccalaureate",
      "AP - Advanced Placement Exam",
    ],
    "Upper Primary": ["Entrance Into Top Schools"],
  };

  return (
    <MultiSelectCustomAccordion
      onChange={(vals) => console.log(vals)}
      examsObject={examsByClass}
      defaultValues={defaultValues}
    />
  );
};

export const ImageOptions = () => {
  return (
    <QuestionStyle
      direction="column"
      is_horizontal={SAMPLE_IMAGE_QUESTION.options_display === "horizontal"}
      question_type={SAMPLE_IMAGE_QUESTION?.question_type}
      questionNo={1}
      onAnswerClick={() => {}}
      isSelected={{}}
      lastQuestion={0}
      answers={SAMPLE_IMAGE_QUESTION.answers}
      question={SAMPLE_IMAGE_QUESTION.content}
      image={SAMPLE_IMAGE_QUESTION.figure}
    />
  );
};

export const AudioQuestion = () => {
  return (
    <QuestionStyle
      direction="column"
      is_horizontal={SAMPLE_AUDIO_QUESTION.options_display === "horizontal"}
      question_type={SAMPLE_AUDIO_QUESTION?.question_type}
      questionNo={1}
      onAnswerClick={() => {}}
      isSelected={{}}
      lastQuestion={0}
      answers={SAMPLE_AUDIO_QUESTION.answers}
      question={SAMPLE_AUDIO_QUESTION.content}
      image={SAMPLE_AUDIO_QUESTION.figure}
    />
  );
};

const jobListStore = TutorJobListStore.create({}, {});

const JobListStory = observer(
  ({ jobListStore, booking_key = "bookings", displayFilter = true }: any) => {
    React.useEffect(() => {
      let dataset = SAMPLE_JOB_LIST_DATA;
      if (booking_key === "requests") {
        if (!displayFilter) {
          dataset = [SAMPLE_JOB_LIST_DATA[0]];
        }
      }
      jobListStore.bulkMapToStore(dataset);
    }, []);

    return (
      <OverlayRouter>
        <Box>
          <JobList
            agent={undefined}
            host=""
            store={jobListStore}
            bookings={jobListStore[booking_key]}
            displayFilter={displayFilter}
            tutorInfo={sampleTutorInfo}
            onNavigate={() =>
              linkTo("Tutor Application/Components", "Job No Filter Page")()
            }
          />
        </Box>
      </OverlayRouter>
    );
  }
);

export const JobListPage = () => {
  return <JobListStory jobListStore={jobListStore} />;
};

export const JobListPage2 = () => {
  return <JobListStory booking_type="requests" jobListStore={jobListStore} />;
};

export const JobNoFilterPage = () => {
  return (
    <JobListStory
      jobListStore={jobListStore}
      displayFilter={false}
      booking_key="requests"
    />
  );
};

export const JobSummaryStory = () => {
  return (
    <Box>
      <JobSummary />
    </Box>
  );
};
