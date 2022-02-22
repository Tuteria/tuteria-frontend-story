import {
  getCurrencyForCountry,
  resolveCurrencyFromCountry,
} from "@tuteria/shared-lib/src/components/payments/hooks";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import { trimSearchResult } from "@tuteria/shared-lib/src/home-tutoring/request-flow/search-fns";
import storage from "@tuteria/shared-lib/src/storage";
import {
  SAMPLENEIGHBORINGAREA,
  SAMPLEREQUEST,
  TUTORSEARCHRESULT_DATA,
  TUTORSEARCHRESULT_DATA_TRIMED,
} from "./sampleData";

const REGION_KEY = "TEST-REGIONS-VICINITIES";
const COUNTRY_KEY = "TEST-COUNTRIES";
const REQUEST_KEY = "TEST-HOME-TUTORING-REQUEST";
export function samplePromise(data = {}, timer = 300): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timer);
  });
}
let gatewayJson = {
  amount: "45000",
  order: "MCYN9OWEOBWA",
  currency: "ngn",
  base_country: "NG",
  description: "Gold Flower",
  discount: 0,
  user_details: {
    first_name: "Abiola",
    last_name: "Oyeniyi",
    country: "Nigeria",
    email: "gbozee@gmail.com",
    phone_number: "2347035209976",
    key: "pk_test_3146e297e6d0463fea560139bc122a4aae04fedb",
    redirect_url:
      "https://payment.tuteria.com/paystack/verify-payment/MCYN9OWEOBWA/?amount=400000",
    kind: "paystack",
    js_script: "https://js.paystack.co/v1/inline.js",
  },
  paid: false,
};
export function generateInvoice(amountToBePaid, paymentInfo) {
  //params = {amount,gatewayFee,monthsPaid}
  // let gatewayFee = 0;
  // if (gatewayFunc) {
  //   gatewayFee += gatewayFunc(amount);
  // }
  return Promise.resolve({ ...gatewayJson, amount: amountToBePaid });
}

