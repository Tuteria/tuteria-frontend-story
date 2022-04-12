import {
  Avatar,
  AvatarProps,
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiBadgeCheck, HiUsers } from "react-icons/hi";

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps;
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { children, avatarProps, ...rest } = props;
  return (
    <Flex
      direction="column"
      alignItems="center"
      rounded="md"
      padding="8"
      position="relative"
      bg={useColorModeValue("white", "gray.700")}
      shadow={{ md: "base" }}
      {...rest}
    >
      <Box
        position="absolute"
        inset="0"
        height="20"
        bg="blue.600"
        roundedTop="inherit"
      />
      <Avatar size="xl" {...avatarProps} />
      {children}
    </Flex>
  );
};

interface FollowerCountProps extends StackProps {
  count: number;
}

export const FollowerCount = (props: FollowerCountProps) => {
  const { count, ...stackProps } = props;
  return (
    <HStack
      spacing="1"
      fontSize="sm"
      color={useColorModeValue("gray.600", "gray.400")}
      {...stackProps}
    >
      <Icon as={HiUsers} />
      <Text>{count} followers</Text>
    </HStack>
  );
};

interface UserInfoProps extends StackProps {
  name: string;
  bio: string;
  isVerified?: boolean;
}

export const UserInfo = (props: UserInfoProps) => {
  const { name, bio, isVerified, ...stackProps } = props;
  return (
    <VStack spacing="1" flex="1" {...stackProps}>
      <HStack>
        <Text fontWeight="bold">{name}</Text>
        {isVerified && (
          <Icon
            as={HiBadgeCheck}
            color="blue.300"
            verticalAlign="text-bottom"
          />
        )}
      </HStack>
      <Text
        fontSize="sm"
        textAlign="center"
        noOfLines={2}
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {bio}
      </Text>
    </VStack>
  );
};

const data = [
  {
    isVerified: true,
    src: "https://images.unsplash.com/photo-1612459284970-e8f027596582?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:668&q:80",
    name: "Melinda Marcus",
    bio: "Design Engineer at Cloth Studios",
    followerCount: 84,
  },
  {
    isVerified: false,
    src: "https://images.unsplash.com/photo-1618568221633-0a45dd10ecf7?ixlib:rb-1.2.1&ixid:MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1MTcwNjR8fGVufDB8fHx8&auto:format&fit:crop&w:800&q:60",
    name: "Kendra Phils",
    bio: "Marketing Consultant and Chief of Operations at Chakra UI",
    followerCount: 10,
  },
  {
    isVerified: false,
    src: "https://images.unsplash.com/photo-1588820502373-625223afa4ce?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHx3aGl0ZSUyMCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:800&q:60",
    name: "Fidelis Alaves",
    bio: "Product Manager",
    followerCount: 24,
  },
];

export const UserCardGrid = () => (
  <Box
    bg={useColorModeValue("gray.100", "gray.800")}
    px={{ base: "6", md: "8" }}
    py="12"
  >
    <Box as="section" maxW={{ base: "xs", md: "3xl" }} mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user;
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
              <FollowerCount my="4" count={followerCount} />
              <Button
                variant="outline"
                colorScheme="blue"
                rounded="full"
                size="sm"
                width="full"
              >
                View Profile
              </Button>
            </CardWithAvatar>
          );
        })}
      </SimpleGrid>
    </Box>
  </Box>
);
