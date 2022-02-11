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
    isIndemand: false,
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
  requestInfo,
  tutors: demoData.tutors.map((j) => ({
    ...j,
    totalAmount: 24000,
    lessons: 4,
  })),
  bookingInfo: {
    slug: demoData.requestInfo.slug,
    tuitionFee: 48000,
    totalLessons: 12,
    totalDiscount: 0,
    transportFare: 0,
    couponDiscount: 0,
    paidSpeakingFee: false,
    distanceThreshold: 20,
    walletBalance: 0,
    fareParKM: 25,
    currency: "₦",
    timeSubmitted: new Date().toISOString(),
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
