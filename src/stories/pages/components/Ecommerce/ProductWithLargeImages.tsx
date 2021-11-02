import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiClock, FiHeart } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";
import {
  chakra,
  Circle,
  useRadio,
  UseRadioProps,
  useTheme,
  VisuallyHidden,
} from "@chakra-ui/react";
import { isDark } from "@chakra-ui/theme-tools";
import { FiCheck } from "react-icons/fi";

import {
  FormControl,
  FormControlProps,
  FormLabel,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";

import {
  TextProps,
  StackProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { Badge, BadgeProps } from "@chakra-ui/react";

import { BiCheckShield, BiPackage } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";

import {
  Center,
  Flex,
  IconButton,
  IconButtonProps,
  useControllableState,
  UseControllableStateProps,
} from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import { FaEnvelope, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

import { transparentize } from "@chakra-ui/theme-tools";

interface Option {
  label: string;
  value: string;
}

interface SizePickerProps extends UseRadioGroupProps {
  options: Option[];
  rootProps?: FormControlProps;
  hideLabel?: boolean;
  label?: string;
}

export const SizePicker = (props: SizePickerProps) => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest);
  const selectedOption = options.find((option) => option.value == value);

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Size: ${selectedOption?.label}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options.map((option) => (
          <SizePickerButton
            key={option.value}
            label={option.label}
            {...getRadioProps({ value: option.value })}
          />
        ))}
      </HStack>
    </FormControl>
  );
};

export type SizePickerButtonProps = UseRadioProps & {
  label?: string;
};

export const SizePickerButton = (props: SizePickerButtonProps) => {
  const { value, label } = props;
  const { getInputProps, htmlProps, getCheckboxProps, getLabelProps } =
    useRadio(props);
  const theme = useTheme();

  return (
    <chakra.label {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Button
        as="span"
        px="0"
        cursor="pointer"
        variant="outline"
        colorScheme="blue"
        color={useColorModeValue("gray.600", "gray.400")}
        borderRadius="base"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        _checked={{
          color: useColorModeValue("blue.500", "blue.200"),
          bg: useColorModeValue(
            "blue.50",
            transparentize("blue.200", 0.12)(theme)
          ),
          borderColor: useColorModeValue("blue.500", "blue.200"),
          borderWidth: "2px",
        }}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "outline" }}
        {...getCheckboxProps()}
      >
        {value}
      </Button>
      <VisuallyHidden {...getLabelProps()}>{label} selected</VisuallyHidden>
    </chakra.label>
  );
};

interface ShareProps {
  label?: string;
  rootProps?: StackProps;
}

export const Share = (props: ShareProps) => {
  const { label = "Share", rootProps } = props;
  return (
    <Stack {...rootProps}>
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {label}
      </Text>
      <HStack spacing="5">
        <ShareButton aria-label="Share with Mail">
          <Icon as={FaEnvelope} />
        </ShareButton>
        <ShareButton aria-label="Share on Facebook">
          <Icon as={FaFacebook} />
        </ShareButton>
        <ShareButton aria-label="Share on Twitter">
          <Icon as={FaTwitter} />
        </ShareButton>
        <ShareButton aria-label="Share on Pinterest">
          <Icon as={FaPinterest} />
        </ShareButton>
      </HStack>
    </Stack>
  );
};

const ShareButton = (props: IconButtonProps) => (
  <chakra.button
    fontSize="xl"
    transition="all 200ms"
    lineHeight="1"
    color={useColorModeValue("gray.400", "gray.500")}
    _hover={{
      color: useColorModeValue("blue.500", "blue.200"),
    }}
    _focus={{ boxShadow: "none" }}
    _focusVisible={{ boxShadow: "outline", outline: "none" }}
    {...props}
  />
);

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

interface QuantityPickerProps extends UseControllableStateProps<number> {
  max?: number;
  min?: number;
  rootProps?: FormControlProps;
}

export const QuantityPicker = (props: QuantityPickerProps) => {
  const { min = 0, max, rootProps, ...rest } = props;

  const [value, setValue] = useControllableState(rest);
  const handleDecrement = () => setValue(value === min ? value : value - 1);
  const handleIncrement = () => setValue(value === max ? value : value + 1);

  return (
    <FormControl {...rootProps}>
      <FormLabel fontSize="sm" fontWeight="medium">
        Quantity
      </FormLabel>
      <Flex
        borderRadius="base"
        px="2"
        py="0.4375rem"
        borderWidth="1px"
        justifyContent="space-between"
      >
        <QuantityPickerButton
          onClick={handleDecrement}
          icon={<FiMinus />}
          isDisabled={value === min}
          aria-label="Decrement"
        />
        <Center minW="8">
          <Text as="span" fontWeight="semibold" userSelect="none">
            {value}
          </Text>
        </Center>
        <QuantityPickerButton
          onClick={handleIncrement}
          icon={<FiPlus />}
          isDisabled={value === max}
          aria-label="Increment"
        />
      </Flex>
    </FormControl>
  );
};

