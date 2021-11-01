import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithCardComponent from "@tuteria/shared-lib/src/components/chakra-pro/Team/WithCard";
import WithCentredLayoutComponent from "@tuteria/shared-lib/src/components/chakra-pro/Team/WithCentredLayout";
import WithCirclePhotoComponent from "@tuteria/shared-lib/src/components/chakra-pro/Team/WithCirclePhoto";
import WithSquarePhotoComponent from "@tuteria/shared-lib/src/components/chakra-pro/Team/WithSquarePhoto";

export default {
  title: "Raw Designs/Marketing/Team",
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

export const WithCard = () => <WithCardComponent />;
export const WithCentredLayout = () => <WithCentredLayoutComponent />;
export const WithCirclePhoto = () => <WithCirclePhotoComponent />;
export const WithSquarePhoto = () => <WithSquarePhotoComponent />;
