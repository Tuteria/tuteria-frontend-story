import {
  Badge,
  Box,
  chakra,
  HStack,
  Square,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface MenuItemProps {
  href: string;
  title: string;
  isNew?: boolean;
  children?: React.ReactNode;
  icon: React.ReactElement;
  description: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { title, children, href, isNew } = props;
  return (
    <chakra.a
      display="block"
      px="5"
      py="3"
      href={href}
      rounded="lg"
      transition="0.2s background"
      _hover={{ bg: mode("gray.50", "gray.600") }}
    >
      <Box as="dl">
        <Text
          display="inline-block"
          as="dt"
          fontWeight="semibold"
          transition="0.2s all"
          _groupHover={{ color: "blue.500" }}
        >
          {title}
        </Text>
        {isNew && (
          <Badge
            aria-hidden
            variant="solid"
            fontSize="10px"
            mt="-1"
            ms="2"
            colorScheme="blue"
          >
            New
          </Badge>
        )}
        <Text as="dd" fontSize="sm" color={mode("gray.600", "gray.400")}>
          {children}
        </Text>
      </Box>
    </chakra.a>
  );
};

export const MenuIconItem = (props: MenuItemProps) => {
  const { icon, title, description, children, href } = props;
  return (
    <HStack
      as="a"
      spacing="4"
      p="3"
      rounded="md"
      className="group"
      href={href}
      transition="0.2s background"
      _hover={{ bg: mode("gray.50", "gray.600") }}
      _focus={{
        outline: "1px dashed",
        outlineColor: "blue.300",
        bg: mode("blue.50", "gray.600"),
      }}
    >
      <Square
        size="12"
        rounded="md"
        bg="blue.500"
        color="white"
        fontSize="1.75rem"
      >
        {icon}
      </Square>
      <Box as="dl">
        <Text
          as="dt"
          fontWeight="semibold"
          transition="0.2s all"
          _groupHover={{ color: mode("blue.500", "inherit") }}
        >
          {title}
        </Text>
        <Text
          as="dt"
          fontSize="sm"
          color={mode("gray.600", "gray.400")}
          fontWeight="medium"
        >
          {description}
        </Text>
        {children}
      </Box>
    </HStack>
  );
};
