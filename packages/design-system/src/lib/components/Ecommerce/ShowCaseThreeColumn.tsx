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
import { BoxProps, Image, Skeleton, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
export const categories = [
  {
    name: "Print T-Shirts",
    description: "Edits both cool and casual shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByaW50ZWQlMjBzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    url: "#",
  },
  {
    name: "White Sneakers",
    description: "Sporty kicks to stay on the groove",
    imageUrl:
      "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    url: "#",
  },
  {
    name: "Printed Kurtas",
    description: "Festive picks in celebratory prints",
    imageUrl:
      "https://images.unsplash.com/photo-1616879672490-c6d3a23d91f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80",
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
      minH={{ base: "sm", lg: "auto" }}
      {...rootProps}
    >
      <Link>
        <Image
          src={category.imageUrl}
          height="full"
          objectFit="cover"
          alt={category.name}
          fallback={<Skeleton />}
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 47.92%, #000000 100%)"
          boxSize="full"
        />
        <Flex
          color="white"
          direction="column-reverse"
          position="absolute"
          inset="0"
          boxSize="full"
          px={{ base: "4", md: "8" }}
          py={{ base: "6", md: "8", lg: "10" }}
        >
          <Stack spacing="5">
            <Stack spacing="1">
              <Heading fontSize="2xl" fontWeight="extrabold">
                {category.name}
              </Heading>
              <Text fontSize="lg" fontWeight="medium">
                {category.description}
              </Text>
            </Stack>
            <HStack>
              <Link fontSize="lg" fontWeight="bold" textDecoration="underline">
                Shop now
              </Link>
              <Icon as={FaChevronRight} />
            </HStack>
          </Stack>
        </Flex>
      </Link>
    </Box>
  );
};
export const ShowCaseThreeColumn = () => (
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
        <Heading size="lg">Season's Favorites</Heading>
        <HStack spacing={{ base: "2", md: "3" }}>
          <Link
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
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
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: "8", lg: "16" }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
);
