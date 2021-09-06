import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/QuizPage";
import DATA from "@tuteria/shared-lib/src/tutor-revamp/quizzes/sample-quiz-data";
import QuizStore from "@tuteria/shared-lib/src/tutor-revamp/quizzes/quizStore";
import React from "react";
import "katex/dist/katex.min.css";

export default {
  title: "Tutor Application/Quiz",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const store = QuizStore.create({
  questions: DATA.quiz.questions,
});

export const Quiz = () => {
  return (
    <Box>
      <QuizPage index={0} store={store} onSubmit={async () => {}} />
    </Box>
  );
};
