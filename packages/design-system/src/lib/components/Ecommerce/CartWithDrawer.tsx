import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Select, Image, Flex, Link } from "@chakra-ui/react";
import {
  TextProps,
  StackProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";

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
export const cartData = [
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Ferragamo bag",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "2",
    price: 39.99,
    currency: "GBP",
    name: "Bamboo Tan",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "3",
    price: 39.99,
    currency: "GBP",
    name: "Yeezy Sneakers",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
];
type CartItemProps = {
  name: string;
  description: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickDelete?: () => void;
};

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;

  return (
    <Stack direction="row" spacing="5">
      <Image
        rounded="md"
        minWidth="24"
        maxWidth="24"
        height={{ base: "20", md: "24" }}
        fit="cover"
        src={imageUrl}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Stack width="full" spacing="3">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="3"
          alignItems="flex-start"
        >
          <Stack spacing="0.5" width="full">
            <Text fontWeight="medium">{name}</Text>
            <Text color={useColorModeValue("gray.500", "gray.300")}>
              {description}
            </Text>
          </Stack>
          <PriceTag price={price} currency={currency} />
        </Stack>
        <Flex width="full" justifyContent="space-between" alignItems="center">
          <Select
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            width="16"
            height="8"
            value={quantity}
            onChange={(e) => {
              onChangeQuantity?.(+e.currentTarget.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Link
            as="button"
            type="button"
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue("blue.500", "blue.200")}
            onClick={onClickDelete}
          >
            Remove
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};
export const CartWithDrawer = () => (
  <Box height="100vh">
    <Drawer
      isOpen
      onClose={() => void 0}
      size="md"
      /*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={useColorModeValue("white", "gray.800")}
        overflowY="auto"
      >
        <DrawerCloseButton
          size="lg"
          right={{ base: "4", md: "8" }}
          top="4"
          bg="inherit"
        />
        <Stack
          padding={{ base: "6", md: "10" }}
          height="full"
          spacing="8"
          overflowY="auto"
        >
          <Heading size="md">Shopping Cart ({cartData.length} items)</Heading>
          <Stack spacing={{ base: "8", md: "10" }}>
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
        <Stack
          borderTopWidth="1px"
          px={{ base: "6", md: "10" }}
          py="4"
          spacing="5"
        >
          <Stack>
            <HStack fontSize="xl" fontWeight="semibold">
              <Text flex="1">Subtotal:</Text>
              <Text>£597.00</Text>
            </HStack>
            <HStack
              spacing="2"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              <Icon as={FiPackage} />
              <Text>Shipping + taxes calculated at checkout</Text>
            </HStack>
          </Stack>
          <Button colorScheme="blue" size="lg" fontSize="md">
            Checkout
          </Button>
        </Stack>
      </DrawerContent>
    </Drawer>
  </Box>
);
