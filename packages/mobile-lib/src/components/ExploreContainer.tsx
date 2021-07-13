import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <Box
      textAlign="center"
      position="absolute"
      left={0}
      right={0}
      top="50%"
      transform="translateY(-50%)"
    >
      <Heading>{name}</Heading>
      <Text fontSize={16} lineHeight={22} color="gray">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </Text>
    </Box>
  );
};

export default ExploreContainer;
