import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithButtonsComponent from "../components/Marketing/NavBar/WithButtons";
import WithFullButtonsComponent from "../components/Marketing/NavBar/WithFullButtons";
import WithRightCTAComponent from "../components/Marketing/NavBar/WithRightCTA";
import WithSubMenuComponent from "../components/Marketing/NavBar/WithSubMenu";
import WithTabsComponent from "../components/Marketing/NavBar/WithTabs";

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
