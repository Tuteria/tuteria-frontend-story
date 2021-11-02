import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiPencilAlt } from "react-icons/hi";

interface DescriptionProps {
  title: string;
  value: string;
}

export const Description = (props: DescriptionProps) => {
  const { title, value } = props;
  return (
    <Flex
      as="dl"
      direction={{ base: "column", sm: "row" }}
      px="6"
      py="4"
      _even={{ bg: mode("gray.50", "gray.600") }}
    >
      <Box as="dt" flexBasis="25%">
        {title}:
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
};

export const CardWithUserDetails = () => {
  return (
    <Box as="section" bg={mode("gray.100", "inherit")} py="12">
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ md: "8" }}>
        <Box
          maxW="3xl"
          mx="auto"
          rounded={{ md: "lg" }}
          bg={mode("white", "gray.700")}
          shadow="base"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between" px="6" py="4">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              Account Info
            </Text>
            <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
              Edit
            </Button>
          </Flex>
          <Divider />
          <Box>
            <Description title="Name" value="Chakra UI" />
            <Description title="Email" value="chakra-ui.sh@gmail.com" />
            <Description title="Current plan" value="Starter Pro" />
            <Description title="Name" value="Chakra UI" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
