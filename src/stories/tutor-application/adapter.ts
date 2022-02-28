import { Description } from "./../pages/components/Application/CardWithUserDetails";
import {
  AdapterType,
  ServerAdapterType,
} from "@tuteria/shared-lib/src/adapter";
import BANK_DATA from "@tuteria/shared-lib/src/data/banks.json";
import educationWorkData from "@tuteria/shared-lib/src/data/educationData.json";
import DATA, {
  SAMPLE_QUIZ_DATA,
} from "@tuteria/shared-lib/src/data/sample-quiz-data";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import {
  ACADEMIC_PREFERENCES,
  EXAM_PREP_PREFERENCES,
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
  SUBJECT_GROUPS,
  TEACHING_PREFERENCES,
  BUILD_PREFERENCES,
  TUTORS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import storage from "@tuteria/shared-lib/src/local-storage";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";

export function samplePromise(data = {}, timer = 300): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}
const formIds = {
  1: "personal-info",
  2: "location-info",
  3: "education-history",
  4: "work-history",
  7: "schedule-info",
  8: "agreement-info",
  9: "guarantors-info",
  10: "payment-info",
  11: "new-development-info",
  12: "teaching-profile",
};

function loadExistingTutorInfo() {
  return {
    ...SAMPLE_TUTOR_DATA,
    appData: { currentEditableForm: formIds[8] },
  };
}

const clearSubjectDescription = () => {
  storage.clear("SUBJECT_DESCRIPTION");
  storage.clear("TEACHING_STYLE");
  storage.clear("TRACK_RECORD");
};

const initializeApplication = async (
  adapter: AdapterType,
  { regions, countries, tuteriaSubjects }
) => {
  storage.set(adapter.regionKey, regions);
  storage.set(adapter.countryKey, countries);
  storage.set(adapter.supportedCountriesKey, supportedCountries);
  storage.set(adapter.tuteriaSubjectsKey, tuteriaSubjects);
  return await samplePromise({
    staticData: {
      regions,
      countries,
      supportedCountries,
      educationData: {
        degree_data: educationWorkData.degree_data,
        grade_data: educationWorkData.grade_data,
        specialities: educationWorkData.specialities,
        sources: educationWorkData.sources,
        languages: educationWorkData.languages,
      },
      pricing: {
        tutorLevelFactor: [
          {
            tutor_level: "Probation",
            factor: 0.9,
          },
          {
            tutor_level: "Standard",
            factor: 1,
          },
          {
            tutor_level: "Premium",
            factor: 1.25,
          },
          {
            tutor_level: "Deluxe",
            factor: 1.5,
          },
        ],
        experienceFactor: [
          {
            experience: "None",
            factor: 0.9,
          },
          {
            experience: "Below 5",
            factor: 1,
          },
          {
            experience: "Btw 5 & 10",
            factor: 1.1,
          },
          {
            experience: "Above 10",
            factor: 1.15,
          },
        ],
        ratingsFactor: [
          {
            ratings: "No rating",
            factor: 1,
          },
          {
            ratings: "Below 4.0",
            factor: 0.9,
          },
          {
            ratings: "4.0 - 4.2",
            factor: 1,
          },
          {
            ratings: "4.3 - 4.7",
            factor: 1.05,
          },
          {
            ratings: "4.8 - 5.0",
            factor: 1.2,
          },
        ],
        noOfClientsFactor: [
          {
            no_of_clients: "None",
            factor: 0.9,
          },
          {
            no_of_clients: "Less than 5",
            factor: 1,
          },
          {
            no_of_clients: "Btw 5 & 10",
            factor: 1.1,
          },
          {
            no_of_clients: "Btw 10 & 20",
            factor: 1.2,
          },
          {
            no_of_clients: "More than 20",
            factor: 1.25,
          },
        ],
        recommendedFactor: [
          {
            name: "Recommended",
            factor: 1,
          },
          {
            name: "Minimum",
            factor: 0.6,
          },
          {
            name: "Maximum",
            factor: 1.5,
          },
        ],
      },
    },
    tutorInfo: loadExistingTutorInfo(),
    subjectData: {
      tutorSubjects: SAMPLE_TUTOR_SUBJECTS,
      tuteriaSubjects: tuteriaSubjects,
      supportedCountries,
      groups: SUBJECT_GROUPS,
    },
  });
};

