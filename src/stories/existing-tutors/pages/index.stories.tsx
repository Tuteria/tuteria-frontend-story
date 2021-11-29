import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import ClientPages from "@tuteria/shared-lib/src/client-pages/root";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import "katex/dist/katex.min.css";
import React from "react";
import "react-phone-input-2/lib/style.css";
import { subjectPageData, testAdapter, initialData } from "../adapter";

export default {
  title: "Existing Tutors/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <OverlayRouter>
          <Story />
        </OverlayRouter>
      </ThemeProvider>
    ),
  ],
};

const store = initializeStore(testAdapter);

export const SubjectsPage = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.SUBJECTS}
      store={store}
      initialData={subjectPageData}
    />
  );
};

export const PersonalInfoPage = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.PROFILE_EDIT}
      store={store}
      initialData={initialData[CLIENT_PAGES.PROFILE_EDIT]}
    />
  );
};
