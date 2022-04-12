import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  Flex,
  HStack,
  HTMLChakraProps,
  Stack,
  StackDivider,
  StackProps,
  useColorModeValue,
  useDisclosure,
  useToken,
  VisuallyHidden,
} from "@chakra-ui/react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

type MotionListProps = HTMLChakraProps<"ul"> & HTMLMotionProps<"ul">;
const MotionList = motion<MotionListProps>(chakra.ul);

const navListVariants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: "none",
    transition: { duration: 0 },
  },
  enter: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: {
      duration: 0.15,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: "none",
    },
  },
};

export const NavList = (props: MotionListProps) => (
  <MotionList
    opacity="0"
    initial="init"
    variants={navListVariants}
    {...props}
  />
);

export type MotionListItemProps = HTMLChakraProps<"li"> & HTMLMotionProps<"li">;
export const MotionListItem = motion<MotionListItemProps>(chakra.li);

const navListItemVariants: Variants = {
  exit: {
    opacity: 0,
    y: 4,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const NavListItem = (props: MotionListItemProps) => (
  <MotionListItem variants={navListItemVariants} {...props} />
);

const DesktopNavLink = (props: HTMLChakraProps<"a">) => {
  return (
    <chakra.a
      fontWeight="medium"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      borderColor="transparent"
      transition="all 0.2s"
      _hover={{
        borderColor: "currentcolor",
        color: useColorModeValue("blue.600", "blue.200"),
      }}
      {...props}
    />
  );
};

const MobileNavLink = (props: HTMLChakraProps<"a">) => {
  return (
    <chakra.a
      display="block"
      textAlign="center"
      fontWeight="bold"
      py="5"
      fontSize="lg"
      color="white"
      w="full"
      _hover={{
        bg: "blackAlpha.200",
      }}
      {...props}
    />
  );
};

const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};

const links = [
  { label: "Showcase", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Features", href: "#" },
  { label: "Resources", href: "#" },
];

const MobileNavContent = (props: BoxProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        color={useColorModeValue("gray.600", "gray.400")}
        onClick={onToggle}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="blue.600"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack
          spacing="0"
          divider={<StackDivider borderColor="whiteAlpha.200" />}
        >
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem style={{ flex: "1" }}>
            <NavLink.Mobile href="#">Get started</NavLink.Mobile>
          </NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props: StackProps) => {
  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop key={index} href={link.href}>
          {link.label}
        </NavLink.Desktop>
      ))}
      <Button height="16" rounded="0" colorScheme="blue" minW="10rem">
        Get started
      </Button>
    </HStack>
  );
};

const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};

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

export const WithFullButtons = () => (
  <Box minHeight="480px">
    <Box
      as="header"
      height="16"
      bg={useColorModeValue("white", "gray.800")}
      position="relative"
    >
      <Box
        height="100%"
        maxW="7xl"
        mx="auto"
        ps={{ base: "6", md: "8" }}
        pe={{ base: "5", md: "0" }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="#" rel="home">
            {/* Replace this ⬇️ with your company name */}
            <VisuallyHidden>Envelope</VisuallyHidden>
            <Logo h="6" iconColor={useColorModeValue("blue.600", "blue.200")} />
          </Box>
          <NavContent.Desktop display={{ base: "none", md: "flex" }} />
          <NavContent.Mobile display={{ base: "flex", md: "none" }} />
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default WithFullButtons;
