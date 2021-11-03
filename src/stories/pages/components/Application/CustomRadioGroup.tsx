import {
  Heading,
  VStack,
  Square,
  SquareProps,
  useColorModeValue as mode,
  useRadio,
  UseRadioProps,
} from "@chakra-ui/react";
import * as React from "react";
import { HStack, StackProps, useRadioGroup } from "@chakra-ui/react";

export interface RadioOptionProps
  extends UseRadioProps,
    Omit<SquareProps, "onChange"> {}

export const RadioOption = (props: RadioOptionProps) => {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props);

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} />
      <Square
        rounded="lg"
        fontWeight="bold"
        size={{ base: "10", md: "12" }}
        borderWidth="1px"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          bg: mode("gray.100", "whiteAlpha.200"),
        }}
        _active={{
          bg: mode("gray.200", "whiteAlpha.300"),
        }}
        _checked={{
          bg: mode("blue.500", "blue.300"),
          color: mode("white", "black"),
        }}
        _focus={{ shadow: "outline" }}
        {...getCheckboxProps(props)}
      />
    </label>
  );
};

interface RadioGroupProps extends Omit<StackProps, "onChange"> {
  name: string;
  options: string[];
  onChange: (value: string) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  });

  return (
    <HStack spacing={{ base: 2, md: 4 }} {...getRootProps(rest)}>
      {options.map((value) => (
        <RadioOption key={value} {...getRadioProps({ value })}>
          {value}
        </RadioOption>
      ))}
    </HStack>
  );
};

export const CustomRadioGroup = () => {
  const options = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <VStack
      spacing={6}
      mx="auto"
      maxW="5xl"
      width="full"
      p={{ base: 4, sm: 6, md: 8 }}
    >
      <Heading fontSize="xl" textAlign="center">
        How likely would you be to recommend our product?
      </Heading>
      <RadioGroup name="rating" options={options} onChange={console.log} />
    </VStack>
  );
};
