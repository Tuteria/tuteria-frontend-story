import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Center,
  CenterProps,
  useBoolean,
  useBreakpointValue,
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  Text,
  useMenuButton,
  UseMenuButtonProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
  HiDuplicate,
  HiMail,
  HiOutlineMenu,
  HiRefresh,
  HiTemplate,
  HiViewGrid,
  HiX,
} from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { chakra, HTMLChakraProps, useToken } from "@chakra-ui/react";

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

interface NavItemProps {
  href?: string;
  active?: boolean;
  label: string;
}

interface DesktopNavItemProps extends NavItemProps {
  icon: React.ReactNode;
}

const DesktopNavItem = (props: DesktopNavItemProps) => {
  const { icon, label, href = "#", active } = props;
  return (
    <HStack
      as="a"
      href={href}
      aria-current={active ? "page" : undefined}
      spacing="2"
      px="3"
      py="2"
      rounded="md"
      transition="all 0.2s"
      color="gray.200"
      _hover={{ bg: "whiteAlpha.200" }}
      _activeLink={{ bg: "blackAlpha.300", color: "white" }}
    >
      {icon && (
        <Box aria-hidden fontSize="md">
          {icon}
        </Box>
      )}
      <Box fontWeight="semibold">{label}</Box>
    </HStack>
  );
};

const MobileNavItem = (props: NavItemProps) => {
  const { label, href = "#", active } = props;
  return (
    <Box
      as="a"
      display="block"
      href={href}
      px="3"
      py="3"
      rounded="md"
      fontWeight="semibold"
      aria-current={active ? "page" : undefined}
      _hover={{ bg: "whiteAlpha.200" }}
      _activeLink={{ bg: "blackAlpha.300", color: "white" }}
    >
      {label}
    </Box>
  );
};

export const NavItem = {
  Desktop: DesktopNavItem,
  Mobile: MobileNavItem,
};

const NotificationBadge = (props: CenterProps) => (
  <Center
    bg="red.500"
    fontSize="xs"
    fontWeight="bold"
    position="absolute"
    rounded="full"
    textAlign="center"
    top="-2px"
    insetEnd="0"
    w="18px"
    h="18px"
    {...props}
  />
);

export const Notification = (props: CenterProps) => (
  <Center
    as="button"
    outline="0"
    w="8"
    h="8"
    position="relative"
    rounded="md"
    _hover={{ bg: "whiteAlpha.200" }}
    _focus={{ shadow: "outline" }}
    {...props}
  >
    <Box srOnly>Click to see 9 notifications</Box>
    <NotificationBadge>9</NotificationBadge>
    <Box as={FaBell} fontSize="lg" />
  </Center>
);

const UserAvatar = () => (
  <Avatar
    size="sm"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    name="Manny Brooke"
  />
);

const ProfileMenuButton = (props: UseMenuButtonProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      {...buttonProps}
      as="button"
      flexShrink={0}
      rounded="full"
      outline="0"
      _focus={{ shadow: "outline" }}
    >
      <Box srOnly>Open user menu</Box>
      <UserAvatar />
    </Flex>
  );
};

export const ProfileDropdown = () => (
  <Menu>
    <ProfileMenuButton />
    <MenuList
      rounded="md"
      shadow="lg"
      py="1"
      color={mode("gray.600", "inherit")}
      fontSize="sm"
    >
      <HStack px="3" py="4">
        <UserAvatar />
        <Box lineHeight="1">
          <Text fontWeight="semibold">Manny Broke</Text>
          <Text mt="1" fontSize="xs" color="gray.500">
            manny@chakra-ui.com
          </Text>
        </Box>
      </HStack>
      <MenuItem fontWeight="medium">Your Profile</MenuItem>
      <MenuItem fontWeight="medium">Feedback & Support</MenuItem>
      <MenuItem fontWeight="medium">Account Settings</MenuItem>
      <MenuItem fontWeight="medium" color={mode("red.500", "red.300")}>
        Sign out
      </MenuItem>
    </MenuList>
  </Menu>
);