export const PRICING_INFO = {
  subjectFactor: [
    {
      subject: "Home Tutoring",
      rate: 1000,
    },
    {
      subject: "Agricultural Science",
      rate: 1200,
    },
    {
      subject: "Algebra",
      rate: 1200,
    },
    {
      subject: "Arithmetic",
      rate: 1200,
    },
    {
      subject: "Basic Mathematics",
      rate: 1200,
    },
    {
      subject: "Basic Sciences",
      rate: 1200,
    },
    {
      subject: "Basic Technology",
      rate: 1200,
    },
    {
      subject: "Biology",
      rate: 1200,
    },
    {
      subject: "Business Studies",
      rate: 1200,
    },
    {
      subject: "Chemistry",
      rate: 1200,
    },
    {
      subject: "Christian Religious Studies",
      rate: 1200,
    },
    {
      subject: "Civic Education",
      rate: 1200,
    },
    {
      subject: "Commerce",
      rate: 1200,
    },
    {
      subject: "Composition",
      rate: 1200,
    },
    {
      subject: "Creative Writing",
      rate: 1200,
    },
    {
      subject: "Economics",
      rate: 1200,
    },
    {
      subject: "Elementary English",
      rate: 1200,
    },
    {
      subject: "Elementary Mathematics",
      rate: 1200,
    },
    {
      subject: "English Grammar",
      rate: 1200,
    },
    {
      subject: "English Language",
      rate: 1200,
    },
    {
      subject: "English Poetry",
      rate: 1200,
    },
    {
      subject: "Essay Writing",
      rate: 1200,
    },
    {
      subject: "Fine Art",
      rate: 1200,
    },
    {
      subject: "Fine Art & Nature",
      rate: 1200,
    },
    {
      subject: "Food & Nutrition",
      rate: 1200,
    },
    {
      subject: "Further Mathematics",
      rate: 1200,
    },
    {
      subject: "General Mathematics",
      rate: 1200,
    },
    {
      subject: "Geography",
      rate: 1200,
    },
    {
      subject: "Geometry",
      rate: 1200,
    },
    {
      subject: "Government",
      rate: 1200,
    },
    {
      subject: "Handwriting Improvement",
      rate: 1200,
    },
    {
      subject: "History",
      rate: 1200,
    },
    {
      subject: "Home Economics",
      rate: 1200,
    },
    {
      subject: "Information Technology (ICT)",
      rate: 1200,
    },
    {
      subject: "Inorganic Chemistry",
      rate: 1200,
    },
    {
      subject: "Islamic Religious Studies",
      rate: 1200,
    },
    {
      subject: "Letter Writing",
      rate: 1200,
    },
    {
      subject: "Life Sciences",
      rate: 1200,
    },
    {
      subject: "Literacy & Numeracy",
      rate: 1200,
    },
    {
      subject: "Literature in English",
      rate: 1200,
    },
    {
      subject: "Moral & Health Habits",
      rate: 1200,
    },
    {
      subject: "Nigerian History",
      rate: 1200,
    },
    {
      subject: "Organic Chemistry",
      rate: 1200,
    },
    {
      subject: "Phonetics",
      rate: 1200,
    },
    {
      subject: "Phonics",
      rate: 1200,
    },
    {
      subject: "Physical Education",
      rate: 1200,
    },
    {
      subject: "Physics",
      rate: 1200,
    },
    {
      subject: "Pictures Reading",
      rate: 1200,
    },
    {
      subject: "Poems & Rhymes",
      rate: 1200,
    },
    {
      subject: "Principles of Accounting",
      rate: 1200,
    },
    {
      subject: "Probability",
      rate: 1200,
    },
    {
      subject: "Quantitative Reasoning",
      rate: 1200,
    },
    {
      subject: "Reading Comprehension",
      rate: 1200,
    },
    {
      subject: "Shapes & Body Parts",
      rate: 1200,
    },
    {
      subject: "Social Studies",
      rate: 1200,
    },
    {
      subject: "Spellings",
      rate: 1200,
    },
    {
      subject: "Spoken English",
      rate: 1200,
    },
    {
      subject: "Technical Drawing",
      rate: 1200,
    },
    {
      subject: "Trigonometry",
      rate: 1200,
    },
    {
      subject: "Verbal Reasoning",
      rate: 1200,
    },
    {
      subject: "Vocabulary Building",
      rate: 1200,
    },
    {
      subject: "Acturial Science",
      rate: 2000,
    },
    {
      subject: "African History",
      rate: 1750,
    },
    {
      subject: "Anatomy",
      rate: 2000,
    },
    {
      subject: "Architecture",
      rate: 1750,
    },
    {
      subject: "Biochemistry",
      rate: 1750,
    },
    {
      subject: "Botany",
      rate: 1500,
    },
    {
      subject: "Building Drawing",
      rate: 2000,
    },
    {
      subject: "Business Administration",
      rate: 1500,
    },
    {
      subject: "Calculus",
      rate: 1750,
    },
    {
      subject: "Chemical Engineering",
      rate: 1500,
    },
    {
      subject: "Civil Engineering",
      rate: 1500,
    },
    {
      subject: "Company Law",
      rate: 2000,
    },
    {
      subject: "Differential Equations",
      rate: 2000,
    },
    {
      subject: "Discrete Mathematics",
      rate: 1500,
    },
    {
      subject: "Drilling and Completions",
      rate: 5000,
    },
    {
      subject: "Econometrics",
      rate: 5000,
    },
    {
      subject: "Electrical Engineering",
      rate: 1500,
    },
    {
      subject: "Environmental Management",
      rate: 1500,
    },
    {
      subject: "Finite Mathematics",
      rate: 2500,
    },
    {
      subject: "Genetics",
      rate: 1750,
    },
    {
      subject: "Geographic Information System (ArcGIS)",
      rate: 5000,
    },
    {
      subject: "Geology",
      rate: 1750,
    },
    {
      subject: "Law",
      rate: 2000,
    },
    {
      subject: "Linguistics",
      rate: 1500,
    },
    {
      subject: "Logic",
      rate: 1500,
    },
    {
      subject: "Mathematica",
      rate: 2500,
    },
    {
      subject: "MATLAB",
      rate: 2500,
    },
    {
      subject: "Mechanical Engineering",
      rate: 1500,
    },
    {
      subject: "Microbiology",
      rate: 1500,
    },
    {
      subject: "Numerical Methods",
      rate: 2500,
    },
    {
      subject: "Oilfield Maths",
      rate: 3000,
    },
    {
      subject: "Philosophy",
      rate: 1500,
    },
    {
      subject: "Physiology",
      rate: 1500,
    },
    {
      subject: "Political Science",
      rate: 1500,
    },
    {
      subject: "Proofreading & Editing",
      rate: 1500,
    },
    {
      subject: "Regression & Correlation",
      rate: 1750,
    },
    {
      subject: "Sociology",
      rate: 1500,
    },
    {
      subject: "Statistics",
      rate: 1750,
    },
    {
      subject: "Thermodynamics",
      rate: 1750,
    },
    {
      subject: "World History",
      rate: 1750,
    },
    {
      subject: "Zoology",
      rate: 1500,
    },
    {
      subject: "Annang Language",
      rate: 2000,
    },
    {
      subject: "Arabic Language",
      rate: 2000,
    },
    {
      subject: "Chinese Language",
      rate: 3500,
    },
    {
      subject: "Ebira Language",
      rate: 2000,
    },
    {
      subject: "Edo Language",
      rate: 1750,
    },
    {
      subject: "Efik Language",
      rate: 2000,
    },
    {
      subject: "French Language",
      rate: 2000,
    },
    {
      subject: "Fulani Language",
      rate: 2500,
    },
    {
      subject: "German Language",
      rate: 3000,
    },
    {
      subject: "Hausa Language",
      rate: 2500,
    },
    {
      subject: "Ibibio Language",
      rate: 2000,
    },
    {
      subject: "Igala Language",
      rate: 2000,
    },
    {
      subject: "Igbo Language",
      rate: 1500,
    },
    {
      subject: "Ijaw Language",
      rate: 1750,
    },
    {
      subject: "Itsekiri Language",
      rate: 2500,
    },
    {
      subject: "Kalabari Language",
      rate: 2000,
    },
    {
      subject: "Kanuri Language",
      rate: 2500,
    },
    {
      subject: "Nupe Langauge",
      rate: 2500,
    },
    {
      subject: "Portugese Language",
      rate: 3500,
    },
    {
      subject: "Russian Language",
      rate: 3000,
    },
    {
      subject: "Spanish Language",
      rate: 3000,
    },
    {
      subject: "TIV Language",
      rate: 2500,
    },
    {
      subject: "Urhobo Language",
      rate: 2500,
    },
    {
      subject: "Yoruba Language",
      rate: 1500,
    },
    {
      subject: "Audition Preparation",
      rate: 2500,
    },
    {
      subject: "Clarinet",
      rate: 3500,
    },
    {
      subject: "Conducting",
      rate: 2000,
    },
    {
      subject: "Drums",
      rate: 2000,
    },
    {
      subject: "Ear Training",
      rate: 2000,
    },
    {
      subject: "Flute",
      rate: 2000,
    },
    {
      subject: "French Horn",
      rate: 3000,
    },
    {
      subject: "Guitar",
      rate: 2000,
    },
    {
      subject: "Music History",
      rate: 1750,
    },
    {
      subject: "Music Production",
      rate: 2500,
    },
    {
      subject: "Music Theory",
      rate: 1750,
    },
    {
      subject: "Opera Voice",
      rate: 3000,
    },
    {
      subject: "Piano",
      rate: 2000,
    },
    {
      subject: "Rapping",
      rate: 2000,
    },
    {
      subject: "Saxophone",
      rate: 2500,
    },
    {
      subject: "Singing",
      rate: 2000,
    },
    {
      subject: "Song Writing",
      rate: 2000,
    },
    {
      subject: "Trombone",
      rate: 3000,
    },
    {
      subject: "Trumpet",
      rate: 2500,
    },
    {
      subject: "Violin",
      rate: 2500,
    },
    {
      subject: "Voice Training",
      rate: 2000,
    },
    {
      subject: "Afang Soup",
      rate: 1500,
    },
    {
      subject: "Ankara Craft",
      rate: 1250,
    },
    {
      subject: "Assorted Meals",
      rate: 1250,
    },
    {
      subject: "Bag Making",
      rate: 1250,
    },
    {
      subject: "Ballet",
      rate: 1750,
    },
    {
      subject: "Ballroom Dance",
      rate: 2500,
    },
    {
      subject: "Bead Making",
      rate: 1250,
    },
    {
      subject: "Bitter Leaf Soup",
      rate: 1250,
    },
    {
      subject: "Blog Management",
      rate: 1500,
    },
    {
      subject: "Cake Making",
      rate: 1500,
    },
    {
      subject: "Calabar Soups",
      rate: 1250,
    },
    {
      subject: "Choreography",
      rate: 2000,
    },
    {
      subject: "Cloth Customization",
      rate: 1250,
    },
    {
      subject: "Cocktail",
      rate: 1250,
    },
    {
      subject: "Confectionaries",
      rate: 1250,
    },
    {
      subject: "Continental Dishes",
      rate: 1250,
    },
    {
      subject: "Cosmetology",
      rate: 1500,
    },
    {
      subject: "Creative Arts",
      rate: 1500,
    },
    {
      subject: "Decoration",
      rate: 1250,
    },
    {
      subject: "Desserts",
      rate: 1250,
    },
    {
      subject: "Drawing",
      rate: 1250,
    },
    {
      subject: "Edikaikong Soup",
      rate: 1250,
    },
    {
      subject: "Egusi Soup",
      rate: 1250,
    },
    {
      subject: "Electronics",
      rate: 1750,
    },
    {
      subject: "Etiquette",
      rate: 2500,
    },
    {
      subject: "Event Management",
      rate: 1500,
    },
    {
      subject: "Event Planning",
      rate: 1500,
    },
    {
      subject: "Ewedu Soup",
      rate: 1250,
    },
    {
      subject: "Face Treatment",
      rate: 1500,
    },
    {
      subject: "Facial Beauty",
      rate: 1250,
    },
    {
      subject: "Fashion Designing",
      rate: 1250,
    },
    {
      subject: "Fashion Drawing",
      rate: 1250,
    },
    {
      subject: "Gele Tying",
      rate: 1250,
    },
    {
      subject: "General Cooking",
      rate: 1250,
    },
    {
      subject: "Hair Styling",
      rate: 1250,
    },
    {
      subject: "Hair Weaving",
      rate: 1250,
    },
    {
      subject: "Health Coaching",
      rate: 1250,
    },
    {
      subject: "Igbo Soups",
      rate: 1250,
    },
    {
      subject: "Interior Design",
      rate: 1250,
    },
    {
      subject: "Jewelry Design",
      rate: 2500,
    },
    {
      subject: "Leather Work",
      rate: 1250,
    },
    {
      subject: "Macrame Craft",
      rate: 1500,
    },
    {
      subject: "Make up",
      rate: 1250,
    },
    {
      subject: "Needle Work",
      rate: 1250,
    },
    {
      subject: "Nutritious Eating",
      rate: 1250,
    },
    {
      subject: "Ofada Soup",
      rate: 1250,
    },
    {
      subject: "Ogbono Soup",
      rate: 1250,
    },
    {
      subject: "Oha Soup",
      rate: 1250,
    },
    {
      subject: "Okro Soup",
      rate: 1250,
    },
    {
      subject: "Painting",
      rate: 1250,
    },
    {
      subject: "Personal Hygiene",
      rate: 1250,
    },
    {
      subject: "Phone Repairs",
      rate: 1500,
    },
    {
      subject: "Photography",
      rate: 2500,
    },
    {
      subject: "Poultry & Livestock",
      rate: 1500,
    },
    {
      subject: "Sewing & Tailoring",
      rate: 1250,
    },
    {
      subject: "Shawama",
      rate: 1500,
    },
    {
      subject: "Small Chops",
      rate: 1250,
    },
    {
      subject: "Wedding Planning",
      rate: 1500,
    },
    {
      subject: "Weight Loss",
      rate: 1500,
    },
    {
      subject: "White Soup",
      rate: 1250,
    },
    {
      subject: "Wire Works",
      rate: 1250,
    },
    {
      subject: "Basketball Coaching",
      rate: 1750,
    },
    {
      subject: "Board Skating",
      rate: 1750,
    },
    {
      subject: "Body Building",
      rate: 1750,
    },
    {
      subject: "Chess",
      rate: 1750,
    },
    {
      subject: "Cricket Coaching",
      rate: 1750,
    },
    {
      subject: "Fitness & Exercise",
      rate: 1750,
    },
    {
      subject: "Flat Stomach",
      rate: 1750,
    },
    {
      subject: "Football Coaching",
      rate: 1750,
    },
    {
      subject: "Gymnastics",
      rate: 1750,
    },
    {
      subject: "Kung Fu",
      rate: 1750,
    },
    {
      subject: "Lawn Tennis",
      rate: 2000,
    },
    {
      subject: "Martial Arts",
      rate: 1750,
    },
    {
      subject: "Scrabble",
      rate: 1750,
    },
    {
      subject: "Self Defence",
      rate: 1750,
    },
    {
      subject: "Sports Nutrition",
      rate: 1750,
    },
    {
      subject: "Swimming",
      rate: 2000,
    },
    {
      subject: "Table Tennis",
      rate: 1750,
    },
    {
      subject: "Track and Field",
      rate: 1750,
    },
    {
      subject: "Volleyball",
      rate: 1750,
    },
    {
      subject: "Yoga",
      rate: 1750,
    },
    {
      subject: "ACCA",
      rate: 3500,
    },
    {
      subject: "Bar EXAM",
      rate: 3000,
    },
    {
      subject: "CFA",
      rate: 5000,
    },
    {
      subject: "CIMA",
      rate: 5000,
    },
    {
      subject: "CIPMN",
      rate: 2500,
    },
    {
      subject: "CISA",
      rate: 2500,
    },
    {
      subject: "CITN",
      rate: 2500,
    },
    {
      subject: "GMAT",
      rate: 3000,
    },
    {
      subject: "GRE",
      rate: 3000,
    },
    {
      subject: "ICAN",
      rate: 2500,
    },
    {
      subject: "ICSAN",
      rate: 3500,
    },
    {
      subject: "IELTS",
      rate: 2500,
    },
    {
      subject: "ISMN",
      rate: 3000,
    },
    {
      subject: "LSAT",
      rate: 3000,
    },
    {
      subject: "MCAT",
      rate: 2500,
    },
    {
      subject: "NIM",
      rate: 2500,
    },
    {
      subject: "PMI",
      rate: 2500,
    },
    {
      subject: "PMP",
      rate: 3000,
    },
    {
      subject: "SAT Math",
      rate: 3000,
    },
    {
      subject: "SAT Reading",
      rate: 3000,
    },
    {
      subject: "SAT Writing",
      rate: 3000,
    },
    {
      subject: "TOEFL",
      rate: 2500,
    },
    {
      subject: "Business Development",
      rate: 3000,
    },
    {
      subject: "Business Management",
      rate: 3000,
    },
    {
      subject: "Career Counselling",
      rate: 2000,
    },
    {
      subject: "Company Growth",
      rate: 2000,
    },
    {
      subject: "Contract Management",
      rate: 2500,
    },
    {
      subject: "COREN",
      rate: 2500,
    },
    {
      subject: "Customer Experience",
      rate: 1750,
    },
    {
      subject: "Data Analysis",
      rate: 2500,
    },
    {
      subject: "Data Structures",
      rate: 2500,
    },
    {
      subject: "Digital Marketing",
      rate: 2000,
    },
    {
      subject: "Financial Analysis",
      rate: 4000,
    },
    {
      subject: "Forex Trading",
      rate: 4000,
    },
    {
      subject: "Management Accounting",
      rate: 3000,
    },
    {
      subject: "Negotiation Skills",
      rate: 2500,
    },
    {
      subject: "Operations Research",
      rate: 3000,
    },
    {
      subject: "Personal Finance",
      rate: 2000,
    },
    {
      subject: "Presentation Skills",
      rate: 2500,
    },
    {
      subject: "Procurement & Inventory",
      rate: 2500,
    },
    {
      subject: "Proposal Writing",
      rate: 2000,
    },
    {
      subject: "Public Speaking",
      rate: 2000,
    },
    {
      subject: "Social Media Marketing",
      rate: 2000,
    },
    {
      subject: "Writing Business Plan",
      rate: 2000,
    },
    {
      subject: "ADD/ADHD",
      rate: 2000,
    },
    {
      subject: "Aspergers",
      rate: 2000,
    },
    {
      subject: "Autism",
      rate: 2000,
    },
    {
      subject: "Braille Reading",
      rate: 2000,
    },
    {
      subject: "Dyslexia",
      rate: 2000,
    },
    {
      subject: "Hard of Hearing",
      rate: 2000,
    },
    {
      subject: "Sign Language",
      rate: 2000,
    },
    {
      subject: "Special Needs",
      rate: 2000,
    },
    {
      subject: "Speech Disorders",
      rate: 2000,
    },
    {
      subject: "Adobe Illustrator",
      rate: 3000,
    },
    {
      subject: "Adobe Lightroom",
      rate: 2000,
    },
    {
      subject: "Adobe Photoshop",
      rate: 2000,
    },
    {
      subject: "ASP.NET",
      rate: 4000,
    },
    {
      subject: "Autodesk AutoCAD",
      rate: 2000,
    },
    {
      subject: "AutoDesk Maya",
      rate: 2500,
    },
    {
      subject: "Basic Computing",
      rate: 1500,
    },
    {
      subject: "C Programming",
      rate: 2500,
    },
    {
      subject: "C# Programming",
      rate: 2000,
    },
    {
      subject: "C++ Programming",
      rate: 1500,
    },
    {
      subject: "CCNA",
      rate: 2000,
    },
    {
      subject: "CCNP",
      rate: 2500,
    },
    {
      subject: "CompTia A +",
      rate: 2000,
    },
    {
      subject: "CompTia Network +",
      rate: 2000,
    },
    {
      subject: "CompTia Security +",
      rate: 2000,
    },
    {
      subject: "Computer Networking",
      rate: 2000,
    },
    {
      subject: "Computer Repair",
      rate: 1500,
    },
    {
      subject: "Computer Science",
      rate: 1500,
    },
    {
      subject: "CORELDRAW",
      rate: 1500,
    },
    {
      subject: "Database Management",
      rate: 2500,
    },
    {
      subject: "Desktop Publishing",
      rate: 1500,
    },
    {
      subject: "E View",
      rate: 2000,
    },
    {
      subject: "Graphic Design",
      rate: 1500,
    },
    {
      subject: "Java Programming",
      rate: 2000,
    },
    {
      subject: "Javascript Programming",
      rate: 2000,
    },
    {
      subject: "Linux OS",
      rate: 2000,
    },
    {
      subject: "Microsoft Access",
      rate: 1500,
    },
    {
      subject: "Microsoft Excel",
      rate: 1500,
    },
    {
      subject: "Microsoft Outlook",
      rate: 1500,
    },
    {
      subject: "Microsoft PowerPoint",
      rate: 1500,
    },
    {
      subject: "Microsoft Word",
      rate: 1500,
    },
    {
      subject: "Mobile App Development",
      rate: 3000,
    },
    {
      subject: "ORACLE Certification",
      rate: 3000,
    },
    {
      subject: "Photo Editing",
      rate: 2000,
    },
    {
      subject: "PHP Programming",
      rate: 2000,
    },
    {
      subject: "Python Programming",
      rate: 2000,
    },
    {
      subject: "SAS Business Analytics Software",
      rate: 2500,
    },
    {
      subject: "Search Engine Optimization",
      rate: 1500,
    },
    {
      subject: "Software Engineering",
      rate: 2000,
    },
    {
      subject: "SPSS",
      rate: 2000,
    },
    {
      subject: "SQL",
      rate: 2500,
    },
    {
      subject: "Typing Skills",
      rate: 1500,
    },
    {
      subject: "Video Animation",
      rate: 3000,
    },
    {
      subject: "Video Editing",
      rate: 2000,
    },
    {
      subject: "Video Production",
      rate: 1500,
    },
    {
      subject: "Visual Basic",
      rate: 2000,
    },
    {
      subject: "Web Design",
      rate: 2000,
    },
    {
      subject: "Web Development",
      rate: 2000,
    },
  ],
  vicinityFactor: [
    {
      state: "Lagos",
      vicinity: "Abule-Egba",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Agege ",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ajah",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ajeromi-Ifelodun",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Akute",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Alagbado",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Alimosho",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Amuwo-Odofin",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Anthony",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Apapa",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Badagry",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ebute-metta",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Egbeda",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ejigbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Epe",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Festac Town",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Gbagada",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ibeju-Lekki",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ifako Ijaiye",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Iju Ishaga",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ikeja",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ikorodu",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ikotun",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ikoyi",
      vicinity_factor: 1.2,
    },
    {
      state: "Lagos",
      vicinity: "Ilupeju",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ikosi-Ketu",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Lagos Island",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Lekki Phase 1",
      vicinity_factor: 1.2,
    },
    {
      state: "Lagos",
      vicinity: "Lekki Phase 2",
      vicinity_factor: 1.2,
    },
    {
      state: "Lagos",
      vicinity: "Magodo",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Maryland",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Mushin",
      vicinity_factor: 0.75,
    },
    {
      state: "Lagos",
      vicinity: "Ogba",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Ogudu",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Ojo",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Ojodu-Berger",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Okota",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Omole",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Oshodi-Isolo",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Sangotedo",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Satellite Town",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Shomolu",
      vicinity_factor: 0.9,
    },
    {
      state: "Lagos",
      vicinity: "Surulere",
      vicinity_factor: 1,
    },
    {
      state: "Lagos",
      vicinity: "Victoria Island",
      vicinity_factor: 1.2,
    },
    {
      state: "Lagos",
      vicinity: "Yaba",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Abuja-Keffi Road",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Airport Road",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Apo",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Asokoro",
      vicinity_factor: 1.2,
    },
    {
      state: "Abuja",
      vicinity: "Bwari",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Central Business District",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Dakwo",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Dawaki",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Dei Dei",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Durumi",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Dutse Alhaji",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Galadimawa",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Garki",
      vicinity_factor: 1.2,
    },
    {
      state: "Abuja",
      vicinity: "Guzape",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Gwagwa",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Gwagwalada",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Gwarimpa",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Iddo",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Jabi",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Jikwoyi",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Kabusa",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Kado",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Katampe",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Kaura",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Kubwa",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Kuje",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Kurudu",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Life Camp",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Lokogoma",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Lugbe",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Mabushi",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Maitama",
      vicinity_factor: 1.2,
    },
    {
      state: "Abuja",
      vicinity: "Maraba-Karu",
      vicinity_factor: 0.75,
    },
    {
      state: "Abuja",
      vicinity: "Nyanya",
      vicinity_factor: 0.9,
    },
    {
      state: "Abuja",
      vicinity: "Utako",
      vicinity_factor: 1,
    },
    {
      state: "Abuja",
      vicinity: "Wuse",
      vicinity_factor: 1.2,
    },
    {
      state: "Abuja",
      vicinity: "Wuye",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Abuloma",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Ada George",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Agip",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Ahoada East",
      vicinity_factor: 0.7,
    },
    {
      state: "Rivers",
      vicinity: "Akinima",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Alo-mini",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Bonny Island",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Bori",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Buguma",
      vicinity_factor: 0.7,
    },
    {
      state: "Rivers",
      vicinity: "Choba",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "D-line",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Diobu",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Eagle Island",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Elechi",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Elele",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Elelenwo",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Eleme",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Eliozu",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Emohua",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Eneka",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Igbo-Etche",
      vicinity_factor: 0.7,
    },
    {
      state: "Rivers",
      vicinity: "Ikwerre",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Khana",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Kpor",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Mgbuoba",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Ogunabali",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Okirika Town",
      vicinity_factor: 0.7,
    },
    {
      state: "Rivers",
      vicinity: "Old G.R.A",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Omagwa",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Onne",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Oyigbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Rivers",
      vicinity: "Ozuoba",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Rukpokwu",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Rumueme",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Rumukrueshi",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Rumuokwuta",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Rumuola",
      vicinity_factor: 1,
    },
    {
      state: "Rivers",
      vicinity: "Rumuoluemeni",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Rumuosi",
      vicinity_factor: 0.9,
    },
    {
      state: "Rivers",
      vicinity: "Trans  Amadi",
      vicinity_factor: 1.2,
    },
    {
      state: "Rivers",
      vicinity: "Woji",
      vicinity_factor: 1,
    },
    {
      state: "Abia",
      vicinity: "Aba",
      vicinity_factor: 1,
    },
    {
      state: "Abia",
      vicinity: "Aba Central",
      vicinity_factor: 1,
    },
    {
      state: "Abia",
      vicinity: "Abiriba",
      vicinity_factor: 0.75,
    },
    {
      state: "Abia",
      vicinity: "Arochukwu",
      vicinity_factor: 0.9,
    },
    {
      state: "Abia",
      vicinity: "Bende",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Eziama-Layout",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Ikwuano",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Isiala Ngwa North",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Isiala Ngwa South",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Obi Ngwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Ohafia",
      vicinity_factor: 0.9,
    },
    {
      state: "Abia",
      vicinity: "Osisioma Ngwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Ugwunagbo",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Umuahia",
      vicinity_factor: 0.9,
    },
    {
      state: "Abia",
      vicinity: "Umuahia Urban I",
      vicinity_factor: 1.2,
    },
    {
      state: "Abia",
      vicinity: "Umuahia Urban III",
      vicinity_factor: 1.2,
    },
    {
      state: "Abia",
      vicinity: "Ukwa East",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Ukwa West",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Umungasi",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "Umunneochi",
      vicinity_factor: 0.7,
    },
    {
      state: "Abia",
      vicinity: "World Bank",
      vicinity_factor: 1,
    },
    {
      state: "Adamawa",
      vicinity: "Airfield",
      vicinity_factor: 0.9,
    },
    {
      state: "Adamawa",
      vicinity: "Damilo",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Demsawo",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Dubeli",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Fufore",
      vicinity_factor: 0.75,
    },
    {
      state: "Adamawa",
      vicinity: "Federal Housing",
      vicinity_factor: 1,
    },
    {
      state: "Adamawa",
      vicinity: "Ganye",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Girei",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Gombi",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Gwadabawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Guyuk",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Hong",
      vicinity_factor: 0.75,
    },
    {
      state: "Adamawa",
      vicinity: "Jada",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Industrial",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Jambutu",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Karewa",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Kochifa Ward",
      vicinity_factor: 0.75,
    },
    {
      state: "Adamawa",
      vicinity: "Lamido Palace",
      vicinity_factor: 1,
    },
    {
      state: "Adamawa",
      vicinity: "Luggere",
      vicinity_factor: 0.75,
    },
    {
      state: "Adamawa",
      vicinity: "Lamurde",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Madaghali",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Maiha",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Mayo-Belwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Michika",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Mubi",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Numan",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Old G.R.A.",
      vicinity_factor: 1.2,
    },
    {
      state: "Adamawa",
      vicinity: "School of Arts",
      vicinity_factor: 0.9,
    },
    {
      state: "Adamawa",
      vicinity: "Shelleng",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Shuware Ward",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Song",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Toungo",
      vicinity_factor: 0.7,
    },
    {
      state: "Adamawa",
      vicinity: "Yola",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Abak",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Eastern Obolo",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Eket",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Esit-Eket",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Essien-Udim",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Etim-Ekpo",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Etinan",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Faha Oku Akpon",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Housing Estate Ewet",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ibiono-Ibom",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ibesikpo-Asutan",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Iboko",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ika",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ikono",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ikot Abasi",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ikot Ekpene",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ini",
      vicinity_factor: 0.7,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Itiam Ikot Abia",
      vicinity_factor: 1.2,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Itu",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Mbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Mkpat-Enin",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Iba Oku",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Mkpat-Enin",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Nsit-Atai",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Nsit-Ibom",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Nsit-Ubium",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Obot-Akara",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Okobo",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Onna",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Oron",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Oruk-Anam",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Ukanafun",
      vicinity_factor: 0.9,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Udung-Uko",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Uruang",
      vicinity_factor: 1,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Urue-Uffong",
      vicinity_factor: 0.75,
    },
    {
      state: "Akwa Ibom",
      vicinity: "Uyo",
      vicinity_factor: 1.2,
    },
    {
      state: "Anambra",
      vicinity: "Aguata",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Aguleri",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Ajalli",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Anaocha",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Ayamelum",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Awka",
      vicinity_factor: 1,
    },
    {
      state: "Anambra",
      vicinity: "Dunukofia",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Ekwusigo",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Ekwulobia",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "GRA I",
      vicinity_factor: 1.2,
    },
    {
      state: "Anambra",
      vicinity: "GRA II",
      vicinity_factor: 1.2,
    },
    {
      state: "Anambra",
      vicinity: "GRA III",
      vicinity_factor: 1.2,
    },
    {
      state: "Anambra",
      vicinity: "Idemili North",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Idemili South",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "IgboUkwuu",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Ihiala",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Industrial Layout",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Njikoka",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Nnewi",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Nnobi",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Ogbaru",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Omagba Lyt Phase I & II",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Onitsha ",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Orumba North",
      vicinity_factor: 0.9,
    },
    {
      state: "Anambra",
      vicinity: "Orumba South",
      vicinity_factor: 0.75,
    },
    {
      state: "Anambra",
      vicinity: "Oyi",
      vicinity_factor: 0.75,
    },
    {
      state: "Bauchi",
      vicinity: "Abubakar Tafawa Balewa University",
      vicinity_factor: 0.9,
    },
    {
      state: "Bauchi",
      vicinity: "Alkaleri",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Army Barracks",
      vicinity_factor: 0.75,
    },
    {
      state: "Bauchi",
      vicinity: "Bacas",
      vicinity_factor: 0.75,
    },
    {
      state: "Bauchi",
      vicinity: "Bauchi",
      vicinity_factor: 1,
    },
    {
      state: "Bauchi",
      vicinity: "Bogoro",
      vicinity_factor: 0.9,
    },
    {
      state: "Bauchi",
      vicinity: "Dass",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Dambam",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Darazo",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Durum",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "G.R.A",
      vicinity_factor: 1.2,
    },
    {
      state: "Bauchi",
      vicinity: "Ganjuwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Gamawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Giade",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Gumi Hill",
      vicinity_factor: 0.9,
    },
    {
      state: "Bauchi",
      vicinity: "Gwaram",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Itas-Gadau",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Jama'Are",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Kari",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Kirfi",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Kofar Jahun",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Kofar Wambai",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Kofar Wasa",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Katagum",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Lushi",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Misau",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Ningi",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Railway Station",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Rishi",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Shira",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Tafawa Balewa Housing Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Bauchi",
      vicinity: "Toro",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Warji",
      vicinity_factor: 0.7,
    },
    {
      state: "Bauchi",
      vicinity: "Yankari",
      vicinity_factor: 0.75,
    },
    {
      state: "Bauchi",
      vicinity: "Zaki",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Amarata-Epie",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Bebelebiri",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Brass",
      vicinity_factor: 0.9,
    },
    {
      state: "Bayelsa",
      vicinity: "Ede-Epe",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Ekeki",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Ekeremor",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Imgbi",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Julius Berger",
      vicinity_factor: 0.9,
    },
    {
      state: "Bayelsa",
      vicinity: "Kolokuma Opokuma",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Nembe",
      vicinity_factor: 0.75,
    },
    {
      state: "Bayelsa",
      vicinity: "Nipost Market",
      vicinity_factor: 0.9,
    },
    {
      state: "Bayelsa",
      vicinity: "Ogbia",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Okaka",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Otuoke",
      vicinity_factor: 1,
    },
    {
      state: "Bayelsa",
      vicinity: "Sagbama",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Swali",
      vicinity_factor: 0.7,
    },
    {
      state: "Bayelsa",
      vicinity: "Southern Ijaw",
      vicinity_factor: 0.75,
    },
    {
      state: "Bayelsa",
      vicinity: "Yenagoa",
      vicinity_factor: 1.2,
    },
    {
      state: "Benue",
      vicinity: "Ado",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Agatu",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Ahmadu Bello",
      vicinity_factor: 0.75,
    },
    {
      state: "Benue",
      vicinity: "Apa",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Buruku",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Eupi-New Layout",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Federal Housing Area",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Federal Low",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Gboko",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Guma",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Gwer East",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "High Level Ass. Vill.",
      vicinity_factor: 1,
    },
    {
      state: "Benue",
      vicinity: "Hudco Quarters",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Katsinala",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Kokoroo",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Konshisha",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Kwande",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Logo",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Makurdi",
      vicinity_factor: 1.2,
    },
    {
      state: "Benue",
      vicinity: "Ministry of Works",
      vicinity_factor: 1.2,
    },
    {
      state: "Benue",
      vicinity: "Ohimini",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "New Market",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "No. Cross",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Obi",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Ochido's Palace",
      vicinity_factor: 0.9,
    },
    {
      state: "Benue",
      vicinity: "Ogbadibo",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Ohimini",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Oju",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Okpokwu",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Otukpo",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Post Office",
      vicinity_factor: 0.75,
    },
    {
      state: "Benue",
      vicinity: "Rice Mill",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Sabon Gari",
      vicinity_factor: 0.75,
    },
    {
      state: "Benue",
      vicinity: "Tarka",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Ushongo",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Ukum",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Vandeikya",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Wadata",
      vicinity_factor: 0.7,
    },
    {
      state: "Benue",
      vicinity: "Wurukum",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Ajari",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Abadam",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Bama",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Bayo",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Biu",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Bolori",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Chibok",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "College of Agric.",
      vicinity_factor: 0.75,
    },
    {
      state: "Borno",
      vicinity: "Dikwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Damboa",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Elkanemi islamic Theology",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "G.R.A ",
      vicinity_factor: 1,
    },
    {
      state: "Borno",
      vicinity: "Gubio",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Guzamala",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Government House",
      vicinity_factor: 1.2,
    },
    {
      state: "Borno",
      vicinity: "Gwange",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Gwoza",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Hawul",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Kukawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Kagar",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Kwaya Kusar",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Konduga",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Lamisula / mafoni",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "London ciki",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Jere",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Maiduguri",
      vicinity_factor: 1,
    },
    {
      state: "Borno",
      vicinity: "Molai G. R. A.",
      vicinity_factor: 1,
    },
    {
      state: "Borno",
      vicinity: "Monguno",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "New G.R.A",
      vicinity_factor: 0.75,
    },
    {
      state: "Borno",
      vicinity: "Nganzai",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Police College",
      vicinity_factor: 0.75,
    },
    {
      state: "Borno",
      vicinity: "Pompamari",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Shani",
      vicinity_factor: 0.7,
    },
    {
      state: "Borno",
      vicinity: "Shehu's  Palace",
      vicinity_factor: 0.9,
    },
    {
      state: "Borno",
      vicinity: "State low cost",
      vicinity_factor: 0.9,
    },
    {
      state: "Cross River",
      vicinity: "Abi",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Airport Road",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Akamkpa",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Akpabuyo",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Bakassi",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Bekwarra",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Biase",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Bogobiri",
      vicinity_factor: 0.9,
    },
    {
      state: "Cross River",
      vicinity: "Boki",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Calabar",
      vicinity_factor: 1,
    },
    {
      state: "Cross River",
      vicinity: "Creek Town",
      vicinity_factor: 0.9,
    },
    {
      state: "Cross River",
      vicinity: "Dan Archibong",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Ediba",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Egerton",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Ekpo Abasi",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Essien Town",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Eta Agbor",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Etung",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Goldie",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Ikom",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Ikorinim",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Ikot Ansa",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Main Market",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Obanliku",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Obubra",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Obudu",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Odukpani",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Ogoja",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "Stadium",
      vicinity_factor: 0.75,
    },
    {
      state: "Cross River",
      vicinity: "State Housing Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Cross River",
      vicinity: "Uwanse",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Yakkur",
      vicinity_factor: 0.7,
    },
    {
      state: "Cross River",
      vicinity: "Yala",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Aniocha",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Asaba",
      vicinity_factor: 0.9,
    },
    {
      state: "Delta",
      vicinity: "Bomadi",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Burutu",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Effurun",
      vicinity_factor: 0.9,
    },
    {
      state: "Delta",
      vicinity: "Ethiope",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "G. R. A.",
      vicinity_factor: 1,
    },
    {
      state: "Delta",
      vicinity: "Ibusa",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Ika",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Isoko",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Kwale",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Ndokwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Ogwashi Uku",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Okpe ",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Oshimili",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Patani",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Sapele",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Udu",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Ughelli",
      vicinity_factor: 0.75,
    },
    {
      state: "Delta",
      vicinity: "Ukwani",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Uvwie",
      vicinity_factor: 0.7,
    },
    {
      state: "Delta",
      vicinity: "Warri",
      vicinity_factor: 0.9,
    },
    {
      state: "Ebonyi",
      vicinity: "Abakaliki",
      vicinity_factor: 0.9,
    },
    {
      state: "Ebonyi",
      vicinity: "Afikpo",
      vicinity_factor: 0.75,
    },
    {
      state: "Ebonyi",
      vicinity: "Edda",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Enugu Express",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ezza",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ikwo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ishielu",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ivo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Kpiri-Kpiri",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Mbukobe",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ndiaguo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Izzi",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "New layout",
      vicinity_factor: 0.9,
    },
    {
      state: "Ebonyi",
      vicinity: "Ntezi Aba",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ogbaga Rd",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ogoja ",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Onicha",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ohaozara",
      vicinity_factor: 0.7,
    },
    {
      state: "Ebonyi",
      vicinity: "Ohaukwu",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Akoko Edo",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Auchi",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Benin City",
      vicinity_factor: 0.9,
    },
    {
      state: "Edo",
      vicinity: "Egor",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Esan Central",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Esan North",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Esan South",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Ekpoma",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Etsako Central",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Etsako East",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Etsako West",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Igueben",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Ikpoba Okha",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Oredo",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Oba Akenzua II",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Ohovbeokao",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Orhionmwon",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Ovia North-East",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Ovia South-West",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Owan East",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Owan West",
      vicinity_factor: 0.75,
    },
    {
      state: "Edo",
      vicinity: "Oregbeni",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Ugbekun",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Ugbowo",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Uhumwonde",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Uselu",
      vicinity_factor: 0.7,
    },
    {
      state: "Edo",
      vicinity: "Uwelu",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Ado Ekiti",
      vicinity_factor: 0.9,
    },
    {
      state: "Ekiti",
      vicinity: "Aiyekire",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Cocoa Dev. Unit Area",
      vicinity_factor: 0.9,
    },
    {
      state: "Ekiti",
      vicinity: "Efon Alaye",
      vicinity_factor: 0.9,
    },
    {
      state: "Ekiti",
      vicinity: "Emure",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Falegan Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Ekiti",
      vicinity: "Federal Polytechnic",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Fehintola Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Ekiti",
      vicinity: "G.R.A.",
      vicinity_factor: 1,
    },
    {
      state: "Ekiti",
      vicinity: "Idolofin",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Ilejemeje",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Irepodun",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Ise",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Ijero",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Ijoka Quarters",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Ikere",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Ikole",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Isolo",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Kojola Quarters",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Moba",
      vicinity_factor: 0.7,
    },
    {
      state: "Ekiti",
      vicinity: "Olora's Palace Area",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Onward",
      vicinity_factor: 0.75,
    },
    {
      state: "Ekiti",
      vicinity: "Oye",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Abakpa Nike",
      vicinity_factor: 0.9,
    },
    {
      state: "Enugu",
      vicinity: "Achi",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Amaoji Agu Nike",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Aninri",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Army Barracks",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Awugu",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "China Town",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Emene",
      vicinity_factor: 0.9,
    },
    {
      state: "Enugu",
      vicinity: "Enugu East",
      vicinity_factor: 0.9,
    },
    {
      state: "Enugu",
      vicinity: "Enugu City",
      vicinity_factor: 1,
    },
    {
      state: "Enugu",
      vicinity: "Ezeagu",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Independence Layout",
      vicinity_factor: 1.2,
    },
    {
      state: "Enugu",
      vicinity: "Igbo Etiti",
      vicinity_factor: 0.9,
    },
    {
      state: "Enugu",
      vicinity: "Isi Uzo",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "New Haven",
      vicinity_factor: 1.2,
    },
    {
      state: "Enugu",
      vicinity: "Nike",
      vicinity_factor: 0.7,
    },
    {
      state: "Enugu",
      vicinity: "Ninth Mile",
      vicinity_factor: 0.9,
    },
    {
      state: "Enugu",
      vicinity: "Nkanu West",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Nsukka",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Ogbete Layout",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Oji River",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Republic Layout",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Udenu",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Udi",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "Ugbo Odogwu",
      vicinity_factor: 0.75,
    },
    {
      state: "Enugu",
      vicinity: "UNN",
      vicinity_factor: 1,
    },
    {
      state: "Enugu",
      vicinity: "Uzo-Uwani",
      vicinity_factor: 0.75,
    },
    {
      state: "Gombe",
      vicinity: "Akko",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Balanga",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Billiri",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Boh",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Bajoga",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Bolori",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Deba",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Dukku",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Emir's Palace",
      vicinity_factor: 0.9,
    },
    {
      state: "Gombe",
      vicinity: "G. R. A",
      vicinity_factor: 1,
    },
    {
      state: "Gombe",
      vicinity: "Funakaye",
      vicinity_factor: 0.75,
    },
    {
      state: "Gombe",
      vicinity: "Gombe",
      vicinity_factor: 0.9,
    },
    {
      state: "Gombe",
      vicinity: "Government House",
      vicinity_factor: 1,
    },
    {
      state: "Gombe",
      vicinity: "Hero Gana",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Jeka Da Fari",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Kaltungo",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Kumbiya Kumbiya",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Kumo",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Kwami",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Mallam Sidi",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Nafada",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Nassarawo",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Pantami",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Shamaki",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Shongom",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Tallese",
      vicinity_factor: 0.75,
    },
    {
      state: "Gombe",
      vicinity: "Tudun Hatsi",
      vicinity_factor: 0.7,
    },
    {
      state: "Gombe",
      vicinity: "Tudun Wada",
      vicinity_factor: 0.75,
    },
    {
      state: "Gombe",
      vicinity: "Yamaltu",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Agoh Mbaise",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Aladinma Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Imo",
      vicinity: "Amawom",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Arugo Layout",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Ehime Mbano",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Ezinihitte Mbaise",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "German hill",
      vicinity_factor: 0.9,
    },
    {
      state: "Imo",
      vicinity: "Ideato North",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Ideato South",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Ihitte ",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Ikeduru",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Ikenegbu Layout",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Isiala Mbano",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Isu",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Industrial area",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Low Cost",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Mbaitolu",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Mbano",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Njaba",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "New Owerri",
      vicinity_factor: 0.9,
    },
    {
      state: "Imo",
      vicinity: "Ngor-Okpala",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Nwangele",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Nkwerre",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Obowo",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Oguta",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Owerri",
      vicinity_factor: 0.9,
    },
    {
      state: "Imo",
      vicinity: "Ohaji",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Ugwu Orji",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Okigwe",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Onuimo",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Orlu",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Umueche",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Oru East",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Oru West",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Umuodu",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Umuoyima Emmanuel College Layout",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Umusasa",
      vicinity_factor: 0.7,
    },
    {
      state: "Imo",
      vicinity: "Uzi Layout",
      vicinity_factor: 0.75,
    },
    {
      state: "Imo",
      vicinity: "Works Layout",
      vicinity_factor: 0.9,
    },
    {
      state: "Jigawa",
      vicinity: "Auyo",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Babura",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Birnin Kudu",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Birniwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Buji",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Dutse",
      vicinity_factor: 0.9,
    },
    {
      state: "Jigawa",
      vicinity: "Fagoji",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Galdimawa",
      vicinity_factor: 0.75,
    },
    {
      state: "Jigawa",
      vicinity: "Garki",
      vicinity_factor: 0.75,
    },
    {
      state: "Jigawa",
      vicinity: "Gagarawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Guri",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Gumel",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Gwaram",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Gwiwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Hadejia ",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Internet Area",
      vicinity_factor: 0.75,
    },
    {
      state: "Jigawa",
      vicinity: "Jahun",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Kaugama",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Kafin Hausa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Kazaure",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Kiri Kasama",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Kiyawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Maigatari",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Majema",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Miga",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Malam Madori",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "New G.R.A",
      vicinity_factor: 0.9,
    },
    {
      state: "Jigawa",
      vicinity: "Ringim",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Roni",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Sabon Garin Zai",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Sabuwar Marinjuwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Sule Tankarkar",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Takur Quartres",
      vicinity_factor: 0.75,
    },
    {
      state: "Jigawa",
      vicinity: "Taura",
      vicinity_factor: 0.7,
    },
    {
      state: "Jigawa",
      vicinity: "Yankwashi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Ahmadu Bello Way",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Barnawa G.R.A",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Birnin-Gwari",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Chikun",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Dallet Barracks",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Giwa",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Igabi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Ikara",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Jaba",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Jema'a",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Kachia",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Airport Road",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Kaduna North",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Kaduna South",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Kafanchan",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Kagarko",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Kajuru",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Kakuri",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Kaura",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Kauru",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Kawo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Kubau",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Kudan",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Kurmi Mashi",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Lere",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Kwoi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Markarfi",
      vicinity_factor: 0.9,
    },
    {
      state: "Kaduna",
      vicinity: "Sabon Gari",
      vicinity_factor: 0.75,
    },
    {
      state: "Kaduna",
      vicinity: "Sanga",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Zango",
      vicinity_factor: 0.7,
    },
    {
      state: "Kaduna",
      vicinity: "Zaria",
      vicinity_factor: 0.9,
    },
    {
      state: "Kano",
      vicinity: "Ajingi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Albasu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Bagwai",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Bebeji",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Bichi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Bunkure",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Dakata",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Dala",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Danbatta",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Dawakin Kudu",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Dawakin Tofa",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Doguwa",
      vicinity_factor: 1.2,
    },
    {
      state: "Kano",
      vicinity: "Fagge",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Gabasawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Garko",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Garum Mallam",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Gaya",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Gezawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Gwale",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Gwarzo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Gyadi Gyadi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kabo",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Kano Municipal",
      vicinity_factor: 0.9,
    },
    {
      state: "Kano",
      vicinity: "Hotoro",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Karaye",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kibiya",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kiru",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kumbotso",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kunchi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Kura",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Madobi",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Makoda",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Minjibir",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Nassarawa GRA",
      vicinity_factor: 0.9,
    },
    {
      state: "Kano",
      vicinity: "Rano",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Rimin Gado",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Rogo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Shanono",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Sharada",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Sumaila",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Takai",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Tarauni",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Tofa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Tsanyawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Tudun Wada",
      vicinity_factor: 0.75,
    },
    {
      state: "Kano",
      vicinity: "Ungogo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Warawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kano",
      vicinity: "Wudil",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Bakori",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Batagarawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Batsari",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Baure",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Bindawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Charanchi",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Dandume",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Danja",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Dan Musa",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Daura",
      vicinity_factor: 0.9,
    },
    {
      state: "Katsina",
      vicinity: "Dutsi",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Dutsin- Ma",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Faskari",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Funtua",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "GRA",
      vicinity_factor: 0.9,
    },
    {
      state: "Katsina",
      vicinity: "Ingawa",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Jibia",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Kafur",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Kaita",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Kankara",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Kankia",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Kastina",
      vicinity_factor: 0.9,
    },
    {
      state: "Katsina",
      vicinity: "Kofar Baru",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Kurfi",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Kusada",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Low Cost",
      vicinity_factor: 0.75,
    },
    {
      state: "Katsina",
      vicinity: "Mai Aida",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Malumfashi",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Mani",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Mashi",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Matazuu",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Musawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Nasarawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Rimi",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Saban Gari",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Sabuwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Safana",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Sandamu",
      vicinity_factor: 0.7,
    },
    {
      state: "Katsina",
      vicinity: "Zango",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Aleiro",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Arewa Dandi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Argungu",
      vicinity_factor: 0.75,
    },
    {
      state: "Kebbi",
      vicinity: "Augie",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Bagudo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Birninkebbi",
      vicinity_factor: 0.9,
    },
    {
      state: "Kebbi",
      vicinity: "Bunza",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Dandi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Fakai",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Gesse low  cost",
      vicinity_factor: 0.75,
    },
    {
      state: "Kebbi",
      vicinity: "Gwandu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Jega",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Kalgo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Koko",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Maiyama",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Ngaski",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Rafin Atiku",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Sakaba",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Shanga",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Suru",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Wasagu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Yauri",
      vicinity_factor: 0.7,
    },
    {
      state: "Kebbi",
      vicinity: "Zuru",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Adavi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Ajaokuta",
      vicinity_factor: 0.75,
    },
    {
      state: "Kogi",
      vicinity: "Ankpa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Bassa",
      vicinity_factor: 0.75,
    },
    {
      state: "Kogi",
      vicinity: "Dekina",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Ibaji",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Idah",
      vicinity_factor: 0.75,
    },
    {
      state: "Kogi",
      vicinity: "Igalamela-Odolu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Ijimu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Kabba ",
      vicinity_factor: 0.75,
    },
    {
      state: "Kogi",
      vicinity: "Lokoja",
      vicinity_factor: 0.9,
    },
    {
      state: "Kogi",
      vicinity: "Mopa-Muro",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Ofu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Ogori",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Okehi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Okene",
      vicinity_factor: 0.75,
    },
    {
      state: "Kogi",
      vicinity: "Olamabolo",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Omala",
      vicinity_factor: 0.7,
    },
    {
      state: "Kogi",
      vicinity: "Yagba",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Adewole Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Kwara",
      vicinity: "Asa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Baruten",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Edu",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Gaa Akanbi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Ifelodun",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Ilorin",
      vicinity_factor: 0.9,
    },
    {
      state: "Kwara",
      vicinity: "Irepodun",
      vicinity_factor: 0.75,
    },
    {
      state: "Kwara",
      vicinity: "Jebba",
      vicinity_factor: 0.75,
    },
    {
      state: "Kwara",
      vicinity: "Kaiama",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Koro",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Kulende",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Moro",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Oyun",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Offa",
      vicinity_factor: 0.75,
    },
    {
      state: "Kwara",
      vicinity: "Oke Ero",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Okelele",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Old Yidi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Oloje",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Pakata",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Pategi",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Sabon Line Amilegbe",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Stadium Rd. Gbalasa",
      vicinity_factor: 0.7,
    },
    {
      state: "Kwara",
      vicinity: "Taiwo",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Awe",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Akwanga",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Doma",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Karu",
      vicinity_factor: 0.75,
    },
    {
      state: "Nassarawa",
      vicinity: "Kokona",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Keana",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Keffi",
      vicinity_factor: 0.75,
    },
    {
      state: "Nassarawa",
      vicinity: "Nassarawa Egon",
      vicinity_factor: 0.75,
    },
    {
      state: "Nassarawa",
      vicinity: "Obi",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Toto",
      vicinity_factor: 0.7,
    },
    {
      state: "Nassarawa",
      vicinity: "Lafia",
      vicinity_factor: 0.9,
    },
    {
      state: "Niger",
      vicinity: "Agaie",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Agwara",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Airport Kwangila",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Bida",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Bosso",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Chanchaga",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Edati",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Gbako",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Gurara",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Gwada",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Katcha",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Koida Kura",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Kontagora",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Kpakungu",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Kuchita Ndak Potun",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Lapai",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Layun",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Maitumbi Gwadai",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Minna",
      vicinity_factor: 0.9,
    },
    {
      state: "Niger",
      vicinity: "Magama",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Mariga",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Mokwa",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Muya",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Pailoro",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Rijau",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Rafi",
      vicinity_factor: 0.7,
    },
    {
      state: "Niger",
      vicinity: "Shiroro",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Suleja",
      vicinity_factor: 1,
    },
    {
      state: "Niger",
      vicinity: "Tafa",
      vicinity_factor: 0.75,
    },
    {
      state: "Niger",
      vicinity: "Wushishi",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Abeokuta",
      vicinity_factor: 0.9,
    },
    {
      state: "Ogun",
      vicinity: "Ado Odo/ Ota",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Afobaje Estate/ Agbala Obanibasiri",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ago-Iwoye",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ago-Oko",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Akilo Quarters",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Egbado North",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "G. R .A",
      vicinity_factor: 1.2,
    },
    {
      state: "Ogun",
      vicinity: "Egbado South",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ewekoro",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ibara/GRA",
      vicinity_factor: 0.9,
    },
    {
      state: "Ogun",
      vicinity: "Iberekodo / Akomoje",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ibese",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ifo",
      vicinity_factor: 0.9,
    },
    {
      state: "Ogun",
      vicinity: "Idiaba",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Idiroko Rd. /Ojuore",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ijagun",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ijamido",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "ijana Qtrs / Oke Oyinbo / Mefun/",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ijari / Ogbogbo Area",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ijebu East",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ijebu Ife",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ijebu Igbo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ijebu Mushin",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ijebu Ode",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ikenne",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ikopa/Iawo Onigunu- Dogo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Imeko-Afon",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ipokia",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Isabo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Jemo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Molipa",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Mowe",
      vicinity_factor: 1,
    },
    {
      state: "Ogun",
      vicinity: "Obafemi Owode",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Odogbolu",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Odeda",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Ogun Waterside",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Ojokodo / Ido Owe/",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Olomore",
      vicinity_factor: 0.7,
    },
    {
      state: "Ogun",
      vicinity: "Onikolobo/ GRA Extension",
      vicinity_factor: 0.9,
    },
    {
      state: "Ogun",
      vicinity: "Remo North",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Quarry",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Sabo",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Sagamu",
      vicinity_factor: 0.75,
    },
    {
      state: "Ogun",
      vicinity: "Sango Ota",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Akoko North East",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Akoko South West",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Akure",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Alagbaka",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ese Odo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Idanre",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ifedore",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ilaje",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ile-Oluji",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Irele",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ijapo Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Ondo",
      vicinity: "Ijomu",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Oba Ile",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Odigbo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Oke Aro Danjuma",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Okearo",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Okegbe",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Okitipupa",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Okorun",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Olukare's Palace",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Ore",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Osinle Sijuade Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Ondo",
      vicinity: "Owo",
      vicinity_factor: 0.75,
    },
    {
      state: "Ondo",
      vicinity: "Ondo East",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ondo West",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Ose",
      vicinity_factor: 0.7,
    },
    {
      state: "Ondo",
      vicinity: "Shagari Village",
      vicinity_factor: 0.7,
    },
    {
      state: "Osun",
      vicinity: "Aiyetoro",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Alekuwodo",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Ayeso",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Dada Estate",
      vicinity_factor: 1,
    },
    {
      state: "Osun",
      vicinity: "Ede",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Ejigbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Eleyele",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Fagbewesa",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Gbongan",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Ijebu Ijesha",
      vicinity_factor: 0.7,
    },
    {
      state: "Osun",
      vicinity: "Ikeja Arakeji",
      vicinity_factor: 0.7,
    },
    {
      state: "Osun",
      vicinity: "Ikirun",
      vicinity_factor: 0.7,
    },
    {
      state: "Osun",
      vicinity: "Ikoyi",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Ile-Ife",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Ilesa ",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Ilobu",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Iragbiji",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Iree",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Irepodun",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Iwo",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Kola Balogun",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "leventis Agric Farm",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Odiolowo",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Ogooluwa",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Oke Baale",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Okefia",
      vicinity_factor: 1,
    },
    {
      state: "Osun",
      vicinity: "Old Akure Rd.",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Omo West",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Osogbo",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Ota Efun",
      vicinity_factor: 0.75,
    },
    {
      state: "Osun",
      vicinity: "Palace",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Ring Rd.",
      vicinity_factor: 0.9,
    },
    {
      state: "Osun",
      vicinity: "Stadium",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Afijo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Adamasingba/ ekotedo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Agobwo/Orogun/Samonda",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ajibode/ iita",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Akinyele",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Akobo",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Atiba",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Atigbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Alakia/Monatan/Pdc Estate",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Apata ganga",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Dugbe/labaowo/ foko",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Egbeda",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Gbelekale/Oja Igbo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Gbenla/Old Ife Rd.",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ibadan North",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Ibadan North West",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Ibadan South West",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Ibadan South East",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Ibarapa East",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ibarapa North",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ido",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Ifewara",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ikoyi",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ipetumodu",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Irepo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Iseyin",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Itesiwaju",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "IWERE-ILE",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Agodi GRA",
      vicinity_factor: 1,
    },
    {
      state: "Oyo",
      vicinity: "Iwajowa",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Kajola",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Lagelu Ogbomosho North",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Ogbomosho South",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Ogo-oluwa",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Olorunshogo",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ona-Ara",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ore Loke",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Ori Ire",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Oyo East",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Oyo West",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Molete",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Modakeke",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Old Bodija / U.C.H/ Mokola",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Oluyole",
      vicinity_factor: 0.9,
    },
    {
      state: "Oyo",
      vicinity: "Owode",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Oyo State GRA",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Ring Rd. / Ososadi",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Sabo / oke ado",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Saki East",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Saki West",
      vicinity_factor: 0.7,
    },
    {
      state: "Oyo",
      vicinity: "Salvation army",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Surulere",
      vicinity_factor: 0.75,
    },
    {
      state: "Oyo",
      vicinity: "Yemetu",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Anglo Jos",
      vicinity_factor: 0.9,
    },
    {
      state: "Plateau",
      vicinity: "Barkin-Ladi",
      vicinity_factor: 0.75,
    },
    {
      state: "Plateau",
      vicinity: "Bassa",
      vicinity_factor: 0.75,
    },
    {
      state: "Plateau",
      vicinity: "Bokkos",
      vicinity_factor: 0.75,
    },
    {
      state: "Plateau",
      vicinity: "Dadin kowa / kuffang",
      vicinity_factor: 0.75,
    },
    {
      state: "Plateau",
      vicinity: "Gangare",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Jos South",
      vicinity_factor: 0.9,
    },
    {
      state: "Plateau",
      vicinity: "Jos East",
      vicinity_factor: 0.9,
    },
    {
      state: "Plateau",
      vicinity: "Jos North ",
      vicinity_factor: 0.9,
    },
    {
      state: "Plateau",
      vicinity: "Kanam",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Kanke",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Langtang",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Lere",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Liberty Dam/British America",
      vicinity_factor: 0.9,
    },
    {
      state: "Plateau",
      vicinity: "Mangu",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Mikang",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Pankshin",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Qu'an Pan",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Riyom",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Tudun Wada",
      vicinity_factor: 0.75,
    },
    {
      state: "Plateau",
      vicinity: "Shendam",
      vicinity_factor: 0.7,
    },
    {
      state: "Plateau",
      vicinity: "Wase",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Ali Akilu",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Binji",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Bodinga",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Dange-Shnsi",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Gada",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Gawo Nama",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Gawabawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Goronyo",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Gudu",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Hajiya Halima",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Illela",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Isa",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Kalambaina Gidan Manuma",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Kebbe",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Kware",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Low Cost Gwiwa",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Gidan Dahala",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Gidan Gwadabe",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Idi",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Shiyar Nasarawa",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Tsohon Gida    II",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Mabera Tsohon Gida   I",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Magajin Gari",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Rabah",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Runjin Sambo",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Sabon-Birni",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Shagari",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Shiyar Kalgawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Silame",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Sokoto",
      vicinity_factor: 0.9,
    },
    {
      state: "Sokoto",
      vicinity: "Tambuwal",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Tangaza",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Tureta",
      vicinity_factor: 0.7,
    },
    {
      state: "Sokoto",
      vicinity: "Tusun Wada",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Wamako",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Wurno",
      vicinity_factor: 0.75,
    },
    {
      state: "Sokoto",
      vicinity: "Yauri Flat Area",
      vicinity_factor: 0.75,
    },
    {
      state: "Taraba",
      vicinity: "Ardo-Kola",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Bali",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Chanchangi",
      vicinity_factor: 0.75,
    },
    {
      state: "Taraba",
      vicinity: "Donga",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Gashaka",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Gassol",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Ibi",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Jalingo",
      vicinity_factor: 1,
    },
    {
      state: "Taraba",
      vicinity: "Karim Lamido",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Kurmi",
      vicinity_factor: 0.9,
    },
    {
      state: "Taraba",
      vicinity: "Lau",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Sabon Gari",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Sardauna",
      vicinity_factor: 0.9,
    },
    {
      state: "Taraba",
      vicinity: "Takum",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Ussa",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Wukari",
      vicinity_factor: 0.75,
    },
    {
      state: "Taraba",
      vicinity: "Yorro",
      vicinity_factor: 0.7,
    },
    {
      state: "Taraba",
      vicinity: "Zing",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Barde",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Benkalio Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Yobe",
      vicinity: "Bursari",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Damaturu",
      vicinity_factor: 1,
    },
    {
      state: "Yobe",
      vicinity: "Dapchi",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Federal Low Cost",
      vicinity_factor: 0.75,
    },
    {
      state: "Yobe",
      vicinity: "Fika",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Fune",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Geidam",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Gujba",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Ibrahim Abacha Estate",
      vicinity_factor: 0.9,
    },
    {
      state: "Yobe",
      vicinity: "Gulani",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Jakusco",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Karasuwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Karawa",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Machina",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Nangere",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Nguru",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Potiskum",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "State Low Cost",
      vicinity_factor: 0.75,
    },
    {
      state: "Yobe",
      vicinity: "State Low Cost Housing Village",
      vicinity_factor: 0.75,
    },
    {
      state: "Yobe",
      vicinity: "Tarmuwa",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Yunusari",
      vicinity_factor: 0.7,
    },
    {
      state: "Yobe",
      vicinity: "Yusufari",
      vicinity_factor: 0.7,
    },
    {
      state: "Zamfara",
      vicinity: "Anka",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Bakura",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Birnin Magaji",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Bungudu",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Bukkuyum",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Gusau",
      vicinity_factor: 1.2,
    },
    {
      state: "Zamfara",
      vicinity: "Gummi",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Kaura",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Namoda",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Magaji",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Maradun",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Maru",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Shinkafi",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Talata Mafara",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Tsafe",
      vicinity_factor: 0.75,
    },
    {
      state: "Zamfara",
      vicinity: "Zurmi",
      vicinity_factor: 0.75,
    },
  ],
  purposeFactor: [
    {
      purpose: "Early Child Education",
      factor: 1.25,
    },
    {
      purpose: "Lower Primary Education",
      factor: 1.25,
    },
    {
      purpose: "General Home Lessons",
      factor: 1.25,
    },
    {
      purpose: "Common Entrance Exam",
      factor: 1.25,
    },
    {
      purpose: "Entrance Into Top Schools",
      factor: 2,
    },
    {
      purpose: "11+ Entrance Exam",
      factor: 2,
    },
    {
      purpose: "Cambridge Primary Exam",
      factor: 1.6,
    },
    {
      purpose: "JSS Academic Coaching",
      factor: 1.25,
    },
    {
      purpose: "Cambridge Checkpoint",
      factor: 1.5,
    },
    {
      purpose: "JSSCE / BECE",
      factor: 1.25,
    },
    {
      purpose: "13+ Entrance Exam",
      factor: 2,
    },
    {
      purpose: "SSS Academic Coaching",
      factor: 1.3,
    },
    {
      purpose: "WAEC / JAMB / NECO",
      factor: 1.3,
    },
    {
      purpose: "IGCSE - Cambridge A/Levels",
      factor: 2,
    },
    {
      purpose: "SAT / PSAT - Reasoning Test",
      factor: 2,
    },
    {
      purpose: "ACT - College Test",
      factor: 2,
    },
    {
      purpose: "Test of English Exams",
      factor: 1.5,
    },
    {
      purpose: "Edexcel - International A/Levels",
      factor: 1.5,
    },
    {
      purpose: "SAT II - Subject Tests",
      factor: 2,
    },
    {
      purpose: "IB - International Baccalaureate",
      factor: 2,
    },
    {
      purpose: "AP - Advanced Placement Exam",
      factor: 2,
    },
  ],
  curriculumFactor: [
    {
      curriculum: "Nigerian",
      factor: 1.5,
    },
    {
      curriculum: "British",
      factor: 1.5,
    },
    {
      curriculum: "American",
      factor: 1.75,
    },
    {
      curriculum: "Not Sure",
      factor: 1.5,
    },
  ],
  planFactor: [
    {
      plan_type: "Standard",
      factor: 1,
    },
    {
      plan_type: "Premium",
      factor: 1.4,
    },
    {
      plan_type: "Deluxe",
      factor: 1.8,
    },
    {
      plan_type: "ExtraStudents",
      factor: 20,
    },
  ],
  subjectCountFactor: [
    {
      subject_count: "Less than 3",
      factor: 1,
    },
    {
      subject_count: "3 or 4",
      factor: 1.1,
    },
    {
      subject_count: "5 & above",
      factor: 1.2,
    },
  ],
  stateFactor: [
    {
      state: "Lagos",
      factor: 1,
    },
    {
      state: "Abuja",
      factor: 1,
    },
    {
      state: "Rivers",
      factor: 0.9,
    },
    {
      state: "Abia",
      factor: 0.7,
    },
    {
      state: "Adamawa",
      factor: 0.7,
    },
    {
      state: "Akwa Ibom",
      factor: 0.8,
    },
    {
      state: "Anambra",
      factor: 0.7,
    },
    {
      state: "Bauchi",
      factor: 0.7,
    },
    {
      state: "Bayelsa",
      factor: 0.7,
    },
    {
      state: "Benue",
      factor: 0.7,
    },
    {
      state: "Borno",
      factor: 0.7,
    },
    {
      state: "Cross River",
      factor: 0.7,
    },
    {
      state: "Delta",
      factor: 0.7,
    },
    {
      state: "Ebonyi",
      factor: 0.7,
    },
    {
      state: "Edo",
      factor: 0.8,
    },
    {
      state: "Ekiti",
      factor: 0.7,
    },
    {
      state: "Enugu",
      factor: 0.8,
    },
    {
      state: "Gombe",
      factor: 0.7,
    },
    {
      state: "Imo",
      factor: 0.7,
    },
    {
      state: "Jigawa",
      factor: 0.7,
    },
    {
      state: "Kaduna",
      factor: 0.8,
    },
    {
      state: "Kano",
      factor: 0.8,
    },
    {
      state: "Katsina",
      factor: 0.7,
    },
    {
      state: "Kebbi",
      factor: 0.7,
    },
    {
      state: "Kogi",
      factor: 0.7,
    },
    {
      state: "Kwara",
      factor: 0.7,
    },
    {
      state: "Nassarawa",
      factor: 0.7,
    },
    {
      state: "Niger",
      factor: 0.7,
    },
    {
      state: "Ogun",
      factor: 0.8,
    },
    {
      state: "Ondo",
      factor: 0.7,
    },
    {
      state: "Osun",
      factor: 0.7,
    },
    {
      state: "Oyo",
      factor: 0.8,
    },
    {
      state: "Plateau",
      factor: 0.7,
    },
    {
      state: "Sokoto",
      factor: 0.7,
    },
    {
      state: "Taraba",
      factor: 0.7,
    },
    {
      state: "Yobe",
      factor: 0.7,
    },
    {
      state: "Zamfara",
      factor: 0.7,
    },
  ],
  socialClassFactor: [
    {
      social_class: "A: Elite",
      factor: 1.2,
    },
    {
      social_class: "B: Upper-middle",
      factor: 1,
    },
    {
      social_class: "C: Middle",
      factor: 0.9,
    },
    {
      social_class: "D: Lower-middle",
      factor: 0.75,
    },
    {
      social_class: "E: Lower",
      factor: 0.7,
    },
  ],
  hourFactor: [
    {
      hours: "1 hour",
      factor: 1.5,
    },
    {
      hours: "1.5 hour",
      factor: 1.85,
    },
    {
      hours: "2-3 hours",
      factor: 1,
    },
    {
      hours: "4 hours",
      factor: 0.85,
    },
    {
      hours: "5 hours",
      factor: 0.75,
    },
  ],
};
export const adapter = {
  regionKey: REGION_KEY,
  countryKey: COUNTRY_KEY,
  requestKey: REQUEST_KEY,
  createIssuedRequest: async (data) => {
    console.log(data);
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 300);
    });
  },
  checkIfTutorsExists: async ({ splitRequests }) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([0, 1, 2]);
        // if (splitRequests.length > 2) {
        //   resolve([0]);
        // } else {
        //   resolve([]);
        // }
      }, 3000);
    });
  },
  downloadReceipt: async (requestSlug) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  },
  bookLessons: async (slug, sessionsToBeBooked) => {
    let first_session = sessionsToBeBooked.slice(0)[0];
    let last_session = sessionsToBeBooked.slice(-1)[0];

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          bookingUrl: "https://www.tuteria.com/booking/SEWEWWSSE?logintutor",
          from: first_session.startDate,
          to: last_session.startDate,
        });
      }, 3000);
    });
  },
  updateTutorResponse: async (tutorResponse, slug) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({ slug, tutorResponse });
        // actions that should happen when the tutor status is updated.
        // remember to convert the bookingStage from the object to an array
        // of stage and duration since that is a better format. exclude any
        // stage that has a value of null
        // reject()
        resolve(tutorResponse);
      }, 3000);
    });
  },
  onSubmit: async (key, data, splitRequests) => {
    let requestData = storage.get(REQUEST_KEY, {});
    if (key === "student-details") {
      requestData = { ...requestData, ...data };
    }
    if (key === "teacher-selection") {
      requestData.teacherKind = data.teacherOption;
    }
    if (key === "lesson-schedule") {
      requestData.lessonDetails = {
        ...(requestData.lessonDetails || {}),
        lessonSchedule: {
          ...(requestData.lessonDetails.lessonSchedule || {}),
          ...data,
        },
      };
    }
    if (key === "lesson-location") {
      requestData.contactDetails = {
        ...(requestData.contactDetails || {}),
        vicinity: data.vicinity,
        state: data.state,
        country: data.country,
        region: data.region,
      };
      requestData.lessonDetails = {
        ...(requestData.lessonDetails || {}),
        lessonType: data.lessonType,
      };
    }
    if (key === "contact-information") {
      requestData.contactDetails = {
        ...(requestData.contactDetails || {}),
        ...data,
      };
    }
    if (splitRequests) {
      requestData.splitRequests = splitRequests;
    }
    storage.set(REQUEST_KEY, requestData);
    console.log(requestData);
    return await samplePromise(data, 5000);
  },
  fetchAcademicData: async () => {
    return ACADEMICS_DATA;
  },
  getCountries: async () => {
    let result: any = {};
    let _regions = storage.get(REGION_KEY, []);
    if (Array.isArray(_regions) && _regions.length > 0) {
      result.regions = _regions;
    } else {
      result.regions = regions;
    }
    let countries = storage.get(COUNTRY_KEY, []);
    if (Array.isArray(countries) && countries.length > 0) {
      result.countries = countries;
    } else {
      result.countries = allCountries;
    }
    let r: any = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 500);
    });
    return {
      ...r,
      // country: "Nigeria"
    };
  },

  updateTutorSchedule: async (key, values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ key, values });
      }, 1000);
    });
  },

  updateTutorSubject: async (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 1500);
    });
  },
  deleteSubject: async (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 1000);
    });
  },
  getNeighboringArea: async (region) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(SAMPLENEIGHBORINGAREA), 100);
    });
  },
  updateStaticData({ regions, countries }) {
    storage.set(adapter.regionKey, regions);
    storage.set(adapter.countryKey, countries);
    let existing = storage.get(adapter.requestKey, {});
    storage.set(adapter.requestKey, {
      ...existing,
      ...SAMPLEREQUEST,
    });
  },
  initializeLandingPage({ regions, countries }) {
    storage.set(adapter.regionKey, regions);
    storage.set(adapter.countryKey, countries);
  },
  savePricingInfo: async (requestData, paymentInfo) => {
    console.log({ requestData, paymentInfo });
    return await samplePromise({ requestData, paymentInfo }, 10000);
  },
  saveRequestToServer: async (admin) => {
    let requestData = storage.get(REQUEST_KEY, {});
    console.log(requestData, admin);
  },
  getTestimonials: async (tutorId) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          certifications: [
            {
              award: "Health,Safety and Enviroment",
              institution: "ISPON",
            },
            {
              award: "Muson Grade 4 (awaiting)",
              institution: "Muson",
            },
          ],
          testimonials: [
            {
              firstName: "Mrs Akintola",
              lastName: "Akintola",
              review:
                "We saw an immediate change in her scores in school especially in Mathematics",
              dateReviewed: "2021-02-24T20:37:34.922851",
              rating: 5,
              subjectsBooked: ["Basic Mathematics"],
              lessonsBooked: 12,
            },
            {
              firstName: "Mrs Akintola",
              lastName: "Akintola",
              review:
                "We saw an immediate change in her scores in school especially in Mathematics",
              dateReviewed: "2021-02-24T20:37:34.569069",
              rating: 5,
              subjectsBooked: ["Basic Mathematics"],
              lessonsBooked: 12,
            },
            {
              firstName: "Moyosore",
              lastName: "Onalaja",
              review: "Excellent Tutor!",
              dateReviewed: "2020-09-14T08:11:31.507203",
              rating: 5,
              subjectsBooked: ["Basic Sciences"],
              lessonsBooked: 4,
            },
            {
              firstName: "Mojisola",
              lastName: "Aregbesola",
              review:
                "Good at the job. He really helped to improve my son in mathematics",
              dateReviewed: "2020-07-18T23:52:29.121076",
              rating: 5,
              subjectsBooked: ["Basic Mathematics"],
              lessonsBooked: 12,
            },
            {
              firstName: "Moyosore",
              lastName: "Onalaja",
              review: "Excellent Tutor",
              dateReviewed: "2020-07-13T11:12:27.181242",
              rating: 5,
              subjectsBooked: ["Basic Sciences"],
              lessonsBooked: 4,
            },
          ],
        });
      }, 5000);
    });
  },
  getCurrencyForCountry: getCurrencyForCountry,
  fetchSearchResultFunc(currentIndex, requestData, specialities) {
    // let currentSearchData = TUTORSEARCHRESULT_DATA;
    let currentSearchData = TUTORSEARCHRESULT_DATA_TRIMED;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let searchObj = requestData.splitRequests[currentIndex];
        // resolve(currentSearchData)
        let result = trimSearchResult(
          currentSearchData,
          [],
          requestData,
          searchObj,
          specialities,
          []
        );
        resolve(result);
      }, 500);
    });
  },
  transformSearchResult(
    tutorOptions,
    requestData,
    selectedIDS = [],
    specialities = [],
    deniedTutors = [],
    searchObj = {}
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(currentSearchData[currentIndex]);
        // resolve(currentSearchData);
        let result = trimSearchResult(
          tutorOptions,
          selectedIDS,
          requestData,
          searchObj,
          specialities,
          deniedTutors
        );
        resolve(result);
      }, 500);
    });
  },
  resolveCurrencyFromCountry: resolveCurrencyFromCountry,
  onTutorsSelected: async (data, paymentInfo) => {
    console.log({ data, paymentInfo });
    return data;
  },
  initializeRequestData: async () => {
    // return [requestData, []];

    let arr = [
      TUTORSEARCHRESULT_DATA[0],
      // undefined,
      // TUTORSEARCHRESULT_DATA[1],
      undefined,
      // undefined,
      // undefined,
      TUTORSEARCHRESULT_DATA[2],
      // SAMPLESEARCH_RESULTS[0][4],
      // SAMPLESEARCH_RESULTS[1][2],
      // SAMPLESEARCH_RESULTS[2][1],
    ];
    return [
      SAMPLEREQUEST,
      // {
      //   ...SAMPLEREQUEST,
      //   splitRequests: SAMPLEREQUEST.splitRequests.map((o, i) => {
      //     return {
      //       ...o,
      //       tutorId: arr[i]?.userId,
      //     };
      //   }),
      // },
      // REAL_SAMPLE_DATA,
      arr,
    ];
  },
  verifyCoupon: (couponText) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (couponText === "TUTERIALOVESU") {
          resolve({
            discountCode: "TUTERIALOVESU",
            discountType: "percent",
            discount: 5,
            issuer: "The Place",
            currency: "₦",
            dateIssued: "",
            dateExpired: "2021-10-05",
            useCount: 5,
            maximumCount: 50,
          });
        } else {
          reject("Discount code is invalid");
        }
      }, 200);
    });
  },
  initializeAdminSearch: async () => {
    return samplePromise({
      // requestInfo: {},
      requestInfo: SAMPLEREQUEST,
      firstSearch: undefined,
      tutors: [
        // TUTORSEARCHRESULT_DATA[0],
        // undefined,
        // TUTORSEARCHRESULT_DATA[1],
        // undefined,
        // // undefined,
        // // undefined,
        // TUTORSEARCHRESULT_DATA[2],
      ],
      specialities: [
        { key: "Primary Math", values: ["Engineering", "Sciences"] },

        //this is where we put specialities
      ],
    });
  },

  createSearchFilter(requestData, searchIndex = 0) {
    let {
      filters = {},
      lessonDetails: { lessonSchedule },
      teacherKind,
    } = requestData;
    const request = requestData.splitRequests[searchIndex];
    let lessonDays = request.lessonDays || [];
    if (lessonDays.length === 0) {
      lessonDays = lessonSchedule.lessonDays;
    }

    const contactInfo = requestData.contactDetails;
    // also send down the booking days and time for active bookings.
    // get the regions that are related to the request region and then
    // include tutors that fall in said region.
    // active booking lessonDays filter would happen on the client.
    // send down exam preparation expreience which tallies with the purpose from the request.
    // send down lesson preference i.e max no of hours etc.
    const searchFilters = {
      searchSubject: request.searchSubject, // priority 1. tutor must have this subject if not then it is not part of the result.
      subjectGroup: request.subjectGroup.join(","), // most of the subjects in subjectGroup
      // teacherOption: request.teacherOption,
      specialNeeds: request.specialNeeds.filter((x) => x !== "None").join(","),
      curriculum: request.curriculum.join(","), // must have all the curriculum
      class: request.class.join(","), // must have selected all the classes.
      lessonDays: lessonDays.join(","), // tutors that are free on all of the lessonDays
      lessonTime: lessonSchedule.lessonTime, // must be available at this time.
      region: contactInfo.region,
      state: contactInfo.state,
      vicinity: contactInfo.vicinity,
      country: contactInfo.country,
      teacherKind,
      searchIndex,
    };
    let lessonType =
      requestData.lessonDetails.lessonType || filters?.lessonType;
    if (lessonType == "online") {
      delete searchFilters.region;
    }
    return searchFilters;
  },

  getSearchResults(requestParameters) {
    let currentSearchData = TUTORSEARCHRESULT_DATA_TRIMED;
    return new Promise((resolve) => {
      setTimeout(() => {
        let searchObj = SAMPLEREQUEST.splitRequests[0];
        let result = trimSearchResult(
          currentSearchData,
          [],
          SAMPLEREQUEST,
          searchObj,
          undefined,
          []
        );
        resolve(result);
      }, 500);
    });
  },
  initializeProfileToClient: async () => {
    return samplePromise({
      requestInfo: SAMPLEREQUEST,
      tutors: [
        TUTORSEARCHRESULT_DATA[0],
        TUTORSEARCHRESULT_DATA[1],
        TUTORSEARCHRESULT_DATA[2],
      ],
      firstSearch: undefined,
      specialities: [
        { key: "Primary Math", values: ["Engineering", "Sciences"] },

        //this is where we put specialities
      ],
    });
  },
  ...{
    generateInvoice,
    generateSpeakingInvoice: generateInvoice,
    onPayWithWallet: async ({ slug, amount }) => {
      return new Promise((resolve, reject) => {
        console.log({ slug, amount });
        setTimeout(() => {
          resolve({});
        }, 3000);
      });
    },
    getBookingInfo: async (slug) => {
      return {
        slug,
        tutors: [
          {
            userId: "tutorId9",
            subject: {
              hourlyRate: 5000,
              hourlyDiscount: 0,
              discountForExtraStudents: 10,
            },
            newTutorDiscount: 0,
            distance: 32,
            firstName: "Adeleke",
            lastName: "Benson",
            photo: "https://randomuser.me/api/portraits/women/95.jpg",
          },
          {
            userId: "tutorId12",
            subject: {
              hourlyRate: 2800,
              hourlyDiscount: 0,
              discountForExtraStudents: 10,
            },
            newTutorDiscount: 0,
            distance: 22,
            firstName: "Adamson",
            lastName: "Benson",
            photo: "https://randomuser.me/api/portraits/men/35.jpg",
          },

          {
            userId: "tutorId19",
            subject: {
              hourlyRate: 2500,
              hourlyDiscount: 0,
              discountForExtraStudents: 10,
            },
            newTutorDiscount: 0,
            distance: 32,
            firstName: "Atinuke",
            lastName: "Benson",
            photo: "https://randomuser.me/api/portraits/men/36.jpg",
          },
        ],
        tuitionFee: 329600,
        totalLessons: 48,
        totalDiscount: 16800,
        transportFare: 0,
        couponDiscount: 0,
        paidSpeakingFee: false,
        distanceThreshold: 20,
        walletBalance: 500000,
        fareParKM: 25,
        currency: "₦",
        timeSubmitted: new Date().toISOString(),
      };
    },
    saveTutorInfo: async (key: string, data: any) => {
      console.log(key, data);
      return await samplePromise("tutorToken");
    },

    updateRequestParameters(values) {
      return samplePromise(values, 1000);
    },
  },
};
