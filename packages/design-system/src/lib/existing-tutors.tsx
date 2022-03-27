import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import ClientPages from "@tuteria/shared-lib/src/client-pages/root";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import { CLIENT_PAGES } from "@tuteria/shared-lib/src/stores/client-types";
import { useEffect } from "react";
import {
  initialData,
  subjectPageData,
  testAdapter,
} from "../existing-tutor-adapter";

/* eslint-disable-next-line */
export interface ExistingTutorsProps {
  children: any;
  effect?: any;
  page: any;

  [key: string]: any;
}

const store = initializeStore(testAdapter);

export function ExistingTutors({ page, ...props }: ExistingTutorsProps) {
  useEffect(() => {
    if (props.effect) {
      props.effect();
    }
  }, []);
  return (
    <ThemeProvider>
      <OverlayRouter>
        <ClientPages
          initialData={
            page === CLIENT_PAGES.SUBJECTS ? subjectPageData : initialData[page]
          }
          store={store}
          page={page}
          {...props}
        />
      </OverlayRouter>
    </ThemeProvider>
  );
}

export default ExistingTutors;
