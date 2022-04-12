import {
  Avatar,
  AvatarProps,
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import {
  HiCalendar,
  HiLink,
  HiLocationMarker,
  HiPencilAlt,
} from "react-icons/hi";

interface UserInfoProps extends StackProps {
  location: string;
  website: string;
  memberSince: string;
}

export const UserInfo = (props: UserInfoProps) => {
  const { location, website, memberSince, ...stackProps } = props;
  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      spacing={{ base: "1", sm: "6" }}
      mt="4"
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue("blue.600", "blue.300")}
      {...stackProps}
    >
      <HStack>
        <Icon as={HiLocationMarker} />
        <Text>{location}</Text>
      </HStack>
      <HStack>
        <Icon as={HiLink} />
        <Text>{website}</Text>
      </HStack>
      <HStack>
        <Icon as={HiCalendar} />
        <Text>{memberSince}</Text>
      </HStack>
    </Stack>
  );
};

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps;
  action?: React.ReactNode;
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { action, avatarProps, children, ...rest } = props;
  return (
    <Flex
      position="relative"
      direction="column"
      align={{ sm: "center" }}
      maxW="2xl"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      shadow={{ sm: "base" }}
      rounded={{ sm: "lg" }}
      px={{ base: "6", md: "8" }}
      pb={{ base: "6", md: "8" }}
      {...rest}
    >
      <Avatar
        mt="-10"
        borderWidth="6px"
        borderColor={useColorModeValue("white", "gray.700")}
        size="xl"
        {...avatarProps}
      />
      <Box position="absolute" top="4" insetEnd={{ base: "6", md: "8" }}>
        {action}
      </Box>
      {children}
    </Flex>
  );
};

export const CardContent = (props: BoxProps) => (
  <Box textAlign={{ sm: "center" }} pt="2" {...props} />
);

export const UserCardWithBackground = () => (
  <Box as="section" pt="20" pb="12" position="relative">
    <Box position="absolute" inset="0" height="32" bg="blue.600" />
    <CardWithAvatar
      maxW="xl"
      avatarProps={{
        src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Esther Felix",
      }}
      action={
        <Button size="sm" leftIcon={<HiPencilAlt />}>
          Edit
        </Button>
      }
    >
      <CardContent>
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          Esther Felix
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          Frontend Developer &amp; UI Designer
        </Text>
        <UserInfo
          location="Memphis, USA"
          website="esther.com"
          memberSince="Joined Sept. 2019"
        />
      </CardContent>
    </CardWithAvatar>
  </Box>
);
