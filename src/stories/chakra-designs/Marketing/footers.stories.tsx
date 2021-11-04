import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithTwoColumnsComponent from "../../pages/components/Marketing/Footers/WithTwoColumns";
import SimpleComponent from "../../pages/components/Marketing/Footers/Simple";
import WithFourColumnsComponent from "../../pages/components/Marketing/Footers/WithFourColumns";
import WithLogoBelowComponent from "../../pages/components/Marketing/Footers/WithLogoBelow";

export default {
  title: "Raw Designs/Marketing/Footers",
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

export const WithTwoColumns = () => <WithTwoColumnsComponent />;
export const Simple = () => <SimpleComponent />;
export const WithFourColumns = () => <WithFourColumnsComponent />;
export const WithLogoBelow = () => <WithLogoBelowComponent />;
