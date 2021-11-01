import React from "react";
import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import StoreHomePage from "@tuteria/shared-lib/src/store/pages/Home";
import ICheckoutPage from "@tuteria/shared-lib/src/store/pages/CheckoutPage";
import ProductDetailPage from "@tuteria/shared-lib/src/store/pages/ProductDetail";
export default {
  title: "Store/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export const HomePage = () => {
  return <StoreHomePage />;
};

export const DetailPage = () => {
  return <ProductDetailPage />;
};

export const CheckoutPage = () => {
  return <ICheckoutPage />;
};
