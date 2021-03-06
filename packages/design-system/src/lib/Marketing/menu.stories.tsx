import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import SimpleWithBadgeComponent from "../components/Marketing/Menu/SimpleWithBadge";
import WithStartIcon from "../components/Marketing/Menu/WithStartIcon";
import React from "react";

export default {
  title: "Raw Designs/Marketing/Menu",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box
          h="100vh"
          bg="white"
          overflowX="hidden"
          css={{
            "&::-webkit-scrollbar": {
              display: "hidden",
            },
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export const SimpleWithBadge = () => {
  return <SimpleWithBadgeComponent />;
};
export const MenuWithStartIcon = () => {
  return <WithStartIcon />;
};