export const testAdapter: ServerAdapterType = {
  getSubjectData() {
    return {
      tutorSubjects: SAMPLE_TUTOR_SUBJECTS,
      tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
      groups: SUBJECT_GROUPS,
    };
  },
  deleteSubject: async (id) => {
    return await samplePromise(id);
  },
  deleteBulkSubjects: async (ids, status) => {
    console.log(ids, status);
    return await samplePromise({ ids, status });
  },
  saveTutorInfo: async (data: any) => {
    console.log(data);
    return await samplePromise("tutorToken");
  },
  getTuteriaSubjects: () => {
    return SAMPLE_TUTERIA_SUBJECTS;
  },
  fetchBanksInfo: async (supportedCountryName) => {
    let response = BANK_DATA[supportedCountryName].map((bank) => bank.name);
    return await samplePromise(response);
  },
  loadExistingTutorInfo,
  updateUserPassword: async (password_data) => {
    return await samplePromise();
  },
  saveTutorSubjects: async (subjects) => {
    let existingSubjects: any = SAMPLE_TUTOR_SUBJECTS.map((tx) => {
      return {
        id: tx.id,
        name: tx.name,
        category: tx.category,
        status: tx.status,
        title: tx.title || "",
        description: tx.description || "",
        teachingStyle: tx.teachingStyle,
        trackRecords: tx.trackRecords,
      };
    });
    subjects.forEach((s) => {
      existingSubjects.push({ id: 23, name: s, category: "Languages" });
    });
    return await samplePromise(existingSubjects);
  },
  getTutorSubject: (tutorSubjects, subjectInfo) => {
    return { ...SAMPLE_TUTOR_SUBJECTS[0], quizzes: subjectInfo.subjects };
  },
  updateTutorSubjectInfo: async (values, subject_id) => {
    console.log(values);
    // return Promise.reject({ spellCheck: errors });
    // clearSubjectDescription();
    return await samplePromise({ values, subject_id });
  },
  async checkSpellingAndGrammar(checks: any[]) {
    /**
     * checks = [{key:"description","value":"Thi is aia amaple"}]
     */
    console.log({ checks });
    let errors = {};
    checks.forEach((c) => {
      errors[c.key] = "Please click below to fix the errors";
    });
    return Promise.reject({
      spellCheck: errors,
      errors: {
        description: {
          grammar: {
            ionization:
              "This sentence does not start with an uppercase letter.",
            you: "This should have a comma.",
          },
          similarSubjects: ["Physics", "General Mathematics"],
        },
        teachingStyle: {
          grammar: {
            ionization:
              "This sentence does not start with an uppercase letter.",
            you: "This should have a comma.",
          },
          similarSubjects: ["Physics", "General Mathematics"],
        },
        trackRecords: {
          grammar: {
            ionization:
              "This sentence does not start with an uppercase letter.",
            you: "This should have a comma.",
          },
          similarSubjects: ["Physics", "General Mathematics"],
        },
      },
    });
  },
  async saveSubjectImages(images) {
    let folder = "exhibitions";
    let checkQuality = true;
    let result = await samplePromise(
      images.map((o, index) => ({
        public_id: o.caption || `sample-${index}`,
        url: o.preview,
        quality: false,
      }))
    );
    return result.map((o) => ({
      id: o.public_id,
      url: o.url,
      caption: o.public_id,
    }));
  },
  remoteDeleteImage: async (data) => {
    return await samplePromise({});
  },
  submitSelectedSubjects: async (data) => {
    return await samplePromise();
  },
  fetchQuizQuestions: async (quizSubjects) => {
    return await samplePromise({ quiz: DATA.quiz, quizSubjects });
  },
  fetchLandingPageTutors: async () => {
    return await samplePromise(TUTORS);
  },
  saveSubject(subject_id, subject) {},
  loadExistingSubject(subject_id) {
    return SAMPLE_TUTOR_SUBJECTS[0];
  },
  async uploadAndVerifyProfile(uploadedFile) {
    let { slug } = loadExistingTutorInfo();
    // this is useful for the parameters to send to cloudinary
    let folder = "profile_pics";
    let checkQuality = true;
    let uniqudId = `${slug}-profile-pic`;
    let result = await samplePromise([
      {
        public_id: slug,
        url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
        quality: false,
      },
    ]);
    return {
      profile_id: result[0].public_id,
      url: result[0].url,
      quality: true,
    };
  },
  uploadApiHandler: async (files: any[]) => {
    return await samplePromise(
      files.map((o) => ({
        name: o.name,
        size: o.size?.toString(),
        public_id: "the_public_id",
        url: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
      }))
    );
  },
  cloudinaryApiHandler: async (files: any[], progressCallback) => {
    let promises = files.map((o) =>
      uploadToCloudinary(o, progressCallback).then((b) => {
        let { original_filename, bytes, secure_url } = b.data;
        let newFile = {
          name: original_filename,
          size: `${Math.round(bytes / 1000)}KB`,
          url: secure_url,
          id: original_filename,
        };
        return newFile;
      })
    );
    return Promise.all(promises);
  },
  generateQuiz: async (subjects: any) => {
    return await samplePromise([]);
  },
  submitQuizResults: async (payload) => {
    console.log(payload);
    return await samplePromise({ payload });
  },
  buildQuizData: async (subjectInfo) => {
    console.log(subjectInfo);
    const quiz = {
      ...SAMPLE_QUIZ_DATA,
      questions: SAMPLE_QUIZ_DATA.questions.slice(0, 5),
    };

    const quizzes = subjectInfo.subjects.map((subject) => ({
      name: subject.name,
      passmark: subject.pass_mark,
      questions: SAMPLE_QUIZ_DATA.questions.slice(0, 5),
    }));

    return await samplePromise([quiz, quizzes]);
  },
  beginQuiz: async (payload) => {
    return await samplePromise({});
  },
  sendEmailVerification: async ({ email, code }) => {
    if (code) {
      return await samplePromise({ status: "Email verified", verified: true });
    }
    return await samplePromise(undefined);
  },
  submitVideoRecording: async (url) => {
    console.log(url);
    return await samplePromise({
      id: "sample-video",
      url: "https://www.youtube.com/watch?v=sVPYIRF9RCQ",
    });
  },
  initializeSubject: async (adapter, subjectInfo, key) => {
    let response = await initializeApplication(adapter, {
      regions: [],
      countries: [],
      tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    });
    let foundSubject = {
      ...SAMPLE_TUTOR_SUBJECTS[0],
      quizzes: subjectInfo.subjects,
    };
    return { foundSubject, response };
  },
  initializeApplication,
  authenticateUser: async ({ email, otp }) => {
    return await samplePromise({ email, otp });
  },
  createQuizFromSheet: async () => {
    return await samplePromise({});
  },
  buildPreferences(subject: { category?: string; name?: string }) {
    let uu = BUILD_PREFERENCES(subject)[subject.category];
    return uu ? uu : [];
  },
  saveOnBlur(name, value) {
    storage.set(name, value);
  },
  loadSubjectDescription(name) {
    return storage.get(name, "");
  },
  getEarningPercentage() {
    return 70;
  },
  async getPriceSuggestion(subject: string) {
    console.log(subject);
    return samplePromise({
      minimum: "1750",
      maximum: "3600",
      recommended: "2750",
    });
  },
  getNLPProcessing() {},
  //jobs endpoints
  async updateTutorResponse(payload, requestSlug, tutorSlug, agent) {
    console.log({ payload, requestSlug, tutorSlug, agent });
    return await samplePromise({});
  },
  async bookLessons(requestSlug, sessions) {
    console.log({ requestSlug, sessions });
    return await samplePromise({});
  },
  async validatePersonalInfo(formValues) {
    console.log(formValues);
    return samplePromise({});
    return Promise.reject({
      formErrors: {
        email: "This email already exists",
        phone: "This phone already exists on Tuteria",
      },
    });
  },
  async updateQuizAttempts(data) {
    console.log(data);
    return samplePromise({});
  },
};
