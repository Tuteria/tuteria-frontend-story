import {
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  LightMode,
  List,
  ListIcon,
  ListItem,
  ListItemProps,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";

interface PriceDisplayProps extends FlexProps {
  currency: string;
  price: number;
  duration: string;
}

const PriceDisplay = (props: PriceDisplayProps) => {
  const { currency, price, duration, ...rest } = props;
  return (
    <Flex w="100%" align="center" fontWeight="extrabold" {...rest}>
      <Text fontSize="4xl" lineHeight="1" marginEnd="2">
        {currency}
      </Text>
      <Text fontSize="6xl" lineHeight="1" letterSpacing="tight">
        {price}
      </Text>
      <Text fontSize="2xl" marginStart="1" alignSelf="flex-end">
        {duration}
      </Text>
    </Flex>
  );
};

const PricingDetail = (props: ListItemProps) => {
  const { children, ...rest } = props;
  return (
    <ListItem display="flex" alignItems="center" fontWeight="medium" {...rest}>
      <ListIcon
        fontSize="2xl"
        as={HiCheckCircle}
        color="gray.400"
        marginEnd="4"
        mt="1"
      />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  );
};

interface PricingCardProps extends BoxProps {
  features: string[];
  name: string;
  description: string;
  duration: string;
  price: number;
  colorScheme: string;
  onClick?: () => void;
}

const PricingCard = (props: PricingCardProps) => {
  const {
    features,
    name,
    description,
    onClick,
    price,
    duration,
    colorScheme: c,
    ...rest
  } = props;
  return (
    <Box
      bg={mode("white", "gray.700")}
      shadow="md"
      w="full"
      maxW="lg"
      mx="auto"
      rounded="lg"
      overflow="hidden"
      {...rest}
    >
      <Box bg={`${c}.600`} px="8" py="8" color="white">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <PriceDisplay my="2" currency="€" price={price} duration={duration} />
        <Text>{description}</Text>
      </Box>
      <Box px="8" py="6" borderBottomWidth="1px">
        <LightMode>
          <Button
            onClick={onClick}
            size="lg"
            w="full"
            colorScheme={c}
            rightIcon={<HiArrowNarrowRight />}
          >
            Start for free
          </Button>
        </LightMode>
        <Text
          mt="2"
          color={mode("gray.600", "gray.400")}
          align="center"
          fontSize="sm"
        >
          No credit card required
        </Text>
      </Box>
      <Box px="8" pt="10" pb="12">
        <List stylePosition="outside" spacing="4">
          {features.map((feature, index) => (
            <PricingDetail key={index}>{feature}</PricingDetail>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const FeatureItem: React.FC = ({ children }) => (
  <HStack>
    <Box
      flexShrink={0}
      as={HiCheckCircle}
      fontSize="xl"
      color={mode("blue.500", "blue.300")}
    />
    <Text>{children}</Text>
  </HStack>
);

export const TwoTiersWithBottomBlock = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} py="20">
      <Box
        maxW={{ base: "xl", md: "5xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box maxW="2xl" mx="auto" textAlign={{ sm: "center" }}>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
            mb="3"
            color={mode("gray.600", "gray.400")}
          >
            Pricing
          </Text>
          <Heading
            as="h1"
            size="3xl"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Pay as you grow
          </Heading>
          <Text mt="6" fontSize="xl" color={mode("gray.600", "gray.400")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </Text>
        </Box>
        <SimpleGrid
          alignItems="flex-start"
          mt="16"
          columns={{ base: 1, lg: 2 }}
          spacing="10"
        >
          <PricingCard
            colorScheme="blue"
            name="Startup"
            price={29}
            duration="/ mo"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing."
            features={[
              "50 quod similique",
              "2000 libero doloribus modi nostru",
              "Unlimited basic esse repudiandae exceptur",
              "90 cupiditate adipisci quibusdam",
            ]}
          />
          <PricingCard
            colorScheme="teal"
            name="Enterprise"
            price={79}
            duration="/ mo"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing."
            features={[
              "100 quod similique",
              "20K libero doloribus modi nostru",
              "Unlimited ipsa esse repudiandae exceptur",
              "9000 cupiditate adipisci quibusdam",
            ]}
          />
        </SimpleGrid>
        <Box
          mt="10"
          bg={mode("white", "gray.700")}
          shadow="md"
          rounded="lg"
          px="10"
          pt="10"
          pb="12"
          mx="auto"
          maxW={{ base: "lg", lg: "unset" }}
        >
          <Text
            color={mode("blue.500", "blue.300")}
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
          >
            Features & Services
          </Text>
          <Text fontSize="3xl" mt="2" fontWeight="bold">
            Included in all plans
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 2 }} mt="5" spacing="5">
            <FeatureItem>Pre-approvals & role-based control</FeatureItem>
            <FeatureItem>
              Easy onboarding, training and dedicated support
            </FeatureItem>
            <FeatureItem>
              Individual limits and policies for each person
            </FeatureItem>
            <FeatureItem>
              Full visibility over all payments in real time
            </FeatureItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default TwoTiersWithBottomBlock;
