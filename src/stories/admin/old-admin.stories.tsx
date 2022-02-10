import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import BookGroupLessonModalComponent from "@tuteria/shared-lib/src/old-admin/BookGroupLessonModal";
import ClientRequestModalComponent from "@tuteria/shared-lib/src/old-admin/ClientRequestModal";
import NewClientRequestModalComponent from "@tuteria/shared-lib/src/old-admin/NewClientRequestModal";
import {
  BookGroupLessonStore,
  OldRequestStore,
} from "@tuteria/shared-lib/src/stores/old-request";
import { observer } from "mobx-react-lite";
import React from "react";
import { testAdapter } from "./adapter";

export default {
  title: "Admin/Old Admin",
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

export const ClientRequestModal = () => {
  const store = OldRequestStore.create(
    {
      hourlyBudget: 3000,
      totalBudget: 70000,
      instance: {
        requestSlug: "K5WW2U3WIO0K",
        requestSubjects: "Chemistry,Biology",
      },
    },
    { adapter: testAdapter }
  );

  return <ClientRequestModalComponent store={store} />;
};

const NewClientRequestModalStory = observer(({ store }: any) => {
  React.useEffect(() => {
    store.initializeRequestInstance();
  }, []);
  return (
    <OverlayRouter>
      <NewClientRequestModalComponent store={store} />
    </OverlayRouter>
  );
});

export const NewClientRequestModal = () => {
  const store = OldRequestStore.create(
    {
      walletBalance: 3000,
      totalBudget: 70000,
      instance: {
        requestSlug: "K5WW2U3WIO0K",
        requestSubjects: "Chemistry,Biology",
        requestUrl: `https://tuteria.com/we-are-allowed`,
      },
    },
    { adapter: testAdapter }
  );
  return <NewClientRequestModalStory store={store} />;
};

export const BookGroupLessonModal = () => {
  const store = BookGroupLessonStore.create(
    {},
    {
      search(email) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ email });
          }, 2000);
        });
      },
      bookTutor(email, amount) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ slug: "IELTSTUTOR101" });
          }, 2000);
        });
      },
      payTutor(email, slug, amountToBePaid) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ amount: amountToBePaid });
          }, 2000);
        });
      },
    }
  );
  return (
    <BookGroupLessonModalComponent
      store={store}
      transactionUrl=""
      bookingUrl=""
    />
  );
};
