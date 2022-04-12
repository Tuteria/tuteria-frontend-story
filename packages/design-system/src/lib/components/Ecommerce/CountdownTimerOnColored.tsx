import { Box, Button, Icon, LightMode, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { HStack } from "@chakra-ui/react";
import { useInterval } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  expiresInSeconds: number;
}

// For more sophisticated timer hooks checkout https://github.com/amrlabib/react-timer-hook
export const useTimer = (props: Props) => {
  const { expiresInSeconds } = props;
  const [seconds, setSeconds] = useState(
    getSecondsFromExpiry(expiresInSeconds)
  );

  useInterval(() => setSeconds(getSecondsFromExpiry(expiresInSeconds)), 1000);

  return {
    seconds: Math.floor(seconds % 60),
    minutes: Math.floor((seconds % (60 * 60)) / 60),
    hours: Math.floor((seconds % (60 * 60 * 24)) / (60 * 60)),
    days: Math.floor(seconds / (60 * 60 * 24)),
  };
};

const getSecondsFromExpiry = (expire: number) =>
  Math.round((expire - new Date().getTime()) / 1000);
const expiresInSeconds = new Date().getTime() + 141690000;

export const Timer = () => {
  const { seconds, minutes, hours, days } = useTimer({
    expiresInSeconds,
  });

  return (
    <HStack spacing="4">
      <TimeUnit value={days} label="DAY" />
      <TimeUnit value={hours} label="HRS" />
      <TimeUnit value={minutes} label="MIN" />
      <TimeUnit value={seconds} label="SEC" />
    </HStack>
  );
};

interface Props {
  value: number;
  label: string;
}

const TimeUnit = (props: Props) => {
  const { value, label } = props;
  return (
    <Box textAlign="center">
      <Text fontWeight="medium" fontSize="xl" lineHeight="1.2">
        {value.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </Text>
      <Text
        fontSize="xs"
        fontWeight="semibold"
        color="whiteAlpha.700"
        textTransform="uppercase"
        lineHeight="1rem"
      >
        {label}
      </Text>
    </Box>
  );
};
export const CountdownTimerOnColored = () => (
  <Box as="section" pt="8" pb="12">
    <Box bg="blue.600" color="white" position="relative">
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "3", md: "2.5" }}
        pr={{ md: "16" }}
      >
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify={{ base: "space-between", lg: "center" }}
          spacing={{ base: "2", lg: "7.5rem" }}
        >
          <Timer />
          <Text fontWeight="medium" fontSize="xl" textAlign="center">
            Sale ends soon! 50% off shoes
          </Text>
          <LightMode>
            <Button
              colorScheme="blue"
              variant="ghost"
              bg="white"
              px="8"
              display={{ base: "none", md: "inline-block" }}
              _focus={{ boxShadow: "none" }}
              _focusVisible={{ boxShadow: "outline" }}
            >
              Shop now
            </Button>
          </LightMode>
          <Box
            as="button"
            aria-label="Close banner"
            position="absolute"
            right={{ base: "2", md: "4", lg: "6" }}
            top={{ base: "2", md: "unset" }}
          >
            <Icon as={VscChromeClose} boxSize={{ base: "5", md: "6" }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  </Box>
);
