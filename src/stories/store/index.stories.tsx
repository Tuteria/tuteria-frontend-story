import React from "react";
import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import StoreHomePage from "@tuteria/shared-lib/src/store/pages/Home";
import ICheckoutPage from "@tuteria/shared-lib/src/store/pages/CheckoutPage";
import ProductDetailPage from "@tuteria/shared-lib/src/store/pages/ProductDetail";
import { linkTo } from "@storybook/addon-links";
import { TuteriaStore } from "@tuteria/shared-lib/src/store/_store";
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
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "NGN",
    price: 199,
    salePrice: 179.99,
    flag: "on-sale",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
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
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
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
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
];

const mainProduct = {
  id: "5",
  name: "All dressed",
  currency: "NGN",
  price: 20000,
  description:
    "Dress that feels a little fany for when pajamas aren’t cutting it",
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
  {
    cartItems: cartData,
    products: [...products, mainProduct],
  },
  {
    adapter: {
      saveUserInfo: async (userInfo, cartData) => {
        console.log({ userInfo, cartData });
      },
    },
  }
);
export const HomePage = () => {
  return (
    <StoreHomePage
      store={store}
      heading="Everything you need to score a Band 8.0 in IELTS for Nigerians and Africans"
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
