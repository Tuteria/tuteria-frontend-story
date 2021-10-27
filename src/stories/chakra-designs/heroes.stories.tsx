import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import HeroWithStats from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/HeroWithStats";
import TwoColumnsImage from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/TwoColumnsImage";
import WithFeaturedLogosComponent from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/WithFeaturedLogos";
import WithImageBackgroundComponent from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/WithImageBackground";
import WithScreenshotBelowComponent from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/WithScreenshotBelow";
import WithSlightCutImageComponent from "@tuteria/shared-lib/src/components/chakra-pro/Heroes/WithSlightCutImage";
import React from "react";
import { Box } from "@chakra-ui/react";

export default {
  title: "Components/Chakra Pro/Heroes",
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
