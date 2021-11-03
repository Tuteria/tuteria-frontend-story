import {
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

interface IndicatorProps {
  type: "up" | "down";
  value: string | number;
}

const types = {
  up: { icon: HiArrowUp, colorScheme: "green" },
  down: { icon: HiArrowDown, colorScheme: "red" },
};

export const Indicator = (props: IndicatorProps) => {
  const { type, value } = props;
  const { colorScheme: c, icon } = types[type];

  return (
    <HStack
      color={mode(`${c}.500`, `${c}.300`)}
      fontWeight="bold"
      justify="center"
      spacing="1"
    >
      <Box
        aria-hidden
        color="currentcolor"
        as={icon}
        position="relative"
        top={type === "down" ? "px" : undefined}
      />
      <Box srOnly>
        Value is {type} by {value}
      </Box>
      <Text fontSize="sm" ms="1">
        {value}
      </Text>
    </HStack>
  );
};

export interface StatCardProps {
  data: {
    label: string;
    currency: string;
    value: number;
    change: number;
  };
}

function format(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "decimal", currency }).format(
    value
  );
}

export function StatCard(props: StatCardProps) {
  const { label, currency, value, change } = props.data;
  const isNegative = change < 0;

  return (
    <Flex
      direction="column"
      align="center"
      p="6"
      bg={mode("white", "gray.700")}
      rounded="8px"
      shadow="base"
      color={mode("gray.500", "gray.400")}
      textAlign="center"
    >
      <Box>
        <Text
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {label}
        </Text>
        <Stack direction="row" align="flex-start" my="3">
          <Text fontWeight="bold" fontSize="2xl">
            {currency}
          </Text>
          <Text
            as="span"
            color={mode("gray.800", "white")}
            fontSize="4xl"
            fontWeight="bold"
            lineHeight="1"
          >
            {format(value, "USD")}
          </Text>
        </Stack>
        <Indicator type={isNegative ? "down" : "up"} value={`${change}%`} />
      </Box>
    </Flex>
  );
}

export const data: StatCardProps["data"][] = [
  {
    label: "Bitcoin (BTC)",
    value: 5604.16,
    change: 0.73,
    currency: "$",
  },
  {
    label: "Bitcoin Cash (BCH)",
    value: 391.59,
    change: -1.84,
    currency: "$",
  },
  {
    label: "Ethereum (ETH)",
    value: 177.95,
    change: -0.72,
    currency: "$",
  },
  {
    label: "Litecoin (LTC)",
    value: 46.43,
    change: 1.82,
    currency: "$",
  },
];

export const StatWithCenteredIndicator = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          {data.map((stat, idx) => (
            <StatCard key={idx} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
