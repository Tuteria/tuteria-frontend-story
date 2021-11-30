import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import ClientPages from "@tuteria/shared-lib/src/client-pages/root";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import "katex/dist/katex.min.css";
import React from "react";
import "react-phone-input-2/lib/style.css";
import { initialData, subjectPageData, testAdapter } from "../adapter";

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
      page={CLIENT_PAGES.PERSONAL_INFO}
      store={store}
      initialData={initialData[CLIENT_PAGES.PERSONAL_INFO]}
    />
  );
};
export const LocationInfoPage = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.LOCATION_INFO}
      store={store}
      initialData={initialData[CLIENT_PAGES.LOCATION_INFO]}
    />
  );
};
export const VerficationPage = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.VERIFICATION}
      store={store}
      initialData={initialData[CLIENT_PAGES.VERIFICATION] || {}}
    />
  );
};
