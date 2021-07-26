// import TutorJobListStore  from "@tuteria/mobile-lib/src/store/tutorJobList";
// import ThemeProvider from "@tuteria/mobile-lib/src/bootstrap";
// import storage from "@tuteria/mobile-lib/src/local-storage";
// import React, { useEffect } from "react";
// import allCountries from "../data/countries.json";
// import ACADEMICS_DATA from "../data/parent-flow/data";
// import { SAMPLENEIGHBORINGAREA } from "../data/private-lessons/_sampleData";
// import allRegions from "../data/regions.json";
// import Availability from "@tuteria/mobile-lib/src/tutor-revamp/Availability";

// export default {
//   title: "Mobile Application",
//   decorators: [
//     (Story: React.FC) => (
//       <ThemeProvider>
//         <Story />
//       </ThemeProvider>
//     ),
//   ],
// };

// const REGION_KEY = "TEST-REGIONS-VICINITIES";
// const COUNTRY_KEY = "TEST-COUNTRIES";
// const REQUEST_KEY = "TEST-HOME-TUTORING-REQUEST";
// const adapter = {
//   regionKey: REGION_KEY,
//   countryKey: COUNTRY_KEY,
//   requestKey: REQUEST_KEY,
//   createIssuedRequest: async (data) => {
//     console.log(data);
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({});
//       }, 300);
//     });
//   },
//   checkIfTutorsExists: async ({ splitRequests }) => {
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([0, 1, 2]);
//         // if (splitRequests.length > 2) {
//         //   resolve([0]);
//         // } else {
//         //   resolve([]);
//         // }
//       }, 3000);
//     });
//   },
//   downloadReceipt: async (requestSlug) => {
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({});
//       }, 3000);
//     });
//   },
//   bookLessons: async (slug, sessionsToBeBooked) => {
//     let first_session = sessionsToBeBooked.slice(0)[0];
//     let last_session = sessionsToBeBooked.slice(-1)[0];

//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({
//           bookingUrl: "https://www.tuteria.com/booking/SEWEWWSSE?logintutor",
//           from: first_session.startDate,
//           to: last_session.startDate,
//         });
//       }, 3000);
//     });
//   },
//   updateTutorResponse: async (tutorResponse, slug) => {
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log({ slug, tutorResponse });
//         // actions that should happen when the tutor status is updated.
//         // remember to convert the bookingStage from the object to an array
//         // of stage and duration since that is a better format. exclude any
//         // stage that has a value of null
//         // reject()
//         resolve(tutorResponse);
//       }, 3000);
//     });
//   },
//   initializeRequestData: async () => {
//     let requestData = storage.get(REQUEST_KEY, {});
//     return [requestData, []];
//   },
//   onSubmit: async (key, data, splitRequests) => {
//     let requestData = storage.get(REQUEST_KEY, {});
//     if (key === "student-details") {
//       requestData = { ...requestData, ...data };
//     }
//     if (key === "teacher-selection") {
//       requestData.teacherKind = data.teacherOption;
//     }
//     if (key === "lesson-schedule") {
//       requestData.lessonDetails = {
//         ...(requestData.lessonDetails || {}),
//         lessonSchedule: {
//           ...(requestData.lessonDetails.lessonSchedule || {}),
//           ...data,
//         },
//       };
//     }
//     if (key === "lesson-location") {
//       requestData.contactDetails = {
//         ...(requestData.contactDetails || {}),
//         vicinity: data.vicinity,
//         state: data.state,
//         country: data.country,
//         region: data.region,
//       };
//       requestData.lessonDetails = {
//         ...(requestData.lessonDetails || {}),
//         lessonType: data.lessonType,
//       };
//     }
//     if (key === "contact-information") {
//       requestData.contactDetails = {
//         ...(requestData.contactDetails || {}),
//         ...data,
//       };
//     }
//     if (splitRequests) {
//       requestData.splitRequests = splitRequests;
//     }
//     storage.set(REQUEST_KEY, requestData);
//     return data;
//   },
//   fetchAcademicData: async () => {
//     return ACADEMICS_DATA;
//   },
//   getCountries: async () => {
//     let result = {};
//     let _regions = storage.get(REGION_KEY, []);
//     if (Array.isArray(_regions) && _regions.length > 0) {
//       result.regions = _regions;
//     } else {
//       result.regions = regions;
//     }
//     let countries = storage.get(COUNTRY_KEY, []);
//     if (Array.isArray(countries) && countries.length > 0) {
//       result.countries = countries;
//     } else {
//       result.countries = allCountries;
//     }
//     let r = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result);
//       }, 500);
//     });
//     return {
//       ...r,
//       // country: "Nigeria"
//     };
//   },

