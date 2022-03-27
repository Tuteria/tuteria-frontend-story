import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Box,
  Img,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Text,
  Badge,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { BsSearch } from "react-icons/bs";
import { RiAddFill, RiArrowRightUpLine } from "react-icons/ri";

interface UserProps {
  data: {
    image: string;
    name: string;
    email: string;
  };
}

const User = (props: UserProps) => {
  const { image, name, email } = props.data;
  return (
    <Stack direction="row" spacing="4" align="center">
      <Box flexShrink={0} h="10" w="10">
        <Img
          objectFit="cover"
          htmlWidth="160px"
          htmlHeight="160px"
          w="10"
          h="10"
          rounded="full"
          src={image}
          alt=""
        />
      </Box>
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {name}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {email}
        </Box>
      </Box>
    </Stack>
  );
};

const data = [
  {
    role: "Admin",
    status: "active",
    earned: "$45,000",
    id: "blog",
    user: {
      image:
        "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGd1eSUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      name: "Marion Watson",
      email: "codyfisher@example.com",
    },
  },
  {
    role: "Marketing Director",
    status: "reviewing",
    earned: "$4,840",
    id: "home",
    user: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name: "Louise Hopkins",
      email: "jane@example.com",
    },
  },
  {
    role: "Front Desk Officer",
    status: "declined",
    id: "design-system",
    earned: "$89,054",
    user: {
      image:
        "https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGxhZHklMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      name: "Susan Schwartz",
      email: "jenyzx@example.com",
    },
  },
  {
    role: "Lead Software Engineer",
    status: "active",
    earned: "$19,954",
    id: "home-2",
    user: {
      image:
        "https://images.unsplash.com/photo-1533674689012-136b487b7736?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFmcmljYSUyMGxhZHklMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      name: "Sade Akinlade",
      email: "melyb@example.com",
    },
  },
];

const badgeEnum: Record<string, string> = {
  active: "green",
  reviewing: "orange",
  declined: "red",
};

const columns = [
  {
    Header: "Member",
    accessor: "user",
    Cell: function MemberCell(data: any) {
      return <User data={data} />;
    },
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      );
    },
  },
  {
    Header: "Amount Earned",
    accessor: "earned",
  },
];

const TablePagination = () => {
  return (
    <Flex align="center" justify="space-between">
      <Text color={mode("gray.600", "gray.400")} fontSize="sm">
        {data.length} members
      </Text>
      <ButtonGroup variant="outline" size="sm">
        <Button as="a" rel="prev">
          Previous
        </Button>
        <Button as="a" rel="next">
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

const TableContent = () => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode("gray.50", "gray.800")}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              const cell = row[column.accessor as keyof typeof row];
              const element = column.Cell?.(cell) ?? cell;
              return (
                <Td whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              );
            })}
            <Td textAlign="right">
              <Button variant="link" colorScheme="blue">
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const TableActions = () => {
  return (
    <Stack
      spacing="4"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
    >
      <HStack>
        <FormControl minW={{ md: "320px" }} id="search">
          <InputGroup size="sm">
            <FormLabel srOnly>Filter by name or email</FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputLeftElement>
            <Input
              rounded="base"
              type="search"
              placeholder="Filter by name or email..."
            />
          </InputGroup>
        </FormControl>
        <Select
          w={{ base: "300px", md: "unset" }}
          rounded="base"
          size="sm"
          placeholder="All roles"
        >
          <option>All roles</option>
          <option>UI Designers</option>
          <option>Marketing Directors</option>
        </Select>
      </HStack>
      <ButtonGroup size="sm" variant="outline">
        <Button iconSpacing="1" leftIcon={<RiAddFill fontSize="1.25em" />}>
          New member
        </Button>
        <Button
          iconSpacing="1"
          leftIcon={<RiArrowRightUpLine fontSize="1.25em" />}
        >
          CSV
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export const TableWithSearch = () => {
  return (
    <Box as="section" py="12">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box overflowX="auto">
          <Heading size="lg" mb="6">
            Contact
          </Heading>
          <TableActions />
          <TableContent />
          <TablePagination />
        </Box>
      </Box>
    </Box>
  );
};
