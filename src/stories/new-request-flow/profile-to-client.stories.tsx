import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import TutorSelectPage from "@tuteria/shared-lib/src/new-request-flow/pages/TutorSelectPage";
import { SearchStore } from "@tuteria/shared-lib/src/stores";
import React from "react";
import { adapter, PRICING_INFO } from "./adapter";
import { SAMPLEREQUEST, TUTORSEARCHRESULT_DATA_TRIMED } from "./sampleData";
import CheckoutPage from "@tuteria/shared-lib/src/new-request-flow/pages/CheckoutPage";
import NewClientRequestPage from "@tuteria/shared-lib/src/new-request-flow/pages/ClientRequestPage";

// import { SAMPLEREQUEST as SAMPLECLIENTREQUEST } from "./sampleData";

const RAW_TUTORS = [
  {
    userId: "giftn6",
    email: "giftnwaefulu@gmail.com",
    firstName: "Gift",
    lastName: "Nwaefulu",
    gender: "female",
    photo:
      "http://res.cloudinary.com/tuteria/image/upload/c_fill,g_face,h_132,w_132/pc5qiure80gzrefl05aq.jpg",
    level: "regular",
    delivery: ["physical"],
    dateOfBirth: "1996-06-04",
    phone: "2348139421825",
    requestPending: 0,
    requestsDeclined: 0,
    totalJobsAssigned: 0,
    totalJobsAccepted: 0,
    requestsNotResponded: 0,
    activeBookings: [],
    distance: 0,
    rating: 4.75,
    ratingCount: 4,
    isIdVerified: true,
    isBackgroundChecked: true,
    videoIntro: null,
    students: 16,
    lessonsTaught: 187,
    newTutorDiscount: 0,
    isNewTutor: true,
    country: "Nigeria",
    state: "Lagos",
    region: "Ajah",
    vicinity: "Ikota",
    specialNeedExpertise: [],
    examsExperience: ["Entrance Into Top Schools", "Common Entrance Exam"],
    curriculum: ["Nigerian", "British", "American", "Montessori", "EYFS"],
    levelsTaught: ["Pre-primary", "Upper Primary", "Lower Primary"],
    entranceSchools: [],
    education: [
      {
        grade: "Other grade",
        course: "Office Technology and Management",
        degree: "HND",
        school: "Delta State Polytechnic Ogwashi-uku",
        country: "Nigeria",
        endYear: "2017",
        startYear: "2012",
      },
    ],
    workHistory: [
      {
        role: "Head Teacher",
        company: "Ufuma Community Secondary School",
        endYear: "2019",
        isCurrent: false,
        startYear: "2018",
        showOnProfile: true,
        isTeachingRole: true,
      },
    ],
    certification: [],
    subject: {
      hourlyRate: 2920,
      discountForExtraStudents: 20,
      extraStudents: 0,
      name: "General Mathematics",
      headline: "Experienced Mathematics Tutor.",
      description:
        "My joy as a teacher is not just to help students pass Mathematics, but to actually nurture their interests in Mathematics, dispel any fear they may have, and help develop their numerical reasoning so that they become outstanding in Maths above their peers.\r\n\r\nMathematics is a subject that often gives students a lot of challenges. I have a great mastery of Mathematics as a subject and I have the expertise to make it very simple for everyone to understand.\r\n\r\nI use simple and concise analogies to convey concepts which in turn creates a memory path for my students to understand what has been taught.\r\n\r\nAs an experienced teacher, I understand the issues and challenges faced by students in solving Mathematics. Over the years, I have developed a personalized teaching method that I use in tackling every issue. I attend to each student individually, help them build interest in Math, and also solve whatever problems or challenges they may have.",
      related: [
        "General Mathematics",
        "Basic Mathematics",
        "Quantitative Reasoning",
      ],
      skills: [
        "Moral & Health Habits",
        "Literacy & Numeracy",
        "Verbal Reasoning",
        "Quantitative Reasoning",
        "Phonics",
        "Handwriting Improvement",
        "Elementary English",
        "Business Studies",
        "Christian Religious Studies",
        "General Mathematics",
        "Basic Mathematics",
        "Computer Science",
        "English Language",
        "Elementary Mathematics",
        "Spellings",
      ],
      tuteriaName: "General Mathematics",
    },
    subjectList: [
      "Moral & Health Habits",
      "Literacy & Numeracy",
      "Verbal Reasoning",
      "Quantitative Reasoning",
      "Phonics",
      "Handwriting Improvement",
      "Elementary English",
      "Business Studies",
      "Christian Religious Studies",
      "General Mathematics",
      "Basic Mathematics",
      "Computer Science",
      "English Language",
      "Elementary Mathematics",
      "Spellings",
    ],
    testimonials: [],
    maxDays: 5,
    maxHours: 6,
    maxStudents: 6,
    exemptedAreas: [
      "Abule-Egba",
      "Agege ",
      "Ajeromi-Ifelodun",
      "Alagbado",
      "Akute",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Ebute-metta",
      "Badagry",
      "Anthony",
      "Egbeda",
      "Ejigbo",
      "Festac Town",
      "Gbagada",
      "Ifako Ijaiye",
      "Iju Ishaga",
      "Ikeja",
      "Ikorodu",
      "Ikotun",
      "Ilupeju",
      "Ikosi-Ketu",
      "Magodo",
      "Lagos Island",
      "Maryland",
      "Mushin",
      "Ogba",
      "Ogudu",
      "Ojo",
      "Ojodu-Berger",
      "Okota",
      "Omole",
      "Oshodi-Isolo",
      "Satellite Town",
      "Shomolu",
      "Surulere",
      "Yaba",
      "Ibeju-Lekki",
      "Epe",
      "Ikoyi",
      "Victoria Island",
    ],
    availabilityStatus: {
      isAvailable: true,
      resumptionDate: "",
    },
    lastCalendarUpdate: "2021-09-07T08:47:38.971Z",
    preferredLessonType: ["physical"],
    availability: {
      Friday: ["Morning", "Late morning", "Afternoon", "Late afternoon"],
      Monday: ["Morning", "Late afternoon", "Afternoon", "Late morning"],
      Tuesday: ["Morning", "Afternoon", "Late afternoon", "Late morning"],
      Thursday: ["Morning", "Afternoon", "Late afternoon", "Late morning"],
      Wednesday: ["Morning", "Late morning", "Afternoon", "Late afternoon"],
    },
    specialities: ["Business, Finance and Administration"],
    rank: 33.86150234741784,
    experience: 1,
    isIndemand: true,
    age: 25,
    eduDegrees: ["HND"],
    eduGrades: ["Other grade"],
    eduCountries: ["Nigeria"],
    otherDetails: {
      badges: [],
      price: {
        scheduleIsSet: 3,
        lessons: 0,
        amount: 12964.799999999997,
        extraStudentTuition: -51859.200000000004,
        tuitionPerStudent: 64824,
        students: 0,
        chargePerLesson: 10804,
      },
      clientCountry: "Nigeria",
      isSpecial: false,
      earlyChildArray: ["Montessori", "EYFS"],
      isMonthly: false,
      relevantSubjects: [
        "General Mathematics",
        "Basic Mathematics",
        "Quantitative Reasoning",
      ],
      isCertificate: false,
      cambridgePrep: [],
      placementExams: [],
      certificateExams: [],
      isPlacement: false,
      isEarlyChild: false,
      isEntrance: false,
      isCambridge: false,
      isPremium: false,
      specialNeedExpertise: [],
      experience: 2,
      tutorSummary: [
        {
          title: "Exam preparation expert",
          icon: "exam",
          description:
            "Prepares students for Entrance Into Top Schools and Common Entrance Exam.",
        },
        {
          title: "Matching curriculum",
          icon: "homework",
          description:
            "Teaches with the Nigerian, British, American, Montessori and EYFS curriculum.",
        },
        {
          title: "Gift is a Top-rated tutor",
          icon: "premium",
          description:
            "Top-rated tutors have received great reviews from clients and have a trackrecord of producing outstanding results.",
        },
        {
          title: "Physical lessons only",
          icon: "whiteBoard",
          description:
            "Gift only offers physical lessons at your home or agreed location",
        },
      ],
      classGroup: [],
      education: [
        {
          grade: "Other grade",
          course: "Office Technology and Management",
          degree: "HND",
          school: "Delta State Polytechnic Ogwashi-uku",
          country: "Nigeria",
          endYear: "2017",
          startYear: "2012",
        },
      ],
      workHistory: [
        {
          role: "Head Teacher",
          company: "Ufuma Community Secondary School",
          endYear: "2019",
          isCurrent: false,
          startYear: "2018",
          showOnProfile: true,
          isTeachingRole: true,
        },
      ],
      testimonials: [],
      featuredReview: {},
      userId: "giftn6",
    },
  },
  {
    userId: "iyanuoluwam",
    email: "iyanuoluwalayomi@gmail.com",
    firstName: "Iyanuoluwa",
    lastName: "Morakinyo",
    gender: "female",
    photo:
      "http://res.cloudinary.com/tuteria/image/upload/c_fill,g_face,h_132,w_132/v1/media/myjibadabbpnm1kk9bam.jpg",
    level: "regular",
    delivery: ["physical", "online"],
    dateOfBirth: "1994-02-13",
    phone: "2348163473544",
    requestPending: 0,
    requestsDeclined: 0,
    totalJobsAssigned: 0,
    totalJobsAccepted: 0,
    requestsNotResponded: 0,
    activeBookings: [],
    distance: 0,
    rating: 4.75,
    ratingCount: 8,
    isIdVerified: true,
    isBackgroundChecked: true,
    videoIntro: null,
    students: 7,
    lessonsTaught: 138,
    newTutorDiscount: 0,
    isNewTutor: true,
    country: "Nigeria",
    state: "Lagos",
    region: "Ajah",
    vicinity: "Ilaje",
    specialNeedExpertise: [],
    examsExperience: ["Common Entrance Exam", "Entrance Into Top Schools"],
    curriculum: ["Nigerian", "British"],
    levelsTaught: [
      "Upper Primary",
      "Junior Secondary",
      "Senior Secondary",
      "Adults",
    ],
    entranceSchools: ["Corona schools", "Victoria Island", "Lagos"],
    education: [
      {
        grade: "Other grade",
        course: "English Language",
        degree: "B.A",
        school: "Obafemi Awolowo University, Ile-Ife",
        country: "Nigeria",
        endYear: "2017",
        startYear: "2012",
      },
    ],
    workHistory: [
      {
        role: "English Tutor",
        company: "Legatee School,Ikota, Lekki, Lagos state",
        endYear: "2020",
        isCurrent: false,
        startYear: "2020",
        showOnProfile: true,
        isTeachingRole: false,
      },
    ],
    certification: [],
    subject: {
      hourlyRate: 3500,
      discountForExtraStudents: 30,
      extraStudents: 20,
      name: "English Language",
      headline: "A Passionate and Pragmatic English Tutor per Excellence.",
      description:
        "As a pragmatic English language tutor with a touch of excellence, who has a great passion for learning and teaching the English language. \r\n\r\nI have developed great potentials in Mastering the subject which has made my students and pupils excelled greatly. With this, I have helped a lot of students who had challenges in this subject to pass greatly. They did excellently well at Primary level, Junior Secondary School level, and Senior Secondary School level.\r\n\r\nI developed a deep passion for teaching the English language for over 3 years. This has helped me build adequate methodology and teaching strategies for the subject in some schools to enhance their learning and promote outstanding and brilliant results in my students.\r\n\r\nI approach the teaching of the subject in a very realistic manner, making the learning environment real, fun, and making lessons applicable to their daily activities. I use the progressive method of teaching to teach my students.\r\n\r\nAll I need is a client with a well-prepared mind, who focuses on learning. Basic provisions should be made available and the environment should be conducive for learning.",
      related: [
        "English Language",
        "Reading Comprehension",
        "Verbal Reasoning",
      ],
      skills: [
        "English Language",
        "Phonics",
        "Verbal Reasoning",
        "Reading Comprehension",
      ],
      tuteriaName: "English Language",
    },
    subjectList: [
      "English Language",
      "Phonics",
      "Verbal Reasoning",
      "Reading Comprehension",
    ],
    testimonials: [],
    maxDays: 4,
    maxHours: 3,
    maxStudents: 2,
    exemptedAreas: [
      "Abule-Egba",
      "Akute",
      "Alimosho",
      "Anthony",
      "Badagry",
      "Egbeda",
      "Epe",
      "Gbagada",
      "Ifako Ijaiye",
      "Ikeja",
      "Ikotun",
      "Ilupeju",
      "Lagos Island",
      "Maryland",
      "Ogba",
      "Ojo",
      "Okota",
      "Satellite Town",
      "Oshodi-Isolo",
      "Surulere",
      "Yaba",
      "Agege ",
      "Ajeromi-Ifelodun",
      "Alagbado",
      "Amuwo-Odofin",
      "Apapa",
      "Ebute-metta",
      "Ikoyi",
      "Ikorodu",
      "Iju Ishaga",
      "Ibeju-Lekki",
      "Festac Town",
      "Ejigbo",
      "Ikosi-Ketu",
      "Magodo",
      "Mushin",
      "Ogudu",
      "Ojodu-Berger",
      "Omole",
      "Shomolu",
    ],
    availabilityStatus: {
      isAvailable: true,
      resumptionDate: "",
    },
    lastCalendarUpdate: "2021-11-30T08:37:14.376Z",
    preferredLessonType: ["physical", "online"],
    availability: {
      Friday: ["Late morning"],
      Monday: ["Late morning", "Afternoon", "Late afternoon", "Evening"],
      Sunday: ["Afternoon", "Late afternoon"],
      Tuesday: ["Afternoon", "Late morning", "Late afternoon"],
      Thursday: ["Morning", "Late morning"],
      Wednesday: ["Afternoon", "Late morning", "Late afternoon"],
    },
    specialities: ["Languages, Linguistics and Communication"],
    rank: 27.369718309859156,
    experience: 0,
    isIndemand: false,
    age: 27,
    eduDegrees: ["B.A"],
    eduGrades: ["Other grade"],
    eduCountries: ["Nigeria"],
    otherDetails: {
      badges: [],
      price: {
        scheduleIsSet: 3,
        lessons: 0,
        amount: 23310.000000000004,
        extraStudentTuition: -54390,
        tuitionPerStudent: 77700,
        students: 0,
        chargePerLesson: 12950,
      },
      clientCountry: "Nigeria",
      isSpecial: false,
      earlyChildArray: [],
      isMonthly: false,
      relevantSubjects: [
        "English Language",
        "Reading Comprehension",
        "Verbal Reasoning",
      ],
      isCertificate: false,
      cambridgePrep: [],
      placementExams: [],
      certificateExams: [],
      isPlacement: false,
      isEarlyChild: false,
      isEntrance: false,
      isCambridge: false,
      isPremium: false,
      specialNeedExpertise: [],
      experience: 0,
      tutorSummary: [
        {
          title: "Exam preparation expert",
          icon: "exam",
          description:
            "Prepares students for Common Entrance Exam and Entrance Into Top Schools.",
        },
        {
          title: "Matching curriculum",
          icon: "homework",
          description: "Teaches with the Nigerian and British curriculum.",
        },
        {
          title: "Iyanuoluwa is a Top-rated tutor",
          icon: "premium",
          description:
            "Top-rated tutors have received great reviews from clients and have a trackrecord of producing outstanding results.",
        },
        {
          title: "Physical and online lessons",
          icon: "whiteBoard",
          description: "Iyanuoluwa can deliver lessons at your home or online",
        },
      ],
      classGroup: [],
      education: [
        {
          grade: "Other grade",
          course: "English Language",
          degree: "B.A",
          school: "Obafemi Awolowo University, Ile-Ife",
          country: "Nigeria",
          endYear: "2017",
          startYear: "2012",
        },
      ],
      workHistory: [
        {
          role: "English Tutor",
          company: "Legatee School,Ikota, Lekki, Lagos state",
          endYear: "2020",
          isCurrent: false,
          startYear: "2020",
          showOnProfile: true,
          isTeachingRole: false,
        },
      ],
      testimonials: [],
      featuredReview: {},
      userId: "iyanuoluwam",
    },
  },
  {
    userId: "sophian",
    email: "sophia.newton565@gmail.com",
    firstName: "Sophia",
    lastName: "Newton",
    gender: "female",
    photo:
      "http://res.cloudinary.com/tuteria/image/upload/c_fill,g_face,h_132,w_132/v1/profile_pics/vvpw3lh2zqswgylfwqn2.jpg",
    level: "premium",
    delivery: ["physical", "online"],
    dateOfBirth: "1986-10-06",
    phone: "2348137432162",
    requestPending: 0,
    requestsDeclined: 0,
    totalJobsAssigned: 0,
    totalJobsAccepted: 0,
    requestsNotResponded: 0,
    activeBookings: [],
    distance: 0,
    rating: 4.833333333333333,
    ratingCount: 12,
    isIdVerified: true,
    isBackgroundChecked: true,
    videoIntro: null,
    students: 20,
    lessonsTaught: 426,
    newTutorDiscount: 0,
    isNewTutor: false,
    country: "Nigeria",
    state: "Lagos",
    region: "Lekki Phase 2",
    vicinity: "Osapa London",
    specialNeedExpertise: [],
    examsExperience: [],
    curriculum: ["Nigerian", "British", "American", "Montessori", "EYFS"],
    levelsTaught: ["Pre-primary", "Lower Primary", "Adults"],
    entranceSchools: [],
    education: [
      {
        grade: "Upper Second Class",
        course: "Arts Education",
        degree: "B.Ed",
        school: "Delta State University",
        country: "Nigeria",
        endYear: "2007",
        startYear: "2004",
      },
    ],
    workHistory: [
      {
        role: "Dance/Drama/Creative Art Teacher",
        company: "Pampers Private School",
        endYear: "2017",
        isCurrent: false,
        startYear: "2016",
        showOnProfile: true,
        isTeachingRole: true,
      },
      {
        role: "English/French/Creative Art Tutor",
        company: "Anifa Preparatory Centre",
        endYear: "",
        isCurrent: true,
        startYear: "2014",
        showOnProfile: true,
        isTeachingRole: true,
      },
    ],
    certification: [],
    subject: {
      hourlyRate: 2500,
      discountForExtraStudents: 14,
      extraStudents: 0,
      name: "Literacy & Numeracy",
      headline:
        "Friendly and firm educator who helps learners excel academically",
      description:
        "I have taught quite a number of learners phonics and achieved fantastic results with them. They all improved in their grades. Some who were not able to read before started reading and spelling on their own after two weeks. \r\nI use differentiated learning approach for my learners as I understand that every learner learn at different pace. I observe my learners and discover what method and style works best for them. Instead of teaching all of them the same way, I use the style suitable for each learner so as to make them love phonics and understand the subject better. I also teach numeracy and literacy.\r\nI also make use of visuals, audios, flash cards, mobiles, letter shapes and other instructional materials that would aid my teaching. I usually make some mobile posters for parents to hang in my learners' rooms to help them remember what they have been taught.\r\nAs I plan my lessons, I try to blend my scheme with learners' school scheme of work. This would enable my learners have better understanding of what they are being taught in school and also help them to be ahead of their classmates.\r\nI also give weekly quizzes to my learners to help me evaluate them and assess their understanding of every lesson taught. This would also help build their confidence in answering test and examination questions.\r\nP.S: I also teach French to beginners.",
      related: [],
      skills: ["English Grammar", "Phonics", "Literacy & Numeracy"],
      tuteriaName: "Literacy & Numeracy",
    },
    subjectList: ["English Grammar", "Phonics", "Literacy & Numeracy"],
    testimonials: [],
    maxDays: 7,
    maxHours: 6,
    maxStudents: 6,
    exemptedAreas: [
      "Ejigbo",
      "Festac Town",
      "Iju Ishaga",
      "Ikorodu",
      "Ikosi-Ketu",
      "Abule-Egba",
      "Ojo",
      "Satellite Town",
      "Ogba",
      "Akute",
      "Badagry",
    ],
    availabilityStatus: {
      isAvailable: true,
      resumptionDate: "",
    },
    lastCalendarUpdate: "2021-07-14T20:23:48.034Z",
    preferredLessonType: ["physical", "online"],
    availability: {
      Friday: [
        "Late morning",
        "Afternoon",
        "Late afternoon",
        "Evening",
        "Late evening",
      ],
      Monday: ["Late morning", "Afternoon", "Late afternoon", "Evening"],
      Sunday: ["Afternoon", "Late afternoon", "Evening", "Late evening"],
      Tuesday: [
        "Morning",
        "Late morning",
        "Afternoon",
        "Late afternoon",
        "Evening",
        "Late evening",
      ],
      Saturday: [
        "Late morning",
        "Afternoon",
        "Late afternoon",
        "Evening",
        "Late evening",
      ],
      Thursday: [
        "Late morning",
        "Afternoon",
        "Late afternoon",
        "Evening",
        "Late evening",
      ],
      Wednesday: [
        "Late morning",
        "Afternoon",
        "Late afternoon",
        "Evening",
        "Late evening",
      ],
    },
    specialities: [],
    rank: 39,
    experience: 9,
    isIndemand: false,
    age: 35,
    eduDegrees: ["B.Ed"],
    eduGrades: ["Upper Second Class"],
    eduCountries: ["Nigeria"],
    otherDetails: {
      badges: [],
      price: {
        scheduleIsSet: 3,
        lessons: 0,
        amount: 7770.000000000001,
        extraStudentTuition: -47730,
        tuitionPerStudent: 55500,
        students: 0,
        chargePerLesson: 9250,
      },
      clientCountry: "Nigeria",
      isSpecial: false,
      earlyChildArray: ["Montessori", "EYFS"],
      isMonthly: false,
      relevantSubjects: [],
      isCertificate: false,
      cambridgePrep: [],
      placementExams: [],
      certificateExams: [],
      isPlacement: false,
      isEarlyChild: false,
      isEntrance: false,
      isCambridge: false,
      isPremium: true,
      specialNeedExpertise: [],
      experience: 11,
      tutorSummary: [
        {
          title: "Matching curriculum",
          icon: "homework",
          description:
            "Teaches with the Nigerian, British, American, Montessori and EYFS curriculum.",
        },
        {
          title: "Sophia is a Premium tutor",
          icon: "premium",
          description:
            "Premium tutors are exceptional, highly-rated tutors who have consistently delivered the best results and learning experience with clients.",
        },
        {
          title: "Physical and online lessons",
          icon: "whiteBoard",
          description: "Sophia can deliver lessons at your home or online",
        },
      ],
      classGroup: [],
      education: [
        {
          grade: "Upper Second Class",
          course: "Arts Education",
          degree: "B.Ed",
          school: "Delta State University",
          country: "Nigeria",
          endYear: "2007",
          startYear: "2004",
        },
      ],
      workHistory: [
        {
          role: "English/French/Creative Art Tutor",
          company: "Anifa Preparatory Centre",
          endYear: "",
          isCurrent: true,
          startYear: "2014",
          showOnProfile: true,
          isTeachingRole: true,
        },
        {
          role: "Dance/Drama/Creative Art Teacher",
          company: "Pampers Private School",
          endYear: "2017",
          isCurrent: false,
          startYear: "2016",
          showOnProfile: true,
          isTeachingRole: true,
        },
      ],
      testimonials: [],
      featuredReview: {},
      userId: "sophian",
    },
  },
];
const demoData = {
  requestInfo: {
    contactDetails: {
      email: "templeobike@gmail.com",
      phone: "8074737662",
      state: "Lagos",
      title: "",
      medium: "LinkedIn",
      region: "Lekki",
      address: "Admiralty Homes Estate",
      country: "Nigeria",
      lastName: "Obike",
      firstName: "Temple",
      vicinity: "Lekki Penninsula II",
      country_code: "NG",
      customerType: "parent",
      preferredComms: {},
    },
    slug: "9IWQ5J1EOKBM",
    teacherKind: "Specialized Teachers",
    childDetails: [
      {
        name: "",
        gender: "",
        firstName: "",
        curriculum: ["Not sure"],
        classDetail: {
          class: "JSS 2",
          purpose: "Homeschooling",
          subjects: [
            "General Mathematics",
            "English Language",
            "Basic Sciences ",
            "Business Studies",
          ],
        },
        displayName: "",
        expectation: "Will supply in person",
        learningNeed: "",
        special_needs: "None",
      },
      {
        name: "",
        gender: "",
        firstName: "",
        curriculum: ["Not sure"],
        classDetail: {
          class: "Primary 5",
          purpose: "Homeschooling",
          subjects: [
            "Basic Mathematics",
            "English Language",
            "Quantitative Reasoning",
            "Basic Sciences",
            "Verbal Reasoning",
          ],
        },
        displayName: "",
        expectation: "Will supply.",
        learningNeed: "",
        special_needs: "None",
      },
      {
        name: "",
        gender: "",
        firstName: "",
        curriculum: ["Not sure"],
        classDetail: {
          class: "Primary 1",
          purpose: "Homeschooling",
          subjects: [
            "Quantitative Reasoning",
            "Verbal Reasoning",
            "Basic Sciences",
            "English Language",
            "Basic Mathematics",
          ],
        },
        displayName: "",
        expectation: "Will sort this out.",
        learningNeed: "",
        special_needs: "None",
      },
      {
        name: "",
        gender: "",
        firstName: "",
        curriculum: ["Not sure"],
        classDetail: {
          class: "Nursery 1",
          purpose: "Homeschooling",
          subjects: ["Literacy", "Numeracy", "Phonics"],
        },
        displayName: "",
        expectation: "Will supply this on conversing with teacher.",
        learningNeed: "",
        special_needs: "None",
      },
    ],
    lessonDetails: {
      lessonType: "physical",
      lessonSchedule: {
        lessonDays: ["Monday", "Friday", "Wednesday"],
        lessonPlan: "",
        lessonTime: "9:00 AM",
        lessonHours: 4,
        teacherKind: "",
        lessonUrgency: "Immediately",
        lessonDuration: 2,
      },
    },
    splitRequests: [
      {
        searchSubject: "General Mathematics",
        lessonDays: ["Monday", "Friday", "Wednesday"],
        teacherOption: "Specialized Teachers",
        lessonHours: 4,
        subjectGroup: ["General Mathematics"],
        class: ["JSS 2", "Primary 5", "Primary 1", "Nursery 1"],
      },
      {
        searchSubject: "English Language",
        lessonDays: ["Monday", "Friday", "Wednesday"],
        teacherOption: "Specialized Teachers",
        lessonHours: 4,
        subjectGroup: ["English Language"],
        class: ["JSS 2", "Primary 5", "Primary 1", "Nursery 1"],
      },
      {
        searchSubject: "Literacy & Numeracy",
        lessonDays: ["Monday", "Friday", "Wednesday"],
        teacherOption: "Specialized Teachers",
        lessonHours: 4,
        subjectGroup: ["Literacy & Numeracy"],
        class: ["JSS 2", "Primary 5", "Primary 1", "Nursery 1"],
      },
    ],
  },
  tutors: RAW_TUTORS,
  firstSearch: RAW_TUTORS,
};
const demoSingle = {
  contactDetails: {
    email: "ijeugo41@gmail.com",
    phone: "8036152440",
    state: "Lagos",
    title: "",
    medium: "Friends, Family or Word of Mouth",
    region: "Sangotedo",
    address: "Heroes Courrt Estate",
    country: "Nigeria",
    lastName: "Onyemelukwe ",
    firstName: "Doris",
    vicinity: "Nero",
    country_code: "NG",
    customerType: "parent",
    preferredComms: {},
  },
  slug: "QPG8PX11IFCZ",
  teacherKind: "One teacher",
  childDetails: [
    {
      name: "",
      gender: "",
      firstName: "",
      curriculum: ["British"],
      classDetail: {
        class: "Primary 3",
        purpose: "Grades Improvement",
        subjects: [
          "English Language",
          "Verbal Reasoning",
          "Basic Mathematics",
          "Quantitative Reasoning",
          "Basic Sciences",
        ],
      },
      displayName: "",
      expectation:
        "I need my son to improve in his grades.He can read and very vibrant and independent but needs to pay attention more",
      learningNeed: "",
      special_needs: "70 - 89%",
    },
  ],
  lessonDetails: {
    lessonType: "physical",
    lessonSchedule: {
      lessonDays: ["Wednesday", "Monday", "Saturday"],
      lessonPlan: "",
      lessonTime: "4:00 PM",
      lessonHours: 2.0,
      teacherKind: "",
      lessonUrgency: "Immediately",
      lessonDuration: 4,
    },
  },
  splitRequests: [
    {
      searchSubject: "Basic Mathematics",
      lessonDays: ["Wednesday", "Monday", "Saturday"],
      teacherOption: "One teacher",
      lessonHours: 2.0,
      subjectGroup: ["Basic Mathematics"],
      class: ["Primary 3"],
    },
  ],
};
export default {
  title: "Request Flow/Pages/Profile Sent To Client",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box m={-4} h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

const sampleAgent = {
  name: "Benita",
  phone_number: "+2349095121865",
  email: "benita@tuteria.com",
  image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
};
export const SingleRequest = () => {
  const searchStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );

  const firstSearch = TUTORSEARCHRESULT_DATA_TRIMED.slice(0, 3);
  return (
    <TutorSelectPage
      store={searchStore}
      agent={sampleAgent}
      tutors={[]}
      firstSearch={firstSearch.map((j) => ({
        ...j,
        totalAmount: 42000,
        lessons: 12,
      }))}
      requestInfo={demoSingle}
    />
  );
};

