import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import TwoByTwoComponent from "../components/Marketing/Features/TwoByTwo";
import DarkWithTestimonialComponent from "../components/Marketing/Features/DarkWithTestimonial";
import WithImageComponent from "../components/Marketing/Features/WithImage";
import TabsWithIconComponent from "../components/Marketing/Features/TabsWithIcon";
import TestimonialWithVideoComponent from "../components/Marketing/Features/TestimonialWithVideo";
import ThreeColumnGridBelowComponent from "../components/Marketing/Features/ThreeColumnGridBelow";
import TwoByTwoGridComponent from "../components/Marketing/Features/TwoByTwoGrid";
import WithSixLinksComponent from "../components/Marketing/Features/WithSixLinks";

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
