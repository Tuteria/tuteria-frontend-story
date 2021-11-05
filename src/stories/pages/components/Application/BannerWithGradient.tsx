import {
  Box,
  BoxProps,
  HStack,
  IconButton,
  IconButtonProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { HiX } from "react-icons/hi";
export const CloseButton = (props: IconButtonProps) => (
  <IconButton fontSize="1.5em" variant="ghost" icon={<HiX />} {...props} />
);

export const CallToActionLink = (props: BoxProps) => (
  <Box
    as="a"
    href="#"
    py="1"
    px="4"
    bg="white"
    color="blue.600"
    fontWeight="semibold"
    rounded="base"
    whiteSpace="nowrap"
    {...props}
  />
);

export const BannerWithGradient = () => (
  <Box as="section" pt="8" pb="12">
    <Box
      bgGradient="linear(to-r, blue.500, purple.500)"
      color="white"
      py="3"
      px={{ base: "3", md: "6", lg: "8" }}
    >
      <HStack spacing="3">
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: "3", md: "6" }}
          width="full"
        >
          <Text>
            <b>Did you buy a license yet? </b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </Text>
          <CallToActionLink
            textAlign="center"
            width={{ base: "full", sm: "auto" }}
          >
            Check it out
          </CallToActionLink>
        </Stack>
        <CloseButton
          alignSelf={{ base: "self-start", sm: "initial" }}
          aria-label="Close banner"
        />
      </HStack>
    </Box>
  </Box>
);
