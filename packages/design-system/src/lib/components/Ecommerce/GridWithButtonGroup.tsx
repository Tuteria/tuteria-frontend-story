import {
  AspectRatio,
  Box,
  ButtonGroup,
  HStack,
  Icon,
  IconButton,
  Image,
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
import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

interface Props {
  defaultValue?: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  rootProps?: StackProps;
}

export const Rating = (props: Props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.300", "gray.600");
  const activeColor = useColorModeValue("blue.500", "blue.200");
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};

interface Props {
  product: Product;
}

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Stack spacing="3">
      <Box position="relative" className="group">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <HStack spacing="3" position="absolute" top="4" left="4">
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
        <Box
          opacity="0"
          transition="opacity 0.1s"
          _groupHover={{ opacity: 1 }}
          position="absolute"
          bottom="3"
          left="3"
          right="3"
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="md"
          padding="1.5"
        >
          <ProductButtonGroup />
        </Box>
      </Box>
      <Stack spacing="1">
        <Text>{product.name}</Text>
        <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue("gray.800", "gray.200")}
          >
            12
          </Text>
        </HStack>
      </Stack>
      <PriceTag
        currency={product.currency}
        price={product.price}
        priceProps={{
          fontWeight: "bold",
          fontSize: "sm",
          color: useColorModeValue("black", "white"),
        }}
      />
    </Stack>
  );
};

const options = [
  {
    icon: FiHeart,
    label: "Add to favourite",
  },
  {
    icon: FiShoppingCart,
    label: "Add to cart",
  },
  {
    icon: FiEye,
    label: "View details",
  },
];

export const ProductButtonGroup = () => {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  return (
    <ButtonGroup
      variant="ghost"
      colorScheme="blue"
      width="full"
      size="sm"
      spacing="1"
    >
      {options.map((option) => (
        <IconButton
          key={option.label}
          rounded="sm"
          sx={{ ":not(:hover)": { color: iconColor } }}
          _focus={{ boxShadow: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          width="full"
          aria-label={option.label}
          icon={<Icon as={option.icon} boxSize="5" />}
        />
      ))}
    </ButtonGroup>
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
export const products = [
  {
    id: "1",
    name: "Off shoulder crop top",
    price: 1400,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    rating: 4,
    ratingCount: 12,
    tags: [
      {
        name: "Exclusive 💫",
        color: "purple",
      },
    ],
  },
  {
    id: "2",
    name: "Pattern top",
    price: 2300,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    rating: 4,
    ratingCount: 12,
    tags: [
      {
        name: "In Demand 🔥",
        color: "red",
      },
    ],
  },
  {
    id: "3",
    name: "Free body jacket",
    price: 900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1544364631-99bbd8e23f08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80",
    rating: 4,
    ratingCount: 12,
    tags: [],
  },
  {
    id: "4",
    name: "Polka dot dress",
    price: 2000,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1630758664435-72a78888fb9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    rating: 4,
    ratingCount: 12,
    tags: [],
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export const GridWithButtonGroup = () => (
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
