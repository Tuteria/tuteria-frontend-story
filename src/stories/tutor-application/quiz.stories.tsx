import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import QuizPage from "@tuteria/shared-lib/src/tutor-revamp/quizzes/QuizPage";
import DATA from "@tuteria/shared-lib/src/data/sample-quiz-data";
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
    quiz: DATA.quiz,
  },
  {
    postResults: async (answers: Array<any>, subject) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ subject, answers });
        }, 3000);
      });
    },
  }
);

// This variable will come from query parameters
const params = "General Mathematics";

export const Quiz = () => {
  React.useEffect(() => {
    // store.initializeQuizQuestions({ questions: DATA.quiz.questions });
    store.setTestSubject(params);
  }, []);

  function redirect() {
    if (store.quizResults.passedQuiz) {
      linkTo("Tutor Application/Pages", "Subject Creation")();
    } else {
      linkTo("Tutor Application/Pages", "Tutor Page")();
    }
  }

  return (
    <Box>
      <QuizPage index={0} store={store} navigate={redirect} />
    </Box>
  );
};
