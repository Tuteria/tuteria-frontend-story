import {
  Box,
  BoxProps,
  Center,
  chakra,
  Flex,
  HStack,
  Img,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { ImQuotesLeft } from "react-icons/im";

interface TestimonialProps extends BoxProps {
  image?: string;
  name?: string;
  role?: string;
  accentColor?: string;
  company?: string;
  children?: React.ReactNode;
}

export const Testimonial = (props: TestimonialProps) => {
  const { image, name, role, children, accentColor } = props;
  return (
    <Flex direction="column">
      <Box
        flex="1"
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        shadow="base"
        px="10"
        pt="8"
        pb="12"
        pos="relative"
        mb="10"
      >
        <Box as={ImQuotesLeft} color={accentColor} fontSize="3xl" />
        <Text mt="5" fontSize="lg" fontWeight="bold">
          {children}
        </Text>
        <chakra.svg
          pos="absolute"
          bottom="-7"
          insetStart="3.5rem"
          w="10"
          viewBox="0 0 38 28"
          color={useColorModeValue("white", "gray.700")}
          style={{
            filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, .1)",
          }}
        >
          <path d="M0 28V0H38L0 28Z" fill="currentColor" />
        </chakra.svg>
      </Box>
      <HStack spacing="4">
        <Center
          rounded="full"
          w="4rem"
          h="4rem"
          p="1"
          border="3px solid"
          borderColor={accentColor}
        >
          <Img w="100%" h="100%" rounded="full" objectFit="cover" src={image} />
        </Center>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm">{role}</Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export const TestimonialStack = (props: TestimonialProps) => {
  const { image, company, name, children, ...rest } = props;
  return (
    <Stack
      spacing={6}
      h="100%"
      rounded="2xl"
      shadow="sm"
      py={{ base: "6", md: "12" }}
      px={{ base: "6", md: "14" }}
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.800", "gray.300")}
      {...rest}
    >
      <Box fontSize={{ base: "md", md: "lg" }} flex="1">
        {children}
      </Box>
      <HStack spacing={{ base: 3, md: 5 }}>
        <Img
          objectFit="cover"
          rounded="full"
          boxSize={14}
          name={name}
          src={image}
        />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
            {company}
          </Text>
        </Flex>
      </HStack>
    </Stack>
  );
};

export const TestimonialFlex = (props: TestimonialProps) => {
  const { image, name, role, children } = props;
  return (
    <Stack
      as="blockquote"
      direction="row"
      spacing={{ base: "0", md: "8" }}
      flex="1"
      {...props}
    >
      <Img
        display={{ base: "none", md: "block" }}
        mt="2"
        flexShrink={0}
        src={image}
        alt={name}
        objectFit="cover"
        w={{ base: "20", md: "32" }}
        h={{ base: "20", md: "32" }}
        rounded="full"
      />
      <Flex w="full" direction="column">
        <Box mb="6">
          <Box
            as={ImQuotesLeft}
            color={useColorModeValue("blue.600", "blue.400")}
            fontSize="xl"
          />
          <Text mt="3" fontSize="xl" fontWeight="bold" maxW="38rem">
            {children}
          </Text>
        </Box>
        <HStack>
          <Img
            display={{ base: "block", md: "none" }}
            flexShrink={0}
            src={image}
            alt={name}
            objectFit="cover"
            w={{ base: "12", md: "32" }}
            h={{ base: "12", md: "32" }}
            rounded="full"
          />
          <Box>
            <Text
              as="cite"
              fontStyle="normal"
              fontWeight="extrabold"
              color={useColorModeValue("blue.600", "blue.400")}
            >
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {role}
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
