import {
  Box,
  Heading,
  Stack,
  useCheckboxGroup,
  HStack,
  Text,
  useCheckbox,
  UseCheckboxProps,
  BoxProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaPlaystation, FaApple, FaPlaneDeparture } from "react-icons/fa";

export const CheckboxBox = (props: BoxProps) => (
  <Box
    borderWidth="2px"
    px="4"
    py="3"
    borderRadius="md"
    cursor="pointer"
    transition="all 0.2s"
    _focus={{ shadow: "outline" }}
    _checked={{
      bg: mode("gray.50", "whiteAlpha.100"),
      borderColor: mode("blue.500", "blue.300"),
    }}
    {...props}
  />
);

interface ButtonCheckboxProps extends UseCheckboxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  price: string;
  children: React.ReactNode;
}

export const ButtonCheckbox = (props: ButtonCheckboxProps) => {
  const { icon, title, description, price, ...rest } = props;
  const { getCheckboxProps, getInputProps, getLabelProps, state } =
    useCheckbox(rest);

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} />
      <CheckboxBox {...getCheckboxProps()}>
        <HStack spacing="4">
          <Box
            data-checked={state.isChecked ? "" : undefined}
            fontSize="2xl"
            _checked={{
              color: mode("blue.500", "blue.300"),
            }}
            color={mode("gray.300", "whiteAlpha.400")}
          >
            {state.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </Box>
          <Box fontSize="3xl">{icon}</Box>
          <Box flex="1">
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="sm">{description}</Text>
          </Box>
          <Box fontWeight="bold" color={mode("blue.600", "blue.400")}>
            {price}
          </Box>
        </HStack>
      </CheckboxBox>
    </label>
  );
};

export const ButtonCheckBox = () => {
  const { getCheckboxProps } = useCheckboxGroup({ defaultValue: ["ps5"] });
  return (
    <Box as="section" py="12">
      <Box maxW="xl" mx="auto" width="full" px={{ base: "6", md: "8" }}>
        <Heading size="lg" mb="8" fontWeight="extrabold">
          Select valentine gift
        </Heading>
        <Stack spacing="5" justify="flex-start">
          <ButtonCheckbox
            {...getCheckboxProps({ value: "ps5" })}
            icon={<FaPlaystation />}
            title="Playstation 5"
            description="1-2 business days"
            price="$3,459"
          >
            Option 1
          </ButtonCheckbox>
          <ButtonCheckbox
            {...getCheckboxProps({ value: "m1" })}
            icon={<FaApple />}
            title="Macbook Pro - M1"
            description="5-8 business days"
            price="$4,899"
          >
            Option 2
          </ButtonCheckbox>
          <ButtonCheckbox
            {...getCheckboxProps({ value: "bahamas" })}
            icon={<FaPlaneDeparture />}
            title="Flight to Bahamas"
            description="3-4 business days"
            price="$5,199"
          >
            Option 3
          </ButtonCheckbox>
        </Stack>
      </Box>
    </Box>
  );
};
