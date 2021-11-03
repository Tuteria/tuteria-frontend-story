import { BellIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  HTMLChakraProps,
} from "@chakra-ui/react";
import * as React from "react";

export const ActionLink = (props: HTMLChakraProps<"a">) => (
  <chakra.a
    {...props}
    as="a"
    href="#"
    px="4"
    textAlign="center"
    py="1"
    fontSize="xs"
    borderWidth="1px"
    borderColor={useColorModeValue("blue.400", "whiteAlpha.300")}
    fontWeight="semibold"
    rounded="base"
    _hover={{ bg: "whiteAlpha.200" }}
  />
);

export const BannerWithButton = () => {
  return (
    <Stack
      py="3"
      direction={{ base: "column", sm: "row" }}
      px={{ base: "3", md: "6", lg: "8" }}
      color="white"
      bg={useColorModeValue("blue.600", "blue.400")}
      justify="center"
      align={{ base: "flex-start", sm: "center" }}
    >
      <Stack
        direction="row"
        align={{ base: "flex-start", sm: "center" }}
        spacing="3"
      >
        <Box
          as={BellIcon}
          fontSize="lg"
          position="relative"
          top={{ base: "1", sm: "0" }}
        />
        <Text fontWeight="medium" fontSize="sm" marginEnd="2">
          Confirm your email. Check your email. We&apos;ve send a message to{" "}
          <b>sample@gmail.com</b>
        </Text>
      </Stack>
      <ActionLink w={{ base: "full", sm: "auto" }} flexShrink={0}>
        Resend email
      </ActionLink>
    </Stack>
  );
};
