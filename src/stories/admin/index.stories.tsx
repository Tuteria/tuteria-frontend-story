import { Box } from "@chakra-ui/react";
import RemarkApp from "@tuteria/shared-lib/src/admin/Remark";
import ReviewMediaUpload from "@tuteria/shared-lib/src/admin/ReviewMediaUpload";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";

export default {
  title: "Admin/Tutor Management",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export const UpdateRemark = () => {
  return (
    <RemarkApp
      content="Default content"
      request_id={1}
      actions={[
        { label: "Send profile to client", value: "profile_to_client" },
        { label: "Log calls/sms/email", value: "activity_log" },
        { label: "Contact client later", value: "call_client_later" },
        { label: "Generic action", value: "generic" },
      ]}
    />
  );
};

export const ReviewImageUpload = () => {
  return (
    <ReviewMediaUpload
      isOpen
      onClose={() => {}}
      loading={{ accept: false, reject: false }}
      mediaType="image"
      mediaUrl="https://res.cloudinary.com/iolab/image/upload/v1641370467/identity/orumaph-identity.jpg"
      onAccept={async () => {}}
      onReject={async () => {}}
      userInfo={{
        name: "Bernie Sandals",
        dob: "23/02/1965",
        gender: "Male",
      }}
    />
  );
};

export const ReviewNativeVideoUpload = () => {
  return (
    <ReviewMediaUpload
      isOpen
      onClose={() => {}}
      loading={{ accept: false, reject: false }}
      mediaType="video"
      mediaUrl="https://res.cloudinary.com/iolab/video/upload/v1641421294/video-submission/godwin-video.webm"
      onAccept={async () => {}}
      onReject={async () => {}}
      userInfo={{
        name: "Elon Mosque",
        dob: "02/12/1974",
        gender: "Male",
      }}
    />
  );
};

export const ReviewYoutubeVideoUpload = () => {
  return (
    <ReviewMediaUpload
      isOpen
      onClose={() => {}}
      loading={{ accept: false, reject: false }}
      mediaType="video"
      mediaUrl="https://www.youtube.com/watch?v=Z036fil8ang"
      onAccept={async () => {}}
      onReject={async () => {}}
      userInfo={{
        name: "Elon Mosque",
        dob: "02/12/1974",
        gender: "Male",
      }}
    />
  );
};