const QuantityPickerButton = (props: IconButtonProps) => (
  <IconButton
    size="sm"
    fontSize="md"
    _focus={{ boxShadow: "none" }}
    _focusVisible={{ boxShadow: "outline" }}
    {...props}
  />
);

const promose = [
  {
    icon: BiPackage,
    text: "Free shipping + returns",
  },
  {
    icon: BiCheckShield,
    text: "2 year extended warranty",
  },
  {
    icon: Ri24HoursLine,
    text: "We’re here for you 24/7",
  },
];

export const Promos = (props: StackProps) => {
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Stack
      spacing="4"
      p="6"
      bg={useColorModeValue("gray.50", "gray.700")}
      {...props}
    >
      {promose.map((promo, id) => (
        <HStack key={id} spacing="3" color={color}>
          <Icon as={promo.icon} fontSize="xl" />
          <Text>{promo.text}</Text>
        </HStack>
      ))}
    </Stack>
  );
};

export const ProductBadge = (props: BadgeProps) => (
  <Badge
    alignSelf="start"
    textTransform="none"
    fontSize="sm"
    fontWeight="semibold"
    lineHeight="1rem"
    borderRadius="base"
    py="1"
    px="2"
    {...props}
  />
);

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

interface ColorPickerProps extends UseRadioGroupProps {
  options: Option[];
  rootProps?: FormControlProps;
  hideLabel?: boolean;
  label?: string;
}

interface Option {
  label: string;
  value: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest);
  const selectedOption = options.find((option) => option.value == value);
  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Color: ${selectedOption?.value}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options.map((option) => (
          <ColorPickerOption
            key={option.label}
            color={option.value}
            {...getRadioProps({ value: option.value })}
          />
        ))}
      </HStack>
    </FormControl>
  );
};

interface ColorPickerOptionProps extends UseRadioProps {
  color: string;
}

export const ColorPickerOption = (props: ColorPickerOptionProps) => {
  const { color, value } = props;
  const { getInputProps, htmlProps, getCheckboxProps, getLabelProps, state } =
    useRadio(props);
  const theme = useTheme();

  return (
    <chakra.label cursor="pointer" {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Circle
        size="10"
        borderWidth="1px"
        _checked={{
          borderWidth: "2px",
          borderColor: useColorModeValue("blue.500", "blue.200"),
        }}
        {...getCheckboxProps()}
      >
        <Circle size="8" bg={color}>
          {state.isChecked && (
            <Icon
              as={FiCheck}
              color={isDark(color)(theme) ? "white" : "gray.900"}
            />
          )}
        </Circle>
      </Circle>
      <VisuallyHidden {...getLabelProps()}>
        {value} color selected
      </VisuallyHidden>
    </chakra.label>
  );
};
export const ProductWithLargeImages = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack direction={{ base: "column", md: "row" }} spacing="16">
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <ProductBadge
                  bg={useColorModeValue("gray.500", "gray.600")}
                  color="white"
                >
                  New In
                </ProductBadge>
                <Heading size="lg" fontWeight="medium">
                  Classic Black
                </Heading>
              </Stack>
              <Stack spacing="1">
                <PriceTag
                  price={229}
                  salePrice={199}
                  currency="GBP"
                  rootProps={{ fontSize: "xl" }}
                />
                <HStack spacing="2" alignSelf="baseline">
                  <Rating defaultValue={4} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    12 Reviews
                  </Link>
                </HStack>
              </Stack>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                With a sleek design and a captivating essence, this is a modern
                Classic made for every occasion.
              </Text>
            </Stack>
            <Stack>
              <SizePicker
                defaultValue="32"
                options={[
                  { label: "32mm", value: "32" },
                  { label: "36mm", value: "36" },
                  { label: "40mm", value: "40" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={RiRulerLine} />
                <Link
                  href="#"
                  fontSize="xs"
                  fontWeight="medium"
                  textDecoration="underline"
                >
                  View our sizing guide
                </Link>
              </HStack>
            </Stack>
            <Stack>
              <ColorPicker
                defaultValue="Black"
                options={[
                  { label: "Black", value: "#000" },
                  { label: "Dark Gray", value: "#666" },
                  { label: "Light Gray", value: "#BBB" },
                ]}
              />
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack>
            <HStack
              spacing={{ base: "4", md: "8" }}
              align="flex-end"
              justify="space-evenly"
            >
              <Box flex="1">
                <QuantityPicker defaultValue={1} max={3} />
              </Box>
              <Box flex="1">
                <Button
                  variant="outline"
                  size="lg"
                  fontSize="md"
                  isFullWidth
                  leftIcon={<Icon as={FiHeart} boxSize="4" />}
                >
                  Favorite
                </Button>
              </Box>
            </HStack>
            <Button colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Promos />
            <Share />
          </Stack>
        </Box>
        <Box flex="1">
          <Stack spacing="8">
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Lovely image"
                fallback={<Skeleton />}
              />
            </AspectRatio>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