export const MultipleRequests = () => {
  const searchStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );

  return (
    <TutorSelectPage
      store={searchStore}
      agent={sampleAgent}
      firstSearch={demoData.firstSearch.map((j) => ({
        ...j,
        totalAmount: 24000,
        lessons: 4,
      }))}
      tutors={demoData.tutors.map((j) => ({
        ...j,
        totalAmount: 24000,
        lessons: 4,
      }))}
      // requestInfo={SAMPLEREQUEST}
      requestInfo={demoData.requestInfo}
    />
  );
};

let requestInfo = {
  ...demoData.requestInfo,
  splitRequests: demoData.requestInfo.splitRequests.map((o, i) => {
    let tutors = demoData.tutors.map((o) => o.userId);
    return {
      ...o,
      tutorId: tutors[i],
      tutorData: demoData.tutors[i],
    };
  }),
};
const initialData = {
  agent: {
    id: 50,
    title: "",
    name: "Ifeanyi",
    phone_number: "+2349095121865",
    email: "ifeanyi@tuteria.com",
    image: "",
    slack_id: "",
  },
  bookingInfo: {
    slug: "OJQ3XOIT56ZG",
    tuitionFee: 48000,
    totalLessons: 12,
    totalDiscount: 0,
    transportFare: 0,
    couponDiscount: 0,
    paidSpeakingFee: true,
    distanceThreshold: 20,
    walletBalance: 0,
    fareParKM: 25,
    currency: "₦",
    timeSubmitted: "2022-02-14T08:27:45.842Z",
  },
  tutors: [
    {
      userId: "bridgete",
      email: "begwili@yahoo.com",
      firstName: "Bridget",
      lastName: "Egwili",
      gender: "female",
      photo:
        "http://res.cloudinary.com/tuteria/image/upload/c_fill,g_face,h_132,w_132/v1/profile_pics/caiyvvfhkiyw7utqjasn.jpg",
      level: "regular",
      delivery: ["physical"],
      dateOfBirth: "1988-11-29",
      phone: "2347039047361",
      requestPending: 0,
      requestsDeclined: 0,
      totalJobsAssigned: 0,
      totalJobsAccepted: 0,
      requestsNotResponded: 0,
      activeBookings: [],
      distance: 0,
      rating: 0,
      ratingCount: 0,
      isIdVerified: true,
      isBackgroundChecked: true,
      videoIntro: null,
      students: 0,
      lessonsTaught: 0,
      newTutorDiscount: 0,
      isNewTutor: false,
      country: "Nigeria",
      state: "Abuja",
      region: "Wuse",
      vicinity: "Wuse",
      specialNeedExpertise: [],
      examsExperience: [],
      curriculum: ["Nigerian"],
      levelsTaught: ["jss", "primary", "nursery", "sss", "adult"],
      entranceSchools: [],
      education: [
        {
          course: "Linguistics",
          degree: "B.A.",
          school: "Delta State University, Abraka",
        },
        {
          course: "PGD in Education",
          degree: "Diploma",
          school: "National Teachers Institute",
        },
      ],
      workHistory: [
        {
          role: "Head Teacher",
          company: "Mavis Academy",
          isCurrent: true,
          isTeachingRole: true,
        },
        {
          role: "Student councilor",
          company: "",
          isCurrent: false,
          isTeachingRole: false,
        },
      ],
      certification: [],
      subject: {
        hourlyRate: 0,
        discountForExtraStudents: 0,
        extraStudents: 0,
        name: "English Language",
        headline: "English Language Teacher",
        description:
          "All through my life time I have been a passionate art student especially good in English Language and Literature in English. I don't just have the knowledge of English but the ability to transfer it to my students. I have taught students in lower primary, and those in SSS 2 & 3 in English Language and Literature while also preparing them for their exams.\r\n\r\nFrom experience, I have come to realise that everyone studies or learns at his/her own pace, hence I bring myself to the level of my students so that they can get value from the lessons, and begin to see improvements. I also have experience preparing students for IELTS and improving Phonic skills.\r\n\r\nI look forward to having you or your ward as my student as learning with me is both hardwork and fun. Thank you\r\n\r\nEgwili Bridget.",
        related: ["English Language"],
        skills: ["English Language", "Statistics", "Basic Computing"],
        tuteriaName: "English Language",
      },
      subjectList: ["English Language", "Statistics", "Basic Computing"],
      testimonials: [],
      lastCalendarUpdate: "",
      availability: {},
      totalAmount: 39576,
      lessons: 12,
      specialities: ["Languages, Linguistics and Communication"],
      rank: 0,
      experience: 0,
      isIndemand: false,
      age: 33,
      eduDegrees: ["B.A.", "Diploma"],
      eduGrades: [],
      eduCountries: [],
      otherDetails: {
        badges: [],
        price: {
          scheduleIsSet: 3,
          lessons: 0,
          amount: 0,
          extraStudentTuition: 0,
          tuitionPerStudent: 0,
          students: 0,
          chargePerLesson: 0,
        },
        clientCountry: "Nigeria",
        isSpecial: false,
        earlyChildArray: [],
        isMonthly: true,
        relevantSubjects: ["English Language"],
        isCertificate: false,
        cambridgePrep: [],
        placementExams: [],
        certificateExams: [],
        isPlacement: false,
        isEarlyChild: false,
        isEntrance: false,
        isCambridge: false,
        isPremium: false,
        specialNeedExpertise: [],
        experience: null,
        tutorSummary: [
          {
            title: "Matching curriculum",
            icon: "homework",
            description: "Teaches with the Nigerian curriculum.",
          },
          {
            title: "Physical lessons only",
            icon: "whiteBoard",
            description:
              "Bridget only offers physical lessons at your home or agreed location",
          },
        ],
        classGroup: [],
        education: [
          {
            course: "Linguistics",
            degree: "B.A.",
            school: "Delta State University, Abraka",
          },
          {
            course: "PGD in Education",
            degree: "Diploma",
            school: "National Teachers Institute",
          },
        ],
        workHistory: [
          {
            role: "Head Teacher",
            company: "Mavis Academy",
            isCurrent: true,
            isTeachingRole: true,
          },
          {
            role: "Student councilor",
            company: "",
            isCurrent: false,
            isTeachingRole: false,
          },
        ],
        testimonials: [],
        featuredReview: {},
        userId: "bridgete",
      },
    },
    {
      userId: "ifeomao5",
      email: "ifyookeke@gmail.com",
      firstName: "Ifeoma",
      lastName: "Okeke",
      gender: "female",
      photo:
        "http://res.cloudinary.com/tuteria/image/upload/c_fill,g_face,h_132,w_132/xnjgxute1wk3wxwqoddf.jpg",
      level: "regular",
      delivery: ["physical"],
      dateOfBirth: "1985-08-06",
      phone: "2348033885939",
      requestPending: 0,
      requestsDeclined: 0,
      totalJobsAssigned: 0,
      totalJobsAccepted: 0,
      requestsNotResponded: 0,
      activeBookings: [],
      distance: 0,
      rating: 4,
      ratingCount: 1,
      isIdVerified: true,
      isBackgroundChecked: true,
      videoIntro: null,
      students: 2,
      lessonsTaught: 68,
      newTutorDiscount: 0,
      isNewTutor: false,
      country: "Nigeria",
      state: "Abuja",
      region: "",
      vicinity: "News-engineering Bus stop",
      specialNeedExpertise: [],
      examsExperience: [],
      curriculum: ["Nigerian", "British"],
      levelsTaught: ["jss", "primary"],
      entranceSchools: [],
      education: [
        {
          course: "Accountancy",
          degree: "B.Sc.",
          school: "UNN",
        },
      ],
      workHistory: [
        {
          role: "Class Teacher",
          company: "Pedrisi Schools",
          isCurrent: true,
          isTeachingRole: true,
        },
        {
          role: "Account Assistant",
          company: "Flour mills of Nigeria Plc",
          isCurrent: false,
          isTeachingRole: false,
        },
      ],
      certification: [],
      subject: {
        hourlyRate: 0,
        discountForExtraStudents: 0,
        extraStudents: 0,
        name: "English Language",
        headline:
          "To help children to conquer word phobia and ignite their interest.",
        description:
          "My experience as an English language teacher has been impacting and interesting. I make sure I work towards bringing innovation, interaction, independent thinking and, interdependence Imagination into the 4 basic elements that make up the English Language( Grammar, Comprehension, Speaking and Listening and Writing) thereby making the pupil/student sound in this subject area.\r\n\r\nMy imaginative approach in this subject helps the children to create new ideas and make them take lively participation in the class. Albert Einstein says that \"imagination is more important than knowledge\". This approach has helped me to teach language skill interestingly and effectively. It has also helped to develop my students' creative self-expression.\r\n\r\nBeing innovative and interactive when teaching the English language as a subject has helped my students to dare to be different and unique when it comes to storytelling or deducing answers from a comprehension passage. Interacting with my students has also helped to empower and help them develop their communication skills.  I motivate my students, create opportunities for them to interact with one another through communication and entertainment activities such as role-plays, groups discussions, mock interviews, educative videos, etc.\r\n\r\nI also encourage my students to write legibly and beautifully because good handwriting is always a joy to read. I make use of handwriting materials to achieve this aim.\r\n\r\nFinally, I'm a teacher of English who is imaginative, innovative, interactive, independent and interdependent. I engage the children with activities that will make them not only to love but also, excel in the subject. I try as much as possible to be flexible to reinforce learning because children tend to learn more and quickly especially when learning is done in a fun way. I use everything around me to teach even real-life scenarios/experiences. This helps the children to learn better and faster.",
        related: [
          "English Language",
          "Spellings",
          "Verbal Reasoning",
          "Handwriting Improvement",
        ],
        skills: [
          "Quantitative Reasoning",
          "Handwriting Improvement",
          "English Language",
          "Elementary English",
          "Shapes & Body Parts",
          "Spellings",
          "Verbal Reasoning",
        ],
        tuteriaName: "English Language",
      },
      subjectList: [
        "Quantitative Reasoning",
        "Handwriting Improvement",
        "English Language",
        "Elementary English",
        "Shapes & Body Parts",
        "Spellings",
        "Verbal Reasoning",
      ],
      testimonials: [],
      loading: false,
      maxDays: 3,
      canApply: false,
      maxHours: 2,
      maxStudents: 2,
      exemptedAreas: [],
      availabilityStatus: {
        job_id: "",
        isAvailable: true,
        resumptionDate: "",
      },
      lastCalendarUpdate: "",
      preferredLessonType: ["physical"],
      availability: {
        Friday: ["Late afternoon"],
        Tuesday: ["Late afternoon"],
        Saturday: ["Late afternoon"],
        Thursday: ["Late afternoon"],
      },
      totalAmount: 39576,
      lessons: 12,
      specialities: ["Business, Finance and Administration"],
      rank: 0,
      experience: 0,
      isIndemand: false,
      age: 36,
      eduDegrees: ["B.Sc."],
      eduGrades: [],
      eduCountries: [],
      otherDetails: {
        badges: [],
        price: {
          scheduleIsSet: 3,
          lessons: 0,
          amount: 0,
          extraStudentTuition: 0,
          tuitionPerStudent: 0,
          students: 0,
          chargePerLesson: 0,
        },
        clientCountry: "Nigeria",
        isSpecial: false,
        earlyChildArray: [],
        isMonthly: true,
        relevantSubjects: [
          "English Language",
          "Spellings",
          "Verbal Reasoning",
          "Handwriting Improvement",
        ],
        isCertificate: false,
        cambridgePrep: [],
        placementExams: [],
        certificateExams: [],
        isPlacement: false,
        isEarlyChild: false,
        isEntrance: false,
        isCambridge: false,
        isPremium: false,
        specialNeedExpertise: [],
        experience: null,
        tutorSummary: [
          {
            title: "Matching curriculum",
            icon: "homework",
            description: "Teaches with the Nigerian and British curriculum.",
          },
          {
            title: "Physical lessons only",
            icon: "whiteBoard",
            description:
              "Ifeoma only offers physical lessons at your home or agreed location",
          },
        ],
        classGroup: [],
        education: [
          {
            course: "Accountancy",
            degree: "B.Sc.",
            school: "UNN",
          },
        ],
        workHistory: [
          {
            role: "Class Teacher",
            company: "Pedrisi Schools",
            isCurrent: true,
            isTeachingRole: true,
          },
          {
            role: "Account Assistant",
            company: "Flour mills of Nigeria Plc",
            isCurrent: false,
            isTeachingRole: false,
          },
        ],
        testimonials: [],
        featuredReview: {},
        userId: "ifeomao5",
      },
    },
  ],
  requestInfo: {
    contactDetails: {
      email: "esohsorae@gmail.com",
      phone: "7036524380",
      state: "Abuja",
      title: "",
      medium: "Instagram",
      region: "Gwarimpa",
      address: "Block b6, gwandara close , off 1st avenue. Gwarinpa estate ",
      country: "Nigeria",
      lastName: "Evbuomwan",
      firstName: "Esohe ",
      vicinity: "Gwarinpa ",
      country_code: "NG",
      customerType: "parent",
      preferredComms: {},
    },
    slug: "OJQ3XOIT56ZG",
    teacherKind: "One teacher",
    childDetails: [
      {
        name: "",
        gender: "",
        firstName: "",
        curriculum: ["Nigerian", "British"],
        classDetail: {
          class: "Primary 2",
          purpose: "Phonics & Reading",
          subjects: [
            "English Language",
            "Verbal Reasoning",
            "Quantitative Reasoning",
          ],
        },
        displayName: "",
        expectation:
          "Valerie is 7 years and in year 2, she is always eager to learn and can sometimes feel sad when she is not getting things right. I would love to see more improvement  in reading, pronunciation more of critical  thinking  learning.",
        learningNeed: "",
        special_needs: "None",
      },
    ],
    lessonDetails: {
      lessonType: "physical",
      lessonSchedule: {
        lessonDays: ["Monday", "Wednesday", "Friday"],
        lessonPlan: "",
        lessonTime: "6:00 PM",
        lessonHours: 1,
        teacherKind: "",
        lessonUrgency: "Immediately",
        lessonDuration: 4,
      },
    },
    splitRequests: [
      {
        searchSubject: "English Language",
        lessonDays: ["Monday", "Wednesday", "Friday"],
        teacherOption: "One teacher",
        lessonHours: 1,
        subjectGroup: ["English Language"],
        class: ["Primary 2"],
        tutorId: "bridgete",
      },
    ],
    status: "pending",
    created: "2022-02-11T14:36:39.487904",
    modified: "2022-02-14T08:23:23.186562",
  },
  tutorResponses: demoData.tutors.map((o) => ({
    status: "accepted",
    dateSubmitted: "2021-05-20T03:10:00",
    tutor_slug: o.userId,
  })),
  pricingInfo: PRICING_INFO,
};
export const CheckoutPageView = () => {
  const bookingStore = SearchStore.create(
    {},
    {
      adapter,
    }
  );
  console.log(requestInfo);
  return (
    <CheckoutPage
      store={bookingStore}
      agent={sampleAgent}
      onPaymentSuccessful={(url) => {
        console.log(url);
      }}
      initialData={initialData}
    />
  );
};

