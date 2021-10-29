import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import WithCornerBadgeComponent from "@tuteria/shared-lib/src/components/chakra-pro/Pricing/WithCornerBadge";
import MultiColoredComponent from "@tuteria/shared-lib/src/components/chakra-pro/Pricing/MultiColored";
import ThreeTiersWithToggleComponent from "@tuteria/shared-lib/src/components/chakra-pro/Pricing/ThreeTiersWithToggle";
import TwoTiersWithBottomBlockComponent from "@tuteria/shared-lib/src/components/chakra-pro/Pricing/TwoTiersWithBottomBlock";
import WithFlushedCardsComponent from "@tuteria/shared-lib/src/components/chakra-pro/Pricing/WithFlushedCards";

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
