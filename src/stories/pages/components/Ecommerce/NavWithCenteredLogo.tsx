import { Box } from "@chakra-ui/react";
import * as React from "react";

import { Select, useColorModeValue } from "@chakra-ui/react";
import { chakra, IconProps } from "@chakra-ui/react";

import { SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";

import {
  AccordionButton,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";

import {
  Center,
  Stack,
  Text,
  VisuallyHidden,
  useToken,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import { Flex, HStack, Link } from "@chakra-ui/react";
import { MdMenu, MdSearch } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiHeartLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { Accordion } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export const TopBanner = (props: BoxProps) => {
  return (
    <Box
      bg="blue.500"
      color="white"
      textAlign="center"
      py="2"
      fontSize="sm"
      fontWeight="medium"
      {...props}
    >
      Free shipping on all orders before 24th December 2021
    </Box>
  );
};

export type SubNavLinkGroupProps = {
  label: string;
  links: Array<{ label: string; url: string }>;
};

export const SubNavLinkGroup = (props: SubNavLinkGroupProps) => {
  const { label, links } = props;
  return (
    <Box>
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {label}
      </Text>
      <Stack spacing="4" as="ul" mt="6" listStyleType="none">
        {links.map(({ label, url }) => (
          <li key={url}>
            <Link href={url} fontSize="sm">
              {label}
            </Link>
          </li>
        ))}
      </Stack>
    </Box>
  );
};

type NavProductItemProps = {
  imageUrl: string;
  name: string;
  price: number;
  currency: string;
  href: string;
};

export const NavProductItem = (props: NavProductItemProps) => {
  const { imageUrl, name, price, currency, href } = props;
  return (
    <Box as="a" href={href} width="full">
      <Image
        fit="cover"
        width="full"
        src={imageUrl}
        alt={name}
        height={{ base: "7.5rem", lg: "12.5rem" }}
        rounded="lg"
      />
      <Box mt="2">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="sm" fontWeight="semibold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
          }).format(price)}
        </Text>
      </Box>
    </Box>
  );
};
const DesktopNavMenu = () => {
  return (
    <Box
      px="10"
      pt="6"
      pb="16"
      bg={mode("white", "gray.800")}
      display={{ base: "none", lg: "block" }}
    >
      <Box maxWidth="8xl" mx="auto">
        <Stack direction="row" spacing="5vw" justify="space-between">
          <Stack direction="row" spacing="5vw" flexShrink={0}>
            <SubNavLinkGroup {...data.category} />
            <SubNavLinkGroup {...data.featured} />
          </Stack>
          <SimpleGrid
            spacing="6"
            columns={{ base: 2, lg: 4 }}
            alignContent="flex-start"
            width="full"
            maxW={{ base: "400px", lg: "780px" }}
          >
            {data.products.map((product) => (
              <NavProductItem key={product.id} href="#" {...product} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

const MobileNavMenu = () => (
  <Accordion
    as={Stack}
    spacing="4"
    pt="6"
    index={0}
    overflow="auto"
    display={{ lg: "none" }}
  >
    <NavAccordionItem label="Best Seller">
      <Stack direction="row" pt="5">
        {data.products.slice(0, 3).map((product) => (
          <NavProductItem key={product.id} href="#" {...product} />
        ))}
      </Stack>
      <Box mt="8">
        <SubNavLinkGroup {...data.category} />
      </Box>
    </NavAccordionItem>
    <NavAccordionItem label="Products">Products</NavAccordionItem>
    <NavAccordionItem label="New">New</NavAccordionItem>
    <NavAccordionItem label="Sale">Sale</NavAccordionItem>
  </Accordion>
);

export const NavMenu = {
  Desktop: DesktopNavMenu,
  Mobile: MobileNavMenu,
};

export const items = {
  wishlist: {
    label: "Wishlist",
    icon: RiHeartLine,
    href: "#",
  },
  user: {
    label: "Sign in",
    icon: AiOutlineUser,
    href: "#",
  },
  cart: {
    label: "Cart",
    icon: RiShoppingCartLine,
    href: "#",
  },
  search: {
    label: "Search",
    icon: RiSearchLine,
    href: "#",
  },
};

const DesktopNavHeader = () => (
  <Box
    py="6"
    bg={mode("white", "gray.800")}
    px="10"
    display={{ base: "none", lg: "block" }}
  >
    <Flex justify="space-between" align="center" maxWidth="8xl" mx="auto">
      <HStack
        role="navigation"
        aria-label="Main navigation"
        spacing="10"
        fontWeight="semibold"
        fontSize="sm"
      >
        <Link href="#">Best Sellers</Link>
        <Link href="#" color={mode("blue.500", "blue.200")}>
          Products
        </Link>
        <Link href="#">New</Link>
        <Link href="#">Sale</Link>
      </HStack>
      <a href="#" rel="home" aria-label="Go to Store Homepage">
        <Logo h="4" />
      </a>
      <HStack spacing="4">
        <CurrencySelect />
        <HStack spacing="4">
          <NavAction.Desktop {...items.search} />
          <NavAction.Desktop {...items.wishlist} />
          <NavAction.Desktop {...items.user} />
          <NavAction.Desktop {...items.cart} />
        </HStack>
      </HStack>
    </Flex>
  </Box>
);

const MobileNavHeader = (props: {
  onClickMenu?: VoidFunction;
  onClickSearch?: VoidFunction;
}) => {
  const { onClickMenu, onClickSearch } = props;
  return (
    <Flex
      px="4"
      py="4"
      align="center"
      justify="space-between"
      display={{ base: "flex", lg: "none" }}
    >
      <HStack spacing="3">
        <Center w="8" h="8" as="button" type="button" onClick={onClickMenu}>
          <VisuallyHidden>Toggle Menu</VisuallyHidden>
          <Box as={MdMenu} fontSize="3xl" />
        </Center>
        <Logo h="4" />
      </HStack>
      <HStack>
        <CurrencySelect />
        <Center
          w="8"
          h="8"
          flexShrink={0}
          as="button"
          type="button"
          onClick={onClickSearch}
        >
          <VisuallyHidden>Search Store</VisuallyHidden>
          <Box as={MdSearch} fontSize="2xl" />
        </Center>
      </HStack>
    </Flex>
  );
};

export const NavHeader = {
  Desktop: DesktopNavHeader,
  Mobile: MobileNavHeader,
};
type NavActionProps = {
  href?: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
};

const MobileNavAction = (props: NavActionProps) => {
  const { label, icon, isActive, href } = props;
  const blue500 = useToken("colors", "blue.500");
  return (
    <Center
      as="a"
      href={href}
      height="3.5rem"
      rounded="4"
      aria-current={isActive ? "page" : undefined}
      _activeLink={{
        bg: mode("blue.50", transparentize(blue500, 0.2)),
        color: mode("blue.600", "blue.300"),
      }}
      _hover={{ bg: mode("gray.100", "gray.700") }}
    >
      <Stack direction="column" align="center" as="button" spacing="0">
        <Box fontSize="xl" as={icon} />
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Center>
  );
};

const DesktopNavAction = (props: NavActionProps) => {
  const { label, icon, isActive, href } = props;
  return (
    <Center
      w="8"
      h="8"
      as="a"
      href={href}
      aria-current={isActive ? "page" : undefined}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Box
        focusable="false"
        fontSize="xl"
        as={icon}
        color={mode("gray.600", "gray.300")}
      />
    </Center>
  );
};

export const NavAction = {
  Mobile: MobileNavAction,
  Desktop: DesktopNavAction,
};

export const NavAccordionItem = (
  props: AccordionItemProps & { label: string }
) => {
  const { label, children, ...rest } = props;
  return (
    <AccordionItem border="0" _last={{ border: "0" }} {...rest}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            border="0"
            _expanded={{ color: mode("blue.500", "blue.200") }}
          >
            <Box flex="1" textAlign="left" fontWeight="semibold">
              {label}
            </Box>
            <Box fontSize="2xl" as={isExpanded ? FiMinus : FiPlus} />
          </AccordionButton>
          <AccordionPanel border="0">{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export const MobileBottomNav = () => (
  <Box
    bg={mode("white", "gray.800")}
    pos="fixed"
    width="full"
    bottom="env(safe-area-inset-bottom)"
    borderTopWidth="1px"
    display={{ lg: "none" }}
  >
    <SimpleGrid columns={4} padding="2">
      <NavAction.Mobile {...items.cart} isActive />
      <NavAction.Mobile {...items.search} />
      <NavAction.Mobile {...items.user} />
      <NavAction.Mobile {...items.wishlist} />
    </SimpleGrid>
  </Box>
);

export const Logo = (props: IconProps) => (
  <chakra.svg
    viewBox="0 0 116 15"
    fill="currentColor"
    flexShrink={0}
    {...props}
  >
    <path d="M0 6.95215C0 5.97363 0.18457 5.0625 0.553711 4.21875C0.922852 3.36914 1.45605 2.63379 2.15332 2.0127C2.85645 1.38574 3.71191 0.893555 4.71973 0.536133C5.7334 0.178711 6.87891 0 8.15625 0C9.27539 0 10.3008 0.114258 11.2324 0.342773C12.1699 0.56543 13.04 0.908203 13.8428 1.37109L12.5596 3.48047C12.3193 3.32227 12.041 3.18164 11.7246 3.05859C11.4141 2.93555 11.0801 2.83301 10.7227 2.75098C10.3711 2.66309 10.0049 2.5957 9.62402 2.54883C9.24902 2.50195 8.87695 2.47852 8.50781 2.47852C7.61719 2.47852 6.82324 2.58984 6.12598 2.8125C5.42871 3.0293 4.83984 3.33691 4.35938 3.73535C3.88477 4.12793 3.52148 4.59961 3.26953 5.15039C3.02344 5.69531 2.90039 6.2959 2.90039 6.95215C2.90039 7.63184 3.0293 8.25586 3.28711 8.82422C3.54492 9.39258 3.91699 9.88477 4.40332 10.3008C4.89551 10.7109 5.49316 11.0332 6.19629 11.2676C6.90527 11.4961 7.70508 11.6104 8.5957 11.6104C9 11.6104 9.40137 11.5811 9.7998 11.5225C10.1982 11.4639 10.582 11.3848 10.9512 11.2852C11.3262 11.1797 11.6865 11.0566 12.0322 10.916C12.3779 10.7695 12.7002 10.6113 12.999 10.4414L14.2822 12.5508C13.5322 13.0312 12.665 13.4092 11.6807 13.6846C10.6963 13.9541 9.65039 14.0889 8.54297 14.0889C7.13086 14.0889 5.8916 13.9072 4.8252 13.5439C3.75879 13.1748 2.86816 12.6709 2.15332 12.0322C1.43848 11.3877 0.899414 10.6318 0.536133 9.76465C0.178711 8.8916 0 7.9541 0 6.95215Z" />
    <path d="M20.9496 0.166992H23.7357V3.75293H32.2787V0.166992H35.0736V13.9043H32.2787V6.13477H23.7357V13.9043H20.9496V0.166992Z" />
    <path d="M47.2605 0.166992H50.2137L56.8582 13.9043H53.9314L52.8328 11.5928H44.8084L43.7449 13.9043H40.8094L47.2605 0.166992ZM51.7342 9.29883L48.7635 3.05859L45.8719 9.29883H51.7342Z" />
    <path d="M62.5939 0.166992H65.3801V7.27734L72.6311 0.166992H76.1994L69.4318 6.72363L76.1994 13.9043H72.4904L67.4279 8.66602L65.3801 10.6436V13.9043H62.5939V0.166992Z" />
    <path d="M81.1705 0.166992H88.1578C89.2125 0.166992 90.1266 0.27832 90.9 0.500977C91.6734 0.717773 92.315 1.03418 92.8248 1.4502C93.3346 1.86621 93.7125 2.37305 93.9586 2.9707C94.2105 3.56836 94.3365 4.24512 94.3365 5.00098C94.3365 5.51074 94.275 5.99707 94.152 6.45996C94.0289 6.91699 93.8385 7.33887 93.5807 7.72559C93.3287 8.1123 93.0094 8.45801 92.6227 8.7627C92.2359 9.06152 91.7818 9.31055 91.2604 9.50977L94.2486 13.9043H90.8385L88.2545 10.002H88.1754L83.9566 9.99316V13.9043H81.1705V0.166992ZM88.2281 7.58496C88.7555 7.58496 89.2154 7.52344 89.608 7.40039C90.0064 7.27734 90.3375 7.10449 90.6012 6.88184C90.8707 6.65918 91.0699 6.38965 91.1988 6.07324C91.3336 5.75098 91.401 5.39355 91.401 5.00098C91.401 4.2334 91.1373 3.6416 90.61 3.22559C90.0826 2.80371 89.2887 2.59277 88.2281 2.59277H83.9566V7.58496H88.2281Z" />
    <path d="M105.926 0.166992H108.879L115.523 13.9043H112.597L111.498 11.5928H103.474L102.41 13.9043H99.4746L105.926 0.166992ZM110.399 9.29883L107.429 3.05859L104.537 9.29883H110.399Z" />
  </chakra.svg>
);
export const data = {
  products: [
    {
      id: "1",
      name: "Mamba Wooden",
      currency: "USD",
      price: 39.99,
      imageUrl:
        "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "2",
      name: "Hamilton Bestik",
      currency: "USD",
      price: 199.99,
      imageUrl:
        "https://images.unsplash.com/photo-1612786143266-b0363a2f9ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "3",
      name: "Rolex Marsarito",
      currency: "USD",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    },
    {
      id: "4",
      name: "Hamilton Automatic",
      currency: "USD",
      price: 499.99,
      imageUrl:
        "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ],
  category: {
    label: "Shop by Category",
    links: [
      { label: "All Watches", url: "#" },
      { label: "New arrivals", url: "#" },
      { label: "Coming Soon", url: "#" },
      { label: "Men’s Watches", url: "#" },
      { label: "Women’s Watches", url: "#" },
      { label: "Luxurye", url: "#" },
    ],
  },
  featured: {
    label: "Featured",
    links: [
      { label: "Staff Picks", url: "#" },
      { label: "Top Picks", url: "#" },
      { label: "Gold Watches", url: "#" },
      { label: "Colorful Dials", url: "#" },
      { label: "Independent makers", url: "#" },
      { label: "View all Collections", url: "#" },
    ],
  },
};
export const CurrencySelect = () => (
  <Select
    border="0"
    color={useColorModeValue("gray.600", "gray.300")}
    focusBorderColor={useColorModeValue("blue.500", "blue.200")}
    fontWeight="medium"
    fontSize="sm"
    aria-label="Select Currency"
  >
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="AED">AED</option>
  </Select>
);
export const NavWithCenteredLogo = () => (
  <>
    <TopBanner />
    <NavHeader.Desktop />
    <NavMenu.Desktop />
    <NavHeader.Mobile />
    <NavMenu.Mobile />
    <MobileBottomNav />
    <Box bg="blackAlpha.400" pos="fixed" zIndex="-1" inset="0" />
  </>
);
