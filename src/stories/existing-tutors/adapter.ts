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
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import storage from "@tuteria/shared-lib/src/local-storage";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import educationWorkData from "@tuteria/shared-lib/src/data/educationData.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";

function samplePromise(data = {}, timer = 300): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}

export const subjectPageData = {
  educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory,
  subjectData: {
    tutorSubjects: SAMPLE_TUTOR_SUBJECTS,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    supportedCountries,
    groups: SUBJECT_GROUPS,
  },
};

export const initialData = {
  [CLIENT_PAGES.SUBJECTS]: subjectPageData,
  [CLIENT_PAGES.PERSONAL_INFO]: {
    staticData: {
      regions: allRegions,
      countries: allCountries,
      educationData: {
        sources: educationWorkData.sources,
        languages: educationWorkData.languages,
      },
    },
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
  [CLIENT_PAGES.LOCATION_INFO]: {
    staticData: {
      regions: allRegions,
      countries: allCountries,
      supportedCountries,
      educationData: {
        degree_data: educationWorkData.degree_data,
        grade_data: educationWorkData.grade_data,
        specialities: educationWorkData.specialities,
      },
    },
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
  [CLIENT_PAGES.EDUCATION_HISTORY]: {
    staticData: {
      regions: allRegions,
      countries: allCountries,
      supportedCountries,
      educationData: {
        degree_data: educationWorkData.degree_data,
        grade_data: educationWorkData.grade_data,
        specialities: educationWorkData.specialities,
      },
    },
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
  [CLIENT_PAGES.WORK_HISTORY]: {
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
  [CLIENT_PAGES.SPECIAL_NEEDS]: {
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
  [CLIENT_PAGES.PROFILE_PHOTO]: {
    tutorInfo: SAMPLE_TUTOR_DATA,
  },
};

export const testAdapter: any = {
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
  saveTutorInfo: async (data: any) => {
    return await samplePromise("tutorToken");
  },
  getTuteriaSubjects: () => {
    return SAMPLE_TUTERIA_SUBJECTS;
  },
  loadExistingTutorInfo() {
    return {
      ...SAMPLE_TUTOR_DATA,
    };
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
      existingSubjects.push({ id: 23, ...s, category: "Academics" });
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
  saveSubject(subject_id, subject) {},
  async checkSpellingAndGrammar(checks: any[]) {
    /**
     * checks = [{key:"description","value":"Thi is aia amaple"}]
     */
    // {
    //   "description": {
    //     "grammar": {
    //       "ionization": "This sentence does not start with an uppercase letter."
    //     },
    //     "similarSubjects": ["Physics"]
    //   }
    // }
    console.log({ checks });
    let errors = {};
    checks.forEach((c) => {
      errors[c.key] = "Spelling errors";
    });
    // return await samplePromise({});
    return Promise.reject({ spellCheck: errors, errors });
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

  loadExistingSubject(subject_id) {
    return SAMPLE_TUTOR_SUBJECTS[0];
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
  submitQuizResults: async (payload) => {
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

  buildPreferences(subject: { category?: string; name?: string }) {
    if (subject.category === "Academics") {
      return [
        {
          heading: "What class groups do you teach?",
          subHeading: "Select the main age and class of learners you teach.",
          name: "classes",
          options: ACADEMIC_PREFERENCES.classes,
          type: "multiselect",
          required: true,
        },
        {
          heading: "Curriculums",
          subHeading:
            "Select the curriculum you're experienced in or skip this step if you don't teach academics.",
          options: ACADEMIC_PREFERENCES.curriculums,
          name: "curriculums",
          type: "multiselect",
          required: true,
        },
        {
          heading: "Exam preparation experience",
          name: "exam_speciality",
          subHeading: `Indicate the exams you have successfully prepared students for or skip this step if it doesn't apply to you.`,
          options: [
            {
              heading: "Upper Primary Exams",
              options: [
                "Common Entrance Exams",
                "11+ Entrance Exams",
                "Cambridge Primary Exams",
              ],
            },
            {
              heading: "Junior Secondary Exams",
              options: [
                "JSSCE/BECE",
                "Cambridge Checkpoint",
                "13+ Entrance Exams",
              ],
            },
            {
              heading: "Senior Secondary Exams",
              options: [
                "WAEC/JAMB/NECO/JUPEB",
                "IGCSE-Cambridge A/Levels",
                "SAT/PSAT- Reasoning Test",
                "ACT- College Test",
                "SAT II - Subject Tests",
                "Edexcel - International A/Levels",
                "IB - International BAccalaureate",
                "AP - Advanced Placement Exams",
              ],
            },
          ],
          type: "multiselect",
          complex: true,
        },
        {
          heading: "Schools taught",
          name: "schools_taught",
          subHeading: "Which schools have you taught?",
          type: "input",
        },
      ];
    }
    if (subject.category === "Test Prep") {
      return [
        {
          heading: "Purposes",
          subHeading: "For which purpose do you plan on taking the exam?",
          name: "purposes",
          options: EXAM_PREP_PREFERENCES.purposes.IELTS,
          type: "multiselect",
          required: true,
        },
        {
          heading: "Modules",
          subHeading: "Select your modules",
          name: "modules",
          options: EXAM_PREP_PREFERENCES.modules.IELTS,
          type: "multiselect",
          required: true,
        },
        {
          heading: "Test Results",
          subHeading: "Have you taken the test?",
          name: "test_results",
          type: "conditional",
          options: EXAM_PREP_PREFERENCES.modules.IELTS,
          // depends: "modules",
          // dependType: "input",
        },
        {
          heading: "Test results verification",
          subHeading: "Verify your test results by uploading proof",
          depends: "modules",
          name: "test_results_verification",
          type: "proof",
          secondary: "test_results",
        },
      ];
    }
    if (subject.category === "Languages") {
      return [
        {
          heading: "What class groups do you teach?",
          subHeading: "Select the main age and class of learners you teach.",
          options: TEACHING_PREFERENCES.classes,
          name: "classes",
          type: "multiselect",
        },
        {
          heading: "Levels",
          subHeading: "Select the levels you teach.",
          options: TEACHING_PREFERENCES.levels,
          name: "levels",
          type: "multiselect",
        },
        {
          heading: "Dialect",
          subHeading: "Select the dialects you teach.",
          options: TEACHING_PREFERENCES.dialect,
          name: "dialect",
          type: "multiselect",
        },
        {
          heading: "Purpose",
          subHeading: "What is the purpose for teaching?",
          options: TEACHING_PREFERENCES.purposes,
          name: "purpose",
          type: "multiselect",
        },
        {
          heading: "Exam",
          subHeading: "Which exams will you offer?",
          options: TEACHING_PREFERENCES.exams,
          name: "exam",
          type: "multiselect",
        },
        {
          heading: "Language Proficiency",
          subHeading: "Are you a native speaker",
          name: "native_speaker",
          type: "radio",
          options: ["Yes", "No"],
        },
      ];
    }
    if (subject.category === "Music") {
      return [
        {
          heading: "What class groups do you teach?",
          subHeading: "Select the main age and class of learners you teach.",
          options: TEACHING_PREFERENCES.classes,
          name: "classes",
          type: "multiselect",
        },
        {
          heading: "Levels",
          subHeading: "Select the levels you teach.",
          options: TEACHING_PREFERENCES.levels,
          name: "levels",
          type: "multiselect",
        },
        {
          heading: "Exam",
          subHeading: "Which exams will you offer?",
          options: TEACHING_PREFERENCES.exams,
          name: "exam",
          type: "multiselect",
        },
        {
          heading: "Instrument Ownership",
          subHeading: "Do you have a personal instrument",
          name: "instrument",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          heading: "Studio Access",
          subHeading: "Do you have access to a studio",
          name: "studio",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          heading: "Instrument Type",
          subHeading: "What is the type of instrument you use?",
          options: TEACHING_PREFERENCES.instrument_types,
          name: "instrument-type",
          type: "multiselect",
        },
      ];
    }
    return [];
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
  getPriceSuggestion(subject: string) {
    return {
      minimum: "1750",
      maximum: "3600",
      recommended: "2750",
    };
  },
  getNLPProcessing() {
    return [
      {
        entities: [
          {
            name: "writing",
            type: "OTHER",
            salience_score: 0.11169009655714035,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "writing",
                type: "COMMON",
              },
              {
                text: "writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Communication",
            type: "OTHER",
            salience_score: 0.09969290345907211,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Writing",
            type: "OTHER",
            salience_score: 0.0942067801952362,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Speaking",
            type: "OTHER",
            salience_score: 0.08035033941268921,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Speaking",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.07237764447927475,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.05319656431674957,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.04274935647845268,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "experience",
            type: "OTHER",
            salience_score: 0.042128197848796844,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "experience",
                type: "COMMON",
              },
            ],
          },
          {
            name: "training",
            type: "OTHER",
            salience_score: 0.038840971887111664,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "training",
                type: "COMMON",
              },
            ],
          },
          {
            name: "methodology",
            type: "OTHER",
            salience_score: 0.036045387387275696,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "methodology",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.02008896693587303,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication",
            type: "OTHER",
            salience_score: 0.01838117092847824,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication skills",
            type: "OTHER",
            salience_score: 0.01299713272601366,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication skills",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tips",
            type: "OTHER",
            salience_score: 0.01299713272601366,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tips",
                type: "COMMON",
              },
            ],
          },
          {
            name: "love",
            type: "OTHER",
            salience_score: 0.01295134425163269,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "love",
                type: "COMMON",
              },
            ],
          },
          {
            name: "individual",
            type: "PERSON",
            salience_score: 0.012853318825364113,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "individual",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.012537127360701561,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "business communication",
            type: "OTHER",
            salience_score: 0.012507620267570019,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "business communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "experience writing",
            type: "OTHER",
            salience_score: 0.011778531596064568,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "experience writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "best",
            type: "OTHER",
            salience_score: 0.01128507312387228,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "best",
                type: "COMMON",
              },
            ],
          },
          {
            name: "speaking",
            type: "OTHER",
            salience_score: 0.009952572174370289,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "speaking",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.009427363984286785,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tutor",
            type: "PERSON",
            salience_score: 0.009153961203992367,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tutor",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tutoring sessions",
            type: "EVENT",
            salience_score: 0.008827736601233482,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tutoring sessions",
                type: "COMMON",
              },
            ],
          },
          {
            name: "executives",
            type: "PERSON",
            salience_score: 0.008807988837361336,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "executives",
                type: "COMMON",
              },
            ],
          },
          {
            name: "dread",
            type: "OTHER",
            salience_score: 0.008743896149098873,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "dread",
                type: "COMMON",
              },
            ],
          },
          {
            name: "world",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "world",
                type: "COMMON",
              },
            ],
          },
          {
            name: "examples",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "examples",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication strategies",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication strategies",
                type: "COMMON",
              },
            ],
          },
          {
            name: "coaching",
            type: "OTHER",
            salience_score: 0.008066894486546516,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "coaching",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.007555046584457159,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "training",
            type: "OTHER",
            salience_score: 0.006900439504534006,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "training",
                type: "COMMON",
              },
            ],
          },
          {
            name: "areas",
            type: "LOCATION",
            salience_score: 0.006786842830479145,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "areas",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.006593710742890835,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "teaching",
            type: "OTHER",
            salience_score: 0.006545928306877613,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "teaching",
                type: "COMMON",
              },
            ],
          },
          {
            name: "development",
            type: "OTHER",
            salience_score: 0.006061712745577097,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "development",
                type: "COMMON",
              },
            ],
          },
          {
            name: "assessment",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "assessment",
                type: "COMMON",
              },
            ],
          },
          {
            name: "conjunction",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "conjunction",
                type: "COMMON",
              },
            ],
          },
          {
            name: "objectives",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "objectives",
                type: "COMMON",
              },
            ],
          },
          {
            name: "context",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "context",
                type: "COMMON",
              },
            ],
          },
          {
            name: "college",
            type: "OTHER",
            salience_score: 0.0048245638608932495,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "college",
                type: "COMMON",
              },
            ],
          },
          {
            name: "concepts",
            type: "OTHER",
            salience_score: 0.004274103790521622,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "concepts",
                type: "COMMON",
              },
            ],
          },
          {
            name: "work",
            type: "OTHER",
            salience_score: 0.00423781480640173,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "work",
                type: "COMMON",
              },
            ],
          },
          {
            name: "school",
            type: "ORGANIZATION",
            salience_score: 0.00423781480640173,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "school",
                type: "COMMON",
              },
            ],
          },
          {
            name: "results",
            type: "OTHER",
            salience_score: 0.00423284899443388,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "results",
                type: "COMMON",
              },
            ],
          },
          {
            name: "feedback",
            type: "OTHER",
            salience_score: 0.00423284899443388,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "feedback",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.004142408259212971,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.003318602219223976,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "steps",
            type: "OTHER",
            salience_score: 0.0030438865069299936,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "steps",
                type: "COMMON",
              },
            ],
          },
          {
            name: "30",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "30",
              },
            ],
            mention: [
              {
                text: "30",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
          {
            name: "17",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "17",
              },
            ],
            mention: [
              {
                text: "17",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
          {
            name: "two",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "2",
              },
            ],
            mention: [
              {
                text: "two",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
        ],
        sentiment: {
          score: 0.4000000059604645,
          magnitude: 5.300000190734863,
          sentences: [
            {
              text: "I currently teach Writing, Communication and Effective Speaking.",
              score: 0.0,
              magnitude: 0.0,
            },
            {
              text: "My methodology is tailored to suit the unique needs of each student.",
              score: 0.8999999761581421,
              magnitude: 0.8999999761581421,
            },
            {
              text: "Effective training in college-level writing will be provided with additional tips on how to keep improving communication skills - both verbal and written.",
              score: 0.800000011920929,
              magnitude: 0.800000011920929,
            },
            {
              text: "I aim to foster a love for communication and help students overcome their dread of writing or public speaking.",
              score: 0.0,
              magnitude: 0.0,
            },
            {
              text: "I have extensive corporate experience in communication strategies that helps me combine theoretical concepts with real world examples to help students get the best out of our tutoring sessions.",
              score: 0.800000011920929,
              magnitude: 0.800000011920929,
            },
            {
              text: "I also train mid-level executives in effective business communication.",
              score: 0.5,
              magnitude: 0.5,
            },
            {
              text: "I have over 30 years of experience writing and have been teaching and coaching for the past two years.",
              score: 0.6000000238418579,
              magnitude: 0.6000000238418579,
            },
            {
              text: "I typically work with students 17 years and older.",
              score: 0.10000000149011612,
              magnitude: 0.10000000149011612,
            },
            {
              text: "When you hire me as a tutor, you will get an individual who will take the necessary, initial steps to ascertain the exact needs of you, the student, as well as the areas that need to be focused on for development and training.",
              score: 0.20000000298023224,
              magnitude: 0.20000000298023224,
            },
            {
              text: "This will be done in conjunction with an assessment of the needs and objectives of the student in the context of the work they need to complete for their school/college.",
              score: 0.20000000298023224,
              magnitude: 0.20000000298023224,
            },
            {
              text: "I have had excellent feedback on the results achieved from the students I have taught.",
              score: 0.8999999761581421,
              magnitude: 0.8999999761581421,
            },
          ],
        },
        categories: [
          {
            name: "/Jobs & Education/Education",
            confidence: 0.7599999904632568,
          },
        ],
      },
      {
        entities: [
          {
            name: "writing",
            type: "OTHER",
            salience_score: 0.11169009655714035,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "writing",
                type: "COMMON",
              },
              {
                text: "writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Communication",
            type: "OTHER",
            salience_score: 0.09969290345907211,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Writing",
            type: "OTHER",
            salience_score: 0.0942067801952362,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "Speaking",
            type: "OTHER",
            salience_score: 0.08035033941268921,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "Speaking",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.07237764447927475,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.05319656431674957,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.04274935647845268,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "experience",
            type: "OTHER",
            salience_score: 0.042128197848796844,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "experience",
                type: "COMMON",
              },
            ],
          },
          {
            name: "training",
            type: "OTHER",
            salience_score: 0.038840971887111664,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "training",
                type: "COMMON",
              },
            ],
          },
          {
            name: "methodology",
            type: "OTHER",
            salience_score: 0.036045387387275696,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "methodology",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.02008896693587303,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication",
            type: "OTHER",
            salience_score: 0.01838117092847824,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication skills",
            type: "OTHER",
            salience_score: 0.01299713272601366,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication skills",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tips",
            type: "OTHER",
            salience_score: 0.01299713272601366,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tips",
                type: "COMMON",
              },
            ],
          },
          {
            name: "love",
            type: "OTHER",
            salience_score: 0.01295134425163269,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "love",
                type: "COMMON",
              },
            ],
          },
          {
            name: "individual",
            type: "PERSON",
            salience_score: 0.012853318825364113,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "individual",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.012537127360701561,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "business communication",
            type: "OTHER",
            salience_score: 0.012507620267570019,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "business communication",
                type: "COMMON",
              },
            ],
          },
          {
            name: "experience writing",
            type: "OTHER",
            salience_score: 0.011778531596064568,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "experience writing",
                type: "COMMON",
              },
            ],
          },
          {
            name: "best",
            type: "OTHER",
            salience_score: 0.01128507312387228,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "best",
                type: "COMMON",
              },
            ],
          },
          {
            name: "speaking",
            type: "OTHER",
            salience_score: 0.009952572174370289,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "speaking",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.009427363984286785,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tutor",
            type: "PERSON",
            salience_score: 0.009153961203992367,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tutor",
                type: "COMMON",
              },
            ],
          },
          {
            name: "tutoring sessions",
            type: "EVENT",
            salience_score: 0.008827736601233482,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "tutoring sessions",
                type: "COMMON",
              },
            ],
          },
          {
            name: "executives",
            type: "PERSON",
            salience_score: 0.008807988837361336,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "executives",
                type: "COMMON",
              },
            ],
          },
          {
            name: "dread",
            type: "OTHER",
            salience_score: 0.008743896149098873,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "dread",
                type: "COMMON",
              },
            ],
          },
          {
            name: "world",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "world",
                type: "COMMON",
              },
            ],
          },
          {
            name: "examples",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "examples",
                type: "COMMON",
              },
            ],
          },
          {
            name: "communication strategies",
            type: "OTHER",
            salience_score: 0.008719961158931255,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "communication strategies",
                type: "COMMON",
              },
            ],
          },
          {
            name: "coaching",
            type: "OTHER",
            salience_score: 0.008066894486546516,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "coaching",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.007555046584457159,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "training",
            type: "OTHER",
            salience_score: 0.006900439504534006,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "training",
                type: "COMMON",
              },
            ],
          },
          {
            name: "areas",
            type: "LOCATION",
            salience_score: 0.006786842830479145,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "areas",
                type: "COMMON",
              },
            ],
          },
          {
            name: "students",
            type: "PERSON",
            salience_score: 0.006593710742890835,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "students",
                type: "COMMON",
              },
            ],
          },
          {
            name: "teaching",
            type: "OTHER",
            salience_score: 0.006545928306877613,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "teaching",
                type: "COMMON",
              },
            ],
          },
          {
            name: "development",
            type: "OTHER",
            salience_score: 0.006061712745577097,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "development",
                type: "COMMON",
              },
            ],
          },
          {
            name: "assessment",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "assessment",
                type: "COMMON",
              },
            ],
          },
          {
            name: "conjunction",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "conjunction",
                type: "COMMON",
              },
            ],
          },
          {
            name: "objectives",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "objectives",
                type: "COMMON",
              },
            ],
          },
          {
            name: "context",
            type: "OTHER",
            salience_score: 0.006053865887224674,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "context",
                type: "COMMON",
              },
            ],
          },
          {
            name: "college",
            type: "OTHER",
            salience_score: 0.0048245638608932495,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "college",
                type: "COMMON",
              },
            ],
          },
          {
            name: "concepts",
            type: "OTHER",
            salience_score: 0.004274103790521622,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "concepts",
                type: "COMMON",
              },
            ],
          },
          {
            name: "work",
            type: "OTHER",
            salience_score: 0.00423781480640173,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "work",
                type: "COMMON",
              },
            ],
          },
          {
            name: "school",
            type: "ORGANIZATION",
            salience_score: 0.00423781480640173,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "school",
                type: "COMMON",
              },
            ],
          },
          {
            name: "results",
            type: "OTHER",
            salience_score: 0.00423284899443388,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "results",
                type: "COMMON",
              },
            ],
          },
          {
            name: "feedback",
            type: "OTHER",
            salience_score: 0.00423284899443388,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "feedback",
                type: "COMMON",
              },
            ],
          },
          {
            name: "student",
            type: "PERSON",
            salience_score: 0.004142408259212971,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "student",
                type: "COMMON",
              },
            ],
          },
          {
            name: "needs",
            type: "OTHER",
            salience_score: 0.003318602219223976,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "needs",
                type: "COMMON",
              },
            ],
          },
          {
            name: "steps",
            type: "OTHER",
            salience_score: 0.0030438865069299936,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [],
            mention: [
              {
                text: "steps",
                type: "COMMON",
              },
            ],
          },
          {
            name: "17",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "17",
              },
            ],
            mention: [
              {
                text: "17",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
          {
            name: "30",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "30",
              },
            ],
            mention: [
              {
                text: "30",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
          {
            name: "two",
            type: "NUMBER",
            salience_score: 0.0,
            sentiment: {
              score: 0.0,
              magnitude: 0.0,
            },
            metadata: [
              {
                name: "value",
                value: "2",
              },
            ],
            mention: [
              {
                text: "two",
                type: "TYPE_UNKNOWN",
              },
            ],
          },
        ],
        sentiment: {
          score: 0.4000000059604645,
          magnitude: 5.300000190734863,
          sentences: [
            {
              text: "I currently teach Writing, Communication and Effective Speaking.",
              score: 0.0,
              magnitude: 0.0,
            },
            {
              text: "My methodology is tailored to suit the unique needs of each student.",
              score: 0.8999999761581421,
              magnitude: 0.8999999761581421,
            },
            {
              text: "Effective training in college-level writing will be provided with additional tips on how to keep improving communication skills - both verbal and written.",
              score: 0.800000011920929,
              magnitude: 0.800000011920929,
            },
            {
              text: "I aim to foster a love for communication and help students overcome their dread of writing or public speaking.",
              score: 0.0,
              magnitude: 0.0,
            },
            {
              text: "I have extensive corporate experience in communication strategies that helps me combine theoretical concepts with real world examples to help students get the best out of our tutoring sessions.",
              score: 0.800000011920929,
              magnitude: 0.800000011920929,
            },
            {
              text: "I also train mid-level executives in effective business communication.",
              score: 0.5,
              magnitude: 0.5,
            },
            {
              text: "I have over 30 years of experience writing and have been teaching and coaching for the past two years.",
              score: 0.6000000238418579,
              magnitude: 0.6000000238418579,
            },
            {
              text: "I typically work with students 17 years and older.",
              score: 0.10000000149011612,
              magnitude: 0.10000000149011612,
            },
            {
              text: "When you hire me as a tutor, you will get an individual who will take the necessary, initial steps to ascertain the exact needs of you, the student, as well as the areas that need to be focused on for development and training.",
              score: 0.20000000298023224,
              magnitude: 0.20000000298023224,
            },
            {
              text: "This will be done in conjunction with an assessment of the needs and objectives of the student in the context of the work they need to complete for their school/college.",
              score: 0.20000000298023224,
              magnitude: 0.20000000298023224,
            },
            {
              text: "I have had excellent feedback on the results achieved from the students I have taught.",
              score: 0.8999999761581421,
              magnitude: 0.8999999761581421,
            },
          ],
        },
        categories: [
          {
            name: "/Jobs & Education/Education",
            confidence: 0.7599999904632568,
          },
        ],
      },
    ];
  },
};
