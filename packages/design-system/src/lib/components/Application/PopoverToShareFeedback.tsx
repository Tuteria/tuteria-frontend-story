import {
  Box,
  Button,
  Center,
  chakra,
  Circle,
  Flex,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SquareProps,
  Stack,
  StackProps,
  Textarea,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface FeedbackOptionProps
  extends UseRadioProps,
    Omit<SquareProps, "onChange"> {}

export const FeedbackOption = (props: FeedbackOptionProps) => {
  const { isChecked, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props);

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} />
      <Circle
        borderWidth="1px"
        size="8"
        fontSize="xl"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          transform: "scale(1.125)",
        }}
        _checked={{
          transform: "scale(1.125)",
          borderColor: useColorModeValue("blue.500", "blue.300"),
        }}
        {...getCheckboxProps(rest)}
      />
    </label>
  );
};

interface RadioGroupProps extends Omit<StackProps, "onChange"> {
  name: string;
  options: string[];
  onChange: (value: string) => void;
}

export const FeedbackRadioGroup = (props: RadioGroupProps) => {
  const { name, options, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  });

  return (
    <HStack {...getRootProps(rest)}>
      {options.map((value) => (
        <FeedbackOption key={value} {...getRadioProps({ value })}>
          {value}
        </FeedbackOption>
      ))}
    </HStack>
  );
};

interface Props {
  forwardedRef: React.MutableRefObject<null>;
}

export const FeedbackForm = (props: Props) => {
  const { forwardedRef } = props;
  const [message, setMessage] = React.useState("");
  const [emoji, setEmoji] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic here
    console.log("sending feedback:", message, emoji);
  };

  // If the form was successfully submitted, you can also return the `FeedbackSuccessPanel` instead
  return (
    <chakra.form onSubmit={handleSubmit}>
      <Stack spacing="3">
        <Textarea
          ref={forwardedRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Feedback"
          required
          focusBorderColor={useColorModeValue("blue.500", "blue.300")}
          _placeholder={{
            opacity: 1,
            color: useColorModeValue("gray.500", "whiteAlpha.700"),
          }}
          resize="none"
        />
        <Flex justifyContent="space-between">
          <FeedbackRadioGroup
            name="rating"
            options={["😍", "😀", "🤨", "😨"]}
            onChange={setEmoji}
          />
          <Button type="submit" size="sm" variant="outline">
            Send
          </Button>
        </Flex>
      </Stack>
    </chakra.form>
  );
};

export const FeedbackPopover = () => {
  const initialFocusRef = React.useRef(null);
  return (
    // you should remove`isOpen` since is only there to look good for the showcase
    <Popover initialFocusRef={initialFocusRef} isOpen>
      <PopoverTrigger>
        <Button variant="outline">Feedback</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent boxShadow="xl" p="3" _focus={{ outline: "none" }}>
          <FeedbackForm forwardedRef={initialFocusRef} />
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export const PopoverToShareFeedback = () => (
  <Box mx="auto" maxW="5xl" minH="sm" p={{ base: 4, sm: 6, md: 8 }}>
    <Center>
      <FeedbackPopover />
    </Center>
  </Box>
);
