import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import HeroWithStats from "../../pages/components/Marketing/Heroes/HeroWithStats";
import TwoColumnsImage from "../../pages/components/Marketing/Heroes/TwoColumnsImage";
import WithFeaturedLogosComponent from "../../pages/components/Marketing/Heroes/WithFeaturedLogos";
import WithImageBackgroundComponent from "../../pages/components/Marketing/Heroes/WithImageBackground";
import WithScreenshotBelowComponent from "../../pages/components/Marketing/Heroes/WithScreenshotBelow";
import WithSlightCutImageComponent from "../../pages/components/Marketing/Heroes/WithSlightCutImage";
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
