import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import * as React from "react";
import {
  HStack,
  Link,
  StackDivider,
  Button,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { Badge, Image, Icon } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
import { TextProps, StackProps } from "@chakra-ui/react";
import {
  FormLabel,
  Select,
  SelectProps,
  useColorModeValue,
} from "@chakra-ui/react";

export const QuantitySelect = (props: SelectProps) => {
  return (
    <Flex align="center">
      <FormLabel
        fontSize={{ base: "sm", md: "md" }}
        htmlFor={props.id}
        mb="0"
        color={mode("gray.600", "gray.400")}
      >
        Qty
      </FormLabel>
      <Select
        size="sm"
        rounded="md"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        {...props}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    </Flex>
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
export type CartItemData = {
  id: string;
  price: number;
  title: string;
  quantity: number;
  image: string;
  isInStock?: boolean;
  isBestSeller?: boolean;
  variants?: Array<{ name: string; value: string | number }>;
};

export const cart: CartItemData[] = [
  {
    id: "1",
    price: 499,
    title: "Jackson Shorts with Bow",
    quantity: 3,
    image:
      "https://bloomingdales.ae/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw02b26dee/images/hi-res/BLM/Maje/214727408/214727408_FR.jpg?sw=282&sh=423&q=90",
    isBestSeller: true,
    variants: [
      { name: "color", value: "Dark blue" },
      { name: "size", value: "36" },
    ],
  },
  {
    id: "2",
    price: 325,
    title: "Sunday Long Shorts",
    quantity: 2,
    image:
      "https://bloomingdales.ae/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dwff3420f6/images/hi-res/BLM/Love%20Stories/214729814/214729814_FR.jpg?sw=282&sh=423&q=90",
    isInStock: true,
    variants: [
      { name: "color", value: "Dark blue" },
      { name: "size", value: "36" },
    ],
  },
  {
    id: "3",
    price: 450,
    title: "Etre Celestine",
    quantity: 1,
    isInStock: false,
    image:
      "https://bloomingdales.ae/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dwa585b647/images/hi-res/BLM/Etre%20Cecile/214566765/214566765_FR.jpg?sw=282&sh=423&q=90",
    variants: [
      { name: "color", value: "Dark blue" },
      { name: "size", value: "36" },
    ],
  },
];

export type CartProductMetaProps = {
  title: string;
  image: string;
  isInStock?: boolean;
  isBestSeller?: boolean;
  variants?: CartItemData["variants"];
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isBestSeller, image, title, variants, isInStock } = props;
  return (
    <Stack direction="row" spacing={{ base: "3", md: "5" }} width="full">
      <Box
        width="24"
        height="24"
        rounded="lg"
        borderWidth="1px"
        overflow="hidden"
      >
        <Image
          fit="cover"
          src={image}
          alt={title}
          draggable="false"
          loading="lazy"
          width="full"
          height="full"
        />
      </Box>
      <Box pt="2">
        <Stack fontSize="sm" align="flex-start">
          <Text fontWeight="semibold" lineHeight="1" noOfLines={1}>
            {title}
          </Text>
          {variants && (
            <Text color={mode("gray.600", "gray.400")} lineHeight="1">
              {variants.map((item) => item.value).join(", ")}
            </Text>
          )}
          {isBestSeller && (
            <Badge variant="solid" colorScheme="orange" fontSize="x-small">
              #1 Best seller
            </Badge>
          )}
          {isInStock && (
            <HStack spacing="1" color={mode("green.600", "green.400")}>
              <Icon as={HiCheckCircle} fontSize="md" />
              <p>In stock</p>
            </HStack>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => (
  <Stack spacing="6" width="full" maxW="sm">
    <Stack
      spacing="6"
      bg={mode("gray.50", "gray.700")}
      rounded="lg"
      padding="8"
    >
      <Text fontSize="lg" fontWeight="bold">
        Order Summary
      </Text>

      <Stack spacing="4">
        <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
        <OrderSummaryItem label="Shipping + Tax" value={formatPrice(20)} />
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between" fontWeight="semibold">
          <Text>Total</Text>
          <Text>{formatPrice(617)}</Text>
        </Flex>
      </Stack>
    </Stack>
    <Button colorScheme="blue" size="lg" fontSize="md">
      Checkout
    </Button>
  </Stack>
);
type CartItemProps = CartItemData &
  FormatPriceOptions & {
    onChangeQuantity?: (quantity: number) => void;
    onClickDelete?: () => void;
    onClickSaveForLater?: () => void;
  };

export const CartItem = (props: CartItemProps) => {
  const {
    isBestSeller,
    image,
    isInStock,
    title,
    variants,
    onChangeQuantity,
    onClickDelete,
    onClickSaveForLater,
    price,
    locale,
    currency,
    quantity,
  } = props;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return isMobile ? (
    <Box>
      <Flex>
        <CartProductMeta
          isInStock={isInStock}
          title={title}
          variants={variants}
          image={image}
          isBestSeller={isBestSeller}
        />
        <Text pt="1" fontSize="sm" fontWeight="semibold">
          {formatPrice(price, { locale, currency })}
        </Text>
      </Flex>
      <HStack mt="2" justify="space-between">
        <HStack
          mt="2"
          fontSize="sm"
          fontWeight="medium"
          divider={<StackDivider />}
          spacing="3"
          color={mode("blue.600", "blue.300")}
        >
          <Link as="button" type="button" onClick={onClickDelete}>
            Delete
          </Link>
          <Link as="button" type="button" onClick={onClickSaveForLater}>
            Save for later
          </Link>
        </HStack>
        <QuantitySelect
          id={title}
          value={quantity}
          onChange={(e) => onChangeQuantity?.(+e.target.value)}
        />
      </HStack>
    </Box>
  ) : (
    <Flex align="flex-start" justify="space-between">
      <CartProductMeta
        isInStock={isInStock}
        title={title}
        variants={variants}
        image={image}
        isBestSeller={isBestSeller}
      />
      <HStack width="full" maxW="sm" justify="space-between">
        <QuantitySelect
          id={title}
          value={quantity}
          onChange={(e) => onChangeQuantity?.(+e.target.value)}
        />
        <Flex
          direction="column"
          align="flex-end"
          justify="space-between"
          width="full"
          maxW="2xs"
          minH="16"
        >
          <Text fontWeight="semibold">
            {formatPrice(price, { locale, currency })}
          </Text>
          <Flex direction="column" align="center">
            <HStack
              mt="2"
              fontSize="sm"
              fontWeight="medium"
              divider={<StackDivider />}
              spacing="3"
              color={mode("blue.600", "blue.300")}
            >
              <Link
                as="button"
                type="button"
                fontWeight="medium"
                onClick={onClickDelete}
              >
                Delete
              </Link>
              <Link
                as="button"
                type="button"
                fontWeight="medium"
                onClick={onClickSaveForLater}
              >
                Save for later
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};
export const CartWithBottomSummary = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing={{ base: "8", md: "12" }}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        Shopping Cart (3)
      </Heading>
      <Stack spacing="8">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Stack>
      <Flex width="full" flexDirection="row" justifyContent="flex-end">
        <CartOrderSummary />
      </Flex>
    </Stack>
  </Box>
);
