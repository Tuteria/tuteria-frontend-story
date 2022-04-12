import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithCornerBadgeComponent from "../components/Marketing/Pricing/WithCornerBadge";
import MultiColoredComponent from "../components/Marketing/Pricing/MultiColored";
import ThreeTiersWithToggleComponent from "../components/Marketing/Pricing/ThreeTiersWithToggle";
import TwoTiersWithBottomBlockComponent from "../components/Marketing/Pricing/TwoTiersWithBottomBlock";
import WithFlushedCardsComponent from "../components/Marketing/Pricing/WithFlushedCards";

export default {
  title: "Raw Designs/Marketing/Pricing",
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

export const WithCornerBadge = () => <WithCornerBadgeComponent />;
export const MultiColored = () => <MultiColoredComponent />;
export const ThreeTiersWithToggle = () => <ThreeTiersWithToggleComponent />;
export const TwoTiersWithBottomBlock = () => (
  <TwoTiersWithBottomBlockComponent />
);
export const WithFlushedCards = () => <WithFlushedCardsComponent />;
