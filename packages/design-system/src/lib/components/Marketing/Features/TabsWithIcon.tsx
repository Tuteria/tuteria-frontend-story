import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaCopy, FaPlug, FaRecycle } from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, children, icon }) => (
  <Stack direction="row" w="100%" spacing="6">
    <Center
      aria-hidden
      flexShrink={0}
      w="12"
      h="12"
      rounded="md"
      color="white"
      bg="blue.500"
    >
      {icon}
    </Center>
    <Stack>
      <Text as="h3" fontSize="xl" fontWeight="extrabold">
        {title}
      </Text>
      <Text pr="6" color={mode("gray.600", "gray.400")} lineHeight="tall">
        {children}
      </Text>
    </Stack>
  </Stack>
);

const TabsWithIcon = () => (
  <Box as="section" bg={mode("gray.50", "gray.800")} pt="16" pb="32">
    <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
        If you like wallets, you’re gonna love this
      </Heading>
      <Box mt="24">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: "16", md: "8" }}
        >
          <Stack spacing="12" maxW="lg">
            <Feature
              icon={<Box as={FaCopy} w="6" h="6" />}
              title="100% transparent"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Feature>
            <Feature
              icon={<Box as={FaPlug} w="6" h="6" />}
              title="Local bank support"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Feature>
            <Feature
              icon={<Box as={FaRecycle} w="6" h="6" />}
              title="Savings automation"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Feature>
          </Stack>
          <Center shadow="lg" minH="26rem">
            <Img
              objectFit="cover"
              w="full"
              h="full"
              src="https://images.unsplash.com/photo-1609921205586-7e8a57516512?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2lnbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Holding phone with app installed"
            />
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  </Box>
);

export default TabsWithIcon;
