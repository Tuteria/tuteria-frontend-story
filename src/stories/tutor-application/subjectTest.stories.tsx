import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import React from "react";
import "katex/dist/katex.min.css";
import { linkTo } from "@storybook/addon-links";
import { RootStore } from "@tuteria/shared-lib/src/stores";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";

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

export const SubjectTest = () => {
  return (
    <TestPage
      store={store}
      navigateToQuiz={() => linkTo("Tutor Application/Pages/Quiz", "Quiz")()}
      navigateBack={() => linkTo("Tutor Application/Pages", "Tutor Page")()}
    />
  );
};
