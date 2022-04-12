import {
  AbsoluteCenter,
  Box,
  BoxProps,
  Center,
  CenterProps,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const StepContent = (props: CenterProps) => (
  <AbsoluteCenter height="full" width="full" position="absolute" zIndex={1}>
    <Center height="full" fontSize="sm" fontWeight="semibold" {...props} />
  </AbsoluteCenter>
);

const properties = {
  top: {
    transform: "skew(var(--arrow-skew))",
    borderToOmit: "borderBottom",
  },
  bottom: {
    transform: "skew(calc(var(--arrow-skew) * -1))",
    borderToOmit: "borderTop",
  },
};

interface SkewBoxProps extends BoxProps {
  placement: "top" | "bottom";
  isCurrent?: boolean;
}

export const SkewBox = (props: SkewBoxProps) => {
  const { placement, isCurrent, ...rest } = props;

  const defaultColor = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");

  const { borderToOmit, transform } = properties[placement];
  const placementProps = {
    [placement]: 0,
    transform,
    [borderToOmit]: "0",
    borderColor: isCurrent ? accentColor : undefined,
  };

  return (
    <Box
      aria-hidden
      bg={isCurrent ? accentColor : defaultColor}
      borderWidth="1px"
      position="absolute"
      height="50%"
      _groupHover={{
        bg: !isCurrent ? hoverBgColor : undefined,
      }}
      _groupFocus={{
        border: "2px solid",
        borderColor: useColorModeValue("blue.200", "blue.300"),
        [borderToOmit]: "0",
      }}
      width="full"
      {...placementProps}
      {...rest}
    />
  );
};

interface StepProps {
  isCurrent?: boolean;
  children: React.ReactNode;
}

export const Step = (props: StepProps) => {
  const { children, isCurrent } = props;
  const color = useColorModeValue("white", "gray.900");
  return (
    <Box as="li" flex="1">
      <Box as="button" outline={0} className="group" width="full">
        <Flex
          align="center"
          height="12"
          justify="center"
          position="relative"
          css={{ "--arrow-skew": "20deg" }}
        >
          <SkewBox isCurrent={isCurrent} placement="top" />
          <StepContent color={isCurrent ? color : "inherit"}>
            {children}
          </StepContent>
          <SkewBox isCurrent={isCurrent} placement="bottom" />
        </Flex>
      </Box>
    </Box>
  );
};

export const StepsWithArrow = () => (
  <Box mx="auto" maxW="3xl" py="10" px={{ base: "6", md: "8" }}>
    <nav aria-label="Progress steps">
      <HStack as="ol" listStyleType="none" spacing="0">
        <Step>View Job</Step>
        <Step isCurrent>Invite</Step>
        <Step>Review</Step>
        <Step>Hire (3)</Step>
      </HStack>
    </nav>
  </Box>
);
