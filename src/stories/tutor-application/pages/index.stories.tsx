import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { IRootStore, RootStore } from "@tuteria/shared-lib/src/stores";
import TutorPageWrapper from "@tuteria/shared-lib/src/tutor-revamp";
import storage from "@tuteria/shared-lib/src/storage";
import { observer } from "mobx-react-lite";
import React, { Suspense } from "react";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import "katex/dist/katex.min.css";
import "react-phone-input-2/lib/style.css";
import { linkTo } from "@storybook/addon-links";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import { scrollToId } from "@tuteria/shared-lib/src/utils/functions";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import { PhotoVerification } from "@tuteria/shared-lib/src/tutor-revamp/PhotoIdentity";

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
const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const adapter = {
  regionKey: REGION_KEY,
  countryKey: COUNTRY_KEY,
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
  async getTutorSubjects() {
    let tutor_data = SAMPLE_TUTOR_SUBJECTS;
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tutorSubjects: tutor_data.map((tx) => {
            return {
              id: tx.pk,
              name: tx.skill.name,
              category: tx.category,
              status: tx.status,
              title: tx.heading || "",
              description: tx.description || "",
              teachingStyle: tx.teachingStyle,
              trackRecords: tx.trackRecords,
            };
          }),
          tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
        });
      }, 1000);
    });
  },
  uploadApiHandler: async (files, progressCallback) => {
    console.log(files); //this is where cloudinary implementation is used.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          files.map((o) => ({
            name: o.name,
            size: o.size?.toString(),
            public_id: "the_public_id",
            url:
              "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
          }))
        );
      }, 2000);
    });
    // return files.map((o) => ({
    //   name: o.name,
    //   size: o.size?.toString(),
    //   public_id: "the_public_id",
    //   url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    // }));
  },
  cloudinaryApiHandler: (files, progressCallback) => {
    let promises = files.map((o) =>
      uploadToCloudinary(o, progressCallback).then((b) => {
        let { original_filename, bytes, secure_url } = b.data;
        let newFile = {
          name: original_filename,
          size: `${Math.round(bytes / 1000)}KB`,
          url: secure_url,
        };
        return newFile;
      })
    );
    return Promise.all(promises);
  },
};

const store = RootStore.create(
  {},
  {
    adapter,
  }
);

// async function getTutorData() {
//   const data = {
//     userIsloggedIn: true,
//     locationInfo: {
//       country: "Nigeria",
//       regions: allRegions,
//       countries: allCountries,
//       state: "Lagos",
//       region: "Gbagada",
//       vicinity: "Charley boy Busstop",
//       address: "10, Lanre awolokun street",
//     },
//     personalInfo: {
//       firstName: "Abiola",
//       lastName: "Oyeniyi",
//       email: "james@example.com",
//       gender: "female",
//       nationality: "Nigeria",
//       dateOfBirth: "1998-10-12",
//       phone: "2347035209922",
//       whatsappNo: "2348152957065",
//       state: "Lagos",
//       vicinity: "Charley boy Busstop",
//       region: "Gbagada",
//       address: "Irabor Street Koto",
//       primaryLanguage: "English",
//       medium: "Facebook",
//     },
//     educationWorkHistory: {
//       educations: [
//         {
//           school: "Ikeja Grammar school",
//           country: "Nigeria",
//           course: "Chemistry",
//           degree: "MBBS",
//           speciality: "Mathematics",
//           startYear: "2006",
//           endYear: "2020",
//           grade: "First Class",
//         },
//         {
//           school: "University of Lagos",
//           country: "Nigeria",
//           course: "Organic Chemistry",
//           speciality: "Mathematics",
//           degree: "MBBS",
//           startYear: "2006",
//           endYear: "2020",
//           grade: "First Class",
//         },
//       ],
//       workHistories: [
//         {
//           company: "Tuteria Limited",
//           role: "CEO",
//           isTeachingRole: false,
//           startYear: "2015",
//           endYear: "2020",
//           isCurrent: true,
//           showOnProfile: true,
//         },
//       ],
//     },
//     subject: {
//       tutorSubjects: [
//         {
//           id: 1,
//           name: "General Mathematics",
//           category: "Academics",
//           subcategory: "Secondary",
//           status: "not-started",
//           title: "This is title from tutor subject for general mathematics",
//           description: "This is a description for general mathematics",
//           teachingStyle: "Terrorize my students",
//           trackRecords: "Cries everywhere",
//         },
//         {
//           id: 2,
//           name: "English",
//           category: "Academics",
//           subcategory: "Secondary",
//           status: "not-started",
//         },
//         {
//           id: 3,
//           name: "French",
//           category: "Academics",
//           subcategory: "Secondary",
//           status: "denied",
//         },
//         {
//           id: 4,
//           name: "Spanish",
//           category: "Academics",
//           subcategory: "Secondary",
//           status: "denied",
//         },
//         {
//           id: 5,
//           name: "Recognition",
//           category: "Academics",
//           subcategory: "Primary",
//           status: "not-started",
//         },
//         {
//           id: 5,
//           name: "Aptitude",
//           category: "Academics",
//           subcategory: "Adult",
//           status: "pending",
//           title: "This is title from tutor subject for Aptitude",
//           description: "This is a description for Aptitude",
//         },
//         {
//           id: 6,
//           name: "Speaking",
//           category: "Exam Prep",
//           subcategory: "IELTS",
//           status: "in-progress",
//         },
//         {
//           id: 7,
//           name: "Listening",
//           category: "Exam Prep",
//           subcategory: "IELTS",
//           status: "active",
//         },
//       ],
//     },
//     identity: {
//       profilePhotoId: "hello/holla",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
//     },
//     slug: "tutor-101",
//   };
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 1000);
//   });
// }

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

