import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import * as React from "react";
import {
  BoxProps,
  Flex,
  FlexProps,
  IconButton,
  IconButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { TOptionsEvents } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import {
  chakra,
  Circle,
  Icon,
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
  AspectRatio,
  Image,
  Skeleton,
  StackProps,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Text, TextProps, useColorModeValue as mode } from "@chakra-ui/react";
import { Badge, BadgeProps } from "@chakra-ui/react";

import { Button, Heading, HStack, Link } from "@chakra-ui/react";
import { FiClock, FiHeart } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";
import {
  Center,
  useControllableState,
  UseControllableStateProps,
} from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
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

interface ProductQuickShopProps {
  product: Product;
  rootProps?: StackProps;
}

export const ProductQuickShop = (props: ProductQuickShopProps) => {
  const { product, rootProps } = props;
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "8", lg: "16" }}
      {...rootProps}
    >
      <Box flex="1">
        <Gallery images={product.images} />
      </Box>
      <Box flex="1">
        <Stack spacing={{ base: "4", md: "8" }}>
          <Stack spacing={{ base: "2", md: "4" }}>
            <Stack spacing="3">
              <ProductBadge bg="red.500" color="white">
                On Sale
              </ProductBadge>
            </Stack>
            <Heading size="lg" fontWeight="medium">
              {product.name}
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="1"
              align="baseline"
              justify="space-between"
            >
              <PriceTag
                price={product.price}
                salePrice={product.salePrice}
                currency={product.currency}
                rootProps={{ fontSize: "xl" }}
              />
              <HStack spacing="2" alignSelf="baseline">
                <Rating defaultValue={product.rating} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {product.ratingCount} Reviews
                </Link>
              </HStack>
            </Stack>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              {product.description}
            </Text>
          </Stack>
          <Stack
            spacing={{ base: "4", md: "8" }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex="1">
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
            <Stack flex="1">
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
          </Stack>
          <HStack
            spacing={{ base: "4", md: "8" }}
            align="flex-end"
            justify="space-evenly"
          >
            <Box flex="1">
              <QuantityPicker defaultValue={1} max={5} />
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
          <Stack spacing="3">
            <Button colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Link textAlign="center">View full details</Link>
          </Stack>
        </Stack>
      </Box>
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
interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 4 / 3, rootProps } = props;
  const [index, setIndex] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesPerView = useBreakpointValue({ base: 3, md: 4 }) ?? 0;

  const [ref, slider] = useCarousel({
    slidesPerView,
    spacing: 16,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Stack spacing="4" {...rootProps}>
      <AspectRatio ratio={aspectRatio}>
        <Image
          src={images[index].src}
          objectFit="cover"
          alt={images[index].alt}
          fallback={<Skeleton />}
        />
      </AspectRatio>
      <HStack spacing="4">
        <CarouselIconButton
          onClick={slider?.prev}
          icon={<IoChevronBackOutline />}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        />
        <Carousel ref={ref} direction="row" width="full">
          {images.map((image, i) => (
            <CarouselSlide key={i} onClick={() => setIndex(i)} cursor="pointer">
              <AspectRatio
                ratio={aspectRatio}
                transition="all 200ms"
                opacity={index === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={image.src}
                  objectFit="cover"
                  alt={image.alt}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>
        <CarouselIconButton
          onClick={slider?.next}
          icon={<IoChevronForwardOutline />}
          disabled={currentSlide + slidesPerView === images.length}
          aria-label="Next slide"
        />
      </HStack>
    </Stack>
  );
};

export const images = [
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

export const products = [
  {
    id: "1",
    name: "Bamboo Tan",
    currency: "USD",
    price: 199,
    flag: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "USD",
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
    currency: "USD",
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
    currency: "GBP",
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

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export type ProductImage = ElementType<typeof images>;

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

export const Carousel = React.forwardRef<HTMLDivElement, FlexProps>(
  function Carousel(props, ref) {
    return (
      <Flex
        ref={ref}
        className="chakra-carousel"
        overflow="hidden"
        position="relative"
        userSelect="none"
        {...props}
      />
    );
  }
);

export const CarouselSlide = (props: BoxProps) => (
  <Box
    className="chakra-carousel__slide"
    position="relative"
    overflow="hidden"
    width="100%"
    minH="100%"
    {...props}
  />
);

export const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    variant="unstyled"
    boxSize="auto"
    minW="auto"
    display="inline-flex"
    fontSize="2xl"
    color={useColorModeValue("gray.600", "gray.400")}
    _hover={{
      color: useColorModeValue("blue.500", "blue.300"),
      _disabled: { color: useColorModeValue("gray.600", "gray.400") },
    }}
    _active={{ color: useColorModeValue("blue.600", "blue.400") }}
    _focus={{ boxShadow: "none" }}
    _focusVisible={{ boxShadow: "outline" }}
    {...props}
  />
);

export const useCarousel = (options?: TOptionsEvents) => {
  const defaultOptions = { slides: ".chakra-carousel__slide" };
  return useKeenSlider<HTMLDivElement>({ ...defaultOptions, ...options });
};
export const QuickViewHorizontal = () => (
  <Box height="100vh">
    {/*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */}
    <Modal
      isOpen={true}
      onClose={console.log}
      size="6xl"
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="none"
        mx={{ base: "2.5", lg: "16" }}
        my={{ base: "2.5", md: "16" }}
      >
        <ModalCloseButton top="3" right="5" size="lg" />
        <ModalBody
          px={{ base: "5", lg: "16" }}
          pt="16"
          pb={{ base: "10", lg: "16" }}
        >
          <ProductQuickShop product={products[0]} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);
