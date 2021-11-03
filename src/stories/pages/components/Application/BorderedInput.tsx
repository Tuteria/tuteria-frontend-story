import {
  FormControl,
  FormLabel,
  Input,
  Select,
  BoxProps,
  useMediaQuery,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "../components/PasswordField";

interface BorderedInputProps extends BoxProps {
  type: "text" | "select" | "password" | "email";
  title: string;
  id: string;
  placeholder?: string;
}

export const BorderedInput = (props: BorderedInputProps) => {
  const [isMobile] = useMediaQuery("(max-width: 520px)");
  const { type, id, placeholder, title, ...rest } = props;
  const exchanges = ["Binance", "Poloniex"];
  const strippedId = id.replace(" ", "");
  let inputBlock;

  if (type == "password") {
    inputBlock = <PasswordField id={strippedId} title={title} />;
  } else if (type == "select") {
    inputBlock = (
      <Select
        name={strippedId}
        _focus={{ boxShadow: "none", border: "none" }}
        marginTop={isMobile ? "0" : "10px"}
        border="none"
        borderRadius="10px"
        required
        placeholder={placeholder}
      >
        {exchanges.map((exchange) => (
          <option>{exchange}</option>
        ))}
      </Select>
    );
  } else {
    inputBlock = (
      <Input
        _focus={{ boxShadow: "none" }}
        name={strippedId}
        type={type}
        border="none"
        marginTop={isMobile ? "0" : "10px"}
        autoComplete={id}
        borderRadius="10px"
        required
      />
    );
  }

  return (
    <FormControl
      id={strippedId}
      position="relative"
      border="1px solid #4663CD"
      borderRadius="10px"
      {...rest}
    >
      <FormLabel
        fontWeight="600"
        color="#4663CD"
        fontSize={isMobile ? "10px" : "15px"}
        margin="0"
        padding="0 5px"
        background="white"
        position="absolute"
        top={isMobile ? "-8px" : "-13px"}
        zIndex="1"
        left="15px"
      >
        {title}
      </FormLabel>
      {inputBlock}
    </FormControl>
  );
};

export default BorderedInput;
