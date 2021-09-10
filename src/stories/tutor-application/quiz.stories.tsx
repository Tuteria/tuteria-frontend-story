import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/QuizPage";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import QuizStore from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import React from "react";
import "katex/dist/katex.min.css";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Tutor Application/Pages/Quiz",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const store = QuizStore.create(
  {
    questions: DATA.quiz.questions,
  },
  {
    postResults: async (answers: Array<any>) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(answers);
        }, 3000);
      });
    },
  }
);

export const Quiz = () => {
  function redirect() {
    linkTo("Tutor Application/Pages", "Tutor Page")();
  }
  return (
    <Box>
      <QuizPage index={0} store={store} onSubmit={redirect} />
    </Box>
  );
};
