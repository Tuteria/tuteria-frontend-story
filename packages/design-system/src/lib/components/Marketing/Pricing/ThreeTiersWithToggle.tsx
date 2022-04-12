import {
  Box,
  BoxProps,
  Button,
  createIcon,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  ListItemProps,
  SimpleGrid,
  Stack,
  StackProps,
  Switch,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";

const CheckIcon = createIcon({
  viewBox: "0 0 17 12",
  d: "M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z",
});

const PricingDetail = (props: ListItemProps) => {
  const { children, ...rest } = props;
  return (
    <ListItem
      display="flex"
      alignItems="flex-start"
      fontWeight="medium"
      maxW="260px"
      {...rest}
    >
      <CheckIcon mr="4" mt="1" color={mode("blue.500", "blue.300")} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  );
};

const PopularBadge = (props: BoxProps) => (
  <Box
    whiteSpace="nowrap"
    top="-4"
    left="50%"
    transform="translateX(-50%)"
    pos="absolute"
    rounded="md"
    fontWeight="bold"
    fontSize="sm"
    px="4"
    py="1"
    textTransform="uppercase"
    bg="blue.500"
    color="white"
    {...props}
  />
);

interface PriceDisplayProps {
  currency: string;
  price: number;
}

const PriceDisplay = (props: PriceDisplayProps) => {
  const { currency, price } = props;
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      my="5"
      fontWeight="extrabold"
    >
      <Text fontSize="4xl" mr="2">
        {currency}
      </Text>
      <Text fontSize="72px" lineHeight="1" letterSpacing="tight">
        {price}
      </Text>
    </Flex>
  );
};

const PricingWrapper = (props: BoxProps & { highlight?: boolean }) => {
  const { highlight, ...rest } = props;

  const popularStyles: BoxProps = {
    borderWidth: "2px",
    borderColor: "blue.500",
    zIndex: 1,
    px: "8",
    pt: "12",
    pb: "10",
    top: { lg: "-8" },
  };

  const styles = highlight ? popularStyles : null;

  return (
    <Box
      w="full"
      maxW="md"
      mx="auto"
      bg={mode("white", "gray.700")}
      px="10"
      pt="8"
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...styles}
      {...rest}
    />
  );
};

interface PricingCardProps extends BoxProps {
  features: string[];
  popular?: boolean;
  name: string;
  description: string;
  price: number;
  onClick?: () => void;
}

const PricingCard = (props: PricingCardProps) => {
  const { onClick, features, name, description, price, popular, ...rest } =
    props;

  return (
    <PricingWrapper highlight={popular} {...rest}>
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Flex direction="column" justify="center">
        <Text align="center" fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text
          align="center"
          mt="2"
          color={mode("gray.600", "gray.400")}
          maxW="16rem"
          mx="auto"
        >
          {description}
        </Text>
        <PriceDisplay currency="$" price={price} />
        <Box
          as="button"
          display="inline-flex"
          mx="auto"
          color={mode("blue.500", "blue.300")}
          fontWeight="semibold"
        >
          Switch to yearly billing
        </Box>
      </Flex>

      <List stylePosition="outside" mt="8" spacing={4}>
        {features.map((feature, idx) => (
          <PricingDetail key={idx}>{feature}</PricingDetail>
        ))}
      </List>

      <Button
        minH="3.5rem"
        rounded="lg"
        fontWeight="bold"
        colorScheme={popular ? "blue" : "gray"}
        mt="8"
        w="100%"
        onClick={onClick}
      >
        Get Started
      </Button>
    </PricingWrapper>
  );
};

const Arrow = createIcon({
  viewBox: "0 0 18 20",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6917 0.931609C12.5121 0.759534 12.2684 0.653809 12 0.653809C11.7316 0.653809 11.4879 0.759534 11.3083 0.931609C11.3009 0.938735 11.2935 0.945976 11.2863 0.953328C11.2803 0.95951 11.2743 0.965771 11.2684 0.972108L6.27026 6.30662C5.89265 6.70964 5.91325 7.34247 6.31628 7.72008C6.7193 8.09769 7.35213 8.07709 7.72974 7.67406L11 4.1837V14.4615C11 15.3488 10.6691 16.1877 10.0987 16.7966C9.5303 17.4032 8.77385 17.7307 8 17.7307H1C0.447715 17.7307 0 18.1784 0 18.7307C0 19.283 0.447715 19.7307 1 19.7307H8C9.34788 19.7307 10.6263 19.1586 11.5582 18.164C12.488 17.1716 13 15.8387 13 14.4615V4.1837L16.2703 7.67406C16.6479 8.07709 17.2807 8.09769 17.6837 7.72008C18.0867 7.34247 18.1074 6.70964 17.7297 6.30662L12.7316 0.972108C12.7257 0.965771 12.7197 0.95951 12.7137 0.953328C12.7065 0.945976 12.6991 0.938735 12.6917 0.931609Z"
      fill="currentColor"
    />
  ),
});

const DurationSwitcher = (props: StackProps) => {
  return (
    <Stack align="center" {...props}>
      <VisuallyHidden as="label" htmlFor="switcher">
        Switch price duration
      </VisuallyHidden>
      <HStack spacing="3">
        <Text fontWeight="semibold">Monthly</Text>
        <Switch id="switcher" />
        <Text fontWeight="semibold">Yearly</Text>
      </HStack>
      <Flex color={mode("blue.500", "blue.300")}>
        <Text fontWeight="bold" mr="2">
          Save up to 30%
        </Text>
        <Arrow />
      </Flex>
    </Stack>
  );
};

export const ThreeTiersWithToggle = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} py="20">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          textAlign={{ sm: "center" }}
        >
          Pricing Plans
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          color={mode("gray.600", "gray.400")}
          textAlign={{ sm: "center" }}
        >
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </Text>
        <DurationSwitcher mt="8" />
        <SimpleGrid
          alignItems="flex-start"
          mt={{ base: "10", lg: "24" }}
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: "12", lg: "8" }}
        >
          <PricingCard
            name="Job Board"
            description="Job board for hiring designers and creative professionals."
            price={149}
            features={[
              "Sapiente libero doloribus modi",
              "Vel ipsa esse repudiandae",
              "Itaque cupiditate adipisci",
            ]}
          />
          <PricingCard
            popular
            name="Designer Search"
            description="Our premium search allows you to quickly find the perfect designer."
            price={299}
            features={[
              "Duis aute irure dolor repreht",
              "Excepteur sint occa cupidatat",
              "Vel ipsa esse andae excepturi",
              "Itaque cupiditate adipisci quim",
            ]}
          />
          <PricingCard
            name="Mega Pro"
            description="Combine the power of search with the job board at a discounted rate."
            price={499}
            features={[
              "Duis aute irure dolor",
              "Excepteur sint occaecat",
              "Vel ipsa esse repudiandae",
            ]}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ThreeTiersWithToggle;
