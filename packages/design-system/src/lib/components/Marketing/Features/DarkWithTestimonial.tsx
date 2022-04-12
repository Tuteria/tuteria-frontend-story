import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { BiDirections, BiHappyBeaming, BiRightArrowAlt } from "react-icons/bi";
import { FaGraduationCap, FaRegLifeRing } from "react-icons/fa";

interface CTAButtonProps extends BoxProps {
  children: React.ReactNode;
}

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, ...rest }) => (
  <Center
    minW="240px"
    as="button"
    px="6"
    py="4"
    textTransform="uppercase"
    fontWeight="bold"
    transition="all 0.2s"
    rounded="lg"
    outline={0}
    bg="blue.600"
    _focus={{ shadow: "outline" }}
    _active={{ transform: "translateY(2px)" }}
    _hover={{ bg: "blue.700" }}
    {...rest}
  >
    {children}
    <Box as={BiRightArrowAlt} ml="2" fontSize="lg" />
  </Center>
);

const Feature: React.FC<FeatureProps> = ({ title, children, icon }) => (
  <Box>
    <Box color="blue.300" fontSize="2.5rem">
      {icon}
    </Box>
    <Stack mt="6">
      <Text as="h3" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text pr="6" lineHeight="tall" color="gray.400">
        {children}
      </Text>
    </Stack>
  </Box>
);

const Testimonial: React.FC<TestimonialProps> = ({
  children,
  image,
  name,
  role,
}) => (
  <Box
    as="blockquote"
    rounded="2xl"
    bg={mode("white", "gray.700")}
    color={mode("gray.800", "white")}
    shadow="lg"
    px="10"
    py="8"
  >
    <Flex mb="6">
      <Img
        mt="-12"
        bg={mode("white", "gray.700")}
        objectFit="cover"
        w="24"
        h="24"
        rounded="full"
        color={mode("white", "gray.700")}
        shadow="0 0 0 10px currentColor"
        src={image}
        alt={name}
      />
      <Box marginStart="5">
        <Text as="cite" fontStyle="normal" fontSize="md" fontWeight="extrabold">
          {name}
        </Text>
        <Text
          mt="1"
          color={mode("gray.600", "gray.400")}
          textTransform="uppercase"
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          {role}
        </Text>
      </Box>
    </Flex>
    <Text color={mode("gray.600", "gray.400")}>{children}</Text>
  </Box>
);

const DarkWithTestimonial = () => (
  <Box as="section" pb="24">
    <Box bg="gray.800" color="white" pt="24" pb="12rem">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          spacing="10"
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
        >
          <Heading
            size="2xl"
            lineHeight="short"
            fontWeight="extrabold"
            maxW={{ base: "unset", lg: "800px" }}
          >
            Your Team, Supercharged with outstanding Support & Playbook
          </Heading>
          <CTAButton w={{ base: "full", md: "auto" }}>Get Started</CTAButton>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "12", md: "8", lg: "2" }}
          mt={{ base: "12", md: "20" }}
        >
          <Feature icon={<BiDirections />} title="Onboarding">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.)
          </Feature>
          <Feature icon={<BiHappyBeaming />} title="Customer Success">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Feature>
          <Feature icon={<FaGraduationCap />} title="Education">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Feature>
          <Feature icon={<FaRegLifeRing />} title="Technical Support">
            Tristique senectus et netus et malesuada fames ac turpis. Convallis
            a cras semper auctor.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
    <Box mt="-24">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
          <Testimonial
            image="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            name="Alvina Tores"
            role="CEO, Chakra Group"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Testimonial>
          <Testimonial
            image="https://images.unsplash.com/photo-1589729482945-ca6f3a235f7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            name="Jessie Jones"
            role="Marketing Manager"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  </Box>
);

export default DarkWithTestimonial;
