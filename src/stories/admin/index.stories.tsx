import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { Box } from "@chakra-ui/react";
import RemarkApp from "@tuteria/shared-lib/src/admin/Remark";
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
