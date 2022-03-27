import { Meta, Story } from "@storybook/react";
import Stores, { StoresProps } from "./stores";
import "katex/dist/katex.min.css";
import { linkTo } from "@storybook/addon-links";
import { TuteriaStore } from "@tuteria/shared-lib/src/store/_store";
import StoreHomePage from "@tuteria/shared-lib/src/store/pages/Home";
import ProductDetailPage from "@tuteria/shared-lib/src/store/pages/ProductDetail";
import ICheckoutPage from "@tuteria/shared-lib/src/store/pages/CheckoutPage";
import Complete from "@tuteria/shared-lib/src/store/pages/Complete";

export default {
  component: Stores,
  title: "Stores/Pages",
} as Meta;

const Template: Story<StoresProps> = (args) => <Stores {...args} />;

function generateInvoice({ amount }) {
  return Promise.resolve({
    amount,
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
  });
}
const shortMarkDownDescription = `Get a band 8.0 in your first sitting. This course bundle prepares you for the speaking, listening, reading, and writing modules of the test. 

This is the best online IELTS Band 8.0 Preparatory Video Course for Nigerians which is “FAIL-PROOF”, It is proven by our past students now in their dream countries to help you get a band 8.0 in one sitting.`;

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
    name: "Ultimate IELTS Preparatory Video Course for Nigerians",
    shortName: "Ultimate IELTS Course",
    currency: "NGN",
    price: 68980,
    salePrice: 22520,
    purchases: 3277,
    relatedProducts: ["2", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 5,
    ratingCount: 1,
    reviews: [
      {
        id: "review1",
        name: "Olatunde",
        rating: 5,
        date: "",
        email: "tunde@email.com",
        title: "Love the product!",
        comment: "Love this product!",
      },
    ],
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,
  },
  {
    id: "2",
    name: "Complete IELTS Video Course for Nigerians",
    shortName: "Complete IELTS Course",
    currency: "NGN",
    price: 27000,
    salePrice: 10000,
    relatedProducts: ["2", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    purchases: 412,
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,
    reviews: [
      {
        id: "review1",
        name: "Olatunde",
        rating: 5,
        date: "July 15h 2020",
        email: "tunde@email.com",
        title: "Love the product!",
        comment: "Love this product!",
      },
    ],
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
  },
  {
    id: "3",
    name: "Sample Band 9.0 Essay Write-ups",
    shortName: "Sample Band 9.0 Essays",
    currency: "NGN",
    salePrice: 3000,
    price: 18000,
    relatedProducts: ["2", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    purchases: 42,
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 5,
    ratingCount: 12,
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,

    reviews: [
      {
        id: "review1",
        name: "Olatunde",
        rating: 5,
        date: "",
        email: "tunde@email.com",
        title: "Love the product!",
        comment: "Love this product!",
      },
    ],
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
  },
  {
    id: "4",
    name: "IELTS Speaking Task Review",
    shortName: "Speaking Review",
    currency: "NGN",
    price: 5000,
    relatedProducts: ["5", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    purchases: 112,
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
    rating: 5,
    ratingCount: 1,
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,
  },
  {
    id: "5",
    name: "IELTS Writing Task Review",
    shortName: "Writing Review",
    currency: "NGN",
    price: 7000,
    purchases: 129,
    relatedProducts: ["2", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,
  },
  {
    id: "6",
    name: "IELTS Listening Video Course for Nigerians",
    shortName: "IELTS Listening Course",
    currency: "NGN",
    price: 18000,
    salePrice: 3000,
    purchases: 132,
    relatedProducts: ["2", "3"],
    modules: ["Writing", "Listening", "Speaking"],
    course: "IELTS",
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
    rating: 5,
    ratingCount: 1,
    summary: shortMarkDownDescription,
    description: markDownDescription,
    images,
    reviews: [
      {
        id: "review1",
        name: "Olatunde",
        rating: 5,
        date: "",
        email: "tunde@email.com",
        title: "Love the product!",
        comment: "Love this product!",
      },
    ],
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
  },
];

const mainProduct = {
  id: "5",
  name: "The Ultimate IELTS Video Course",
  shortName: "Ultimate IELTS Course",
  currency: "NGN",
  price: 68980,
  salePrice: 22520,
  purchases: 3277,
  subtitle:
    "Nigerians 🇳🇬 now in Canada, UK, US & Australia Used this Perfect IELTS Preparatory Course to get a Band 8.0 in less than 2 weeks.",
  imageUrl:
    "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  rating: 4.5,
  ratingCount: 40,
  reviews: [
    {
      id: "review1",
      name: "Olatunde",
      rating: 5,
      date: "2020-10-06",
      email: "tunde@email.com",
      title: "Love the product!",
      comment: "Love this product!",
    },
  ],
  tags: [
    {
      name: "Exclusive 💫",
      color: "purple",
    },
  ],
  summary: shortMarkDownDescription,
  images,
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
  linkTo("Store/Pages", "Detail Page")();
}
const store = TuteriaStore.create(
  {},
  {
    adapter: {
      updateCartItems: (cartItems) => {
        console.log(cartItems);
      },
      saveUserInfo: async (userInfo, cartData, amount) => {
        console.log({ userInfo, cartData, amount });
        return 23;
      },
      async verifyCoupon(code) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              discountCode: "APPLYFIVE",
              discountType: "percent",
              discount: 5,
              issuer: "Tuteria",
              currency: "₦",
              dateIssued: "2021-06-10",
              dateExpired: "2021-12-31",
              maximumCount: 10000,
              totalUsed: 0,
            });
          }, 2000);
        });
      },
      async updateUserInfo(
        userId,
        { cartItems, discountCode },
        amountToBePaid
      ) {
        let result = {
          full_amount: amountToBePaid,
          discount_code: discountCode,
        };
        cartItems.forEach((c) => {
          result[c.id] = c.quantity;
        });
        console.log(result);
        return result;
      },
      async generateInvoice(
        amountToBePaid,
        userInfoWithCart: {
          userInfo: any;
          cartItems: any[];
          currency?: string;
          id: any;
        }
      ) {
        return await Promise.resolve({
          amount: amountToBePaid,
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
        });
      },
    },
  }
);
export const HomePage = Template.bind({});
HomePage.args = {
  effect() {
    store.initialize({
      userId: null,
      cartItems: cartData,
      products: [...products, mainProduct],
    });
  },
  children: (
    <StoreHomePage
      store={store}
      heading="Everything you need to score a Band 8.0 in IELTS"
      mainProduct={mainProduct}
      products={products}
      toCheckoutPage={() => {
        navigate();
      }}
      toFullDetails={(item) => {
        if (item) {
          navigate();
          return "";
        }
        return "#";
      }}
    />
  ),
};

