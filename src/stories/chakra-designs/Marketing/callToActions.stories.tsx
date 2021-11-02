import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import SimpleCenteredComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/SimpleCentered";
import CallCenterComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/CallCenter";
import MobileAppComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/MobileApp";
import WithInputComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/Withinput";
import WithRightButtonsComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/WithRightButtons";
import WithTwoActionsComponent from "@tuteria/shared-lib/src/components/chakra-pro/CallToActions/WithTwoActions";

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
