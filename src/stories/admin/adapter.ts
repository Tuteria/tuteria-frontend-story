import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import {
  fetchTutorsState,
  poolInstanceState,
  profileToClientState,
  tutorApprovalState,
  updateBudgetState,
} from "@tuteria/shared-lib/src/old-admin/utils";
import {
  SAMPLEREQUEST,
  TUTORSEARCHRESULT_DATA,
} from "../new-request-flow/sampleData";
import clientAdapter from "@tuteria/shared-lib/src/external-pages/request-flow/client-utils";

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
  }),
};
