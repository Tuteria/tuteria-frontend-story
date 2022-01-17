export const SAMPLEREQUEST = {
  teacherKind: "Specialized teachers",
  contactDetails: {
    customerType: "parent",
    title: "Mrs.",
    firstName: "Adenike",
    lastName: "Toluwani",
    email: "adeniketolu@example.com",
    phone: "2347083266188",
    vicinity: "Agungi",
    address: "Motunrayo Street",
    region: "Lekki",
    state: "Lagos",
    country: "Nigeria",
    country_code: "NG",
    medium: "Facebook",
    preferredComms: {
      // channel: "whatsapp",
      // number: "",
    },
  },
  lessonDetails: {
    lessonType: "physical",
    lessonSchedule: {
      lessonDuration: 4,
      lessonHours: 2,
      lessonDays: ["Monday", "Wednesday", "Friday"],
      lessonTime: "4:00 PM",
      lessonUrgency: "In a few days",
    },
  },
  childDetails: [
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
  ],
  splitRequests: [
    {
      teacherOption: "Specialized teachers",
      purposes: ["Common Entrance Exam", "Early Child Education"],
      class: ["Primary 5", "Preschool"],
      names: ["Adams", "Toyin"],
      specialNeeds: [],
      subjectGroup: [
        "Primary Math",
        "Primary English",
        "Literacy & Numeracy",
        "Phonics",
        "Handwriting",
      ],
      learningNeed: ["Falling behind"],
      curriculum: [
        "Nigerian",
        "British",
        // "American"
      ],
      searchSubject: "Primary Math",
      lessonDays: [
        "Monday",
        "Wednesday",
        "Friday",
        // "Saturday",
        //  "Sunday"
      ],
      forTeacher: [
        {
          name: "Toyin",
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
          special_needs: "Dyslexia",
        },
        {
          name: "Adams",
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
          special_needs: "Dyslexia",
        },
      ],
    },
    {
      teacherOption: "Specialized teachers",
      purposes: ["General Home Lessons"],
      class: ["JSS 1"],
      names: ["Yetunde"],
      specialNeeds: ["Dyslexia"],
      subjectGroup: ["JSS English"],
      learningNeed: ["Falling behind"],
      curriculum: ["Nigerian", "British"],
      searchSubject: "JSS English",
      lessonDays: ["Monday", "Wednesday"],
      forTeacher: [
        {
          name: "Yetunde",
          gender: "female",
          classDetail: {
            class: "JSS 1",
            purpose: "General Home Lessons",
            subjects: ["JSS English"],
          },
          learningNeed: "Falling behind",
          curriculum: ["Nigerian", "British"],
          expectation:
            "Yetunde has some challenges with Math, I'll like her to improve in her numbers ahead of her Year 9 exams",
          special_needs: "Dyslexia",
        },
      ],
    },
    {
      teacherOption: "Specialized teachers",
      purposes: ["Common Entrance Exam"],
      class: ["JSS 1"],
      names: ["Yetunde"],
      specialNeeds: [],
      subjectGroup: ["JSS Math"],
      learningNeed: ["Falling behind"],
      curriculum: ["Nigerian", "British"],
      searchSubject: "JSS Math",
      lessonDays: ["Friday", "Saturday"],
      forTeacher: [
        {
          name: "Yetunde",
          gender: "female",
          classDetail: {
            class: "JSS 1",
            purpose: "General Home Lessons",
            subjects: ["JSS Math"],
          },
          learningNeed: "Falling behind",
          curriculum: ["Nigerian", "British"],
          expectation:
            "Yetunde has some challenges with Math, I'll like her to improve in her numbers ahead of her Year 9 exams",
          special_needs: null,
        },
      ],
    },
  ],
  subjectDetails: {
    name: "hometutoring", //IELTS, GRE
    shortName: "hometutoring",
    examType: "General Test",
    modules: ["Writing", "Reading"],
  },
  filters: {
    gender: ["male", "female"],
    sortBy: "Recommended",
    showPremium: false,
    minPrice: 0,
    maxPrice: 0,
    lessonType: "physical",
    educationDegrees: [],
    educationCountries: [],
    educationGrades: [],
    maxAge: 0,
    minExperience: "",
  },
};

export const SAMPLENEIGHBORINGAREA = [
  {
    region: "Agege ",
    state: "Lagos",
    distance: 0.0,
  },
  {
    region: "Iju Ishaga",
    state: "Lagos",
    distance: 2.5541216487159066,
  },
  {
    region: "Ogba",
    state: "Lagos",
    distance: 2.692619852577129,
  },
  {
    region: "Ikeja",
    state: "Lagos",
    distance: 3.8250046143785212,
  },
  {
    region: "Abule-Egba",
    state: "Lagos",
    distance: 4.13143977901179,
  },
  {
    region: "Egbeda",
    state: "Lagos",
    distance: 4.405138665999126,
  },
  {
    region: "Omole",
    state: "Lagos",
    distance: 4.426986080670064,
  },
  {
    region: "Ojodu-Berger",
    state: "Lagos",
    distance: 6.7101911199359305,
  },
  {
    region: "Maryland",
    state: "Lagos",
    distance: 6.729164452830533,
  },
  {
    region: "Ikosi-Ketu",
    state: "Lagos",
    distance: 7.014034024608117,
  },
  {
    region: "Alagbado",
    state: "Lagos",
    distance: 7.775260239739869,
  },
  {
    region: "Akute",
    state: "Lagos",
    distance: 7.891026341287626,
  },
  {
    region: "Ejigbo",
    state: "Lagos",
    distance: 7.939385061548494,
  },
  {
    region: "Ilupeju",
    state: "Lagos",
    distance: 8.140163359943514,
  },
  {
    region: "Ifako Ijaiye",
    state: "Lagos",
    distance: 8.22703311352854,
  },
  {
    region: "Alimosho",
    state: "Lagos",
    distance: 8.550645751996031,
  },
  {
    region: "Magodo",
    state: "Lagos",
    distance: 8.75483744517334,
  },
  {
    region: "Ogudu",
    state: "Lagos",
    distance: 9.175375069077472,
  },
  {
    region: "Oshodi-Isolo",
    state: "Lagos",
    distance: 9.598100584872489,
  },
  {
    region: "Ikotun",
    state: "Lagos",
    distance: 9.866815996950189,
  },
  {
    region: "Gbagada",
    state: "Lagos",
    distance: 10.218381734770919,
  },
  {
    region: "Mushin",
    state: "Lagos",
    distance: 10.281754841729482,
  },
  {
    region: "Shomolu",
    state: "Lagos",
    distance: 11.176310230046111,
  },
  {
    region: "Isolo",
    state: "Ekiti",
    distance: 11.612113451561367,
  },
  {
    region: "Ijamido",
    state: "Ogun",
    distance: 11.67130326016542,
  },
  {
    region: "Okota",
    state: "Lagos",
    distance: 12.095550635544557,
  },
  {
    region: "Sango Ota",
    state: "Ogun",
    distance: 12.794915116873034,
  },
  {
    region: "Idiroko Rd. /Ojuore",
    state: "Ogun",
    distance: 13.05005188314247,
  },
  {
    region: "Yaba",
    state: "Lagos",
    distance: 13.21401060100625,
  },
  {
    region: "Afobaje Estate/ Agbala Obanibasiri",
    state: "Ogun",
    distance: 13.656955125826062,
  },
  {
    region: "Surulere",
    state: "Lagos",
    distance: 14.204870060731077,
  },
];
