import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithLogoGridComponent from "../components/Marketing/LogoGrid/WithBoxedLogo";
import WithBrandBackgroundComponent from "../components/Marketing/LogoGrid/WithBrandBackground";

export default {
  title: "Raw Designs/Marketing/Logo Grid",
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

export const WithLogoGrid = () => <WithLogoGridComponent />;
export const WithBrandBackground = () => <WithBrandBackgroundComponent />;
