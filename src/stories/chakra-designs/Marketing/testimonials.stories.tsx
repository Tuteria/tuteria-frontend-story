import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import CentredWithSliderComponent from "../../pages/components/Marketing/Testimonials/CenteredWithSlider";
import WithChatBubbleComponent from "../../pages/components/Marketing/Testimonials/WithChatBubble";
import WithLargeImageComponent from "../../pages/components/Marketing/Testimonials/WithLargeImage";
import WithRatingComponent from "../../pages/components/Marketing/Testimonials/WithRating";
import WithTwoColumnComponent from "../../pages/components/Marketing/Testimonials/WithTwoColumn";
import WithVideoComponent from "../../pages/components/Marketing/Testimonials/WithVideo";
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
