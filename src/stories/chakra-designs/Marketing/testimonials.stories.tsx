import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import CentredWithSliderComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/CenteredWithSlider";
import WithChatBubbleComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/WithChatBubble";
import WithLargeImageComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/WithLargeImage";
import WithRatingComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/WithRating";
import WithTwoColumnComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/WithTwoColumn";
import WithVideoComponent from "@tuteria/shared-lib/src/components/chakra-pro/Testimonials/WithVideo";
import React from "react";

export default {
  title: "Raw Designs/Marketing/Testimonials",
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

export const CentredWithSlider = () => {
  return <CentredWithSliderComponent />;
};
export const WithChatBubble = () => {
  return <WithChatBubbleComponent />;
};
export const WithLargeImage = () => {
  return <WithLargeImageComponent />;
};
export const WithRating = () => {
  return <WithRatingComponent />;
};
export const WithTwoColumn = () => {
  return <WithTwoColumnComponent />;
};
export const WithVideo = () => {
  return <WithVideoComponent />;
};
