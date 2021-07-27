import {
  Badge,
  Box,
  Heading,
  Text,
  Stack,
  useRadioGroup,
  UseRadioGroupProps,
  chakra,
  useRadio,
  UseRadioProps,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiBriefcase, HiCursorClick } from "react-icons/hi";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const RadioBox = chakra("div", {
  baseStyle: {
    borderWidth: "3px",
    px: "6",
    pt: "12",
    pb: "8",
    borderRadius: "md",
    cursor: "pointer",
    transition: "all 0.2s",
    _focus: { shadow: "outline" },
  },
});

const CheckboxIcon = (props: { checked: boolean }) => (
  <Box
    fontSize="4xl"
    color={props.checked ? "blue.600" : mode("gray.300", "whiteAlpha.400")}
  >
    {props.checked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
  </Box>
);

interface ButtonRadioProps extends UseRadioProps {
  icon: React.ReactElement;
  label: string;
  description: string;
}

export const ButtonRadio = (props: ButtonRadioProps) => {
  const { label, icon, description } = props;
  const { getCheckboxProps, getInputProps, getLabelProps, state } =
    useRadio(props);

  const checkedStyles = {
    bg: mode("blue.50", "rgb(0 31 71)"),
    borderColor: "blue.600",
  };

  return (
    <label style={{ width: "100%" }} {...getLabelProps()}>
      <input {...getInputProps()} />
      <RadioBox {...getCheckboxProps()} _checked={checkedStyles}>
        <VStack spacing="4">
          <VStack textAlign="center">
            <Box
              aria-hidden
              fontSize="4xl"
              mb="3"
              color={state.isChecked ? "blue.600" : undefined}
            >
              {icon}
            </Box>
            <Text fontWeight="extrabold" fontSize="xl">
              {label}
            </Text>
            <Text fontSize="sm">{description}</Text>
          </VStack>
          <CheckboxIcon checked={state.isChecked} />
        </VStack>
      </RadioBox>
    </label>
  );
};

interface ButtonRadioGroupProps extends UseRadioGroupProps {
  options: Array<{
    label: string;
    value: string;
    description: string;
    icon: React.ReactElement;
  }>;
}

export const ButtonRadioGroup = (props: ButtonRadioGroupProps) => {
  const { options, ...rest } = props;
  const { getRadioProps, getRootProps } = useRadioGroup(rest);
  return (
    <Stack
      justify="center"
      direction={{ base: "column", md: "row" }}
      spacing="3"
      {...getRootProps()}
    >
      {options.map((option) => (
        <ButtonRadio
          key={option.value}
          icon={option.icon}
          description={option.description}
          label={option.label}
          {...getRadioProps({ value: option.value })}
        />
      ))}
    </Stack>
  );
};

export const ButtonRadioBox = () => {
  return (
    <Box as="section" py="12">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box textAlign="center" mb="10">
          <Badge px="3" py="1" variant="solid" colorScheme="blue">
            Step 1
          </Badge>
          <Heading size="lg" fontWeight="extrabold" mt="6" mb="2">
            Choose what you want to measure
          </Heading>
          <Text maxW="md" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </Box>
        <Box maxW="xl" mx="auto">
          <ButtonRadioGroup
            defaultValue="analytics"
            options={[
              {
                label: "Business Suite",
                description: "For websites, apps and digital products",
                icon: <HiBriefcase />,
                value: "analytics",
              },
              {
                label: "Click Analytics",
                description:
                  "For page tracking, click detection and other interactions",
                icon: <HiCursorClick />,
                value: "intranet",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
