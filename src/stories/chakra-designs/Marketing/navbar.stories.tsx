import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithButtonsComponent from "@tuteria/shared-lib/src/components/chakra-pro/NavBar/WithButtons";
import WithFullButtonsComponent from "@tuteria/shared-lib/src/components/chakra-pro/NavBar/WithFullButtons";
import WithRightCTAComponent from "@tuteria/shared-lib/src/components/chakra-pro/NavBar/WithRightCTA";
import WithSubMenuComponent from "@tuteria/shared-lib/src/components/chakra-pro/NavBar/WithSubMenu";
import WithTabsComponent from "@tuteria/shared-lib/src/components/chakra-pro/NavBar/WithTabs";

export default {
  title: "Raw Designs/Marketing/NavBar",
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

export const WithButtons = () => <WithButtonsComponent />;
export const WithFullButtons = () => <WithFullButtonsComponent />;
export const WithRightCTA = () => <WithRightCTAComponent />;
export const WithSubMenu = () => <WithSubMenuComponent />;
export const WithTabs = () => <WithTabsComponent />;
