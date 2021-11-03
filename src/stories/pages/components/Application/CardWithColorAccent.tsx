import {
  Box,
  Button,
  chakra,
  Input as ChakraInput,
  Divider,
  FormControl,
  FormLabel,
  InputProps,
  Heading,
  BoxProps,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("white", "gray.700")}
    shadow="base"
    maxW="2xl"
    mx="auto"
    px={{ base: 4, md: 8 }}
    pt="6"
    pb="8"
    borderTopWidth="2px"
    borderColor={useColorModeValue("gray.300", "gray.500")}
    borderTopColor={useColorModeValue("blue.500", "blue.300")}
    borderBottomRadius={{ base: "none", sm: "base" }}
    {...props}
  />
);

export const Input = (props: InputProps) => (
  <ChakraInput
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("gray.200", "gray.500")}
    focusBorderColor={useColorModeValue("blue.500", "blue.300")}
    _hover={{
      borderColor: useColorModeValue("gray.300", "gray.400"),
    }}
    {...props}
  />
);

export const EmailTextField = (props: InputProps) => {
  return (
    <FormControl id="email">
      <FormLabel>Email Address</FormLabel>
      <Input type="email" {...props} onChange={() => {}} />
    </FormControl>
  );
};

export const NameTextField = (props: InputProps) => {
  return (
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Input type="text" {...props} onChange={() => {}} />
    </FormControl>
  );
};

export const CardWithColorAccent = () => {
  return (
    <Box as="section" py="12" bg={useColorModeValue("gray.100", "gray.800")}>
      <Box maxW="7xl" mx="auto" px={{ sm: "8" }}>
        <Card>
          <Heading size="md" mb="4">
            User Details
          </Heading>
          <Divider mb="6" />
          <chakra.form maxW="sm">
            <Stack spacing="4">
              <NameTextField value="Chakra UI Pro" />
              <EmailTextField value="support@chakra-ui.com" />
            </Stack>
            <Button colorScheme="blue" mt="8">
              Save changes
            </Button>
          </chakra.form>
        </Card>
      </Box>
    </Box>
  );
};
