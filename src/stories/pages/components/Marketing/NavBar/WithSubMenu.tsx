import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  Collapse,
  Flex,
  FlexProps,
  HStack,
  HTMLChakraProps,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  useDisclosure,
  useToken,
  VisuallyHidden,
} from "@chakra-ui/react";
import { getOwnerDocument, isFocusable, isRightClick } from "@chakra-ui/utils";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import * as React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IoCalendar, IoGrid, IoHelpBuoy } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

const getTarget = (event: React.FocusEvent) =>
  (event.relatedTarget || document.activeElement) as HTMLElement;

type OmitMotionProps<T> = Omit<
  T,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
>;

export function useNavMenu() {
  const { isOpen, onClose, onToggle, onOpen } = useDisclosure();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLAnchorElement>(null);
  const timeoutRef = React.useRef<number>();

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const focusMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      menuRef.current?.focus({ preventScroll: true });
    }, 100);
  };

  const getTriggerProps = () => {
    const triggerProps: React.ComponentPropsWithRef<"a"> = {
      ref: triggerRef,
      "aria-expanded": isOpen,
      "aria-controls": "menu",
      "aria-haspopup": "true",
    };

    triggerProps.onClick = (event: React.MouseEvent) => {
      if (isRightClick(event)) return;
      onToggle();
      if (!isOpen) {
        focusMenu();
      }
    };

    triggerProps.onBlur = (event: React.FocusEvent) => {
      const target = getTarget(event);
      if (isOpen && !menuRef.current?.contains(target)) {
        onClose();
      }
    };

    triggerProps.onKeyDown = (event: React.KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        onClose();
        triggerRef.current?.focus({ preventScroll: true });
      }

      if (event.key === "ArrowDown") {
        if (!isOpen) onOpen();
        focusMenu();
      }
    };

    return triggerProps;
  };

  const getMenuProps = () => {
    const menuProps: OmitMotionProps<React.ComponentPropsWithRef<"div">> = {
      ref: menuRef,
      id: "menu",
      tabIndex: -1,
    };

    menuProps.onKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape": {
          onClose();
          return triggerRef.current?.focus();
        }
        case "ArrowDown": {
          const doc = getOwnerDocument(menuRef.current);
          const next = doc?.activeElement
            ?.nextElementSibling as HTMLAnchorElement | null;
          return next?.focus();
        }
        case "ArrowUp": {
          const doc = getOwnerDocument(menuRef.current);
          const prev = doc?.activeElement
            ?.previousElementSibling as HTMLAnchorElement | null;
          const el = (prev ?? triggerRef.current) as HTMLElement;
          return el.focus();
        }
        default:
          break;
      }
    };

    menuProps.onBlur = (event: React.FocusEvent) => {
      const target = getTarget(event);
      const shouldBlur =
        isOpen &&
        !target.isSameNode(triggerRef.current) &&
        !menuRef.current?.contains(target);
      if (shouldBlur) {
        onClose();
        if (!isFocusable(target)) {
          triggerRef.current?.focus({ preventScroll: true });
        }
      }
    };

    return menuProps;
  };

  return {
    isOpen,
    onClose,
    getTriggerProps,
    getMenuProps,
  };
}

const Bar = chakra("span", {
  baseStyle: {
    display: "block",
    pos: "absolute",
    w: "1.25rem",
    h: "0.125rem",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});

const ToggleIcon = (props: { active: boolean }) => {
  const { active } = props;
  return (
    <Box
      className="group"
      data-active={active ? "" : undefined}
      as="span"
      display="block"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Bar
        top="0.4375rem"
        _groupActive={{ top: "0.6875rem", transform: "rotate(45deg)" }}
      />
      <Bar
        bottom="0.4375rem"
        _groupActive={{ bottom: "0.6875rem", transform: "rotate(-45deg)" }}
      />
    </Box>
  );
};

interface ToggleButtonProps {
  isOpen: boolean;
  onClick(): void;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { isOpen, onClick } = props;
  return (
    <Center
      marginStart="-6"
      px="4"
      py="4"
      as="button"
      color="gray.400"
      _active={{ color: "blue.600" }}
      onClick={onClick}
    >
      <ToggleIcon active={isOpen} />
      <VisuallyHidden>Toggle Menu</VisuallyHidden>
    </Center>
  );
};

interface SubmenuProps {
  link: Link;
}

const DesktopSubmenu = (props: SubmenuProps) => {
  const { link } = props;
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu();
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        px="4"
        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box>{link.label}</Box>
        <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
      </NavLink.Desktop>

      <NavMenu {...getMenuProps()} animate={isOpen ? "open" : "closed"}>
        <Box maxW="7xl" mx="auto" px="8">
          <SimpleGrid spacing="10" columns={2}>
            {link.children?.map((item, idx) => (
              <SubmenuItem
                key={idx}
                title={item.label}
                href={item.href}
                icon={item.icon}
              >
                {item.description}
              </SubmenuItem>
            ))}
          </SimpleGrid>
        </Box>
      </NavMenu>
    </>
  );
};

