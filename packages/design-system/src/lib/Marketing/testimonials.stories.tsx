import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import CentredWithSliderComponent from "../components/Marketing/Testimonials/CenteredWithSlider";
import WithCurveComponent from "../components/Marketing/Testimonials/WithCurve";
import WithChatBubbleComponent from "../components/Marketing/Testimonials/WithChatBubble";
import WithLargeImageComponent from "../components/Marketing/Testimonials/WithLargeImage";
import WithRatingComponent from "../components/Marketing/Testimonials/WithRating";
import WithTwoColumnComponent from "../components/Marketing/Testimonials/WithTwoColumn";
import WithVideoComponent from "../components/Marketing/Testimonials/WithVideo";
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
export const WithCurve = () => {
  return <WithCurveComponent />;
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
