import {
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  HTMLChakraProps,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";

import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const SubscribeForm = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // add submit logic
    }}
  >
    <Box mt="8" display={{ md: "flex" }} maxW="xl">
      <FormControl id="email" marginEnd="-1px">
        <FormLabel srOnly>Enter your email</FormLabel>
        <Input
          roundedEnd={{ md: "0" }}
          mb={{ base: "2", lg: "0" }}
          flex="1"
          bg={mode("white", "gray.900")}
          placeholder="Your email"
        />
      </FormControl>
      <Button
        w={{ base: "full", md: "auto" }}
        fontSize="sm"
        px="8"
        roundedStart={{ md: "0" }}
        colorScheme="blue"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
      >
        Subscribe
      </Button>
    </Box>
  </form>
);

export const SocialLink = (props: HTMLChakraProps<"a">) => (
  <chakra.a
    rounded="lg"
    w="10"
    h="10"
    fontSize="xl"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="all 0.2s"
    _hover={{
      bg: useColorModeValue("gray.100", "whiteAlpha.100"),
      color: useColorModeValue("blue.500", "blue.300"),
    }}
    {...props}
  />
);

export const Logo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string }
) => {
  const { iconColor = "currentColor", ...rest } = props;
  const color = useToken("colors", iconColor);
  return (
    <chakra.svg
      aria-hidden
      viewBox="0 0 123 24"
      fill="none"
      h="6"
      flexShrink={0}
      {...rest}
    >
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

interface LinkGroupProps {
  data: LinkGroupData;
}

export const LinkGroup = (props: LinkGroupProps) => {
  const { data } = props;
  const { links, title } = data;

  return (
    <Box>
      <Text
        textTransform="uppercase"
        mb={{ base: "6", md: "10" }}
        fontWeight="bold"
        letterSpacing="wide"
      >
        {title}
      </Text>
      <Stack as="ul" spacing={{ base: 2, md: 4 }} listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx}>
            <Box
              as="a"
              href={link.href}
              _hover={{ textDecoration: "underline" }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <Box as="span" ms="2">
                  {link.badge}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export interface LinkGroupData {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: React.ReactElement;
  }>;
}

export const links: LinkGroupData[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#" },
      { label: "Features", href: "#" },
      {
        label: "Integrations",
        href: "#",
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      { label: "Pricing", href: "#" },
      { label: "Examples", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learn Center", href: "#" },
      { label: "Support", href: "#" },
      { label: "Slack Community", href: "#" },
      { label: "Events", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Media Kit", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Email us", href: "#" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Start for free", href: "#" },
      { label: "Sign in", href: "#" },
      { label: "Download MacOS", href: "#" },
      { label: "Download Windows", href: "#" },
    ],
  },
];

interface SocialLink {
  label: string;
  icon: React.ReactElement;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Facebook", icon: <FaFacebook />, href: "#" },
  { label: "Instagram", icon: <FaInstagram />, href: "#" },
  { label: "LinkedIn", icon: <FaLinkedin />, href: "#" },
  { label: "LinkedIn", icon: <FaTwitter />, href: "#" },
];

interface FooterLink {
  label: string;
  href: string;
}

export const footerLinks: FooterLink[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Offer terms", href: "#" },
  { label: "Legal notice", href: "#" },
  { label: "Sitemap", href: "#" },
];

export const WithLogoBelow = () => (
  <Box as="footer" bg={mode("gray.50", "gray.800")}>
    <Box
      maxW={{ base: "xl", md: "7xl" }}
      mx="auto"
      px={{ base: "6", md: "8" }}
      py={{ base: "12", md: "20" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        mb={{ base: "10", lg: "16" }}
        align="flex-start"
        id="top"
      >
        <SimpleGrid
          flex="1"
          w={{ base: "full", lg: "auto" }}
          maxW={{ lg: "2xl" }}
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "12", md: "10" }}
          fontSize="sm"
          marginEnd={{ md: "4", lg: "16" }}
        >
          {links.map((group, idx) => (
            <LinkGroup key={idx} data={group} />
          ))}
        </SimpleGrid>
        <Box
          flex="2"
          maxW={{ lg: "420px" }}
          ml={{ lg: "auto" }}
          fontSize="sm"
          mt={{ base: "12", lg: 0 }}
        >
          <Text
            casing="uppercase"
            mb={{ base: 6, lg: 10 }}
            fontWeight="bold"
            letterSpacing="wide"
          >
            Subscribe to our newsletter!
          </Text>
          <Text lineHeight="tall">
            Get Overflow resources, curated content, and design inspiration
            delivered straight into your inbox. Be the first to learn the news
            about new features and product updates.
          </Text>
          <SubscribeForm />
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        justify="space-between"
        fontSize="sm"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "4", md: "12" }}
          mt={{ base: "8", lg: 0 }}
          w={{ base: "full", lg: "auto" }}
          justify={{ base: "space-between", lg: "flex-start" }}
          align={{ base: "flex-start", md: "center" }}
        >
          <Logo iconColor={mode("blue.500", "blue.300")} h="6" />
          <HStack spacing="2" mt={{ lg: "8" }} as="ul" listStyleType="none">
            {socialLinks.map((link, idx) => (
              <Box as="li" key={idx}>
                <SocialLink href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialLink>
              </Box>
            ))}
          </HStack>
        </Stack>
        <Box>
          <Text>&copy; {new Date().getFullYear()} Envelope Inc</Text>
          <Text mt="2">
            Made with <Heart /> by Chakra Inc.
          </Text>
        </Box>
      </Flex>
    </Box>
  </Box>
);

const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color={mode("blue.500", "blue.300")}
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
);

export default WithLogoBelow;
