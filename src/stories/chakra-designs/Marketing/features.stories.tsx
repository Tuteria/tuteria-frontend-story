import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import TwoByTwoComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/TwoByTwo";
import DarkWithTestimonialComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/DarkWithTestimonial";
import WithImageComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/WithImage";
import TabsWithIconComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/TabsWithIcon";
import TestimonialWithVideoComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/TestimonialWithVideo";
import ThreeColumnGridBelowComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/ThreeColumnGridBelow";
import TwoByTwoGridComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/TwoByTwoGrid";
import WithSixLinksComponent from "@tuteria/shared-lib/src/components/chakra-pro/Features/WithSixLinks";

export default {
  title: "Raw Designs/Marketing/Features",
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

export const TwoByTwo = () => <TwoByTwoComponent />;
export const DarkWithTestimonial = () => <DarkWithTestimonialComponent />;
export const WithImage = () => <WithImageComponent />;
export const TabsWithIcon = () => <TabsWithIconComponent />;
export const TestimonialWithVideo = () => <TestimonialWithVideoComponent />;
export const ThreeColumnGridBelow = () => <ThreeColumnGridBelowComponent />;
export const TwoByTwoGrid = () => <TwoByTwoGridComponent />;
export const WithSixLinks = () => <WithSixLinksComponent />;
