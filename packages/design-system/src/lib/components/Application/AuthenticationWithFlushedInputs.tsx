import {
  Badge,
  Box,
  BoxProps,
  Button,
  chakra,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  HTMLChakraProps,
  Img,
  Input,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

export const UnderlineLink = (props: BoxProps) => {
  return (
    <Box
      as="a"
      href="#"
      pos="relative"
      display="inline-block"
      transition="opacity 0.2s"
      _hover={{ opacity: 0.8 }}
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "2px",
        bottom: 0,
        bg: "blue.500",
        insetX: 0,
        insetY: 0,
      }}
      {...props}
    />
  );
};

const SigninForm = () => {
  return (
    <form
      onSubmit={(e) => {
        // add submit logic here
        e.preventDefault();
      }}
    >
      <Stack spacing="-px">
        <FormControl id="email-address">
          <FormLabel srOnly>Email address</FormLabel>
          <Input
            size="lg"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            bg={mode("white", "gray.700")}
            fontSize="md"
            roundedBottom="0"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel srOnly>Email address</FormLabel>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            size="lg"
            bg={mode("white", "gray.700")}
            fontSize="md"
            roundedTop="0"
            placeholder="Password"
          />
        </FormControl>
      </Stack>
      <Flex align="center" justify="space-between" mt="8">
        <LightMode>
          <Checkbox
            size="lg"
            colorScheme="blue"
            sx={{
              ".chakra-checkbox__control": {
                "&:not([data-checked])": { bg: mode("white", "gray.700") },
                rounded: "base",
                borderWidth: "1px",
              },
              ".chakra-checkbox__label": { fontSize: "sm" },
            }}
          >
            Remember me
          </Checkbox>
        </LightMode>
        <UnderlineLink fontSize="sm">Forgot Password</UnderlineLink>
      </Flex>
      <LightMode>
        <Button
          size="lg"
          type="submit"
          mt="8"
          w="full"
          colorScheme="blue"
          fontSize="md"
          fontWeight="bold"
        >
          Sign in
        </Button>
      </LightMode>
    </form>
  );
};

const Logo = (props: HTMLChakraProps<"svg"> & { iconColor?: string }) => {
  const { iconColor = "currentColor", ...rest } = props;
  const color = useToken("colors", iconColor);
  return (
    <chakra.svg viewBox="0 0 123 24" fill="none" {...rest}>
      <path
        d="M23 0H7a1 1 0 00-1 1v16H3c-1.654 0-3 1.346-3 3v4h14v-3.583c0-.808.645-1.417 1.5-1.417.723 0 1.5.47 1.5 1.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V1a1 1 0 00-1-1zM12 20.417V22H2v-2a1 1 0 011-1h9.304c-.196.43-.304.909-.304 1.417zM20 13H10v-2h10v2zm0-6H10V5h10v2z"
        fill={color}
      />
      <path
        d="M36.102 19h10.142v-2.855h-6.627v-2.99h6.108v-2.862h-6.108V7.31h6.627V4.455H36.102V19zM51.518 12.778c.007-1.242.732-1.981 1.833-1.981 1.1 0 1.754.724 1.747 1.932V19h3.473v-6.953c.007-2.457-1.492-4.098-3.786-4.098-1.612 0-2.833.817-3.316 2.145h-.121V8.09h-3.303V19h3.473v-6.222zM70.513 8.09h-3.658l-2.017 7.515h-.113l-2.01-7.514h-3.658L62.793 19h3.977l3.743-10.91zM76.192 19.206c2.863 0 4.745-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.889 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.188-5.568-5.284-5.568-3.296 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.518 5.617zm-2.095-6.84c.05-1.086.91-1.91 2.06-1.91 1.143 0 1.967.796 1.981 1.91h-4.04zM86.217 4.455h-3.473V19h3.473V4.455zM93.12 19.206c3.43 0 5.511-2.266 5.511-5.625 0-3.367-2.08-5.632-5.511-5.632-3.43 0-5.512 2.265-5.512 5.632 0 3.36 2.081 5.625 5.512 5.625zm.021-2.62c-1.285 0-1.996-1.222-1.996-3.026 0-1.811.71-3.04 1.996-3.04 1.243 0 1.953 1.229 1.953 3.04 0 1.804-.71 3.025-1.953 3.025zM100.01 23.091h3.473v-5.86h.071c.441 1.01 1.421 1.925 3.068 1.925 2.415 0 4.361-1.889 4.361-5.603 0-3.85-2.059-5.604-4.339-5.604-1.726 0-2.671 1.008-3.09 2.01h-.106V8.09h-3.438v15zm3.402-9.546c0-1.782.739-2.883 2.01-2.883 1.286 0 1.996 1.13 1.996 2.883 0 1.762-.71 2.905-1.996 2.905-1.271 0-2.01-1.136-2.01-2.904zM117.503 19.206c2.862 0 4.744-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.89 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.187-5.568-5.284-5.568-3.295 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.519 5.617zm-2.096-6.84c.05-1.086.909-1.91 2.06-1.91 1.144 0 1.967.796 1.982 1.91h-4.042z"
        fill="currentColor"
      />
    </chakra.svg>
  );
};

export const AuthenticationWithFlushedInputs = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      minH="100vh"
      height="100%"
      bg={mode("gray.50", "inherit")}
    >
      <Box
        overflowY="auto"
        flex="1"
        py={{ base: "10", md: "16" }}
        px={{ base: "6", md: "10" }}
      >
        <Box maxW="sm" mx="auto">
          <Logo
            mb={{ base: "14", md: "32" }}
            w="auto"
            h="7"
            mx="auto"
            iconColor="blue.500"
          />
          <Box textAlign="center" mb={{ base: "10", md: "16" }}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Sign in to your account
            </Heading>
            <Text
              mt="3"
              color={mode("gray.600", "gray.400")}
              fontWeight="medium"
            >
              Need an account? <UnderlineLink>Sign up for free</UnderlineLink>
            </Text>
          </Box>
          <SigninForm />
        </Box>
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        maxH="100vh"
        overflow="hidden"
        flex="1"
        bg="blue.600"
        color="white"
        px="20"
        pt="32"
      >
        <Badge
          bg="blue.700"
          px="4"
          py="1"
          rounded="md"
          letterSpacing="wide"
          color="whiteAlpha.900"
        >
          New and Improved
        </Badge>
        <Text
          mt="6"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", lg: "3xl" }}
          maxW="sm"
          letterSpacing="tight"
          lineHeight="normal"
        >
          Create Beautiful websites with Chakra Pro
        </Text>
        <Text mt="5" maxW="md" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun.
        </Text>
        <HStack
          as="a"
          href="#"
          justify="center"
          display="inline-flex"
          minW="2xs"
          py="3"
          px="2"
          mt="5"
          fontWeight="semibold"
          border="2px solid white"
          rounded="lg"
          transition="all 0.2s"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <Box>Learn more</Box>
          <HiOutlineExternalLink />
        </HStack>
        <Box mt="10" position="relative">
          <Img
            alt="App screenshot"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
          />
        </Box>
      </Box>
    </Flex>
  );
};
