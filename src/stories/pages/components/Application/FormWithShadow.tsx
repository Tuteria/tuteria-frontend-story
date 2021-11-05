import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Select,
  Stack,
  StackDivider,
  StackProps,
  Switch,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaBitbucket, FaGithub, FaGoogle, FaSpotify } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export const HeadingGroup = (props: HeadingGroupProps) => {
  const { title, description, ...stackProps } = props;
  return (
    <Stack spacing="1" {...stackProps}>
      <Heading size="md" fontWeight="semibold">
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>
        {description}
      </Text>
    </Stack>
  );
};

interface FieldGroupProps extends BoxProps {
  title: string;
  description: string;
}

export const FieldGroup = (props: FieldGroupProps) => {
  const { title, description, ...boxProps } = props;
  return (
    <Box>
      <Text fontWeight="semibold">{title}</Text>
      {description && (
        <Text color={mode("gray.600", "gray.400")} fontSize="sm">
          {description}
        </Text>
      )}
      <Box pt="5" {...boxProps} />
    </Box>
  );
};

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("white", "gray.700")}
    shadow="base"
    rounded="lg"
    p={{ base: "4", md: "8" }}
    {...props}
  />
);

interface SocialAccountProps extends FlexProps {
  provider: string;
  icon: React.ElementType;
  iconColor?: string;
  username?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export const SocialAccount = (props: SocialAccountProps) => {
  const {
    provider,
    icon,
    iconColor,
    username,
    onConnect,
    onDisconnect,
    ...flexProps
  } = props;
  return (
    <Flex align="center" {...flexProps}>
      <HStack width="10rem">
        <Icon as={icon} color={iconColor} />
        <Text fontSize="sm">{provider}</Text>
      </HStack>
      {username ? (
        <Text flex="1" fontWeight="semibold" fontSize="sm">
          {username}
        </Text>
      ) : (
        <Button size="sm" fontWeight="normal" onClick={onConnect}>
          Connect
        </Button>
      )}
      {username && (
        <IconButton
          size="sm"
          fontSize="md"
          variant="ghost"
          colorScheme="red"
          icon={<HiX />}
          aria-label="Disconnect"
          onClick={onDisconnect}
        />
      )}
    </Flex>
  );
};

export const SocialAccountSettings = (props: StackProps) => (
  <Stack as="section" spacing="6" {...props}>
    <HeadingGroup
      title="Connected accounts"
      description="Connect your Chakra account to one or more provides"
    />
    <Card>
      <Stack spacing="5">
        <SocialAccount
          provider="Github"
          icon={FaGithub}
          username="dabestcoder03"
        />
        <SocialAccount provider="Google" icon={FaGoogle} iconColor="red.500" />
        <SocialAccount
          provider="Bitbucket"
          icon={FaBitbucket}
          iconColor="blue.500"
        />
        <SocialAccount
          provider="Spotify"
          icon={FaSpotify}
          iconColor="green.500"
          username="lisabeats09"
        />
      </Stack>
    </Card>
  </Stack>
);

interface HeadingGroupProps extends StackProps {
  title: string;
  description: string;
}

export const AccountSettings = (props: StackProps) => (
  <Stack as="section" spacing="6" {...props}>
    <HeadingGroup
      title="Account Settings"
      description="Change your profile, request your data, and more"
    />
    <Card>
      <Stack divider={<StackDivider />} spacing="6">
        <FieldGroup
          title="Name &amp; Avatar"
          description="Change your name and profile picture"
        >
          <HStack spacing="4">
            <Avatar
              src="https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
              name="Lisa Turner"
            />
            <Box>
              <Text>Lisa Turner</Text>
              <Text color="gray.500" fontSize="sm">
                Joined March, 2010
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Button size="sm" fontWeight="normal">
              Change name
            </Button>
            <Button size="sm" fontWeight="normal">
              Change gravatar
            </Button>
          </HStack>
        </FieldGroup>

        <FieldGroup
          title="Login details"
          description="Change your email and password"
        >
          <Text fontSize="sm">lisat09@example.com</Text>
          <HStack mt="5">
            <Button size="sm" fontWeight="normal">
              Change email
            </Button>
            <Button size="sm" fontWeight="normal">
              Change password
            </Button>
          </HStack>
        </FieldGroup>

        <FieldGroup
          title="Language"
          description="Change your preferred language and currency"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            width="full"
            spacing="4"
          >
            <FormControl id="language">
              <FormLabel fontSize="sm">Language</FormLabel>
              <Select size="sm" maxW="2xs">
                <option>English</option>
                <option>Hebrew</option>
                <option>Arabic</option>
              </Select>
            </FormControl>

            <FormControl id="currency">
              <FormLabel fontSize="sm">Currency</FormLabel>
              <Select size="sm" maxW="2xs">
                <option>USD ($)</option>
                <option>AED (dh)</option>
                <option>EUR (€)</option>
              </Select>
            </FormControl>
          </Stack>
          <Button mt="5" size="sm" fontWeight="normal">
            Save Changes
          </Button>
        </FieldGroup>

        <FieldGroup
          title="Communications"
          description="Manage your email preference"
        >
          <Stack spacing="3">
            <FormControl display="flex" alignItems="center">
              <FormLabel
                htmlFor="email-marketing"
                flex="1"
                fontSize="sm"
                mb="0"
              >
                Product intro, tips, and inspiration
              </FormLabel>
              <Switch id="email-marketing" />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-news" flex="1" fontSize="sm" mb="0">
                Updates about company news and features
              </FormLabel>
              <Switch id="email-news" />
            </FormControl>
          </Stack>
          <Button mt="5" size="sm" fontWeight="normal">
            Save Changes
          </Button>
        </FieldGroup>
      </Stack>
    </Card>
  </Stack>
);

export const DangerZone = (props: StackProps) => (
  <Stack as="section" spacing="6" {...props}>
    <HeadingGroup
      title="Danger zone"
      description="Irreversible and destructive actions"
    />
    <Card>
      <Text fontWeight="bold">Delete account and data</Text>
      <Text fontSize="sm" mt="1" mb="3">
        Once you delete your user, there is no going back. Please be certain.
      </Text>
      <Button size="sm" colorScheme="red">
        Delete account
      </Button>
    </Card>
  </Stack>
);

export const FormWithShadow = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.800")}
    px={{ base: "4", md: "10" }}
    py="16"
  >
    <Box maxW="xl" mx="auto">
      <Stack spacing="12">
        <AccountSettings />
        <SocialAccountSettings />
        <DangerZone />
      </Stack>
    </Box>
  </Box>
);
