import {
  Badge,
  Box,
  chakra,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  HTMLChakraProps,
  LightMode,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToken,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialButton = chakra("a", {
  baseStyle: {
    rounded: "lg",
    w: "8",
    h: "8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "blackAlpha.400",
    color: "white",
    transition: "all 0.2s",
    _hover: {
      bg: "blackAlpha.500",
    },
  },
});

export const Logo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string }
) => {
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

export const LanguageSwitcher = () => (
  <FormControl w="auto" display="flex" alignItems="center">
    <FormLabel mb="1" fontSize="sm" fontWeight="normal">
      Language & region:
    </FormLabel>
    <Select
      w="120px"
      flexShrink={0}
      fontSize="inherit"
      fontWeight="bold"
      variant="unstyled"
      id="lang"
      name="lang"
      defaultValue="English (UK)"
    >
      <option value="Français">Français</option>
      <option value="Deutsch">Deutsch</option>
      <option value="English (UK)">English (UK)</option>
      <option value="English (EU)">English (EU)</option>
      <option value="English (US)">English (US)</option>
    </Select>
  </FormControl>
);

export interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: React.ReactElement;
  }>;
}

export const links: LinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Why Envelope", href: "#" },
      { label: "Our story", href: "#" },
      {
        label: "Careers",
        href: "#",
        badge: (
          <LightMode>
            <Badge colorScheme="blue" fontSize="0.625rem">
              Hiring
            </Badge>
          </LightMode>
        ),
      },
      { label: "Press", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "SAML SSO", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Media Assets", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Login", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Chat with us", href: "#" },
      { label: "Email us", href: "#" },
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

type FooterLink = {
  label: string;
  href: string;
};

export const footerLinks: FooterLink[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Offer terms", href: "#" },
  { label: "Legal notice", href: "#" },
  { label: "Sitemap", href: "#" },
];

export const WithFourColumns = () => (
  <Box as="footer" bg="blue.600" color="white" py="64px">
    <Box maxW="7xl" px="8" mx="auto">
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        pb="8"
        align="flex-start"
        id="top"
      >
        <Box paddingEnd="12" mb={{ base: "10", lg: 0 }}>
          <Logo color="white" h="6" />
          <HStack spacing="4" mt="8" as="ul">
            {socialLinks.map((link, idx) => (
              <SocialButton key={idx} href={link.href}>
                <Box srOnly>{link.label}</Box>
                {link.icon}
              </SocialButton>
            ))}
          </HStack>
        </Box>
        <SimpleGrid
          w="full"
          maxW={{ base: "unset", lg: "2xl" }}
          columns={{ base: 2, lg: 4 }}
          spacing={{ base: "8", md: "4" }}
          fontSize="sm"
        >
          {links.map((group, idx) => (
            <Box key={idx}>
              <Text fontWeight="bold" mb="4">
                {group.title}
              </Text>
              <Stack as="ul" listStyleType="none">
                {group.links.map((link, idx) => (
                  <Box as="li" key={idx}>
                    <Box
                      as="a"
                      href={link.href}
                      _hover={{ textDecor: "underline" }}
                    >
                      {link.label}
                      {link.badge && (
                        <Box as="span" marginStart="2">
                          {link.badge}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Divider my="10" borderColor="blue.300" />
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        justify="space-between"
        fontSize="sm"
      >
        <Wrap
          id="bottom"
          spacing={{ base: "4", lg: "8" }}
          mt={{ base: "4", lg: "0" }}
        >
          <WrapItem>
            <Box>&copy; Envelope</Box>
          </WrapItem>
          {footerLinks.map((link, idx) => (
            <WrapItem key={idx}>
              <Box as="a" href={link.href}>
                {link.label}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
        <LanguageSwitcher />
      </Flex>
    </Box>
  </Box>
);

export default WithFourColumns;
