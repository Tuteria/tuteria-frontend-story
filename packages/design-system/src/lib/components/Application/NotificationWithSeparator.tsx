import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiInfo } from "react-icons/fi";

interface NotificationProps extends FlexProps {
  primaryAction: React.ReactNode;
  secondaryAction: React.ReactNode;
}

export const Notification = (props: NotificationProps) => {
  const { primaryAction, secondaryAction, children, ...flexProps } = props;
  return (
    <Flex
      width="md"
      boxShadow="lg"
      borderRadius="base"
      overflow="hidden"
      bg={useColorModeValue("white", "gray.700")}
      {...flexProps}
    >
      <Center
        bg={useColorModeValue("blue.500", "blue.300")}
        px="4"
        display={{ base: "none", sm: "flex" }}
      >
        <Icon
          as={FiInfo}
          color={useColorModeValue("white", "gray.900")}
          boxSize="9"
        />
      </Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        divider={<StackDivider />}
        spacing="0"
      >
        <Box px="4" py="3">
          {children}
        </Box>
        <Stack
          direction={{ base: "row", sm: "column" }}
          height="full"
          divider={<StackDivider />}
          spacing="0"
        >
          {primaryAction}
          {secondaryAction}
        </Stack>
      </Stack>
    </Flex>
  );
};

export const NotificationButton = (props: ButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    px="8"
    minH="10"
    borderRadius="none"
    flex="1"
    {...props}
  />
);

export const NotificationWithSeparator = () => (
  <Box
    as="section"
    pt="8"
    pb="20"
    px={{ base: "4", md: "8" }}
    bg={useColorModeValue("gray.50", "inherit")}
  >
    <Flex direction="row-reverse">
      <Notification
        primaryAction={
          <NotificationButton colorScheme="blue">Update</NotificationButton>
        }
        secondaryAction={<NotificationButton>Close</NotificationButton>}
      >
        <Stack spacing="1">
          <Heading as="h3" fontSize="md">
            Update Available
          </Heading>
          <Text fontSize="sm">
            A new version is available. Please upgrade for the best experience.
          </Text>
        </Stack>
      </Notification>
    </Flex>
  </Box>
);
