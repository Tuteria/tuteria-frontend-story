import { ServerAdapterType } from "@tuteria/shared-lib/src/adapter";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import DATA from "@tuteria/shared-lib/src/data/sample-quiz-data";
import { uploadToCloudinary } from "@tuteria/shared-lib/src/utils";
import BANK_DATA from "@tuteria/shared-lib/src/data/banks.json";

function samplePromise(data = {}, timer = 300): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}
const formIds = {
  1: "personal-info",
  2: "location-info",
  3: "education-history",
  4: "work-history",
  5: "subject-selection",
  6: "verification-info",
  7: "schedule-info",
  8: "agreement-info",
  9: "guarantors-info",
  10: "payment-info",
  11: "new-development-info",
  12: "teaching-profile",
};

export const testAdapter: ServerAdapterType = {
  deleteSubject: async (id) => {
    return await samplePromise(id);
  },
  saveTutorInfo: async (data: any) => {
    return await samplePromise();
  },
  getTuteriaSubjects: () => {
    return SAMPLE_TUTERIA_SUBJECTS;
  },
  fetchBanksInfo: async (countryCode) => {
    let response = BANK_DATA[countryCode].map((bank) => bank.name);
    return await samplePromise(response);
  },
  loadExistingTutorInfo: () => {
    return { ...SAMPLE_TUTOR_DATA, currentEditableForm: formIds[12] };
  },
  updateUserPassword: async (password_data) => {
    return await samplePromise();
  },
  saveTutorSubjects: async (subjects) => {
    let existingSubjects = SAMPLE_TUTOR_SUBJECTS.map((tx) => {
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
    });
    subjects.forEach((s) => {
      existingSubjects.push({ id: 23, name: s, category: "Academics" });
    });
    return await samplePromise(existingSubjects);
  },
  getTutorSubjects: async () => {
    let tutor_data = SAMPLE_TUTOR_SUBJECTS;
    let result: {
      tutorSubjects: any[];
      tuteriaSubjects: any[];
    } = await samplePromise(
      // tutorSubjects: [],
      {
        tutorSubjects: tutor_data.map((tx) => {
          return {
            ...tx,
          };
        }),
      }
    );
    return result;
    // if session storage exists return the tuteria subjects else fetch
  },
  updateTutorSubjectInfo: async (values) => {
    return await samplePromise();
  },
  submitSelectedSubjects: async (data) => {
    return await samplePromise();
  },
  fetchQuizQuestions: async (quizSubjects) => {
    return await samplePromise({ quiz: DATA.quiz, quizSubjects });
  },
  uploadApiHandler: async (files: any[]) => {
    return await samplePromise(
      files.map((o) => ({
        name: o.name,
        size: o.size?.toString(),
        public_id: "the_public_id",
        url:
          "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
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
  buildQuizData: async (subjectInfo, quiz) => {
    console.log(subjectInfo);
    return await samplePromise(quiz[0]);
  },
};
