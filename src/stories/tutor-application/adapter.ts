import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";

import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import { AdapterType } from "@tuteria/shared-lib/src/stores/types";

const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const SUPPORTED_COUNTRIES_KEY = "TEST-SUPPORTED-COUNTRIES";

type PersonalInfoType = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  subscription: boolean;
  nationality: string;
  dateOfBirth: string;
  phone: string;
  whatsappNumber: string;
  primaryLanguage: string;
  medium: string;
  alternateNo: string;
};

type LocationInfoType = {
  exemptedAreas: any[];
  lessonType: any[];
  state: string;
  vicinity: string;
  region: string;
  address: string;
  country: string;
};
type EducationHistoryType = {
  educations: Array<{
    school: string;
    country: string;
    course: string;
    degree: string;
    startYear: string;
    endYear: string;
    grade: string;
  }>;
  workHistories: Array<{
    company: string;
    role: string;
    isTeachingRole: boolean;
    startYear: string;
    endYear: string;
    isCurrent: boolean;
    showOnProfile: boolean;
  }>;
};
type PasswordType = {};
type SubjectSelectionType = {};
type VerificationInfoType = {};
type SubmissionType = {
  "personal-info": PersonalInfoType;
  "location-info": LocationInfoType;
  "education-history": EducationHistoryType;
  "work-history": EducationHistoryType;
  "password-info": PasswordType;
  "subject-selection": SubjectSelectionType;
  verification: VerificationInfoType;
};
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
  cleanTutorData(existingData, key, data: SubmissionType) {
    let result: any = {};
    let value = data[key];
    if (key === "personal-info") {
      result.personalInfo = { ...existingData.personalInfo, ...value };
    }
    if (key === "location-info") {
      let { exemptedAreas, lessonType, ...rest } = value;
      result.personalInfo = { ...existingData.personalInfo, ...rest };
      result.availability = {
        ...existingData.availability,
        exemptedAreas,
        preferredLessonType: lessonType,
      };
    }
    if (["education-history", "work-history"].includes(key)) {
      result.educationWorkHistory = value;
    }
    return result;
  },
  async saveTutorInfo(key: string, value: any, slug: string, nextStep: string) {
    let tutorInfo = SAMPLE_TUTOR_DATA;
    let data = this.cleanTutorData(tutorInfo, key, { [key]: value });
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
export default adapter;
