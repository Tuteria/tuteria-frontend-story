import React from "react";
import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import StoreHomePage from "@tuteria/shared-lib/src/store/pages/Home";
import ICheckoutPage from "@tuteria/shared-lib/src/store/pages/CheckoutPage";
import ProductDetailPage from "@tuteria/shared-lib/src/store/pages/ProductDetail";
import { linkTo } from "@storybook/addon-links";
import { TuteriaStore } from "@tuteria/shared-lib/src/store/_store";
import "katex/dist/katex.min.css";
export default {
  title: "Store/Pages",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

const markDownDescription = `Get a band 8.0 in your first sitting. This course bundle prepares you for the speaking, listening, reading, and writing modules of the test. So far, it is the only comprehensive IELTS course tailor-made for Nigerians and Africans generally. 


This is the best online IELTS Band 8.0 Preparatory Video Course for Nigerians which is “FAIL-PROOF”, It is proven by our past students now in their dream countries to help you get a band 8.0 in one sitting even if your English is terrible (or not) and you only have less than 10 days to prepare.

 
Popularly known as the 5-star IELTS digital bible, this fail-proof IELTS video course will teach you how to think like your IELTS examiner so that you give them exactly what they’re expecting. 

It is taught by our multiple award-winning IELTS tutors from Nigeria to help you get a band 8.0.

This course bundle contains real classroom sessions focusing on equipping you with proven strategies, tips, advice, skills to pass the IELTS test.



**What is contained in this course bundle?**



  A. The IELTS writing module master course. (Get this ONLY for 3,000 Naira - Click here to access it)

  B. The IELTS speaking module master course. (Get this ONLY for 3,000 Naira - Click here to access it)

  C. The IELTS reading module master course. (Get this ONLY for 3,000 Naira - Click here to access it)

  D. The IELTS listening module master course. (Get this ONLY for 3,000 Naira - Click here to access it)



**What you’ll get from this course**



* Over 35 classroom-tailored video lessons 
* 25+ hours of instruction 
* Pre-assessments
* Live worked examples
* Exclusive essay analyses for writing tasks 1 and 2 (General and Academic)
* In-class mock tests and exercises 
* Attention-tracking quizzes
* Tip flashcards
* Writing and speaking samples and audio recordings
* Simple exam strategies for both General and Academic Training
* Confidence to perform well on the test date 
* Time management strategies 
* Real IELTS past questions 


**Requirements** 

* Intermediate English level
* Drive to pass the IELTS test excellently  


**Who is the course NOT for?**

This course bundle is not for those who are NOT ready to pass IELTS with flying colors. `;
const images = [
  {
    id: "01",
    src: "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "Awesome watch",
  },
  {
    id: "02",
    src: "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80",
    alt: "Awesome watch",
  },
  {
    id: "03",
    src: "https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "Awesome watch",
  },
  {
    id: "04",
    src: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    alt: "Awesome watch",
  },
  {
    id: "05",
    src: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    alt: "Awesome watch",
  },
];

const products = [
  {
    id: "1",
    name: "Bamboo Tan",
    currency: "NGN",
    price: 199,
    flag: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 1,
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
    description: markDownDescription,
    images,
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "NGN",
    price: 7000,
    salePrice: 5000,
    flag: "on-sale",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description: markDownDescription,
    images,
  },
  {
    id: "3",
    name: "Marble Leather",
    currency: "NGN",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description: markDownDescription,
    images,
  },
  {
    id: "4",
    name: "Silve wolf",
    currency: "NGN",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
    rating: 5,
    ratingCount: 1,
    description: markDownDescription,
    images,
  },
  {
    id: "5",
    name: "Marble Leather",
    currency: "NGN",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description: markDownDescription,
    images,
  },
  {
    id: "6",
    name: "Silve wolf",
    currency: "NGN",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
    rating: 5,
    ratingCount: 1,
    description: markDownDescription,
    images,
  },
];

const mainProduct = {
  id: "5",
  name: "Ultimate IELTS Video Course",
  currency: "NGN",
  price: 22520,
  description:
    "Nigerians 🇳🇬 now in Canada, UK, US & Australia Used this Perfect IELTS Preparatory Course to get a Band 8.0 in less than 2 weeks",
  imageUrl:
    "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
};
const cartData = [
  {
    id: "1",
    quantity: 1,
  },
  {
    id: "2",
    quantity: 2,
  },
  {
    id: "3",
    quantity: 3,
  },
];

function navigate(path?: string) {
  linkTo("Store/Pages", "DetailPage")();
}
const store = TuteriaStore.create(
  {},
  {
    adapter: {
      saveUserInfo: async (userInfo, cartData) => {
        console.log({ userInfo, cartData });
      },
    },
  }
);
export const HomePage = () => {
  React.useEffect(() => {
    store.initialize({
      cartItems: cartData,
      products: [...products, mainProduct],
    });
  }, []);
  return (
    <StoreHomePage
      store={store}
      heading="Everything you need to score a Band 8.0 in IELTS"
      mainProduct={mainProduct}
      products={products}
      toFullDetails={(item) => {
        if (item) {
          navigate();
          return "";
        }
        return "#";
      }}
    />
  );
};

export const DetailPage = () => {
  React.useEffect(() => {
    store.initialize({
      cartItems: cartData,
      products: [...products, mainProduct],
    });
  }, []);
  return (
    <ProductDetailPage
      store={store}
      product={{ ...products[1], related: [products[0], ...products.slice(2)] }}
      toCheckoutPage={() => {
        linkTo("Store/Pages", "Checkout Page")();
      }}
    />
  );
};

export const CheckoutPage = () => {
  return <ICheckoutPage />;
};
