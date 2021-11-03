import {
  Box,
  Button,
  chakra,
  FormLabel,
  Heading,
  HStack,
  Input,
  LightMode,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle } from "react-icons/hi";

export const InvitationForm = () => {
  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic
      }}
    >
      <LightMode>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ md: "flex-end" }}
        >
          <Box flex="1">
            <FormLabel htmlFor="email" srOnly>
              Enter work email
            </FormLabel>
            <Input
              id="email"
              name="email"
              size="lg"
              fontSize="md"
              bg="white"
              _placeholder={{ color: "gray.400" }}
              color="gray.900"
              placeholder="Your work email address"
              focusBorderColor="blue.200"
            />
          </Box>
          <Button
            type="submit"
            size="lg"
            colorScheme="yellow"
            fontSize="md"
            px="10"
          >
            Get Invite
          </Button>
        </Stack>
      </LightMode>
    </chakra.form>
  );
};

export const Feature = (props: StackProps) => {
  const { children, ...stackProps } = props;
  return (
    <HStack {...stackProps}>
      <Box as={HiCheckCircle} color="yellow.400" fontSize="xl" />
      <Text color="white" fontSize="sm" fontWeight="semibold">
        {children}
      </Text>
    </HStack>
  );
};

export const WithInput = () => (
  <Box as="section" py={{ lg: "12" }}>
    <Box
      bg="blue.600"
      rounded={{ lg: "2xl" }}
      maxW="5xl"
      mx="auto"
      px={{ base: "4", sm: "6", lg: "8" }}
      py={{ base: "12", sm: "16" }}
    >
      <Box maxW="xl" mx="auto" color="white" textAlign="center">
        <Text mb="4" fontSize="lg" color="whiteAlpha.800" fontWeight="semibold">
          Grow your engineering team
        </Text>
        <Heading mb="8" size="xl" fontWeight="extrabold" letterSpacing="tight">
          Start recruiting like the best and find perfect candidates in no time.
        </Heading>
        <InvitationForm />
        <Stack
          spacing={{ base: "3", md: "6" }}
          direction={{ base: "column", md: "row" }}
          mt="4"
          justify="center"
          align="center"
        >
          <Feature>Attract the best candidates</Feature>
          <Feature>Post multiple jobs in one click</Feature>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default WithInput;