export const TabLink = (props: HTMLChakraProps<"a">) => (
  <chakra.a
    {...props}
    fontWeight="semibold"
    px="4"
    py="3"
    color={mode("gray.600", "gray.400")}
    borderBottom="2px solid transparent"
    transition="all 0.2s"
    _hover={{
      borderColor: mode("gray.400", "gray.600"),
    }}
    _activeLink={{
      color: mode("blue.600", "blue.400"),
      borderColor: "currentColor",
    }}
  />
);

const useMobileMenuState = () => {
  const [isMenuOpen, actions] = useBoolean();
  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });

  React.useEffect(() => {
    if (isMobileBreakpoint == false) {
      actions.off();
    }
  }, [isMobileBreakpoint, actions]);

  return { isMenuOpen, ...actions };
};

export const ShellWithTopNavbar = () => {
  const { isMenuOpen, toggle } = useMobileMenuState();
  return (
    <Flex direction="column" bg={mode("gray.100", "gray.800")} height="100vh">
      <Flex align="center" bg="blue.600" color="white" px="6" h="16">
        <Flex justify="space-between" align="center" w="full">
          {/* Mobile Hamburger Menu */}
          <Box
            ms="-4"
            minW={{ base: "12", lg: "76px" }}
            display={{ lg: "none" }}
          >
            <Box as="button" onClick={toggle} p="2" fontSize="xl">
              <Box aria-hidden as={isMenuOpen ? HiX : HiOutlineMenu} />
              <Box srOnly>{isMenuOpen ? "Close menu" : "Open menu"}</Box>
            </Box>
          </Box>

          {/* Mobile Navigation Menu  */}
          <Flex
            hidden={!isMenuOpen}
            as="nav"
            direction="column"
            bg="blue.600"
            position="fixed"
            height="calc(100vh - 4rem)"
            top="16"
            insetX="0"
            zIndex={10}
            w="full"
          >
            <Box px="4">
              <NavItem.Mobile active label="Dashboard" />
              <NavItem.Mobile label="Campaigns" />
              <NavItem.Mobile label="Forms" />
              <NavItem.Mobile label="Sites" />
              <NavItem.Mobile label="Automation" />
            </Box>
          </Flex>

          {/* Desktop Logo placement */}
          <Logo
            display={{ base: "none", lg: "block" }}
            flexShrink={0}
            h="5"
            marginEnd="10"
          />

          {/* Desktop Navigation Menu */}
          <HStack spacing="3" flex="1" display={{ base: "none", lg: "flex" }}>
            <NavItem.Desktop active icon={<HiViewGrid />} label="Dashboard" />
            <NavItem.Desktop icon={<HiMail />} label="Campaigns" />
            <NavItem.Desktop icon={<HiDuplicate />} label="Forms" />
            <NavItem.Desktop icon={<HiTemplate />} label="Sites" />
            <NavItem.Desktop icon={<HiRefresh />} label="Automation" />
          </HStack>

          {/* Mobile Logo placement */}
          <Logo
            flex={{ base: "1", lg: "0" }}
            display={{ lg: "none" }}
            flexShrink={0}
            h="5"
          />

          <HStack spacing="3">
            <Notification display={{ base: "none", lg: "inline-flex" }} />
            <ProfileDropdown />
          </HStack>
        </Flex>
      </Flex>

      {/* Page Header */}
      <Box bg={mode("white", "gray.900")} pt="8" shadow="sm">
        <Container maxW="7xl">
          <Heading size="lg" mb="3">
            Forms
          </Heading>
          <Stack direction="row" spacing="4">
            <TabLink aria-current="page" href="#">
              Overview
            </TabLink>
            <TabLink href="#">Analytics</TabLink>
            <TabLink href="#">Automation</TabLink>
          </Stack>
        </Container>
      </Box>

      {/* Main content area */}
      <Box as="main" py="8" flex="1">
        <Container maxW="7xl">
          <Box bg={mode("white", "gray.700")} p="6" rounded="lg" shadow="base">
            <Box
              border="3px dashed currentColor"
              color={mode("gray.200", "gray.600")}
              h="96"
              rounded="lg"
            />
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};
