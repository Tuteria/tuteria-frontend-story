import * as React from "react";
import {
  Box,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
} from "react-icons/fc";

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

const Feature: React.FC<FeatureProps> = ({ title, icon, children }) => (
  <Stack
    spacing={{ base: "3", md: "6" }}
    direction={{ base: "column", md: "row" }}
  >
    <Box fontSize="6xl">{icon}</Box>
    <Stack spacing="1">
      <Text fontWeight="extrabold" fontSize="lg">
        {title}
      </Text>
      <Box color={mode("gray.600", "gray.400")}>{children}</Box>
    </Stack>
  </Stack>
);

const TwoByTwo = () => (
  <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: "6", md: "8" }}>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacingX="10"
      spacingY={{ base: "8", md: "14" }}
    >
      <Feature title="Secure by default" icon={<FcPrivacy />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus.
      </Feature>
      <Feature title="Always up to date" icon={<FcTimeline />}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </Feature>
      <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus.
      </Feature>
      <Feature
        title="Support for multiple devices"
        icon={<FcMultipleDevices />}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </Feature>
    </SimpleGrid>
  </Box>
);

export default TwoByTwo;
