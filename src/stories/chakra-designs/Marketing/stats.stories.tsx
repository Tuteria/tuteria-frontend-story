import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import StatsWithCardComponent from "../../pages/components/Marketing/Stats/StatsWithCard";
import React from "react";

export default {
  title: "Raw Designs/Marketing/Stats",
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

export const StatsWithCard = () => {
  return <StatsWithCardComponent />;
};
