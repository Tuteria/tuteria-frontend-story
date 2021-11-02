import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useMediaQuery,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...props }, ref) => {
    const [isMobile] = useMediaQuery("(max-width: 520px)");
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    const onClickReveal = () => {
      onToggle();
      const input = inputRef.current;
      if (input) {
        input.focus({ preventScroll: true });
        const length = input.value.length * 2;
        requestAnimationFrame(() => {
          input.setSelectionRange(length, length);
        });
      }
    };

    return (
      <FormControl id="password">
        {/* <Flex justify="space-between">
          <FormLabel>{title}</FormLabel>
        </Flex> */}
        <InputGroup>
          <InputRightElement>
            <IconButton
              bg="transparent !important"
              variant="ghost"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              color="#A2A2A2"
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={mergeRef}
            name={title}
            _focus={{ boxShadow: "none" }}
            type={isOpen ? "text" : "password"}
            border="none"
            marginTop={isMobile ? "0" : "10px"}
            borderRadius="10px"
            autoComplete={props.id}
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";
