import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaBitcoin, FaDollarSign, FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

interface IndicatorProps {
  type: "up" | "down";
}

const types = {
  up: { icon: FiArrowUpRight, color: "green.500" },
  down: { icon: FiArrowDownLeft, color: "red.500" },
};

export const Indicator = (props: IndicatorProps) => {
  const { type } = props;
  const { color, icon } = types[type];
  return <Box as={icon} fontSize="lg" color={color} />;
};

export interface StatCardProps {
  icon: React.ElementType;
  accentColor: string;
  data: {
    symbol: string;
    label: string;
    currency: string;
    value: number;
    change: {
      value: number;
      percent: number;
    };
  };
}

function format(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
  }).format(value);
}

export const StatCard = (props: StatCardProps) => {
  const { data, accentColor, icon } = props;
  const { label, currency, value, change, symbol } = data;

  const isNegative = change.percent < 0;

  return (
    <Box
      bg={mode("white", "gray.700")}
      px="6"
      py="4"
      shadow="base"
      rounded="lg"
    >
      <HStack>
        <Circle bg={accentColor} color="white" rounded="full" size="6">
          <Box as={icon} />
        </Circle>
        <Text fontWeight="medium" color={mode("gray.500", "gray.400")}>
          {label}
        </Text>
      </HStack>

      <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
        {currency}
        {format(value)}
      </Heading>
      <Flex
        justify="space-between"
        align="center"
        fontWeight="medium"
        fontSize="sm"
      >
        <HStack spacing="0" color={mode("gray.500", "gray.400")}>
          <Indicator type={isNegative ? "down" : "up"} />
          <Text>
            {currency}
            {format(change.value)} ({isNegative ? "" : "+"}
            {change.percent}%)
          </Text>
        </HStack>
        <Text color="gray.400">{symbol}</Text>
      </Flex>
    </Box>
  );
};

type Icons = Record<string, { icon: React.ElementType; color: string }>;

export const icons: Icons = {
  BTC: {
    icon: FaBitcoin,
    color: "#f2a900",
  },
  BCH: {
    icon: FaDollarSign,
    color: "#ee8c28",
  },
  ETH: {
    icon: FaEthereum,
    color: "#3c3c3d",
  },
  LTC: {
    icon: SiLitecoin,
    color: "#006097",
  },
};

export const data: StatCardProps["data"][] = [
  {
    symbol: "BTC",
    label: "Bitcoin",
    value: 5604.16,
    change: { value: 24.98, percent: -0.73 },
    currency: "$",
  },
  {
    symbol: "BCH",
    label: "Bitcoin Cash",
    value: 391.59,
    change: { value: 30.98, percent: +1.84 },
    currency: "$",
  },
  {
    symbol: "ETH",
    label: "Ethereum",
    value: 177.95,
    change: { value: 12.4, percent: -0.72 },
    currency: "$",
  },
  {
    symbol: "LTC",
    label: "Litecoin",
    value: 46.43,
    change: { value: 33, percent: 1.82 },
    currency: "$",
  },
];

export const StatWithIcon = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          {data.map((stat, index) => {
            const { icon, color: accentColor } = icons[stat.symbol];
            return (
              <StatCard
                icon={icon}
                accentColor={accentColor}
                key={index}
                data={stat}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
