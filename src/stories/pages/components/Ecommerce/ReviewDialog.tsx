import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { HStack, Icon, StackProps } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const ReviewForm = (props: React.ComponentProps<"form">) => (
  <form {...props}>
    <Stack spacing="6">
      <FormControl id="name">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Name
        </FormLabel>
        <Input
          name="name"
          placeholder="Your name"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="email">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Email
        </FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="rating">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Rating
        </FormLabel>
        <Rating defaultValue={2} size="xl" />
      </FormControl>

      <FormControl id="title">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Title
        </FormLabel>
        <Input
          name="title"
          placeholder="Your title"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="comment">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Comment
        </FormLabel>
        <Textarea
          name="comment"
          placeholder="Your comment"
          rows={4}
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
          resize="none"
        />
      </FormControl>

      <Button type="submit" colorScheme="blue" alignSelf="start" size="lg">
        Submit review
      </Button>
    </Stack>
  </form>
);

interface Props {
  defaultValue?: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  rootProps?: StackProps;
}

export const Rating = (props: Props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.300", "gray.600");
  const activeColor = useColorModeValue("blue.500", "blue.200");
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};
export const ReviewDialog = () => (
  <Box height="100vh">
    {/*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */}
    <Modal
      isOpen={true}
      onClose={console.log}
      size="xl"
      isCentered
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="xl"
        mx={{ base: "2.5", lg: "16" }}
        overflow="hidden"
      >
        <ModalCloseButton
          top="0"
          right="0"
          size="lg"
          borderRadius="none"
          borderBottomLeftRadius="md"
        />
        <ModalBody
          px={{ base: "5", md: "12", lg: "16" }}
          py={{ base: "10", md: "12", lg: "16" }}
          pb={{ base: "6" }}
        >
          <Stack spacing="6">
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              color={useColorModeValue("black", "white")}
            >
              Write a review
            </Heading>
            <ReviewForm />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);