//   updateTutorSchedule: async (key, values) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ key, values });
//       }, 1000);
//     });
//   },

//   updateTutorSubject: async (values) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(values);
//       }, 1500);
//     });
//   },
//   deleteSubject: async (values) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(values);
//       }, 1000);
//     });
//   },
//   savePricingInfo: async (data, availability) => {
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => resolve(), 500);
//     });
//   },
//   getNeighboringArea: async (region) => {
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => resolve(SAMPLENEIGHBORINGAREA), 100);
//     });
//   },
// };

// const videoDetailsObject = {
//   Updates: {
//     headline: "More info about updates page",
//     videoURL: "https://www.youtube.com/watch?v=mWZ6b_I-Djg",
//     thumbnailURL: "https://img.youtube.com/vi/HQx5Be9g16U/maxresdefault.jpg",
//     listItems: [
//       "What to expect in the update page",
//       "How to maximize the update page",
//     ],
//   },
//   Jobs: {
//     headline: "How to accept jobs",
//     videoURL: "https://www.youtube.com/watch?v=sVPYIRF9RCQ",
//     thumbnailURL: "https://img.youtube.com/vi/sVPYIRF9RCQ/default.jpg",
//     listItems: [
//       "When to update your schedule",
//       "How to exclude areas you are not interested in",
//     ],
//   },
//   Schedule: {
//     headline: "How to update your schedule and availability",
//     videoURL: "https://www.youtube.com/watch?v=HQx5Be9g16U",
//     thumbnailURL: "https://img.youtube.com/vi/HQx5Be9g16U/default.jpg",
//     listItems: [
//       "When to update your schedule",
//       "How to exclude areas you are not interested in",
//     ],
//   },
//   Lessons: {
//     headline: "How to use the lesson's page",
//     videoURL: "https://www.youtube.com/watch?v=eGVOSeXRy9o",
//     thumbnailURL: "https://img.youtube.com/vi/HQx5Be9g16U/default.jpg",
//     listItems: ["How to use the lesson's page"],
//   },
//   Subjects: {
//     headline: "How to update your subjects",
//     videoURL: "https://www.youtube.com/watch?v=dJpIU1rSOFY",
//     thumbnailURL: "https://img.youtube.com/vi/dJpIU1rSOFY/default.jpg",
//     listItems: [
//       "How to update your subject heading",
//       "How to update your subject descriptions",
//     ],
//   },
// };

// const availabilityData = {
//   availability: {
//     Monday: ["Morning", "Late afternoon"],
//     Wednesday: ["Evening", "Early evening"],
//   },
//   maxDays: 2,
//   maxHours: 1,
//   maxStudents: 3,
//   lastCalendarUpdate: "2021-05-14T00:00:00.000Z",
//   availabilityStatus: {
//     isAvailable: false,
//     resumptionDate: "2021-06-18",
//   },
//   exemptedAreas: ["Apapa", "Ajah", "Epe"],
// };
// const locationInfo = {
//   country: "Nigeria",
//   countries: allCountries,
//   state: "Lagos",
//   region: "Agege",
//   address: "Agege Estate",
//   vicinity: "Agege Bus stop",
//   regions: allRegions,
// };
// export const AvailabilityPage = ({}) => {
//   const store = TutorJobListStore.create({}, { adapter });
//   useEffect(() => {
//     store.updateAvailability(availabilityData);
//     store.updateLocationInfo(locationInfo);
//   }, []);

//   async function saveWhatsapp(number) {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(number);
//       }, 1000);
//     });
//   }

//   return (
//     <TutorsPageWrapper
//       defaultMenu={"Schedule"}
//       videoDetails={videoDetailsObject}
//       alertProps={{
//         hasCompletedProfile: true,
//         hasUpdatedSchedule: false,
//         hasSetPrice: true,
//         hasWhatsappNumber: false,
//         completeProfileLink: "",
//         updateScheduleLink: "",
//         setPriceLink: "",
//         setWhatsappNumber: (no) => saveWhatsapp(no),
//       }}
//     >
//       <Availability store={store.availability} />
//     </TutorsPageWrapper>
//   );
// };
