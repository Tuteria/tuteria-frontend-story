import {
  Box,
  BoxProps,
  Center,
  chakra,
  Circle,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconProps,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  SimpleGrid,
  SquareProps,
  Stack,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { RiHeartLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={RiSearchLine} color="gray.500" fontSize="lg" />
      </InputLeftElement>
      <Input
        focusBorderColor="blue.500"
        width="full"
        fontSize="sm"
        variant="filled"
        type="text"
        placeholder="What are you looking for?"
        autoComplete="off"
      />
    </InputGroup>
  );
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

type NavFeaturedImageProps = BoxProps & {
  label: string;
  href?: string;
  imageUrl: string;
  bottomOffset?: string;
};

export const NavFeaturedImage = (props: NavFeaturedImageProps) => {
  const { label, href = "#", imageUrl, bottomOffset = "5", ...rest } = props;
  return (
    <Box
      as="a"
      display="block"
      href={href}
      height="280px"
      width="full"
      position="relative"
      userSelect="none"
      {...rest}
    >
      <Image
        w="full"
        fit="cover"
        rounded="lg"
        alt={label}
        src={imageUrl}
        height="full"
        position="relative"
      />
      <Box
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight="semibold"
        fontSize="sm"
        px="3"
        py="0.5"
        rounded="sm"
        bg={mode("white", "gray.600")}
        position="absolute"
        bottom={bottomOffset}
        left="50%"
        transform="auto"
        translateX="-50%"
      >
        {label}
      </Box>
    </Box>
  );
};

const DesktopNavCategorySubmenu = () => {
  return (
    <Box bg={mode("white", "gray.800")} px="8" pt="8" pb="10">
      <Flex
        justify="space-between"
        width="full"
        fontSize="sm"
        maxW="8xl"
        mx="auto"
      >
        <Flex width="480px" justify="space-between">
          <Box width="full">
            <Text fontWeight="semibold" mb="6">
              {data.category.label}
            </Text>
            <Stack spacing="4" align="flex-start">
              {data.category.links.map((link, i) => (
                <Link key={i}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
          <Box width="full">
            <Text fontWeight="semibold" mb="6">
              {data.featured.label}
            </Text>
            <Stack spacing="4" align="flex-start">
              {data.featured.links.map((link, i) => (
                <Link key={i}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
        </Flex>
        <Stack direction="row" spacing="8" width="full" maxW="856px">
          <NavFeaturedImage
            label="Men’s jewelry"
            imageUrl="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          />
          <NavFeaturedImage
            width="500px"
            label="Men’s suits"
            imageUrl="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
          />
        </Stack>
      </Flex>
    </Box>
  );
};

const MobileNavCategorySubmenu = () => (
  <Box p="5" width="full" height="100%" overflowY="auto">
    <Text fontWeight="bold" mb="4">
      Men
    </Text>
    <NavFeaturedImage
      height="32"
      bottomOffset="3"
      label="Men's Suit"
      imageUrl="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
    />
    <Stack spacing="10" mt="10">
      <Box>
        <Text fontWeight="bold" mb="4">
          {data.category.label}
        </Text>
        <SimpleGrid columns={2} spacing="4">
          {data.category.links.map((link) => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Text fontWeight="bold" mb="4">
          {data.featured.label}
        </Text>
        <SimpleGrid columns={2} spacing="4">
          {data.featured.links.map((link) => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  </Box>
);

export const NavCategorySubmenu = {
  Mobile: MobileNavCategorySubmenu,
  Desktop: DesktopNavCategorySubmenu,
};

type NavItemProps = {
  isActive?: boolean;
  href?: string;
  label?: string;
};

const DesktopNavItem = (props: FlexProps & NavItemProps) => {
  const { isActive, label, href = "#", ...rest } = props;
  return (
    <Flex
      as="a"
      href={href}
      direction="column"
      justify="center"
      minH="10"
      fontSize="sm"
      fontWeight="medium"
      position="relative"
      aria-current={isActive ? "page" : undefined}
      color={mode("gray.600", "gray.400")}
      _activeLink={{
        borderBottomWidth: "2px",
        borderColor: "currentColor",
        color: mode("blue.500", "blue.300"),
      }}
      _hover={{
        color: mode("blue.500", "blue.300"),
      }}
      {...rest}
    >
      {label}
    </Flex>
  );
};

const MobileNavItem = (props: BoxProps & NavItemProps) => {
  const { label, href, isActive, ...rest } = props;
  return (
    <Box
      as="a"
      href={href}
      aria-current={isActive ? "page" : undefined}
      py="2"
      px="3"
      _activeLink={{
        bg: mode("white", "gray.600"),
        shadow: "base",
      }}
      {...rest}
    >
      {label}
    </Box>
  );
};

const NavItem = {
  Desktop: DesktopNavItem,
  Mobile: MobileNavItem,
};

const menus = [
  { label: "All Categories", href: "#" },
  { label: "Electronics", href: "#" },
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Baby & Toys", href: "#" },
  { label: "Grocery", href: "#" },
  { label: "Winery", href: "#" },
];

const DesktopNavCategoryMenu = () => {
  return (
    <Box
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor={mode("gray.200", "gray.700")}
      bg={mode("white", "gray.800")}
      px="8"
    >
      <Box maxW="8xl" mx="auto">
        <HStack spacing="8">
          {menus.map((link) => (
            <NavItem.Desktop
              key={link.label}
              {...link}
              isActive={link.label === "Men"}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

const MobileNavCategoryMenu = () => {
  return (
    <Box
      width="32%"
      minW="100px"
      bg={mode("gray.50", "gray.700")}
      color={mode("gray.600", "gray.100")}
      borderEndWidth="1px"
      py="6"
    >
      <Stack spacing="1">
        {menus.map((link) => (
          <NavItem.Mobile
            key={link.label}
            {...link}
            isActive={link.label === "Men"}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const NavCategoryMenu = {
  Mobile: MobileNavCategoryMenu,
  Desktop: DesktopNavCategoryMenu,
};

type NavActionProps = {
  href?: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  children?: React.ReactNode;
};

const MobileNavAction = (props: NavActionProps) => {
  const { label, icon, isActive, href, children } = props;
  return (
    <Center
      as="a"
      href={href}
      height="56px"
      rounded="4"
      aria-current={isActive ? "page" : undefined}
      _activeLink={{ color: mode("blue.500", "blue.300") }}
      _hover={{ bg: mode("gray.100", "gray.700") }}
    >
      <Flex position="relative" direction="column" align="center" as="button">
        <Box fontSize="xl" as={icon} />
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
        {children}
      </Flex>
    </Center>
  );
};

const DesktopNavAction = (props: NavActionProps) => {
  const { label, icon, href = "#" } = props;
  return (
    <HStack spacing="2" as="a" href={href}>
      <Text fontSize="sm" fontWeight="semibold">
        {label}
      </Text>
      <Icon as={icon} />
    </HStack>
  );
};

export const NavAction = {
  Mobile: MobileNavAction,
  Desktop: DesktopNavAction,
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
      <NavAction.Mobile {...items.cart} isActive>
        <CartCount right="-2">3</CartCount>
      </NavAction.Mobile>
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
  category: {
    label: "Categories",
    links: [
      { label: "Men’s fashion", url: "#" },
      { label: "New arrivals", url: "#" },
      { label: "Clothing", url: "#" },
      { label: "Footwear", url: "#" },
      { label: "Watches", url: "#" },
      { label: "Jewellry", url: "#" },
      { label: "Backpacks", url: "#" },
      { label: "Luggage", url: "#" },
    ],
  },
  featured: {
    label: "Top Brands",
    links: [
      { label: "Nike", url: "#" },
      { label: "Tommy Hilfiger", url: "#" },
      { label: "Skechers", url: "#" },
      { label: "Converse", url: "#" },
      { label: "Puma", url: "#" },
      { label: "Adidas", url: "#" },
      { label: "Under Armour", url: "#" },
      { label: "Jack & Jones", url: "#" },
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

export const CartCount = (props: SquareProps) => (
  <Circle
    fontSize="xs"
    fontWeight="semibold"
    centerContent
    position="absolute"
    top="-2"
    right="-4"
    bg={mode("blue.500", "blue.300")}
    color={mode("white", "gray.800")}
    width="5"
    height="5"
    {...props}
  />
);
export const NavWithCenteredSearch = () => (
  <>
    <Flex
      direction="column"
      pb="4.5rem"
      overflow="hidden"
      display={{ base: "flex", lg: "none" }}
    >
      <Box px="4" py="4" borderBottomWidth="1px" overflow="auto">
        <Flex
          align="center"
          justify="space-between"
          mb="3"
          display={{ base: "flex", lg: "none" }}
        >
          <HStack spacing="3">
            <Center w="8" h="8" as="button" type="button">
              <VisuallyHidden>Toggle Menu</VisuallyHidden>
              <Box as={MdMenu} fontSize="3xl" />
            </Center>
            <Logo h="3" />
          </HStack>
          <Box>
            <CurrencySelect />
          </Box>
        </Flex>
        <SearchInput />
      </Box>

      <Flex flex="1" fontSize="sm" overflow="auto">
        <NavCategoryMenu.Mobile />
        <NavCategorySubmenu.Mobile />
      </Flex>
      <MobileBottomNav />
    </Flex>

    <Box minH="100vh" display={{ base: "none", lg: "block" }}>
      <Box px="8" bg={mode("white", "gray.800")}>
        <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
          <HStack flex="24rem" spacing="32px">
            <Logo h="3" />
            <Box flexShrink={0}>
              <CurrencySelect />
            </Box>
          </HStack>
          <Box width="full" mx="8">
            <SearchInput />
          </Box>
          <HStack spacing="8" flexShrink={0}>
            <NavAction.Desktop label="Wishlist" icon={RiHeartLine} />
            <NavAction.Desktop label="Sign in" icon={AiOutlineUser} />
            <Box position="relative">
              <NavAction.Desktop label="Cart" icon={RiShoppingCartLine} />
              <CartCount>1</CartCount>
            </Box>
          </HStack>
        </Flex>
      </Box>
      <NavCategoryMenu.Desktop />
      <NavCategorySubmenu.Desktop />
      <Box bg="blackAlpha.400" pos="fixed" zIndex="-1" inset="0" />
    </Box>
  </>
);
