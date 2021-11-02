import * as React from "react";
import {
  AiOutlineCoffee,
  AiOutlineSketch,
  AiOutlineWoman,
} from "react-icons/ai";
import {
  Box,
  Icon,
  Stack,
  Flex,
  Circle,
  Text,
  useColorModeValue,
  Heading,
  StackProps,
  BoxProps,
} from "@chakra-ui/react";

export interface ListItemProps extends StackProps {
  title: string;
  subTitle: string;
  icon?: React.ReactElement;
  isLastItem?: boolean;
}

export const ListItem = (props: ListItemProps) => {
  const { title, subTitle, icon, isLastItem, children, ...stackProps } = props;

  return (
    <Stack as="li" direction="row" spacing="4" {...stackProps}>
      <Flex direction="column" alignItems="center" aria-hidden="true">
        <Circle
          bg={useColorModeValue("blue.500", "blue.300")}
          size="12"
          borderWidth="4px"
          borderColor={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("white", "black")}
        >
          {icon}
        </Circle>
        {!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-12" />}
      </Flex>
      <Stack spacing="4" pt="1" flex="1">
        <Flex direction="column">
          <Heading fontSize="md" fontWeight="semibold">
            {title}
          </Heading>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {subTitle}
          </Text>
        </Flex>
        <Flex>{children}</Flex>
      </Stack>
    </Stack>
  );
};

export const List = (props: StackProps) => {
  const { children, ...stackProps } = props;
  const items = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<ListItemProps>>(React.isValidElement)
        .map((item, index, array) =>
          index + 1 === array.length
            ? React.cloneElement(item, { isLastItem: true })
            : item
        ),
    [children]
  );
  return (
    <Stack as="ul" {...stackProps}>
      {items}
    </Stack>
  );
};

export const Placeholder = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("gray.50", "gray.700")}
    width="full"
    height="32"
    rounded="xl"
    {...props}
  />
);

export const ListWithVerticalLine = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: "4", md: "8" }}>
        <List spacing="12">
          <ListItem
            title="Have a Coffee Break with Chakra UI"
            subTitle="Posted by Mark Chandler"
            icon={<Icon as={AiOutlineCoffee} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
          <ListItem
            title="Women in Tech learning Chakra UI"
            subTitle="Posted by Christian Schröter"
            icon={<Icon as={AiOutlineWoman} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
          <ListItem
            title="Using Chakra UI in Sketch"
            subTitle="Posted by Segun Adebayo"
            icon={<Icon as={AiOutlineSketch} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
