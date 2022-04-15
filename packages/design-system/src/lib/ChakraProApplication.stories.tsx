import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React from "react";
import "@fontsource/inter/variable.css";

export default {
  title: "Raw Designs/Application",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export * from "./ChakraProApplication";
