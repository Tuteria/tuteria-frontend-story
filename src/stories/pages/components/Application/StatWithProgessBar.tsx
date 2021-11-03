import {
  Box,
  Flex,
  Progress,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface StatCardData {
  id: string;
  title: string;
  limit: number;
  value: number;
  formattedData?: {
    value: string;
    limit: string;
  };
}

interface StatCardProps {
  data: StatCardData;
}

const StatCard = (props: StatCardProps) => {
  const { id, title, limit, value, formattedData } = props.data;

  const _value = formattedData?.value ?? value;
  const _limit = formattedData?.limit ?? limit;

  return (
    <Flex
      direction="column"
      bg={mode("white", "gray.700")}
      rounded="md"
      overflow="hidden"
      shadow="base"
    >
      <Box id={id} srOnly>
        {value} out of {limit} {title} used
      </Box>
      <Box
        flex="1"
        as="dl"
        px={{ base: "4", lg: "8" }}
        py="4"
        color={mode("gray.500", "gray.400")}
      >
        <Text as="dt" fontSize="sm" fontWeight="medium">
          {title}
        </Text>
        <Stack
          direction="row"
          as="dd"
          mt="2"
          align="flex-end"
          textTransform="uppercase"
        >
          <Box
            fontSize={{ base: "2xl", lg: "3xl" }}
            as="span"
            fontWeight="bold"
            color={mode("gray.800", "white")}
            lineHeight="1"
          >
            {_value}
          </Box>
          <Flex fontWeight="semibold">
            <Box as="span" aria-hidden>
              /
            </Box>
            <Box srOnly>out of</Box>
            <Text ps="1">{_limit}</Text>
          </Flex>
        </Stack>
      </Box>
      <Progress
        aria-labelledby={id}
        value={value}
        max={limit}
        min={0}
        size="xs"
        colorScheme="blue"
      />
    </Flex>
  );
};

const data: StatCardData[] = [
  {
    id: "bandwidth",
    title: "Bandwidth used",
    value: 96046924900,
    limit: 107374182400,
    formattedData: {
      value: "916 MB",
      limit: "100 GB",
    },
  },
  {
    id: "build-minutes",
    title: "Build minutes used",
    value: 51,
    limit: 300,
  },
  {
    id: "concurrent-builds",
    title: "Concurrent builds",
    value: 2,
    limit: 10,
  },
];

export const StatWithProgessBar = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="8">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: "2", md: "4", lg: "8" }}
        >
          {data.map((stat) => (
            <StatCard data={stat} key={stat.id} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