export const AfterPaymentPage = () => {
  const rootStore = SearchStore.create({}, { adapter });
  return <NewClientRequestPage initialData={initialData} store={rootStore} />;
};

// const RequestSummaryCard: React.FC<{ store: IAdminSearchStore }> = observer(
//   ({ store }) => {
//     const [show, setShow] = React.useState(true);

//     return (
//       <Flex
//         bg="white"
//         minH="196px"
//         overflow="hidden"
//         shadow="fbShadow"
//         alignItems="stretch"
//         flexShrink={0}
//         borderRadius="fbRadius"
//         borderWidth="3xs"
//         direction="column"
//         //   {...rest}
//       >
//         <Stack spacing={6} py={6}>
//           <BookingCardHeader
//             display={false}
//             id={store.requestInfo.requestSLUG}
//             client={store.requestInfo.contactInfo}
//             requestSLUG={store.requestInfo.requestSLUG}
//             students={1}
//             billingInfo={store.requestInfo.billingInfo}
//             showBreakdown={true}
//             openModal={undefined}
//             lostRequest={false}
//             dateCreated={store.requestInfo.dateCreated}
//             lessonInfo={store.requestInfo.lessonInfo}
//             requestStatus={store.requestInfo.requestStatus}
//           />
//           <Collapse in={show}>
//             <Stack spacing={6}>
//               <BookingDetails
//                 isDisabled={false}
//                 lostRequest={false}
//                 isInvalid={false}
//                 students={store.requestInfo.students}
//                 isPending={true}
//                 onChange={undefined}
//                 checkedStatus={{}}
//                 displayCheckbox={false}
//               />

