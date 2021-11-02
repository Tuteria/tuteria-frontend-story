import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithTwoColumnsComponent from "@tuteria/shared-lib/src/components/chakra-pro/Footers/WithTwoColumns";
import SimpleComponent from "@tuteria/shared-lib/src/components/chakra-pro/Footers/Simple";
import WithFourColumnsComponent from "@tuteria/shared-lib/src/components/chakra-pro/Footers/WithFourColumns";
import WithLogoBelowComponent from "@tuteria/shared-lib/src/components/chakra-pro/Footers/WithLogoBelow";

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
