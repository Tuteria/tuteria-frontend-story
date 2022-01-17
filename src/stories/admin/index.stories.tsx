import { Box, useDisclosure } from "@chakra-ui/react";
import RemarkApp from "@tuteria/shared-lib/src/admin/Remark";
import ReviewMediaUpload from "@tuteria/shared-lib/src/admin/ReviewMediaUpload";
import ReviewGuarantorComponent from "@tuteria/shared-lib/src/admin/ReviewGuarantors";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import { samplePromise } from "../tutor-application/adapter";

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
      onUpdateRemark={() => {}}
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
  const [loading, setLoading] = React.useState({
    accept: false,
    reject: false,
  });
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  function onAccept() {
    setLoading({ ...loading, accept: true });
    return samplePromise({}).then(() => {
      onClose();
    });
  }

  function onReject() {
    setLoading({ ...loading, reject: true });
    return samplePromise({}).then(() => {
      onClose();
    });
  }

  return (
    <ReviewMediaUpload
      isOpen
      loading={{ accept: false, reject: false }}
      mediaType="image"
      mediaUrl="https://res.cloudinary.com/iolab/image/upload/v1641370467/identity/orumaph-identity.jpg"
      onAccept={async () => {}}
      onClose={() => {}}
      onReject={async () => {}}
      profileUrl="https://res.cloudinary.com/iolab/image/upload/v1641370428/profile_pics/orumaph-profile.png"
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
        name: "Nezuko Kamado",
        dob: "02/12/2009",
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
        name: "Eren Yaeger",
        dob: "02/12/1974",
        gender: "Male",
      }}
    />
  );
};

export function ReviewGuarantors() {
  return (
    <ReviewGuarantorComponent
      actions={{
        onAccept: async () => {},
        onDelete: async () => {},
        onReject: async () => {},
      }}
      guanrantors={[
        {
          title: "Mr.",
          fullName: "Inosuke Hashibira",
          email: "inosukeh@gmail.com",
          occupation: "Demon Slayer",
          phone: "12345678",
          company: "Demon Slayer Corps",
          relationship: "Friend",
          isVerified: true,
          no_of_years: 4,
        },
        {
          title: "Mr.",
          fullName: "Edward Elric",
          email: "fullmetal@gmail.com",
          occupation: "Alchemist",
          phone: "08034562134",
          company: "Amestris State Military",
          relationship: "Brother",
          isVerified: false,
          no_of_years: 2,
        },
      ]}
      isOpen
      loading={{ accept: false, reject: false }}
      onClose={() => {}}
    />
  );
}
