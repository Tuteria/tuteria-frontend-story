import {
  Box,
  SimpleGrid,
  Badge,
  Text,
  Heading,
  HStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

interface IndicatorProps {
  type: "up" | "down";
  value: string | number;
}

const types = {
  up: { icon: BsCaretUpFill, colorScheme: "green" },
  down: { icon: BsCaretDownFill, colorScheme: "red" },
};

const Indicator = (props: IndicatorProps) => {
  const { type, value } = props;
  return (
    <Badge
      display="flex"
      alignItems="center"
      variant="solid"
      colorScheme={types[type].colorScheme}
      rounded="base"
      px="1"
      spacing="0"
    >
      <Box
        aria-hidden
        color="currentcolor"
        as={types[type].icon}
        pos="relative"
        top={type === "down" ? "px" : undefined}
      />
      <Box srOnly>
        Value is {type} by {value}
      </Box>
      <Text fontSize="sm" color="white" marginStart="1">
        {value}
      </Text>
    </Badge>
  );
};

interface StatCardProps {
  data: {
    label: string;
    value: string | number;
    change: number;
    description?: string;
  };
}

function StatCard(props: StatCardProps) {
  const { label, value, change, description } = props.data;

  const isNegative = change < 0;
  const changeText = `${change * 100}%`;

  return (
    <Box
      px="6"
      py="4"
      bg={mode("white", "gray.700")}
      borderRadius="8px"
      boxShadow="md"
      color={mode("gray.800", "white")}
    >
      <Text fontWeight="medium" fontSize="sm">
        {label}
      </Text>
      <HStack spacing="4" mt="2">
        <Heading as="h4" size="xl" lineHeight="1" letterSpacing="tight">
          {value}
        </Heading>
        <Indicator type={isNegative ? "down" : "up"} value={changeText} />
      </HStack>
      {description && (
        <Text fontSize="sm" mt="4" color={mode("gray.500", "gray.400")}>
          {description}
        </Text>
      )}
    </Box>
  );
}

const data: StatCardProps["data"][] = [
  {
    label: "Profit & Loss",
    value: "$7,650",
    change: -0.025,
    description: "You made an extra $97 this week",
  },
  {
    label: "Unique Opens",
    value: "83%",
    change: 0.001,
    description: "Your email is getting opened!",
  },
  {
    label: "Delivered",
    value: "60.67%",
    change: 0.12,
    description: "You get more emails out this week",
  },
];

export const StatWithIndicator = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {data.map((stat, idx) => (
            <StatCard key={idx} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
