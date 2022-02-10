import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import {
  fetchTutorsState,
  poolInstanceState,
  profileToClientState,
  tutorApprovalState,
  updateBudgetState,
  additionalInfoState,
} from "@tuteria/shared-lib/src/old-admin/utils";
import {
  SAMPLEREQUEST,
  TUTORSEARCHRESULT_DATA,
} from "../new-request-flow/sampleData";
import clientAdapter from "@tuteria/shared-lib/src/external-pages/request-flow/client-utils";
import { samplePromise } from "../tutor-application/adapter";

const serverResult = {
  tutors: [
    {
      full_name: "Cyril U",
      email: "cyonos2003@yahoo.com",
      phone_no: "+2348034187494",
      address: "Block 207 Amuwo-odofin estate,mile 2 Lagos",
      pool_id: 108772,
      approved: false,
      teaches_all: true,
      matched_subjects: [
        {
          name: "Quantitative Reasoning",
          active: true,
          url: "/ng/cyrilu/i-love-teaching-quantitative-and-helping-my-pupils-get-better-grades/",
        },
        {
          name: "Verbal Reasoning",
          active: true,
          url: "/ng/cyrilu/i-love-teaching-verbal-and-helping-my-pupils-get-better-grades/",
        },
        {
          name: "General Mathematics",
          active: true,
          url: "/ng/cyrilu/graduate-of-engineering-and-an-expert-mathematics-teacher/",
        },
        {
          name: "English Language",
          active: true,
          url: "/ng/cyrilu/i-love-teaching-basic-english-and-helping-my-pupils-get-better-grades/",
        },
      ],
      default_subject: null,
      cost: "3333.33",
    },
    {
      full_name: "Gloria A",
      email: "arinzeifeomagloria@yahoo.com",
      phone_no: "+2348176863652",
      address: "51 road block 41 flat 12 festac town lagos Festac Town Lagos",
      pool_id: 108796,
      approved: true,
      teaches_all: true,
      matched_subjects: [
        {
          name: "English Language",
          active: true,
          url: "/ng/ifeomaa4/experienced-english-instructor-with-a-personalized-teaching-approach/",
        },
      ],
      default_subject: "English Language",
      cost: "3334.00",
    },
  ],
};

export const testAdapter = {
  getTutorsFromPool(slug, component) {
    let result = {
      tutors: [
        {
          full_name: "Adewale R",
          email: "samradicey@gmail.com",
          phone_no: "+2348063560343",
          address:
            "1, Olusegun Akinseli Street, TVC Junction, Eruwen  Itamaga Axis Lagos",
          pool_id: 103683,
          approved: true,
          teaches_all: true,
          matched_subjects: [
            {
              name: "Geography",
              active: true,
              url: "/ng/adewaler/an-analytical-geography-teacher-and-a-map-reading-adept/",
            },
            {
              name: "Biology",
              active: true,
              url: "/ng/adewaler/learn-biology-with-my-knowledge-of-medical-microbiology/",
            },
            {
              name: "Basic Sciences",
              active: true,
              url: "/ng/adewaler/a-medical-microbiologist-with-8years-of-teaching-integratedbasic-sci/",
            },
            {
              name: "Chemistry",
              active: true,
              url: "/ng/adewaler/an-analytical-and-practical-oriented-chemistry-teacher/",
            },
          ],
          default_subject: "Chemistry",
          cost: "3000.00",
        },
      ],
    };
    fetchTutorsState(component, result);
    return Promise.resolve(result);
  },
  updateBudgetFunc(slug, budget, component) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        updateBudgetState(component, {
          msg: "Updated Budget",
          new_budget: budget,
          hourly_price: 4000,
        });
        resolve({});
      }, 300);
    });
  },
  async updateAdditionalInfo(poolId, component, action, postData, updateMsg) {
    console.log({ action, postData });
    additionalInfoState(
      component,
      { msg: "Updated budget and lesson count" },
      updateMsg
    );
    return samplePromise({});
  },
  handleToggleApprovalFunc(poolId, approval, component, updateMsg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tutorApprovalState(
          component,
          approval,
          {
            msg: "Approved",
          },
          updateMsg
        );
        resolve({});
      }, 300);
    });
  },
  updatePoolInstance(poolId, component, action, postData, updateMsg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(action, postData);
        poolInstanceState(
          component,
          { msg: "Pool instance updated" },
          updateMsg
        );
        resolve({});
      }, 300);
    });
  },
  sendProfileToClient(slug, component) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        profileToClientState(component, {
          msg: "Sent profile to client",
        });
        resolve({});
      }, 300);
    });
  },
  initializeRequestData(slug) {
    return new Promise((resolve, reject) => {
      let arr = [TUTORSEARCHRESULT_DATA[0]];
      setTimeout(() => {
        resolve({
          requestData: {
            ...SAMPLEREQUEST,
            splitRequests: SAMPLEREQUEST.splitRequests.map((o, i) => {
              return {
                ...o,
                tutorId: arr[i]?.userId,
                tutorData: arr[i] || null,
              };
            }),
          },
          academicInfo: ACADEMICS_DATA,
          tutorsData: arr,
          farePerKM: 50,
          distanceThreshold: 5,
        });
      }, 300);
    });
  },
  async addTutorToPool(email, subject) {
    console.log({ email, subject });
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 300);
    });
  },
  ...clientAdapter({
    async saveRequestToServer(data) {
      console.log(data);
      return { slug: "XDESDS" };
    },
    async fetchTutorToAddToSplit(requestData, tutorEmail) {
      let result = TUTORSEARCHRESULT_DATA[1];
      console.log({ requestData, tutorEmail, result });
      return result;
    },
    async onTutorsSelected(passedData) {
      console.log("Saved to server", passedData);
      debugger;
      return {};
    },
    async updateAdditionalInfo(...rest) {
      console.log(rest);
      return samplePromise({});
    },
  }),
};
