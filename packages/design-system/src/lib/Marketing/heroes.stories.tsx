import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import HeroWithStats from "../components/Marketing/Heroes/HeroWithStats";
import TwoColumnsImage from "../components/Marketing/Heroes/TwoColumnsImage";
import WithFeaturedLogosComponent from "../components/Marketing/Heroes/WithFeaturedLogos";
import WithImageBackgroundComponent from "../components/Marketing/Heroes/WithImageBackground";
import WithScreenshotBelowComponent from "../components/Marketing/Heroes/WithScreenshotBelow";
import WithSlightCutImageComponent from "../components/Marketing/Heroes/WithSlightCutImage";
import React from "react";
import { Box } from "@chakra-ui/react";

export default {
  title: "Raw Designs/Marketing/Heroes",
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

export const HeroesWithStatsBelow = () => {
  return <HeroWithStats />;
};
export const TwoColumnsWithImage = () => {
  return <TwoColumnsImage />;
};
export const WithFeaturedLogos = () => {
  return <WithFeaturedLogosComponent />;
};
export const WithImageBackground = () => {
  return <WithImageBackgroundComponent />;
};
export const WithScreenshotBelow = () => {
  return <WithScreenshotBelowComponent />;
};
export const WithSlightCutImage = () => {
  return <WithSlightCutImageComponent />;
};
