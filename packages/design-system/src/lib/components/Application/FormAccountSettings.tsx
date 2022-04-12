import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  SelectProps,
  Stack,
  StackDivider,
  StackProps,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { HiCloudUpload } from "react-icons/hi";

export const LanguageSelect = (props: SelectProps) => (
  <FormControl id="language">
    <FormLabel>Display Language</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>English</option>
      <option>Hebrew</option>
      <option>Arabic</option>
    </Select>
  </FormControl>
);

interface FieldGroupProps extends StackProps {
  title?: string;
}

export const FieldGroup = (props: FieldGroupProps) => {
  const { title, children, ...flexProps } = props;
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing="6"
      py="4"
      {...flexProps}
    >
      <Box minW="3xs">
        {title && (
          <Heading fontWeight="semibold" fontSize="lg" flexShrink={0}>
            {title}
          </Heading>
        )}
      </Box>
      {children}
    </Stack>
  );
};

export const CurrencySelect = (props: SelectProps) => (
  <FormControl id="currency">
    <FormLabel>Display currency</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>USD ($)</option>
      <option>AED (dh)</option>
      <option>EUR (€)</option>
    </Select>
  </FormControl>
);

export const FormAccountSettings = () => (
  <Box px={{ base: "4", md: "10" }} py="16" maxWidth="3xl" mx="auto">
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault();
        // form submit logic
      }}
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          Account Settings
        </Heading>
        <FieldGroup title="Personal Info">
          <VStack width="full" spacing="6">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" maxLength={255} />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" isReadOnly value="joe@chakra-ui.com" />
            </FormControl>

            <FormControl id="bio">
              <FormLabel>Bio</FormLabel>
              <Textarea rows={5} />
              <FormHelperText>
                Brief description for your profile. URLs are hyperlinked.
              </FormHelperText>
            </FormControl>
          </VStack>
        </FieldGroup>
        <FieldGroup title="Profile Photo">
          <Stack direction="row" spacing="6" align="center" width="full">
            <Avatar
              size="xl"
              name="Alyssa Mall"
              src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
            <Box>
              <HStack spacing="5">
                <Button leftIcon={<HiCloudUpload />}>Change photo</Button>
                <Button variant="ghost" colorScheme="red">
                  Delete
                </Button>
              </HStack>
              <Text
                fontSize="sm"
                mt="3"
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                .jpg, .gif, or .png. Max file size 700K.
              </Text>
            </Box>
          </Stack>
        </FieldGroup>
        <FieldGroup title="Language">
          <VStack width="full" spacing="6">
            <LanguageSelect />
            <CurrencySelect />
          </VStack>
        </FieldGroup>
        <FieldGroup title="Notifications">
          <Stack width="full" spacing="4">
            <Checkbox>Get updates about the latest meetups.</Checkbox>
            <Checkbox>Get notifications about your account activities</Checkbox>
          </Stack>
        </FieldGroup>
        <FieldGroup title="Connect accounts">
          <HStack width="full">
            <Button variant="outline" leftIcon={<FaGithub />}>
              Connect Github
            </Button>
            <Button
              variant="outline"
              leftIcon={<Box as={FaGoogle} color="red.400" />}
            >
              Connect Google
            </Button>
          </HStack>
        </FieldGroup>
      </Stack>
      <FieldGroup mt="8">
        <HStack width="full">
          <Button type="submit" colorScheme="blue">
            Save Changes
          </Button>
          <Button variant="outline">Cancel</Button>
        </HStack>
      </FieldGroup>
    </form>
  </Box>
);
