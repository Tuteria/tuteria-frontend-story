import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithDarkBackgroundComponent from "../components/Marketing/Newsletter/WithDarkBackground";
import WithImageComponent from "../components/Marketing/Newsletter/WithImage";

export default {
  title: "Raw Designs/Marketing/Newsletters",
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

export const WithDarkBackground = () => <WithDarkBackgroundComponent />;
export const WithImage = () => <WithImageComponent />;
