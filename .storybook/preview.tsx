import { ThemeProvider } from "@tuteria/mobile-lib/src/bootstrap";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    // <ThemeProvider>
    <Story />
    // </ThemeProvider>
  ),
];
