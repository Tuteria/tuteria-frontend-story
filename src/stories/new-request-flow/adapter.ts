import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import storage from "@tuteria/shared-lib/src/storage";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { SAMPLENEIGHBORINGAREA } from "./sampleData";
import { SAMPLEREQUEST } from "./sampleData";

const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const REQUEST_KEY = "TEST-HOME-TUTORING-REQUEST";
export const adapter = {
  regionKey: REGION_KEY,
  countryKey: COUNTRY_KEY,
  requestKey: REQUEST_KEY,
  createIssuedRequest: async (data) => {
    console.log(data);
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 300);
    });
  },
  checkIfTutorsExists: async ({ splitRequests }) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([0, 1, 2]);
        // if (splitRequests.length > 2) {
        //   resolve([0]);
        // } else {
        //   resolve([]);
        // }
      }, 3000);
    });
  },
  downloadReceipt: async (requestSlug) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  },
  bookLessons: async (slug, sessionsToBeBooked) => {
    let first_session = sessionsToBeBooked.slice(0)[0];
    let last_session = sessionsToBeBooked.slice(-1)[0];

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          bookingUrl: "https://www.tuteria.com/booking/SEWEWWSSE?logintutor",
          from: first_session.startDate,
          to: last_session.startDate,
        });
      }, 3000);
    });
  },
  updateTutorResponse: async (tutorResponse, slug) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({ slug, tutorResponse });
        // actions that should happen when the tutor status is updated.
        // remember to convert the bookingStage from the object to an array
        // of stage and duration since that is a better format. exclude any
        // stage that has a value of null
        // reject()
        resolve(tutorResponse);
      }, 3000);
    });
  },
  initializeRequestData: async () => {
    let requestData = storage.get(REQUEST_KEY, {});
    return [requestData, []];
  },
  onSubmit: async (key, data, splitRequests) => {
    let requestData = storage.get(REQUEST_KEY, {});
    if (key === "student-details") {
      requestData = { ...requestData, ...data };
    }
    if (key === "teacher-selection") {
      requestData.teacherKind = data.teacherOption;
    }
    if (key === "lesson-schedule") {
      requestData.lessonDetails = {
        ...(requestData.lessonDetails || {}),
        lessonSchedule: {
          ...(requestData.lessonDetails.lessonSchedule || {}),
          ...data,
        },
      };
    }
    if (key === "lesson-location") {
      requestData.contactDetails = {
        ...(requestData.contactDetails || {}),
        vicinity: data.vicinity,
        state: data.state,
        country: data.country,
        region: data.region,
      };
      requestData.lessonDetails = {
        ...(requestData.lessonDetails || {}),
        lessonType: data.lessonType,
      };
    }
    if (key === "contact-information") {
      requestData.contactDetails = {
        ...(requestData.contactDetails || {}),
        ...data,
      };
    }
    if (splitRequests) {
      requestData.splitRequests = splitRequests;
    }
    storage.set(REQUEST_KEY, requestData);
    return data;
  },
  fetchAcademicData: async () => {
    return ACADEMICS_DATA;
  },
  getCountries: async () => {
    let result: any = {};
    let _regions = storage.get(REGION_KEY, []);
    if (Array.isArray(_regions) && _regions.length > 0) {
      result.regions = _regions;
    } else {
      result.regions = regions;
    }
    let countries = storage.get(COUNTRY_KEY, []);
    if (Array.isArray(countries) && countries.length > 0) {
      result.countries = countries;
    } else {
      result.countries = allCountries;
    }
    let r = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 500);
    });
    return {
      ...r,
      // country: "Nigeria"
    };
  },

  updateTutorSchedule: async (key, values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ key, values });
      }, 1000);
    });
  },

  updateTutorSubject: async (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 1500);
    });
  },
  deleteSubject: async (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 1000);
    });
  },
  savePricingInfo: async (data, availability) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500);
    });
  },
  getNeighboringArea: async (region) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(SAMPLENEIGHBORINGAREA), 100);
    });
  },
  updateStaticData({ regions, countries }) {
    storage.set(adapter.regionKey, regions);
    storage.set(adapter.countryKey, countries);
    let existing = storage.get(adapter.requestKey, {});
    storage.set(adapter.requestKey, {
      ...existing,
      ...SAMPLEREQUEST,
    });
  },
  initializeLandingPage({ regions, countries }) {
    storage.set(adapter.regionKey, regions);
    storage.set(adapter.countryKey, countries);
  },
  saveRequestToServer() {
    let requestData = storage.get(REQUEST_KEY, {});
    console.log(requestData);
  },
};