const MobileSubMenu = (props: SubmenuProps) => {
  const { link } = props;
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        cursor="pointer"
        onClick={onToggle}
        paddingEnd="4"
      >
        <Box flex="1">{link.label}</Box>
        <Box
          as={FaChevronDown}
          transform={`rotate(${isOpen ? "180deg" : "0deg"})`}
        />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          {link.children?.map((item, idx) => (
            <NavLink.Mobile key={idx} href={item.href}>
              {item.label}
            </NavLink.Mobile>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export const Submenu = {
  Mobile: MobileSubMenu,
  Desktop: DesktopSubmenu,
};

interface SubmenuItemProps extends HTMLChakraProps<"a"> {
  title: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
  href: string;
}

export const SubmenuItem = (props: SubmenuItemProps) => {
  const { title, icon, children, href, ...rest } = props;
  return (
    <chakra.a
      className="group"
      href={href}
      m="-3"
      p="3"
      display="flex"
      alignItems="flex-start"
      transition="all 0.2s"
      rounded="lg"
      _hover={{ bg: mode("gray.50", "gray.600") }}
      _focus={{ shadow: "outline" }}
      {...rest}
    >
      <Center
        aria-hidden
        as="span"
        flexShrink={0}
        w="10"
        h="10"
        fontSize="3xl"
        color={mode("blue.600", "blue.400")}
      >
        {icon}
      </Center>
      <Box marginStart="3" as="dl">
        <HStack as="dt">
          <Text
            fontWeight="semibold"
            color={mode("gray.900", "white")}
            _groupHover={{ color: mode("blue.600", "inherit") }}
          >
            {title}
          </Text>
          <Box
            fontSize="xs"
            as={FaChevronRight}
            transition="all 0.2s"
            _groupHover={{
              color: mode("blue.600", "inherit"),
              transform: "translateX(2px)",
            }}
          />
        </HStack>
        <Text as="dd" color={mode("gray.500", "gray.400")}>
          {children}
        </Text>
      </Box>
    </chakra.a>
  );
};

const NavMenu = React.forwardRef<HTMLDivElement, MotionBoxProps>(
  (props, ref) => (
    <MotionBox
      ref={ref}
      initial="init"
      variants={variants}
      outline="0"
      opacity="0"
      bg={useColorModeValue("white", "gray.700")}
      w="full"
      shadow="lg"
      px="4"
      pos="absolute"
      insetX="0"
      pt="6"
      pb="12"
      {...props}
    />
  )
);

NavMenu.displayName = "NavMenu";

const variants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: "none",
    transition: { duration: 0 },
  },
  open: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.15 },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: "none",
    },
  },
};

interface NavLinkProps extends HTMLChakraProps<"a"> {
  active?: boolean;
}

const DesktopNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { active, ...rest } = props;
    return (
      <chakra.a
        ref={ref}
        display="inline-block"
        px="4"
        py="6"
        fontWeight="semibold"
        aria-current={active ? "page" : undefined}
        color={mode("gray.600", "gray.400")}
        transition="all 0.2s"
        {...rest}
        _hover={{ color: "gray.500" }}
        _active={{ color: "blue.600" }}
        _activeLink={{
          color: "blue.600",
          fontWeight: "bold",
        }}
      />
    );
  }
);
DesktopNavLink.displayName = "DesktopNavLink";

export const MobileNavLink = (props: NavLinkProps) => {
  const { active, ...rest } = props;
  return (
    <chakra.a
      aria-current={active ? "page" : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  );
};

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box visibility={{ base: "hidden", sm: "visible" }}>
          <Button as="a" colorScheme="blue">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Envelope</VisuallyHidden>
        <Logo h="6" iconColor="blue.500" />
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px" justify="space-between">
        <Box
          as="a"
          href="#"
          color={mode("blue.600", "blue.300")}
          fontWeight="bold"
        >
          Sign In
        </Box>
        <Button as="a" href="#" colorScheme="blue" fontWeight="bold">
          Sign up for free
        </Button>
      </HStack>
    </Flex>
  );
};

const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};

type MotionBoxProps = BoxProps & HTMLMotionProps<"div">;
const MotionBox = motion<BoxProps>(Box);

const Logo = (props: HTMLChakraProps<"svg"> & { iconColor?: string }) => {
  const { iconColor = "currentColor", ...rest } = props;
  const color = useToken("colors", iconColor);
  return (
    <chakra.svg aria-hidden viewBox="0 0 123 24" fill="none" {...rest}>
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

interface Link {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    description?: string;
    href: string;
    icon?: React.ReactElement;
  }>;
}

const links: Link[] = [
  { label: "For Designers", href: "#" },
  { label: "For Teams", href: "#" },
  {
    label: "Resources",
    children: [
      {
        label: "Get Help",
        description: "Read our documentation and FAQs, or get in touch.",
        href: "#",
        icon: <IoHelpBuoy />,
      },
      {
        label: "Events & Meetups",
        description: "Discover and join your local Sketch community.",
        href: "#",
        icon: <IoCalendar />,
      },
      {
        label: "Extensions",
        description: "Do even more with Assistants, plugins and integrations.",
        href: "#",
        icon: <IoGrid />,
      },
      {
        label: "Blog",
        description: "Get updates, articles and insights from the team.",
        href: "#",
        icon: <MdWeb />,
      },
    ],
  },
  { label: "Pricing", href: "#" },
];

const WithSubMenu = () => {
  return (
    <Box minH="640px">
      <Box
        as="header"
        bg={mode("white", "gray.800")}
        position="relative"
        zIndex="10"
      >
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <NavContent.Mobile display={{ base: "flex", lg: "none" }} />
          <NavContent.Desktop display={{ base: "none", lg: "flex" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default WithSubMenu;
