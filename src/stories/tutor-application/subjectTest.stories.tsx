import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import React from "react";
import "katex/dist/katex.min.css";
import { linkTo } from "@storybook/addon-links";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";

export default {
  title: "Tutor Application/Pages/Subject Test",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const store = RootStore.create(
  {},
  {
    fetchQuizQuestions: async (quizSubjects) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ quiz: DATA.quiz, quizSubjects });
        }, 2000);
      });
    },
  }
);

const params = "General Mathematics";

export const SubjectTest = () => {
  const [loading, setLoading] = React.useState(false);

  const navigateToQuiz = () => {
    linkTo("Tutor Application/Pages/Quiz", "Quiz")();
  };

  React.useEffect(() => {
    store.subject.setTestSubject(params);
    if (store.subject.listOfTestableSubjects.length === 0) {
      setLoading(true);
      store.subject.fetchQuizQuestions().then((res) => navigateToQuiz());
    }
  });

  if (loading) {
    return <LoadingState text="Fetching questions..." />;
  }

  return (
    <TestPage
      store={store}
      navigateToQuiz={navigateToQuiz}
      navigateBack={() => linkTo("Tutor Application/Pages", "Tutor Page")()}
    />
  );
};
