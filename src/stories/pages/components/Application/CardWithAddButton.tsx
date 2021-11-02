import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiLocationMarker, HiPencilAlt, HiPlus, HiTrash } from "react-icons/hi";

interface DescriptionProps {
  title: string;
  children: React.ReactNode;
  location: string;
}

export const Description = (props: DescriptionProps) => {
  const { title, children, location } = props;
  return (
    <Box position="relative">
      <Box fontWeight="bold" maxW="xl">
        {title}
      </Box>
      <HStack
        fontSize="sm"
        fontWeight="medium"
        color={mode("gray.500", "white")}
        mt="1"
      >
        <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
        <span>{location}</span>
      </HStack>
      <Box mt="3" maxW="xl" color={mode("gray.600", "gray.200")}>
        {children}
      </Box>
      <HStack
        position={{ sm: "absolute" }}
        top={{ sm: "0" }}
        insetEnd={{ sm: "0" }}
        mt={{ base: "4", sm: "0" }}
      >
        <IconButton
          aria-label="Edit"
          icon={<HiPencilAlt />}
          rounded="full"
          size="sm"
        />
        <IconButton
          aria-label="Delete"
          icon={<HiTrash />}
          rounded="full"
          size="sm"
        />
      </HStack>
    </Box>
  );
};
export const CardWithAddButton = () => {
  return (
    <Box as="section" py="12" bg={mode("gray.100", "gray.800")}>
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ md: "8" }}>
        <Box
          rounded={{ lg: "lg" }}
          bg={mode("white", "gray.700")}
          maxW="3xl"
          mx="auto"
          shadow="base"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between" px="6" py="4">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              Experience
            </Text>
            <Button colorScheme="blue" minW="20" leftIcon={<HiPlus />}>
              Add
            </Button>
          </Flex>
          <Divider />
          <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
            <Description
              title="UX Strategist &amp; Sales Funnel Designer"
              location="Los Angeles, United States"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              totam at reprehenderit maxime aut beatae ad.
            </Description>
            <Description
              title="Freelance Graphic &amp; Web Designer"
              location="Stockholm, Sweden"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              totam at reprehenderit maxime aut beatae ad.
            </Description>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
