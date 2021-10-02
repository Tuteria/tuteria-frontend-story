import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import storage from "@tuteria/shared-lib/src/storage";
import { IRootStore, RootStore } from "@tuteria/shared-lib/src/stores";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import "katex/dist/katex.min.css";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
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
const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const SUPPORTED_COUNTRIES_KEY = "TEST-SUPPORTED-COUNTRIES";
const adapter = {
  regionKey: REGION_KEY,
  countryKey: COUNTRY_KEY,
  supportedCountriesKey: SUPPORTED_COUNTRIES_KEY,
  deleteSubject: (id: string) => {
    console.log({ id });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 3000);
    });
  },
  saveTutorInfo: (key: string, value: any, slug: string, nextStep: string) => {
    console.log({ key, value, slug, nextStep });
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
    // if session storage exists return the tuteria subjects else fetch
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          // tutorSubjects: [],
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
            url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
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

const store: IRootStore = RootStore.create(
  {},
  {
    adapter,
  }
);

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    storage.set(adapter.regionKey, allRegions);
    storage.set(adapter.countryKey, allCountries);
    storage.set(adapter.supportedCountriesKey, supportedCountries);
    store.initializeTutorData(
      allRegions,
      allCountries,
      supportedCountries,
      SAMPLE_TUTOR_DATA
    );
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
  return <LoginPage />;
};
