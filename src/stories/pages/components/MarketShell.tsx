import {
  Avatar,
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  Stack,
  Text,
  createIcon,
  TextProps,
  useBoolean,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";
import { HiMenu, HiChevronRight, HiX } from "react-icons/hi";
export const data = {
  users: [
    {
      name: "Melinda Jones",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ram Prakash",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Gernald Hawkins",
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jessie Munday",
      image:
        "https://images.unsplash.com/photo-1595875708571-854a3492c245?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Diana Fisher 🏳️‍🌈",
      image:
        "https://images.unsplash.com/photo-1531078215167-91fcfe45b39e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
  ],
};

interface SidebarLinkProps extends BoxProps {
  icon?: React.ReactElement;
  avatar?: React.ReactElement;
}

export const SidebarLink = (props: SidebarLinkProps) => {
  const { children, icon = <ArrowRight />, avatar, ...rest } = props;
  return (
    <Box
      as="a"
      marginEnd="2"
      fontSize="sm"
      display="block"
      px="3"
      py="1"
      rounded="md"
      cursor="pointer"
      _hover={{ color: "white", bg: mode("blue.700", "gray.600") }}
      className="group"
      fontWeight="medium"
      transition="background .1s ease-out"
      {...rest}
    >
      <HStack>
        <Box opacity={avatar ? 1 : 0.5} _groupHover={{ opacity: 1 }}>
          {avatar || icon}
        </Box>
        <Text>{children}</Text>
      </HStack>
    </Box>
  );
};

const ArrowRight = createIcon({
  viewBox: "0 0 16 16",
  path: (
    <path
      d="M3.38974 12.6633L9.42974 12.6633C9.86308 12.6633 10.2697 12.4567 10.5164 12.1033L13.1497 8.39C13.3164 8.15667 13.3164 7.85 13.1497 7.61667L10.5097 3.89667C10.2697 3.54334 9.86308 3.33667 9.42974 3.33667L3.38974 3.33667C2.84974 3.33667 2.53641 3.95667 2.84974 4.39667L5.42974 8.00334L2.84974 11.61C2.53641 12.05 2.84974 12.6633 3.38974 12.6633V12.6633Z"
      fill="currentcolor"
    />
  ),
});

export const MarketShell = () => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg={mode("blue.800", "gray.800")}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <Box
            as="a"
            href="#"
            p="3"
            display="block"
            transition="background 0.1s"
            rounded="xl"
            _hover={{ bg: "whiteAlpha.200" }}
            whiteSpace="nowrap"
          >
            <HStack display="inline-flex">
              <Avatar size="sm" name="Esther Collins" />
              <Box lineHeight="1">
                <Text fontWeight="semibold">Esther Collins</Text>
                <Text
                  fontSize="xs"
                  mt="1"
                  color={mode("whiteAlpha.700", "gray.400")}
                >
                  esther-colls@chakra.com
                </Text>
              </Box>
            </HStack>
          </Box>
          <ScrollArea pt="5" pb="6">
            <SidebarLink
              display={{ base: "block", lg: "none" }}
              mb="2"
              icon={<BsSearch />}
            >
              Search
            </SidebarLink>
            <Stack pb="6">
              <SidebarLink icon={<BsFillInboxFill />}>Inbox</SidebarLink>
              <SidebarLink icon={<BsFillBookmarksFill />}>
                Bookmarks
              </SidebarLink>
              <SidebarLink icon={<BsPencilSquare />}>Drafts</SidebarLink>
            </Stack>
            <Stack pb="6">
              <NavSectionTitle>Chats</NavSectionTitle>
              <SidebarLink>🎉 Inbox</SidebarLink>
              <SidebarLink>👍 Personal</SidebarLink>
              <SidebarLink>🦋 Work</SidebarLink>
            </Stack>
            <Stack>
              <NavSectionTitle>Members</NavSectionTitle>
              {data.users.map((user, index) => (
                <SidebarLink
                  key={index}
                  avatar={
                    <Avatar size="xs" name={user.name} src={user.image} />
                  }
                >
                  {user.name}
                </SidebarLink>
              ))}
            </Stack>
          </ScrollArea>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{ base: "0", md: "6" }}
        marginStart={{ md: "var(--sidebar-width)" }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transition="left 0.2s"
      >
        <Box
          maxW="2560px"
          bg={mode("white", "gray.700")}
          height="100%"
          pb="6"
          rounded={{ md: "lg" }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb />
              </Flex>
              <SearchInput />
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
              <Heading size="md" fontWeight="extrabold" mb="6">
                Product Vision
              </Heading>
              <Box
                flex="1"
                borderWidth="3px"
                borderStyle="dashed"
                rounded="xl"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const MobileMenuButton = (props: { onClick: () => void; isOpen: boolean }) => {
  const { onClick, isOpen } = props;
  return (
    <Box
      display={{ base: "block", md: "none" }}
      ml="-8"
      mr="2"
      as="button"
      type="button"
      rounded="md"
      p="1"
      fontSize="xl"
      color="gray.500"
      _hover={{ bg: "gray.100" }}
      onClick={onClick}
    >
      <Box srOnly>{isOpen ? "Close Menu" : "Open Menu"}</Box>
      {isOpen ? <HiX /> : <HiMenu />}
    </Box>
  );
};

const NavBreadcrumb = (props: BreadcrumbProps) => (
  <Breadcrumb
    fontSize="sm"
    {...props}
    separator={
      <Box
        as={HiChevronRight}
        color="gray.400"
        fontSize="md"
        top="2px"
        pos="relative"
      />
    }
  >
    <BreadcrumbItem color="inherit">
      <BreadcrumbLink>Welcome</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem color="inherit" isCurrentPage>
      <BreadcrumbLink>Product Vision</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

const SearchInput = (props: InputProps & { rootProps?: InputGroupProps }) => {
  const { rootProps, ...rest } = props;
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: "none", lg: "block" }}
      {...rootProps}
    >
      <InputLeftElement color="gray.400" pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        {...rest}
        placeholder="Search"
        rounded="md"
        _placeholder={{ color: "gray.400" }}
      />
    </InputGroup>
  );
};

const ScrollArea = (props: BoxProps) => (
  <Box
    overflowY="auto"
    height="80vh"
    minH="px"
    maxH="full"
    {...props}
    sx={{
      "&::-webkit-scrollbar-track": {
        bg: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-thumb": {
        bg: mode("blue.600", "gray.700"),
        borderRadius: "20px",
      },
    }}
  />
);

const useMobileMenuState = () => {
  const [isOpen, actions] = useBoolean();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  React.useEffect(() => {
    if (isMobile == false) {
      actions.off();
    }
  }, [isMobile, actions]);
  return { isOpen, ...actions };
};

const NavSectionTitle = (props: TextProps) => (
  <Text
    casing="uppercase"
    fontSize="xs"
    fontWeight="semibold"
    letterSpacing="wide"
    paddingStart="3"
    color="gray.400"
    {...props}
  />
);
