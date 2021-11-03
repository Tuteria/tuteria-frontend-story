import {
  Box,
  Stack,
  Button,
  Text,
  HStack,
  BoxProps,
  Circle,
  Collapse,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { CheckIcon } from "@chakra-ui/icons";

export interface Context {
  step: number;
  isActive: boolean;
  isCompleted: boolean;
  isLastStep: boolean;
}

export const StepContext = React.createContext<Context | null>(null);

export const useStep = () => {
  const context = React.useContext(StepContext);
  if (!context) {
    throw Error("Wrap your step with `<Steps />`");
  } else {
    return context;
  }
};

export const StepConnector = () => {
  const { isCompleted } = useStep();
  const accentColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      borderStartWidth="1px"
      borderStartColor={isCompleted ? accentColor : "inherit"}
      height="6"
      mb="2"
      ms="4"
      ps="4"
    />
  );
};

interface Props {
  activeStep: number;
  children?: React.ReactNode;
}

export const Steps = (props: Props) => {
  const { activeStep, children } = props;
  const steps = React.useMemo(
    () =>
      React.Children.toArray(children).map((step, i, arr) => (
        <StepContext.Provider
          key={i}
          value={{
            isActive: activeStep === i,
            isCompleted: activeStep > i,
            isLastStep: arr.length !== i + 1,
            step: i + 1,
          }}
        >
          {step}
          {arr.length !== i + 1 && <StepConnector />}
        </StepContext.Provider>
      )),
    [activeStep, children]
  );
  return <>{steps}</>;
};

export const StepContent = (props: BoxProps) => {
  const { isLastStep } = useStep();
  return (
    <Box
      color={useColorModeValue("gray.600", "gray.400")}
      borderStartWidth={isLastStep ? "1px" : "0"}
      ms="4"
      ps="8"
      py="3"
      fontSize="sm"
      {...props}
    />
  );
};

interface StepProps extends BoxProps {
  title?: string;
}

export const Step = (props: StepProps) => {
  const { title, children, ...boxProps } = props;
  const { isActive, isCompleted, step } = useStep();

  const accentColor = useColorModeValue("blue.500", "blue.300");
  const mutedColor = useColorModeValue("gray.600", "whiteAlpha.800");
  const activeColor = useColorModeValue("white", "black");

  return (
    <Box {...boxProps}>
      <HStack spacing="4">
        <Circle
          size="8"
          fontWeight="bold"
          color={
            isActive ? activeColor : isCompleted ? accentColor : mutedColor
          }
          bg={isActive ? accentColor : "transparent"}
          borderColor={isCompleted ? accentColor : "inherit"}
          borderWidth={isActive ? "0px" : "1px"}
        >
          {isCompleted ? <Icon as={CheckIcon} /> : step}
        </Circle>
        <Heading
          fontSize="lg"
          fontWeight="semibold"
          color={isActive || isCompleted ? "inherit" : mutedColor}
        >
          {title}
        </Heading>
      </HStack>
      <Collapse in={isActive}>{children}</Collapse>
    </Box>
  );
};

interface Options {
  initialStep: number;
}

export const useSteps = (options: Options) => {
  const { initialStep } = options;
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const nextStep = () => setActiveStep(activeStep + 1);
  const prevStep = () => setActiveStep(activeStep - 1);
  const reset = () => setActiveStep(0);

  return { nextStep, prevStep, reset, activeStep };
};

export const VerticalSteps = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Box
      maxW="2xl"
      mx="auto"
      py={{ base: 12, md: 20 }}
      px={{ base: "6", md: "8" }}
    >
      <Steps activeStep={activeStep}>
        <Step title="Select campaign settings">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                For each ad campaign that you create, you can control how much
                you&apos;re willing to spend on clicks and conversions, which
                networks and geographical locations you want your ads to show
                on, and more.
              </Text>
              <HStack>
                <Button isDisabled variant="ghost">
                  Back
                </Button>
                <Button onClick={nextStep}>Next</Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Create an ad group">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                An ad group contains one or more ads which target a shared set
                of keywords.
              </Text>
              <HStack>
                <Button onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button onClick={nextStep}>Next</Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Create an ad">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                Try out different ad text to see what brings in the most
                customers, and learn how to enhance your ads using features like
                ad extensions. If you run into any problems with your ads, find
                out how to tell if they&apos;re running and how to resolve
                approval issues.
              </Text>
              <HStack>
                <Button onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button onClick={nextStep}>Finish</Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
      </Steps>
      {activeStep === 3 && (
        <HStack py="16" spacing="4" shouldWrapChildren>
          <Text>All steps completed - you&apos;re finished</Text>
          <Button onClick={reset} variant="link" verticalAlign="baseline">
            Reset
          </Button>
        </HStack>
      )}
    </Box>
  );
};
