import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Icon, StackProps } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
  review: Review;
}

export const ReviewItem = (props: Props) => {
  const { review } = props;
  return (
    <Stack>
      <Rating defaultValue={review.rating} size="sm" />
      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="sm">
        by {review.author}, {review.createdAt}
      </Text>
      <Heading size="sm" fontWeight="medium">
        {review.title}
      </Heading>
      <Text>{review.comment}</Text>
    </Stack>
  );
};

interface Props {
  defaultValue?: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  rootProps?: StackProps;
}

export const Rating = (props: Props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.300", "gray.600");
  const activeColor = useColorModeValue("blue.500", "blue.200");
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};
export const reviews = [
  {
    id: "1",
    author: "Christopher",
    createdAt: "July 15h 2020",
    title: "Love this product!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: "2",
    author: "Sarah",
    createdAt: "July 14h 2020",
    title: "Great price & quality",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "3",
    author: "Toby",
    createdAt: "July 13h 2020",
    title: "Highly recommended",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "4",
    author: "Dakota",
    createdAt: "July 12h 2020",
    title: "Best watch I have ever bought",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "5",
    author: "Pheobe",
    createdAt: "July 11th 2020",
    title: "First class customer service",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "6",
    author: "George",
    createdAt: "July 10th 2020",
    title: "Love my new watch",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Review = ElementType<typeof reviews>;

export const ReviewOverview = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack spacing="12">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="4"
        justifyContent="space-between"
        alignItems={{ base: "start", md: "center" }}
      >
        <Stack>
          <Heading
            fontSize={{ base: "1.25rem", md: "1.5rem" }}
            fontWeight="semibold"
            color={useColorModeValue("black", "white")}
          >
            Customer reviews
          </Heading>
          <HStack>
            <Rating defaultValue={4} size="sm" />
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              Based on 12 reviews
            </Text>
          </HStack>
        </Stack>
        <Button size="lg" colorScheme="blue">
          Write a review
        </Button>
      </Stack>
      <Divider display={{ base: "none", md: "flex" }} />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        columnGap="12"
        rowGap={{ base: "10", md: "12" }}
      >
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </SimpleGrid>
      <Button size="lg" variant="outline" alignSelf="center" px="16">
        Load more
      </Button>
    </Stack>
  </Box>
);
