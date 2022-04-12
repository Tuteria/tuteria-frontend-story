import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import {
  BoxProps,
  Button,
  Heading,
  Image,
  LightMode,
  Skeleton,
  Text,
} from "@chakra-ui/react";

type ImageWithOverlayProps = BoxProps & {
  title: string;
  description?: string;
  url?: string;
  alt?: string;
  src: string;
  spacing?: string;
};

export const ImageWithOverlay = (props: ImageWithOverlayProps) => {
  const {
    title,
    description,
    url,
    src,
    alt,
    spacing = "8",
    objectPosition = "cover",
    ...rest
  } = props;

  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      width="full"
      {...rest}
    >
      <Image
        boxSize="full"
        maxHeight={{ base: "240px", md: "100%" }}
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        fallback={<Skeleton />}
      />
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, blackAlpha.300 20%, blackAlpha.700)"
        px={{ base: "6", md: "10" }}
        py={{ base: "6", md: "10" }}
        boxSize="full"
      >
        <Stack spacing={spacing}>
          <Stack spacing="4">
            <Heading size="lg" color="white">
              {title}
            </Heading>
            {description && (
              <Text fontSize="lg" color="white" maxW="2xs">
                {description}
              </Text>
            )}
          </Stack>
          <LightMode>
            <Button
              bg="white"
              color="gray.800"
              alignSelf="start"
              as="a"
              href={url}
            >
              Shop now
            </Button>
          </LightMode>
        </Stack>
      </Box>
    </Box>
  );
};
export const ShowCaseOnSpanningColumn = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Stack
      height={{ md: "640px" }}
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "6", md: "10" }}
      align="stretch"
    >
      <ImageWithOverlay
        flex="1"
        objectPosition="top center"
        title="All dressed"
        description="Dress that feels a little fany for when pajamas aren’t cutting it"
        src="https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
        alt="Lovely Image"
      />
      <Stack spacing={{ base: "6", md: "10" }} maxW={{ md: "400px" }}>
        <ImageWithOverlay
          spacing="4"
          title="Topped off"
          src="https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80"
          alt="Lovely Image"
        />
        <ImageWithOverlay
          spacing="4"
          title="Go chic"
          src="https://images.unsplash.com/photo-1548306530-3ece53b754b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt="Lovely Image"
        />
      </Stack>
    </Stack>
  </Box>
);
