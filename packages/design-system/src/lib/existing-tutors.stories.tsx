import { Meta, Story } from "@storybook/react";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import React from "react";
import ExistingTutors, { ExistingTutorsProps } from "./existing-tutors";

export default {
  component: ExistingTutors,
  title: "Existing Tutors/Pages",
} as Meta;

const Template: Story<ExistingTutorsProps> = (args) => (
  <ExistingTutors {...args} />
);

export const SubjectsPage = Template.bind({});
SubjectsPage.args = {
  page: CLIENT_PAGES.SUBJECTS,
};

export const PersonalInfoPage = Template.bind({});
PersonalInfoPage.args = {
  page: CLIENT_PAGES.PERSONAL_INFO,
};

export const LocationInfoPage = Template.bind({});
LocationInfoPage.args = {
  page: CLIENT_PAGES.LOCATION_INFO,
};

export const EducationHistoryPage = Template.bind({});
EducationHistoryPage.args = {
  page: CLIENT_PAGES.EDUCATION_HISTORY,
};

export const WorkHistoryPage = Template.bind({});
WorkHistoryPage.args = { page: CLIENT_PAGES.WORK_HISTORY };

export const TeachingProfilePage = Template.bind({});
TeachingProfilePage.args = { page: CLIENT_PAGES.TEACHING_PROFILE };

export const SchedulePage = Template.bind({});
SchedulePage.args = { page: CLIENT_PAGES.SCHEDULE_INFO };

export const JobsPage = Template.bind({});
JobsPage.args = { page: CLIENT_PAGES.JOBS, host: "", agent: undefined };

export const PaymentInformation = Template.bind({});
PaymentInformation.args = {
  page: CLIENT_PAGES.PAYMENT_INFO,
  host: "",
  agent: undefined,
  onNextStep() {
    console.log("complete");
  },
};

export const IDVerification = Template.bind({});
IDVerification.args = { page: CLIENT_PAGES.VERIFICATION };

export const Guarantors = Template.bind({});
Guarantors.args = { page: CLIENT_PAGES.GUARANTOR_INFO };

export const UploadProof = Template.bind({});
UploadProof.args = { page: CLIENT_PAGES.UPLOAD_PROOF };
