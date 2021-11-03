import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Avatar,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  chakra,
  HTMLChakraProps,
  useToken,
  Divider,
  FlexProps,
  Spacer,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputRightElement,
  Square,
  Stack,
  HStack,
  Icon,
  Link,
  LinkProps,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  FaRegBell,
  FaRegChartBar,
  FaRegClipboard,
  FaRegHeart,
  FaRegImages,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export const Logo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string }
) => {
  const { iconColor = "currentColor", ...rest } = props;
  const color = useToken("colors", iconColor);
  return (
    <chakra.svg viewBox="0 0 123 24" fill="none" {...rest}>
      <path
        d="M23 0H7a1 1 0 00-1 1v16H3c-1.654 0-3 1.346-3 3v4h14v-3.583c0-.808.645-1.417 1.5-1.417.723 0 1.5.47 1.5 1.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V1a1 1 0 00-1-1zM12 20.417V22H2v-2a1 1 0 011-1h9.304c-.196.43-.304.909-.304 1.417zM20 13H10v-2h10v2zm0-6H10V5h10v2z"
        fill={color}
      />
      <path
        d="M36.102 19h10.142v-2.855h-6.627v-2.99h6.108v-2.862h-6.108V7.31h6.627V4.455H36.102V19zM51.518 12.778c.007-1.242.732-1.981 1.833-1.981 1.1 0 1.754.724 1.747 1.932V19h3.473v-6.953c.007-2.457-1.492-4.098-3.786-4.098-1.612 0-2.833.817-3.316 2.145h-.121V8.09h-3.303V19h3.473v-6.222zM70.513 8.09h-3.658l-2.017 7.515h-.113l-2.01-7.514h-3.658L62.793 19h3.977l3.743-10.91zM76.192 19.206c2.863 0 4.745-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.889 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.188-5.568-5.284-5.568-3.296 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.518 5.617zm-2.095-6.84c.05-1.086.91-1.91 2.06-1.91 1.143 0 1.967.796 1.981 1.91h-4.04zM86.217 4.455h-3.473V19h3.473V4.455zM93.12 19.206c3.43 0 5.511-2.266 5.511-5.625 0-3.367-2.08-5.632-5.511-5.632-3.43 0-5.512 2.265-5.512 5.632 0 3.36 2.081 5.625 5.512 5.625zm.021-2.62c-1.285 0-1.996-1.222-1.996-3.026 0-1.811.71-3.04 1.996-3.04 1.243 0 1.953 1.229 1.953 3.04 0 1.804-.71 3.025-1.953 3.025zM100.01 23.091h3.473v-5.86h.071c.441 1.01 1.421 1.925 3.068 1.925 2.415 0 4.361-1.889 4.361-5.603 0-3.85-2.059-5.604-4.339-5.604-1.726 0-2.671 1.008-3.09 2.01h-.106V8.09h-3.438v15zm3.402-9.546c0-1.782.739-2.883 2.01-2.883 1.286 0 1.996 1.13 1.996 2.883 0 1.762-.71 2.905-1.996 2.905-1.271 0-2.01-1.136-2.01-2.904zM117.503 19.206c2.862 0 4.744-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.89 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.187-5.568-5.284-5.568-3.295 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.519 5.617zm-2.096-6.84c.05-1.086.909-1.91 2.06-1.91 1.144 0 1.967.796 1.982 1.91h-4.042z"
        fill="currentColor"
      />
    </chakra.svg>
  );
};

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  label: string;
  icon: any;
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, isActive, label, ...rest } = props;
  return (
    <Link
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="sm"
      userSelect="none"
      aria-current={isActive ? "page" : undefined}
      color={mode("gray.700", "gray.500")}
      _hover={{
        bg: mode("gray.100", "gray.700"),
        color: mode("gray.900", "white"),
      }}
      _activeLink={{
        bg: mode("gray.200", "gray.700"),
        color: "inherit",
      }}
      {...rest}
    >
      <HStack spacing="4">
        <Icon as={icon} fontSize="lg" opacity={0.64} />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  );
};

export const SearchField = (props: InputGroupProps) => {
  return (
    <InputGroup size="sm" {...props}>
      <InputLeftElement pointerEvents="none">
        <BsSearch opacity={0.5} />
      </InputLeftElement>
      <InputRightElement>
        <Square
          rounded="base"
          fontSize="xs"
          borderWidth="1px"
          w="5"
          h="5"
          bg={mode("gray.100", "gray.800")}
          color="gray.500"
        >
          /
        </Square>
      </InputRightElement>
      <Input rounded="md" placeholder="Search" bg={mode("white", "gray.900")} />
    </InputGroup>
  );
};

interface UserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props;
  return (
    <HStack spacing="4" px="2" flexShrink={0} borderTopWidth="1px" p="4">
      <Avatar size="sm" name={name} src={image} />
      <Flex direction="column" fontWeight="medium">
        <Text fontSize="sm">{name}</Text>
        <Text
          fontSize="xs"
          lineHeight="shorter"
          color={mode("gray.600", "gray.400")}
        >
          {email}
        </Text>
      </Flex>
    </HStack>
  );
};

export const Sidebar = (props: FlexProps) => {
  return (
    <Flex
      bg={mode("gray.50", "gray.800")}
      direction="column"
      borderRightWidth="1px"
      width="64"
      {...props}
    >
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Box mb="6">
          <Logo color={mode("blue.600", "blue.400")} h="6" />
        </Box>
        <Box mb="6">
          <SearchField />
        </Box>
        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <NavLink label="Images" icon={FaRegImages} isActive />
            <NavLink label="Favorites" icon={FaRegHeart} />
            <NavLink label="Notes" icon={FaRegClipboard} />
            <NavLink label="Statistics" icon={FaRegChartBar} />
          </Stack>
          <Divider />
          <Stack spacing="1">
            <NavLink label="Notifications" icon={FaRegBell} />
            <NavLink label="Help Center" icon={FaRegQuestionCircle} />
          </Stack>
        </Stack>
        <Spacer />
      </Flex>
      <UserProfile
        name="Cindy Winston"
        image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        email="cindy@example.com"
      />
    </Flex>
  );
};

const Topbar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      bg={mode("gray.50", "gray.800")}
      display={{ base: "flex", md: "none" }}
      borderBottomWidth="1px"
    >
      <Logo h="6" iconColor="blue.600" />
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={mode("white", "gray.800")}
          shadow="none"
          position="relative"
          maxW="64"
        >
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export const ShellWithThreeColumn: React.FC = () => {
  return (
    <>
      <Topbar />
      <Flex height="100vh" overflow="hidden">
        <Sidebar display={{ base: "none", md: "flex" }} />
        <Flex
          display={{ base: "none", lg: "block" }}
          width="96"
          direction="column"
          overflowY="auto"
          borderRightWidth="1px"
          p="6"
        >
          <Box borderWidth="2px" rounded="base" borderStyle="dashed" h="full" />
        </Flex>
        <Flex flex="1" p="6">
          <Box
            borderWidth="2px"
            rounded="base"
            borderStyle="dashed"
            h="full"
            w="full"
          />
        </Flex>
      </Flex>
    </>
  );
};

const useMobileMenuState = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  React.useEffect(() => {
    if (isMobile == false) {
      onClose();
    }
  }, [isMobile, onClose]);
  return { isOpen, onClose, onOpen };
};
