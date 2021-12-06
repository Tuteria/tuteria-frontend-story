import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import ClientPages from "@tuteria/shared-lib/src/client-pages/root";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import "katex/dist/katex.min.css";
import React from "react";
import "react-phone-input-2/lib/style.css";
import { initialData, testAdapter } from "../adapter";

export default {
  title: "Existing Tutors/Pages/Verification",
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

export const IDVerification = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.VERIFICATION}
      store={store}
      initialData={initialData[CLIENT_PAGES.VERIFICATION] || {}}
    />
  );
};
export const Guarantors = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.GUARANTOR_INFO}
      store={store}
      initialData={initialData[CLIENT_PAGES.GUARANTOR_INFO] || {}}
    />
  );
};
export const UploadProof = () => {
  return (
    <ClientPages
      page={CLIENT_PAGES.UPLOAD_PROOF}
      store={store}
      initialData={initialData[CLIENT_PAGES.UPLOAD_PROOF] || {}}
    />
  );
};
