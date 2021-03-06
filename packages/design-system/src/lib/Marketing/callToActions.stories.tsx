import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import SimpleCenteredComponent from "../components/Marketing/CallToActions/SimpleCentered";
import CallCenterComponent from "../components/Marketing/CallToActions/CallCenter";
import MobileAppComponent from "../components/Marketing/CallToActions/MobileApp";
import WithInputComponent from "../components/Marketing/CallToActions/Withinput";
import WithRightButtonsComponent from "../components/Marketing/CallToActions/WithRightButtons";
import WithTwoActionsComponent from "../components/Marketing/CallToActions/WithTwoActions";

export default {
  title: "Raw Designs/Marketing/Call To Actions",
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

export const SimpleCentered = () => <SimpleCenteredComponent />;
export const CallCenter = () => <CallCenterComponent />;
export const MobileApp = () => <MobileAppComponent />;
export const WithInput = () => <WithInputComponent />;
export const WithRightButtons = () => <WithRightButtonsComponent />;
export const WithTwoActions = () => <WithTwoActionsComponent />;
