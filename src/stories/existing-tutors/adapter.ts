import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import educationWorkData from "@tuteria/shared-lib/src/data/educationData.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  SAMPLE_TUTOR_DATA,
  SAMPLE_TUTOR_SUBJECTS,
  SUBJECT_GROUPS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";
import { SAMPLE_JOB_LIST_DATA } from "@tuteria/shared-lib/src/data/tutor-application/sample_job_data";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";

function samplePromise(data = {}, timer = 300): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}

export const subjectPageData = {
  tutorInfo: {
    educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory,
    personalInfo: SAMPLE_TUTOR_DATA.personalInfo,
    others: SAMPLE_TUTOR_DATA.others,
  },
  staticData: {
    regions: allRegions,
    educationData: {
      degree_data: educationWorkData.degree_data,
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
  subjectData: {
    tutorSubjects: SAMPLE_TUTOR_SUBJECTS,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: SUBJECT_GROUPS,
  },
};

export const initialData = {
  [CLIENT_PAGES.JOBS]: {
    tutorInfo: { personalInfo: SAMPLE_TUTOR_DATA.personalInfo },
    jobs: SAMPLE_JOB_LIST_DATA,
  },
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
  [CLIENT_PAGES.VERIFICATION]: {
    tutorInfo: { identity: SAMPLE_TUTOR_DATA.identity },
  },
  [CLIENT_PAGES.GUARANTOR_INFO]: {
    tutorInfo: { educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory },
  },
  [CLIENT_PAGES.UPLOAD_PROOF]: {
    tutorInfo: { educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory },
  },
  [CLIENT_PAGES.EDUCATION_HISTORY]: {
    staticData: {
      regions: allRegions,
      countries: allCountries,
      educationData: {
        degree_data: educationWorkData.degree_data,
        grade_data: educationWorkData.grade_data,
        specialities: educationWorkData.specialities,
      },
    },
    tutorInfo: { educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory },
  },
  [CLIENT_PAGES.WORK_HISTORY]: {
    tutorInfo: { educationWorkHistory: SAMPLE_TUTOR_DATA.educationWorkHistory },
  },
  [CLIENT_PAGES.TEACHING_PROFILE]: {
    tutorInfo: { teachingProfile: SAMPLE_TUTOR_DATA.teachingProfile },
  },
  [CLIENT_PAGES.PROFILE_PHOTO]: {
    tutorInfo: { identity: SAMPLE_TUTOR_DATA.identity },
  },
  [CLIENT_PAGES.SCHEDULE_INFO]: {
    tutorInfo: { availability: SAMPLE_TUTOR_DATA.availability },
  },
  [CLIENT_PAGES.PAYMENT_INFO]: {
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
};

export { testAdapter } from "../tutor-application/adapter";
