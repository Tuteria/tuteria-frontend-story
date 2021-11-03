import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  HStack,
  LightMode,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue as mode,
  useColorModeValue,
  useControllableState,
} from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";
import * as React from "react";

interface PricingCardProps extends BoxProps {
  button: React.ReactElement;
  data: {
    name: string;
    description: string;
    price: number;
    amountSaved?: number;
    duration: "monthly" | "yearly";
    benefits: string[];
  };
}

const BillingBadge = (props: BoxProps) => (
  <Box
    rounded="full"
    fontSize="sm"
    bg="white"
    color="gray.900"
    px="3"
    py="1"
    pos="absolute"
    top="4"
    right="4"
    fontWeight="bold"
    {...props}
  />
);

const PricingCard = (props: PricingCardProps) => {
  const { button, data, ...rest } = props;
  const { name, description, price, amountSaved, duration, benefits } = data;
  const isFree = price == 0;

  return (
    <Flex
      direction="column"
      px="6"
      py="8"
      rounded="lg"
      pos="relative"
      maxW="2xl"
      mx="auto"
      {...rest}
    >
      <Box flex="1">
        {!isFree && (
          <BillingBadge>
            {duration === "monthly" ? "Billed monthly" : `Save ${amountSaved}`}
          </BillingBadge>
        )}
        <Text fontSize="2xl" lineHeight="1" fontWeight="bold">
          {name}
        </Text>
        <Flex align="center" fontWeight="extrabold" mt="4" mb="3">
          <Text
            fontSize={{ base: "6xl", xl: "7xl" }}
            lineHeight="1"
            flexShrink={0}
          >
            ${price}
          </Text>
          {!isFree && (
            <>
              <Box mx="4">
                <Box
                  w="2px"
                  h="12"
                  bg="white"
                  opacity={0.5}
                  transform="rotate(15deg)"
                />
              </Box>
              <Text fontSize="xl" lineHeight="1.2">
                per <br /> {duration === "monthly" ? "month" : "year"}
              </Text>
            </>
          )}
        </Flex>
        <Box>{isFree ? <>&nbsp;</> : `$249 billed annually`}</Box>
        <Box mt="6">
          <Text fontSize="xl" fontWeight="semibold" mb="6">
            {description}
          </Text>
          <UnorderedList spacing="3">
            {benefits.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Box mt="10">
        <LightMode>{button}</LightMode>
      </Box>
    </Flex>
  );
};

type Duration = "monthly" | "yearly";

interface DurationSwitchProps {
  defaultValue?: Duration;
  value?: Duration;
  onChange?: (value: Duration) => void;
}

function useSwitch(props: DurationSwitchProps) {
  const [value, setValue] = useControllableState(props);

  const isYearly = value === "yearly";
  const isMonthly = value === "monthly";

  return {
    value,
    setValue,
    isMonthly,
    isYearly,
    buttonProps: {
      "aria-checked": isYearly,
      role: "switch",
      style: {
        userSelect: "none",
      } as React.CSSProperties,
      onClick() {
        const nextValue = value === "yearly" ? "monthly" : "yearly";
        setValue(nextValue);
      },
    },
  };
}

const DurationSwitch = (props: DurationSwitchProps) => {
  const { buttonProps, isMonthly, isYearly } = useSwitch(props);

  return (
    <HStack
      as="button"
      fontSize="2xl"
      fontWeight="semibold"
      spacing="4"
      display="inline-flex"
      {...buttonProps}
    >
      <Text color={isYearly ? mode("blue.600", "blue.400") : undefined}>
        Annual
      </Text>
      <Flex
        align="center"
        justify={isYearly ? "flex-start" : "flex-end"}
        height="5"
        w="35px"
        rounded="full"
        px="2px"
        bg="blue.600"
      >
        <Circle layout />
      </Flex>
      <Text color={isMonthly ? mode("blue.600", "blue.400") : undefined}>
        Monthly
      </Text>
    </HStack>
  );
};

type MotionBoxProps = BoxProps & HTMLMotionProps<"div">;
const MotionBox = motion<BoxProps>(Box);

const Circle = (props: MotionBoxProps) => (
  <MotionBox bg="white" width="4" height="4" rounded="full" {...props} />
);

const MultiColored = () => (
  <Box as="section" bg={useColorModeValue("gray.50", "gray.800")} py="24">
    <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Box textAlign={{ base: "center", lg: "start" }}>
        <Heading
          size="3xl"
          lineHeight="normal"
          color={useColorModeValue("blue.600", "blue.400")}
          letterSpacing="tight"
          fontWeight="extrabold"
        >
          Ready to Get Started?
        </Heading>
        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          mt="4"
          maxW="2xl"
          mx={{ base: "auto", lg: "unset" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi
          unde repudiandae natus sequi unde.
        </Text>
      </Box>
      <Flex
        align="center"
        justify={{ base: "center", lg: "flex-start" }}
        my="10"
      >
        <DurationSwitch defaultValue="yearly" />
      </Flex>
      <SimpleGrid mt="10" columns={{ base: 1, lg: 3 }} spacing="10">
        <PricingCard
          bg="gray.700"
          color="white"
          button={
            <Button w="full" size="lg" h="16" colorScheme="blue">
              Start for Free
            </Button>
          }
          data={{
            name: "Free",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 0,
            duration: "monthly",
            benefits: [
              "No credit card needed",
              "Full access to all features",
              "Demo components",
              "Free Figma sources",
              "Support",
            ],
          }}
        />
        <PricingCard
          bg="gray.700"
          color="white"
          button={
            <Button w="full" h="16" colorScheme="blue" size="lg">
              Add to cart
            </Button>
          }
          data={{
            name: "Freelancer",
            description:
              "At erat pellentesque adipiscing commodo elit at imperdiet.",
            price: 29,
            duration: "monthly",
            benefits: [
              "No credit card needed",
              "Full access to all features",
              "Demo components",
              "Free Figma sources",
              "Support",
            ],
          }}
        />
        <PricingCard
          bg="blue.600"
          color="white"
          button={
            <Button w="full" color="revert" h="16" size="lg">
              Add to cart
            </Button>
          }
          data={{
            name: "Agency",
            description:
              "Proin sagittis nisl rhoncus mattis rhoncus urna neque.",
            price: 39,
            duration: "monthly",
            benefits: [
              "No credit card needed",
              "Full access to all features",
              "Demo components",
              "Free Figma sources",
              "Support",
            ],
          }}
        />
      </SimpleGrid>
    </Box>
  </Box>
);

export default MultiColored;
