import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Image,
  LightMode,
  SimpleGrid,
  Skeleton,
  Stack,
  StackProps,
  Tag,
  Text,
  TextProps,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiHeart } from "react-icons/fi";

interface Props {
  product: Product;
}

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Stack spacing={{ base: "3", md: "5" }}>
      <Box position="relative">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="3"
          right="3"
          aria-label={`Add ${product.name} to your favourites`}
        />
        <HStack spacing="3" position="absolute" bottom="3" left="3">
          {product.tags?.map((tag) => (
            <Tag
              key={tag.name}
              bg={`${tag.color}.500`}
              color="white"
              fontWeight="semibold"
            >
              {tag.name}
            </Tag>
          ))}
        </HStack>
      </Box>
      <Stack>
        <Stack spacing="0.25">
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
            {product.blue}
          </Text>
          <Text fontWeight="medium">{product.name}</Text>
        </Stack>
        <PriceTag
          currency={product.currency}
          price={product.price}
          priceProps={{ color: useColorModeValue("gray.800", "gray.200") }}
          salePrice={product.salePrice}
          salePriceProps={{
            color: useColorModeValue("red.500", "red.400"),
            fontWeight: "bold",
          }}
        />
      </Stack>
    </Stack>
  );
};

interface PriceTagProps {
  currency: string;
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = "en-US", currency = "USD" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } =
    props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, { currency })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, { currency })}
        </SalePrice>
      )}
    </HStack>
  );
};

interface PriceProps {
  children?: React.ReactNode;
  isOnSale?: boolean;
  textProps?: TextProps;
}

const Price = (props: PriceProps) => {
  const { isOnSale, children, textProps } = props;
  const defaultColor = mode("gray.700", "gray.400");
  const onSaleColor = mode("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const SalePrice = (props: TextProps) => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode("gray.800", "gray.100")}
    {...props}
  />
);

export const FavouriteButton = (props: IconButtonProps) => (
  <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{ transform: "scale(1.1)" }}
      sx={{ ":hover > svg": { transform: "scale(1.1)" } }}
      transition="all 0.15s ease"
      icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
  </LightMode>
);
export const products = [
  {
    id: "1",
    blue: "Hamilton",
    name: "Blue Leather Watch",
    price: 139.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
      {
        name: "New ✨",
        color: "green",
      },
    ],
  },
  {
    id: "2",
    blue: "Tissot",
    name: "Golden Brown - Latch",
    price: 239.99,
    salePrice: 164.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80",
    tags: [
      {
        name: "-30%",
        color: "red",
      },
    ],
  },
  {
    id: "3",
    blue: "Mamba",
    name: "Wooden Truss Watch",
    price: 539.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1614703418052-d5b893d495bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "4",
    blue: "Rolex",
    name: "Brown Phoenix Watch",
    price: 39.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80",
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export const GridWithFavoriteButton = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      gap={{ base: "8", lg: "10" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
);
