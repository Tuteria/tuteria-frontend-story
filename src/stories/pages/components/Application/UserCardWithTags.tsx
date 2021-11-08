import {
  Avatar,
  AvatarBadge,
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
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import * as React from "react";
import { GoCalendar, GoGlobe, GoPencil, GoVerified } from "react-icons/go";

interface UserAvatarProps extends AvatarProps {
  isVerified?: boolean;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { isVerified, ...avatarProps } = props;
  const avatarColor = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Avatar size="2xl" {...avatarProps}>
      {isVerified && (
        <AvatarBadge
          borderWidth="4px"
          borderColor={avatarColor}
          insetEnd="3"
          bottom="3"
          bg={avatarColor}
        >
          <Icon as={GoVerified} fontSize="2xl" color={iconColor} />
        </AvatarBadge>
      )}
    </Avatar>
  );
};

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("white", "gray.700")}
    maxWidth="2xl"
    mx="auto"
    p={{ base: "6", md: "8" }}
    rounded={{ sm: "lg" }}
    shadow={{ md: "base" }}
    {...props}
  />
);

interface CardHeaderProps extends FlexProps {
  title: string;
  action: React.ReactNode;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { title, action, ...flexProps } = props;
  return (
    <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
      <Heading
        size="md"
        fontWeight="extrabold"
        letterSpacing="tight"
        marginEnd="6"
      >
        {title}
      </Heading>
      {action}
    </Flex>
  );
};

export const CardContent = (props: BoxProps) => <Box width="full" {...props} />;

export const UserCardWithTags = () => (
  <Box as="section" py="12" bg={useColorModeValue("gray.100", "gray.800")}>
    <Card>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "4", md: "10" }}
      >
        <UserAvatar
          name="Samantha"
          src="https://images.unsplash.com/photo-1506935077180-46af676a2f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          isVerified
        />
        <CardContent>
          <CardHeader
            title="Samantha Brooke"
            action={
              <Button
                size="sm"
                variant="outline"
                leftIcon={
                  <Icon as={GoPencil} color="gray.400" marginStart="-1" />
                }
              >
                Edit
              </Button>
            }
          />
          <Text mt="1" fontWeight="medium">
            Creative Writer
          </Text>
          <Stack spacing="1" mt="2">
            <HStack fontSize="sm">
              <Icon as={GoGlobe} color="gray.500" />
              <Text>Ontario, Canada</Text>
            </HStack>
            <HStack fontSize="sm">
              <Icon as={GoCalendar} color="gray.500" />
              <Text>July, 2021</Text>
            </HStack>
          </Stack>

          <Text fontWeight="semibold" mt="8" mb="2">
            Interests
          </Text>
          <Wrap shouldWrapChildren>
            <Tag>Productivity</Tag>
            <Tag>Work</Tag>
            <Tag>Business</Tag>
            <Tag>Woman</Tag>
          </Wrap>
        </CardContent>
      </Stack>
    </Card>
  </Box>
);
