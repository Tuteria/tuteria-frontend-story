import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

import { AspectRatio, BoxProps, Text, Image, Skeleton } from "@chakra-ui/react";

export const categories = [
  {
    name: "Furniture",
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    url: "#",
  },
  {
    name: "Outdoor",
    imageUrl:
      "https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    url: "#",
  },
  {
    name: "Beddings",
    imageUrl:
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    url: "#",
  },
  {
    name: "Lighting",
    imageUrl:
      "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
    url: "#",
  },
  {
    name: "Cookware",
    imageUrl:
      "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    url: "#",
  },
  {
    name: "Rugs",
    imageUrl:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    url: "#",
  },
  {
    name: "Baby",
    imageUrl:
      "https://images.unsplash.com/photo-1574175679797-9fc9eade1450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnklMjB0b3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    url: "#",
  },
  {
    name: "Flooring",
    imageUrl:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    url: "#",
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Category = ElementType<typeof categories>;

interface Props {
  category: Category;
  rootProps?: BoxProps;
}

export const CategoryCard = (props: Props) => {
  const { category, rootProps } = props;
  return (
    <Box
      position="relative"
      key={category.name}
      borderRadius="xl"
      overflow="hidden"
      {...rootProps}
    >
      <Link>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, transparent 60%, gray.900)"
          boxSize="full"
        />
        <Box position="absolute" bottom="6" width="full" textAlign="center">
          <Text color="white" fontSize="lg" fontWeight="semibold">
            {category.name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export const CategoryShowCase = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing={{ base: "6", md: "8", lg: "12" }}>
      <Flex
        justify="space-between"
        align={{ base: "start", md: "center" }}
        direction={{ base: "column", md: "row" }}
      >
        <Heading size="lg" mb={{ base: "3", md: "0" }}>
          Shop by Categories
        </Heading>
        <HStack spacing={{ base: "2", md: "3" }}>
          <Link
            fontWeight="semibold"
            color={useColorModeValue("blue.500", "blue.300")}
          >
            See all categories
          </Link>
          <Icon
            as={FaArrowRight}
            color={useColorModeValue("blue.500", "blue.300")}
            fontSize={{ base: "sm", md: "md" }}
          />
        </HStack>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        gap={{ base: "4", md: "6", lg: "8" }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
);
