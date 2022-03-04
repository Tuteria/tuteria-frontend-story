import { test } from "uvu";
import * as assert from "uvu/assert";
import { generateSplitRequest } from "@tuteria/shared-lib/src/home-tutoring/request-flow/request-fns";

test("generateSplitRequest logic", () => {
  let childDetails = [
    {
      firstName: "Yetunde",
      gender: "female",
      classDetail: {
        class: "JSS 1",
        purpose: "General Home Lessons",
        subjects: ["JSS Math", "JSS English"],
      },
      learningNeed: "Falling behind",
      curriculum: ["Nigerian", "British"],
      expectation:
        "Yetunde has some challenges with Math, I'll like her to improve in her numbers ahead of her Year 9 exams",
      special_needs: "None",
    },
    {
      firstName: "Toyin",
      gender: "female",
      classDetail: {
        class: "Preschool",
        purpose: "Early Child Education",
        subjects: ["Literacy & Numeracy", "Phonics", "Handwriting"],
      },
      learningNeed: "Falling behind",
      curriculum: ["Nigerian", "British", "American"],
      expectation:
        "My daughter needs to improve in her reading, writing and love for learning",
      special_needs: "None",
    },
    {
      firstName: "Adams",
      gender: "male",
      classDetail: {
        class: "Primary 5",
        purpose: "Common Entrance Exam",
        subjects: ["Primary Math", "Primary English"],
      },
      learningNeed: "Falling behind",
      curriculum: ["British"],
      expectation:
        "Adams needs a lot of help with his spellings, math and english",
      special_needs: "None",
    },
  ];
  let result = generateSplitRequest(childDetails, "Separate teachers");
  console.log(result);
  //   assert.is(Math.sqrt(4), 2);
  //   assert.is(Math.sqrt(144), 12);
  //   assert.is(Math.sqrt(2), Math.SQRT2);
});

test.run();
