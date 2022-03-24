import { test } from "uvu";
import * as assert from "uvu/assert";
import { SubjectStore } from "@tuteria/shared-lib/src/stores/subject";
import {
  SAMPLE_TUTERIA_SUBJECTS,
  // SAMPLE_TUTOR_DATA,
  // SAMPLE_TUTOR_SUBJECTS,
  // SUBJECT_GROUPS,
} from "@tuteria/shared-lib/src/data/tutor-application/sample_data";

test("Account for all test scenarios", () => {
  // Only non-testable subjects
  let scenario1 = [
    {
      id: 23434234,
      name: "Braille Language",
      tuteriaStatus: 5,
      status: "in-progress",
      teachingStyle: "",
      trackRecords: "",
      teachingRequirements: [],
      preliminaryQuestions: [],
      canTakeTest: true,
      dateDenied: "null",
      totalAttempts: 0,
    },
  ];
  const subjectStore = SubjectStore.create({});
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario1,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 1);
  assert.equal(
    subjectStore.tuteriaSubjects.length,
    SAMPLE_TUTERIA_SUBJECTS.length
  );
  assert.equal(subjectStore.isTestable(subjectStore.tutorSubjects[0]), false);
  assert.is(subjectStore.canProceedToNextPage, true);

  // non-testable subjects with a non-attempted subject test
  scenario1.push({
    id: 209603,
    name: "Literature in English",
    tuteriaStatus: 5,
    status: "not-started",
    teachingStyle: "",
    trackRecords: "",
    teachingRequirements: [],
    preliminaryQuestions: [],
    canTakeTest: true,
    dateDenied: null,
    totalAttempts: 0,
  });
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario1,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 2);
  assert.is(subjectStore.isTestable(scenario1[1]), true);
  assert.is(subjectStore.shouldTakeTest(scenario1[1]), true);
  assert.is(subjectStore.canProceedToNextPage, false);

  //non testable subject with a failed subject test
  scenario1[1] = { ...scenario1[1], canTakeTest: true, status: "denied" };
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario1,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 2);
  assert.is(subjectStore.isTestable(scenario1[1]), true);
  assert.is(subjectStore.shouldTakeTest(scenario1[1]), true);
  assert.is(subjectStore.canProceedToNextPage, false);

  //non testable subject with a passed subject test
  scenario1[1] = { ...scenario1[1], canTakeTest: false, status: "in-progress" };
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario1,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 2);
  assert.is(subjectStore.isTestable(scenario1[1]), true);
  assert.is(subjectStore.shouldTakeTest(scenario1[1]), false);
  assert.is(subjectStore.canProceedToNextPage, true);

  //One non-attempted testable subject
  const scenario2 = [
    {
      id: 209603,
      name: "Literature in English",
      title: "",
      description: "",
      certifications: [],
      tuteriaStatus: 5,
      status: "not-started",
      teachingStyle: "",
      trackRecords: "",
      teachingRequirements: [],
      preliminaryQuestions: [],
      canTakeTest: true,
      dateDenied: null,
      totalAttempts: 0,
    },
  ];
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario2,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 1);
  assert.is(subjectStore.isTestable(scenario2[0]), true);
  assert.is(subjectStore.shouldTakeTest(scenario2[0]), true);
  assert.is(subjectStore.canProceedToNextPage, false);

  // one passed subject
  scenario2.push({
    id: 209606,
    name: "Basic Sciences",
    title: "",
    description: "",
    certifications: [],
    tuteriaStatus: 5,
    status: "in-progress",
    teachingStyle: "",
    trackRecords: "",
    teachingRequirements: [],
    preliminaryQuestions: [],
    canTakeTest: false,
    dateDenied: null,
    totalAttempts: 1,
  });
  subjectStore.initializeTutorSubjects({
    tutorSubjects: scenario2,
    tuteriaSubjects: SAMPLE_TUTERIA_SUBJECTS,
    groups: [],
  });
  assert.is(subjectStore.tutorSubjects.length, 2);
  assert.is(subjectStore.isTestable(scenario2[1]), true);
  assert.is(subjectStore.shouldTakeTest(scenario2[1]), false);
  assert.is(subjectStore.canProceedToNextPage, true);
});

test.run();
