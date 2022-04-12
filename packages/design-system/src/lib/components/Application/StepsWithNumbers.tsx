import {
  AbsoluteCenter,
  AbsoluteCenterProps,
  Box,
  Circle,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

const determineState = (activeIndex: number, index: number) => {
  if (activeIndex > index) return "complete";
  if (activeIndex === index + 1) return "active";
  return "incomplete";
};

export const useProgressState = <T extends Record<string, unknown>[]>(
  steps: T
) => {
  const [activeStep, setActiveStep] = React.useState(1);
  const factor = steps.length - 1;
  return {
    value: (100 / factor) * (activeStep - 1),
    getState: (index: number) => determineState(activeStep, index),
    onClick: (index: number) => () => setActiveStep(index + 1),
  };
};

interface StepProps {
  state: "active" | "complete" | "incomplete";
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Step = (props: StepProps) => {
  const { label, children, state, onClick } = props;

  const isCompleted = state === "complete";
  const isIncompleted = state === "incomplete";

  const inCompletedColor = useColorModeValue("gray.600", "gray.300");
  const defaultColor = useColorModeValue("white", "gray.900");
  const completedBg = useColorModeValue("blue.500", "blue.300");
  const incompletedBg = useColorModeValue("gray.200", "gray.600");

  return (
    <Box as="li" display="inline-flex">
      <button onClick={onClick}>
        <Circle
          aria-hidden
          zIndex={1}
          position="relative"
          size="8"
          bg={isCompleted ? completedBg : incompletedBg}
        >
          <Box
            as="span"
            color={isIncompleted ? inCompletedColor : defaultColor}
            fontWeight="bold"
          >
            {children}
          </Box>
        </Circle>
        <Box srOnly>{isCompleted ? `${label} - Completed` : label}</Box>
      </button>
    </Box>
  );
};

interface ProgressbarProps extends AbsoluteCenterProps {
  value: number;
}

export const Progressbar = (props: ProgressbarProps) => {
  const { value, ...rest } = props;
  return (
    <AbsoluteCenter
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`Progress: ${value}%`}
      position="absolute"
      height="2"
      axis="vertical"
      bg={useColorModeValue("gray.100", "gray.700")}
      width="full"
      {...rest}
    >
      <Box
        bg={useColorModeValue("blue.500", "blue.300")}
        height="inherit"
        width={`${value}%`}
      />
    </AbsoluteCenter>
  );
};

const steps = [
  { label: "Contact", url: "/contact" },
  { label: "Delivery", url: "/delivery" },
  { label: "Confirm", url: "/confirm" },
  { label: "Completed", url: "/complete" },
];

export const StepsWithNumbers = () => {
  const { value, getState, onClick } = useProgressState(steps);
  return (
    <Box mx="auto" maxW="3xl" py="10" px={{ base: "6", md: "8" }}>
      <Box as="nav" aria-label="Steps" position="relative">
        <Flex
          justify="space-between"
          align="center"
          as="ol"
          listStyleType="none"
          zIndex={1}
        >
          {steps.map((step, index) => (
            <Step
              label={step.label}
              key={index}
              state={getState(index)}
              onClick={onClick(index)}
            >
              {index + 1}
            </Step>
          ))}
        </Flex>
        <Progressbar value={value} />
      </Box>
    </Box>
  );
};
