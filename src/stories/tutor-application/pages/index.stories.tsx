import { linkTo } from "@storybook/addon-links";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { LoadingState } from "@tuteria/shared-lib/src/components/data-display/LoadingState";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import allRegions from "@tuteria/shared-lib/src/data/regions.json";
import supportedCountries from "@tuteria/shared-lib/src/data/supportedCountries.json";
import storage from "@tuteria/shared-lib/src/storage";
import LoginPage from "@tuteria/shared-lib/src/tutor-application/Login";
import SubjectCreationPage from "@tuteria/shared-lib/src/tutor-revamp/SubjectCreationForm";
import TestPage from "@tuteria/shared-lib/src/tutor-revamp/TestPage";
import "katex/dist/katex.min.css";
import { loadAdapter } from "@tuteria/shared-lib/src/adapter";
import { initializeStore } from "@tuteria/shared-lib/src/stores";
import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { testAdapter } from "../adapter";
import TutorPageComponent from "../components/TutorPageComponent";
import LandingView from "@tuteria/shared-lib/src/tutor-application/pages/LandingPage";
import { useState } from "markdown-to-jsx/node_modules/@types/react";

export default {
  title: "Tutor Application/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Story />
        </Suspense>
      </ThemeProvider>
    ),
  ],
};
const adapter = loadAdapter(testAdapter);
const store = initializeStore(testAdapter);

type TutorStoreType = {
  locationInfo: any;
  personalInfo: any;
  educationWorkHistory: any;
  subject: any;
};

export const TutorPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    storage.set(adapter.regionKey, allRegions);
    storage.set(adapter.countryKey, allCountries);
    storage.set(adapter.supportedCountriesKey, supportedCountries);
    store.initializeTutorData(
      allRegions,
      allCountries,
      supportedCountries,
      testAdapter.loadExistingTutorInfo()
    );
    store.fetchTutorSubjects();
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <TutorPageComponent
      store={store}
      onTakeTest={() => {
        linkTo("Tutor Application/Pages", "Subject Test")();
      }}
    />
  );
};

// This variable will come from query parameters
const params = "General Mathematics";

const navigateToQuiz = () => {
  linkTo("Tutor Application/Pages/Quiz", "Quiz")();
};
export const SubjectTest = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    store.subject.setTestSubject(params);
    if (store.subject.listOfTestableSubjects.length === 0) {
      setLoading(true);
      store.subject.fetchQuizQuestions().then((res) => navigateToQuiz());
    }
  }, []);

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

let pk = 209528;
export const SubjectCreation = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    store.fetchTutorSubjects().then((res) => {
      store.subject.setCurrentSubjectId(pk);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingState text="Fetching subject details..." />;
  }

  return <SubjectCreationPage store={store.subject} />;
};

export const Login = () => {
  return (
    <LoginPage
      onResendOTP={() => {}}
      onOTPSubmit={() => {}}
      onEmailSubmit={() => {}}
      onNavigate={() => {}}
    />
  );
};

export const LandingPage = () => {
  return (
    <LandingView
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};
