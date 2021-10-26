import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import TutorLandingPage from "@tuteria/shared-lib/src/tutor-application/pages/TutorLandingPage";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Story />
        </Suspense>
      </ThemeProvider>
    ),
  ],
};

export const LandingPage = () => {
  return <TutorLandingPage />;
};