const TutorPageComponent: React.FC<{
  store: IRootStore;
  onTakeTest: any;
}> = observer(({ store, onTakeTest, ...rest }) => {
  const percentObj = {
    "child-details": 20,
    "teacher-selection": 40,
    "lesson-schedule": 60,
    "lesson-location": 80,
    "contact-information": 100,
  };

  const stepsArray: any = [
    { key: "personal-info", name: "Personal Info", completed: false },
    { key: "location-info", name: "Location Info", completed: false },
    {
      key: "education-history",
      name: "Education History",
      completed: false,
    },
    { key: "work-history", name: "Work History", completed: false },
    { key: "subject-addition", name: "Subject Selection", completed: false },
  ];
  const [formIndex, setFormIndex] = React.useState(1);
  // const { isOpen, onOpen, onClose } = useOverlayDisclosure("/modal");
  const [loadingText, setLoadingText] = React.useState("");
  const [steps, setSteps] = React.useState<any[]>(stepsArray);
  const [activeStep, setActiveStep] = React.useState("personal-info");

  React.useEffect(() => {}, []);

  const handleFormSubmit = (id, presentStep) => {
    setFormIndex((index) => index + 1);
    setActiveStep(id);
    setSteps(
      [...steps].map((object) => {
        if (object.key === presentStep) {
          return {
            ...object,
            completed: true,
          };
        } else return object;
      })
    );
    scrollToId(id);
  };

  return (
    <TutorPageWrapper
      formIndex={formIndex}
      steps={steps}
      activeStep={activeStep}
      store={store}
    >
      <PersonalInfo
        store={store}
        currentEditableForm={activeStep}
        onSubmit={(formData: any) => {
          store.personalInfo.onFormSubmit(formData);
          store.onFormSubmit(formData, "personal-info").then(() => {
            handleFormSubmit("location-info", "personal-info");
          });
        }}
      />

      <LocationInfo
        store={store}
        onSubmit={(formData: any) => {
          store.locationInfo.updateFields(formData);
          store.onFormSubmit(formData, "location-info").then(() => {
            handleFormSubmit("education-history", "location-info");
          });
        }}
      />

      <EducationHistory
        store={store}
        onSubmit={(formData: any) => {
          store.onFormSubmit(formData, "education-history").then(() => {
            handleFormSubmit("work-history", "education-history");
          });
        }}
      />

      <WorkHistory
        store={store}
        onSubmit={(formData: any) => {
          store.onFormSubmit(formData, "work-history").then(() => {
            handleFormSubmit("subject-addition", "work-history");
          });
        }}
      />
      <TutorSubjectsPage
        store={store.subject}
        onTakeTest={onTakeTest}
        onSubmit={(formData: any) => {
          store.onFormSubmit(formData, "subject-addition").then(() => {
            // handleFormSubmit("subject-selection", "work-history");
          });
        }}
      />
      <PhotoVerification store={store.identity} />
    </TutorPageWrapper>
  );
});

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    storage.set(adapter.regionKey, allRegions);
    storage.set(adapter.countryKey, allCountries);
    store.initializeTutorData(allRegions, allCountries, SAMPLE_TUTOR_DATA);
    store.fetchTutorSubjects();
    setLoading(false);
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
