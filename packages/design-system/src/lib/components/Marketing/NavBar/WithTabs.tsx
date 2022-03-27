import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  chakra,
  CloseButton,
  Divider,
  Flex,
  HStack,
  HTMLChakraProps,
  IconButton,
  Link,
  LinkProps,
  Spacer,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { isValidElement, ReactElement } from "react";

interface Props {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const { name, email, avatarUrl } = props;
  return (
    <>
      <Flex order={{ base: 2, md: 1 }}>
        <IconButton
          isRound
          size="sm"
          fontSize="xl"
          aria-label="Show notification"
          variant="ghost"
          color="current"
          icon={<BellIcon />}
        />
      </Flex>
      <HStack spacing={3} order={{ base: 1, md: 2 }} flex="1">
        <Avatar name={name} src={avatarUrl} size="sm" />
        <Flex direction="column" display={{ base: "flex", md: "none" }}>
          <Text fontWeight="bold" lineHeight="shorter">
            {name}
          </Text>
          <Text fontSize="sm" lineHeight="shorter" opacity={0.7}>
            {email}
          </Text>
        </Flex>
      </HStack>
    </>
  );
};

export const NavTabLink: React.FC<LinkProps> = (props) => {
  return (
    <Tab
      _selected={{ color: mode("blue.600", "blue.200") }}
      _focus={{ shadow: "none" }}
      justifyContent="flex-start"
      px={{ base: 4, md: 6 }}
    >
      <Link
        as="div"
        display="block"
        fontWeight="medium"
        lineHeight="1.25rem"
        color="inherit"
        _hover={{ color: mode("blue.600", "blue.200") }}
        _activeLink={{
          color: mode("blue.600", "blue.200"),
        }}
        {...props}
      />
    </Tab>
  );
};

const MobileNavContent: React.FC<Props> = (props) => {
  const { isOpen, onClose, children } = props;
  const bg = useColorModeValue("white", "gray.800");
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            direction="column"
            w="100%"
            bg={bg}
            h="100vh"
            overflow="auto"
            pos="absolute"
            top={0}
            left={0}
            zIndex={20}
            px={4}
            py={4}
          >
            {children}
            <CloseButton pos="absolute" top={4} right={4} onClick={onClose} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Template: React.FC = (props) => {
  const children = React.Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );
  const mobileNav = useDisclosure();
  return (
    <Flex
      py={4}
      px={{ base: 4, md: 6, lg: 8 }}
      bg={mode("white", "gray.800")}
      boxShadow="none"
      borderBottomWidth={mode("0", "1px")}
    >
      {children.find((child) => child.type === Brand)?.props.children}
      <HStack display={{ base: "none", md: "flex" }} marginStart={4}>
        <Tabs colorScheme="blue" variant="unstyled" isFitted>
          <TabList>
            {children.find((child) => child.type === Links)?.props.children}
          </TabList>
          <TabIndicator
            mt="13px"
            height={1}
            borderTopRadius="md"
            bg={mode("blue.500", "blue.200")}
          />
        </Tabs>
      </HStack>
      <Spacer />
      <HStack display={{ base: "none", md: "flex" }} spacing={3}>
        {children.find((child) => child.type === UserProfile)?.props.children}
      </HStack>

      <IconButton
        display={{ base: "flex", md: "none" }}
        size="sm"
        aria-label="Open menu"
        fontSize="20px"
        variant="ghost"
        onClick={mobileNav.onOpen}
        icon={<HamburgerIcon />}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack spacing={5}>
          <Flex>
            {children.find((child) => child.type === Brand)?.props.children}
          </Flex>
          <Tabs orientation="vertical" variant="unstyled">
            <TabList>
              {children.find((child) => child.type === Links)?.props.children}
            </TabList>
            <TabIndicator
              marginStart="-3"
              width={1}
              borderTopRadius={{ base: "none", md: "md" }}
              bg={mode("blue.500", "blue.200")}
            />
          </Tabs>
          <Divider />

          <Flex>
            {
              children.find((child) => child.type === UserProfile)?.props
                .children
            }
          </Flex>
        </Stack>
      </MobileNavContent>
    </Flex>
  );
};

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const User: React.FC = () => null;

export const Navbar = Object.assign(Template, {
  Brand,
  Links,
  UserProfile: User,
});

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const Logo = (props: HTMLChakraProps<"svg"> & { iconColor?: string }) => {
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

const WithTabs = () => (
  <Box minH="24rem" bg={useColorModeValue("gray.50", "gray.700")}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd={6}>
          <Logo h="6" iconColor="blue.600" />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavTabLink>Features</NavTabLink>
        <NavTabLink>Documentation</NavTabLink>
        <NavTabLink>Pricing</NavTabLink>
        <NavTabLink>Team</NavTabLink>
      </Navbar.Links>
      <Navbar.UserProfile>
        <UserProfile
          name="Christian Schröter"
          avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
          email="mail@chidori-ui.com"
        />
      </Navbar.UserProfile>
    </Navbar>
  </Box>
);

export default WithTabs;
