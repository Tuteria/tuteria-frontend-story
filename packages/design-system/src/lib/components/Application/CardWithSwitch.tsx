import {
  Box,
  Stack,
  StackDivider,
  Flex,
  Switch,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface DescriptionProps {
  title: string;
  children?: React.ReactNode;
}

export const Description = (props: DescriptionProps) => {
  const { title, children } = props;
  return (
    <Flex align="center" pos="relative" justify="space-between">
      <Box flex="1">
        <Box as="h4" fontWeight="medium" maxW="xl">
          {title}
        </Box>
        {children && (
          <Box maxW="xl" color="gray.500" fontSize="sm">
            {children}
          </Box>
        )}
      </Box>
      <Switch size="lg" />
    </Flex>
  );
};

export const CardWithSwitch = () => {
  return (
    <Box as="section" bg={mode("gray.100", "gray.800")} py="12">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box
          maxW="3xl"
          mx="auto"
          py="6"
          px="8"
          rounded="lg"
          bg={mode("white", "gray.700")}
          shadow="base"
          overflow="hidden"
        >
          <Box mb="8">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              Notifications
            </Text>
            <Text color="gray.500" fontSize="sm">
              Receive notifications about Chakra UI updates.
            </Text>
          </Box>
          <Stack spacing="4" divider={<StackDivider />}>
            <Description title="Email">
              Receive email updates on comments you followed
            </Description>
            <Description title="Text messages">
              Recieve updates by SMS
            </Description>
            <Description title="Browser notifications">
              We&apos;ll send via our desktop or mobile app
            </Description>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
