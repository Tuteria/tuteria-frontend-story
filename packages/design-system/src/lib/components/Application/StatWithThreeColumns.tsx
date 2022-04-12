import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface StatCardProps {
  data: { label: string; value: string | number };
}
export const StatCard = (props: StatCardProps) => {
  const { label, value } = props.data;
  return (
    <Stat
      px={{ base: 4, sm: 6 }}
      py="5"
      bg={mode("white", "gray.700")}
      shadow="base"
      rounded="lg"
    >
      <StatLabel
        fontWeight="medium"
        isTruncated
        color={mode("gray.500", "gray.400")}
      >
        {label}
      </StatLabel>
      <StatNumber
        fontSize="3xl"
        fontWeight="medium"
        color={mode("gray.900", "white")}
      >
        {value}
      </StatNumber>
    </Stat>
  );
};

const data = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
];

export const StatWithThreeColumns = () => {
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
