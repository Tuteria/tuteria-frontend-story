import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import {
  OverlayRouter,
  OverlayWrapper,
} from "@tuteria/shared-lib/src/components/OverlayRouter";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import ResultsPage from "@tuteria/shared-lib/src/tutor-revamp/Results";
import TutorSubjectsPage from "@tuteria/shared-lib/src/tutor-revamp/Subject";
import { SubjectsCardMobile } from "@tuteria/shared-lib/src/tutor-revamp/SubjectEditForm";
import SubjectAdditionPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectComponents";
import { PhotoVerification } from "@tuteria/shared-lib/src/tutor-revamp/PhotoIdentity";
import TutorProfile from "@tuteria/shared-lib/src/tutor-revamp/TutorPreview";
import VideoUploaderComponent from "@tuteria/shared-lib/src/tutor-revamp/VideoUploader";
import VerificationIdentity from "@tuteria/shared-lib/src/tutor-revamp/VerificationIdentity";
import React from "react";
import { Box, CheckboxGroup, Collapse, Switch } from "@chakra-ui/react";
import PasswordSection from "@tuteria/shared-lib/src/tutor-revamp/PasswordSection";
import ScheduleCard from "@tuteria/shared-lib/src/tutor-revamp/Schedule";

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
        id: 209601,
        name: "History",
        title: "This is the best history teacher in the world",
        description:
          "I have taught over 200 tutors with a large following for the following",
        certifications: [
          { name: "BSC", institution: "Cambridge" },
          { name: "BA", institution: "LASU" },
        ],
        tuteriaStatus: 5,
        status: "active",
        teachingStyle: "A practical approach",
        trackRecords: "Taught Buhari's daughter",
        teachingRequirements: ["Calculator", "Log book", "Graph book"],
        preliminaryQuestions: [],
        canTakeTest: false,
      },
    ],
  },
  currentEditableForm: "subject-selection",
  identity: {
    profilePhotoId: "hello/holla",
    profilePhoto:
      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    isIdVerified: false,
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

export const Password = () => {
  return (
    <PasswordSection
      formHeader={"Password Information"}
      label="password-info"
      lockedDescription="Set your password"
      isCollapsed={false}
      onSubmit={(formData: any) => {}}
      store={store.password}
    />
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

let data = {
  userId: "oyeladunt",
  lastName: "Akinniyi",
  firstName: "Oyeladun",
  email: "taiwomary75@gmail.com",
  phone: "2348103317380",
  gender: "female",
  photo: "https://res.cloudinary.com/tuteria/image/upload/ywvhxwk8gg59nsctt1fl",
  level: "premium",
  delivery: ["physical", "online"],
  dateOfBirth: "1989-05-05",
  successScore: 0,
  distance: 9.175375069077472,
  rating: 4.666666666666667,
  ratingCount: 15,
  isIdVerified: true,
  isBackgroundChecked: true,
  videoIntro: null,
  lessonsTaught: 338,
  students: 10,
  isIndemand: false,
  newTutorDiscount: 0,
  isNewTutor: false,
  country: "Nigeria",
  state: "Lagos",
  region: "Ogudu",
  vicinity: "Ogudu",
  specialNeedExpertise: [],
  examsExperience: [
    "Entrance Into Top Schools",
    "Common Entrance Exam",
    "JSSCE / BECE",
  ],
  curriculum: ["Nigerian", "British", "Montessori"],
  classesTaught: [],
  levelsTaught: [
    "Pre-primary",
    "Upper Primary",
    "Junior Secondary",
    "Lower Primary",
  ],
  entranceSchools: [
    "Dansol High School",
    "Berger",
    "The Ambassador Secondary School",
    "Sango",
    "Maryland Comprehensive Secondary School",
  ],
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
      company: "Mare School Alapere, Lagos",
      role: "Subject teacher (Basic Science and Agricultural) science",
      startYear: "2014",
      endYear: "2015",
      isCurrent: false,
      isTeachingRole: true,
      showOnProfile: true,
      isVerified: false,
    },
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
  ],
  certification: [],
  subject: {
    hourlyRate: 3000,
    hourlyDiscount: 0,
    discountForExtraStudents: 88,
    name: "Primary Math",
    shortName: "",
    profileUrl: null,
    isCertified: false,
    headline:
      "Experienced Mathematics instructor with students' needs focus approach",
    description:
      "I am a trained and experienced mathematics instructor with depth of interest in the analysis of procedures of achievement of solutions to mathematical problems. \r\nI have BSc. Ed. in mathematics education from the University of Lagos. I am determined to ensure the active participation of my students in the teaching and learning process in order to enable them to perform excellently in mathematics at every point in time.",
    related: ["Basic Mathematics", "Quantitative Reasoning"],
    skills: [],
    tuteriaName: "Basic Mathematics",
  },
  subjectList: [
    "English Language",
    "Basic Mathematics",
    "Basic Sciences",
    "Elementary English",
    "Verbal Reasoning",
    "Quantitative Reasoning",
    "Chemistry",
    "Literacy & Numeracy",
  ],
  testimonials: [],
  requestPending: 0,
  requestsDeclined: 0,
  totalJobsAssigned: 0,
  totalJobsAccepted: 0,
  requestsNotResponded: 0,
  fetched: false,
  activeBookings: [
    {
      startDate: "2021-05-11",
      endDate: "2021-06-04",
      schedule: ["Friday: 10AM - 12PM", "Tuesday: 10AM - 12PM"],
    },
  ],
  maxDays: 5,
  maxHours: 4,
  maxStudents: 3,
  lastCalendarUpdate: "2021-06-10T06:41:03.825371",
  availability: {
    Monday: [
      "Morning",
      "Late morning",
      "Afternoon",
      "Late afternoon",
      "Morning",
      "Afternoon",
      "Afternoon",
      "Late morning",
      "Late morning",
      "Afternoon",
      "Late morning",
      "Afternoon",
      "Morning",
      "Morning",
    ],
    Tuesday: ["Late morning", "Afternoon", "Late afternoon", "Morning"],
    Wednesday: ["Morning", "Late morning", "Afternoon", "Late afternoon"],
    Thursday: ["Morning", "Late morning", "Afternoon", "Late afternoon"],
    Friday: ["Morning", "Late morning", "Afternoon", "Late afternoon"],
    Saturday: [],
    Sunday: [],
  },
  specialities: ["Education - Math, Technology and Sciences"],
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
  rank: 36.49369687789279,
  experience: 2,
  age: 32,
  eduDegrees: ["B.Ed", "NCE"],
  eduGrades: ["Lower Second Class", "First Class"],
  eduCountries: ["Nigeria"],
  additionalInfo: {
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
    userId: "oyeladunt",
    price: {
      scheduleIsSet: 0,
      lessons: 0,
      amount: 3360.0000000000005,
      extraStudentTuition: 360,
      tuitionPerStudent: 3000,
      students: 2,
      chargePerLesson: 0,
    },
  },
  lessonFee: 3360.0000000000005,
};
let subjectGroup = [
  "Primary Math",
  "Primary English",
  "Literacy & Numeracy",
  "Phonics",
  "Handwriting",
];
export const TutorPreview = () => {
  store.subject.setCurrentSubjectId(209601);
  return (
    <Box h="100vh" overflowX="hidden">
      <TutorProfile
        data={data}
        instance={instance}
        subjectGroup={subjectGroup}
      />
    </Box>
  );
};
