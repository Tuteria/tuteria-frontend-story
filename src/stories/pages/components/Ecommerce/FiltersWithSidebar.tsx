import {
  Box,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  FormLabel,
  InputGroup,
  InputRightElement,
  StackProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import {
  chakra,
  Circle,
  Icon,
  useColorModeValue,
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
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";
import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  Flex,
  Link,
} from "@chakra-ui/react";

import { Divider, StackDivider, useDisclosure } from "@chakra-ui/react";
import { MdFilterList } from "react-icons/md";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderProps,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { transparentize } from "@chakra-ui/theme-tools";
import { Select, SelectProps } from "@chakra-ui/react";

const sortByOptions = {
  defaultValue: "best-seller",
  options: [
    { label: "Best Seller", value: "best-seller" },
    { label: "Best Match", value: "best-match" },
    { label: "Price: Low to High", value: "low-to-high" },
    { label: "Price: High to Low", value: "high-to-low" },
  ],
};

export const SortbySelect = (props: SelectProps) => (
  <Select
    size="sm"
    aria-label="Sort by"
    defaultValue={sortByOptions.defaultValue}
    focusBorderColor={useColorModeValue("blue.500", "blue.200")}
    rounded="md"
    {...props}
  >
    {sortByOptions.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
);
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

type ProductBreadcrumbProps = {
  data: Array<{ label: string; slug: string }>;
};

export const ProductBreadcrumb = (props: ProductBreadcrumbProps) => {
  const { data } = props;
  return (
    <Breadcrumb
      fontSize="sm"
      fontWeight="medium"
      color={mode("gray.600", "gray.400")}
      separator={
        <Box as={HiChevronRight} color={mode("gray.400", "gray.600")} />
      }
    >
      {data.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={breadcrumb.slug}
          isCurrentPage={index === data.length - 1}
        >
          <BreadcrumbLink href={breadcrumb.slug}>
            {breadcrumb.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export const PriceRangePicker = (props: RangeSliderProps) => {
  const value = props.defaultValue || props.value;
  return (
    <RangeSlider
      colorScheme="blue"
      step={10}
      aria-label={["minimum price", "maximux price"]}
      {...props}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      {value?.map((val, index) => (
        <RangeSliderThumb
          w="5"
          h="5"
          borderWidth="1px"
          borderColor="gray.200"
          key={index}
          index={index}
        />
      ))}
    </RangeSlider>
  );
};

export const MobileFilter = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <HStack
          as="button"
          fontSize="sm"
          type="button"
          px="3"
          py="1"
          onClick={onOpen}
          borderWidth="1px"
          rounded="md"
        >
          <Icon as={MdFilterList} />
          <Text>Filters</Text>
        </HStack>
        <SortbySelect width="120px" defaultValue="23" placeholder="Sort" />
      </Flex>
      <FilterDrawer isOpen={isOpen} onClose={onClose}>
        <Stack spacing="6" divider={<StackDivider />}>
          <CheckboxFilter label="Brands" options={blueFilters.options} />
          <MobilePriceFilter />
          <MobileSizeFilter />
          <MobileColorFilter />
        </Stack>
      </FilterDrawer>
    </>
  );
};

const MobilePriceFilter = () => {
  return (
    <Box>
      <Box fontWeight="semibold" mb="2">
        Price range
      </Box>
      <Box marginStart="2">
        <PriceRangePicker defaultValue={[0, 50]} />
      </Box>
      <HStack spacing="4" mt="4">
        <HStack spacing="4">
          <Text color="gray.500" fontSize="sm">
            min
          </Text>
          <Input aria-label="Minimum price" type="number" defaultValue={10} />
        </HStack>
        <Divider width="8" opacity={1} />
        <HStack spacing="4">
          <Text color="gray.500" fontSize="sm">
            max
          </Text>
          <Input aria-label="Maximum price" type="number" defaultValue={50} />
        </HStack>
      </HStack>
    </Box>
  );
};

const MobileSizeFilter = () => {
  return (
    <Box>
      <Box fontWeight="semibold" mb="2">
        Size
      </Box>
      <SizePicker hideLabel {...sizeFilter} />
    </Box>
  );
};

const MobileColorFilter = () => {
  return (
    <Box>
      <Box fontWeight="semibold" mb="2">
        Color
      </Box>
      <ColorPicker rootProps={{ mt: "2" }} hideLabel {...colorFilter} />
    </Box>
  );
};

type AddFilterDrawerProps = Pick<
  DrawerProps,
  "isOpen" | "onClose" | "children"
> & {
  onClickCancel?: VoidFunction;
  isCancelDisabled?: boolean;
  onClickApply?: VoidFunction;
  onClearAll?: VoidFunction;
};

export const FilterDrawer = (props: AddFilterDrawerProps) => {
  const { onClose, onClearAll, isOpen, children, onClickApply } = props;

  return (
    <Drawer
      placement="bottom"
      isFullHeight
      isOpen={isOpen}
      onClose={onClose}
      /*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <DrawerContent>
        <DrawerHeader px="4" borderBottomWidth="1px">
          <Flex justify="space-between" align="center">
            <CloseButton onClick={onClose} />
            <Text fontWeight="semibold" fontSize="md">
              Filter by
            </Text>
            <HStack spacing="4">
              <Link
                textDecor="underline"
                fontSize="sm"
                onClick={() => {
                  onClearAll?.();
                }}
              >
                Clear
              </Link>
            </HStack>
          </Flex>
        </DrawerHeader>
        <DrawerBody padding="6">{children}</DrawerBody>
        <DrawerFooter px="4" borderTopWidth="1px">
          <Button
            isFullWidth
            size="lg"
            fontSize="md"
            colorScheme="blue"
            onClick={() => {
              onClickApply?.();
              onClose();
            }}
          >
            Show results
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export const colorFilter = {
  defaultValue: "black",
  options: [
    { label: "Black", value: "black" },
    { label: "Tomato", value: "tomato" },
    { label: "Blueish", value: "#272458" },
    { label: "Beige", value: "#BFB8A5" },
  ],
};

export const sizeFilter = {
  defaultValue: "36",
  options: [
    { label: "32mm", value: "32" },
    { label: "36mm", value: "36" },
    { label: "40mm", value: "40" },
  ],
};

export const priceFilter = {
  formatOptions: {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  },
  defaultValue: [800, 2000],
  min: 500,
  max: 4000,
};

export const filterTags = ["Mens", "40mm", "$0-$200", "Black"];

export const blueFilters = {
  defaultValue: ["casio", "fossil"],
  options: [
    { label: "Casio", value: "casio", count: 18 },
    { label: "Fossil", value: "fossil", count: 6 },
    { label: "Tommy Hilfiger", value: "tommy-hilfiger", count: 9 },
    { label: "Puma", value: "puma", count: 3 },
    { label: "Reebok", value: "reebok", count: 2 },
    { label: "Nike", value: "nike", count: 1 },
  ],
};

export const genderFilter = {
  defaultValue: [],
  options: [
    { label: "Men", count: 18, value: "men" },
    { label: "Women", count: 45, value: "women" },
    { label: "Unisex", count: 10, value: "unisex" },
  ],
};

export const breadcrumbData = [
  { label: "Home", slug: "/" },
  {
    label: "Watches",
    slug: "watches",
  },
  {
    label: "Mens Watches",
    slug: "watches/mens-watches",
  },
];

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

type CheckboxFilterProps = Omit<CheckboxGroupProps, "onChange"> & {
  hideLabel?: boolean;
  options: Array<{ label: string; value: string; count?: number }>;
  label?: string;
  onChange?: (value: string[]) => void;
  spacing?: StackProps["spacing"];
  showSearch?: boolean;
};

export const CheckboxFilter = (props: CheckboxFilterProps) => {
  const {
    options,
    label,
    hideLabel,
    spacing = "2",
    showSearch,
    ...rest
  } = props;

  return (
    <Stack as="fieldset" spacing={spacing}>
      {!hideLabel && (
        <FormLabel fontWeight="semibold" as="legend" mb="0">
          {label}
        </FormLabel>
      )}
      {showSearch && (
        <InputGroup size="md" pb="1">
          <Input
            placeholder="Search..."
            rounded="md"
            focusBorderColor={mode("blue.500", "blue.200")}
          />
          <InputRightElement
            pointerEvents="none"
            color="gray.400"
            fontSize="lg"
          >
            <FiSearch />
          </InputRightElement>
        </InputGroup>
      )}
      <CheckboxGroup {...rest}>
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value} colorScheme="blue">
            <span>{option.label}</span>
            {option.count != null && (
              <Box as="span" color="gray.500" fontSize="sm">
                {" "}
                ({option.count})
              </Box>
            )}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Stack>
  );
};
export const FiltersWithSidebar = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ProductBreadcrumb data={breadcrumbData} />
    <Box mt={{ base: "8", md: "16" }}>
      <Grid templateColumns={{ base: "1fr", md: "240px 1fr" }} gap="14">
        <Stack spacing="10" maxW="240px" display={{ base: "none", md: "flex" }}>
          <CheckboxFilter
            spacing="3"
            options={genderFilter.options}
            label="Gender"
          />
          <SizePicker {...sizeFilter} label="Size" />
          <ColorPicker {...colorFilter} label="Color" />
          <CheckboxFilter
            spacing="3"
            options={blueFilters.options}
            label="Brand"
            showSearch
          />
          <Stack spacing="5">
            <label>Price range</label>
            <PriceRangePicker defaultValue={[6, 40]} />
            <HStack spacing="6">
              <Input type="number" placeholder="$500" />
              <Input type="number" placeholder="$1,000" />
            </HStack>
          </Stack>
        </Stack>

        <Box width="full">
          <Stack
            spacing={{ base: "6", md: "4" }}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            width="full"
          >
            <Stack direction={{ base: "column", md: "row" }} align="baseline">
              <Heading size="md" fontSize="2xl">
                Watches
              </Heading>
              <Text color="gray.500">(300 products)</Text>
            </Stack>
            <MobileFilter />
            <HStack display={{ base: "none", md: "flex" }}>
              <Text flexShrink={0} color="gray.500" fontSize="sm">
                Sort by
              </Text>
              <SortbySelect />
            </HStack>
          </Stack>
          <Box
            mt="6"
            borderWidth="2px"
            minH="480px"
            rounded="xl"
            borderStyle="dashed"
          ></Box>
        </Box>
      </Grid>
    </Box>
  </Box>
);