//               <LessonInformation
//                 mt={2}
//                 px={[5, 6]}
//                 client={store.requestInfo.contactInfo}
//                 {...store.requestInfo.lessonInfo}
//               />
//             </Stack>
//           </Collapse>
//         </Stack>
//       </Flex>
//     );
//   }
// );

// export default RequestSummaryCard;

// export const RequestDetailInfo = ({}) => {
// const sampleAgent = {
//     name: "Benita",
//     phone_number: "+2349095121865",
//     email: "benita@tuteria.com",
//     image: "https://ik.im@agekit.io/gbudoh/Team_Photos/Benita_LzsSfrfW0.jpg",
//   };
//   const store = AdminSearchStore.create(
//     {},
//     {
//       adapter: {
//         ...adapter,
//         initializeAdminSearch: async () => {
//           return samplePromise({
//             serverInfo: {
//               agent: sampleAgent,
//               created: "2021-12-10T09:18:05.415Z",
//               modified: "2021-12-10T09:18:05.415Z",
//               status: "pending",
//               tutorRequestInfo: SAMPLEREQUEST.splitRequests[0],
//               rawRequest: {
//                 budget: 70000,
//                 hourlyRate: 4000,
//               },
//             },
//             requestInfo: {
//               ...SAMPLEREQUEST,
//               childDetails: [SAMPLEREQUEST.childDetails[0]],
//               splitRequests: [SAMPLEREQUEST.splitRequests[0]],
//             },
//             firstSearch: undefined,
//             tutors: [],
//             specialities: [
//               { key: "Primary Math", values: ["Engineering", "Sciences"] },
//             ],
//           });
//         },
//       },
//     }
//   );
//   React.useEffect(() => {
//     store.initializeAdminSearch();
//   }, []);
//   return <RequestSummaryCard store={store} />;
// };
