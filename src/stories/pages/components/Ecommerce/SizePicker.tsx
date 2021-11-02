import { Box } from "@chakra-ui/react";
import * as React from "react";

import {
  Button,
  chakra,
  useColorModeValue,
  useRadio,
  UseRadioProps,
  useTheme,
  VisuallyHidden,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import {
  FormControl,
  FormControlProps,
  FormLabel,
  HStack,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";

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
export const SizePickerC = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <SizePicker
      defaultValue="32"
      options={[
        { label: "32mm", value: "32" },
        { label: "34mm", value: "34" },
        { label: "36mm", value: "36" },
        { label: "40mm", value: "40" },
      ]}
    />
  </Box>
);