export const DetailPage = Template.bind({});
DetailPage.args = {
  effect() {
    store.initialize({
      userId: null,
      cartItems: [],
      products: [...products, mainProduct],
    });
  },
  children: (
    <ProductDetailPage
      store={store}
      product={{
        ...products[1],
        relatedProducts: products[1].relatedProducts.map((o) =>
          products.find((x) => x.id === o)
        ),
      }}
      toHomePage={() => {
        linkTo("Store/Pages", "Home Page")();
      }}
      toCheckoutPage={() => {
        linkTo("Store/Pages", "Checkout Page")();
      }}
    />
  ),
};

export const CheckoutPage = Template.bind({});
CheckoutPage.args = {
  effect() {
    store.initialize({
      userId: null,
      cartItems: cartData,
      products: [...products, mainProduct],
      // discountObj: {
      //   discountCode: "APPLYFIVE",
      //   discountType: "percent",
      //   discount: 5,
      //   issuer: "Tuteria",
      //   currency: "₦",
      //   dateIssued: "2021-06-10",
      //   dateExpired: "2021-12-31",
      //   maximumCount: 10000,
      //   totalUsed: 0,
      // },
    });
  },
  children: (
    <ICheckoutPage
      store={store}
      onSuccessfulPayment={(url) => {
        console.log(url);
      }}
    />
  ),
};

export const CompletePage = Template.bind({});
CompletePage.args = {
  children: (
    <Complete photo="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
  ),
};
