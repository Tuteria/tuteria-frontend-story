import {
  Box,
  Button,
  chakra,
  FormControl,
  FormLabel,
  IconProps,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const SubscribeForm = () => (
  <Stack
    as="form"
    spacing="3"
    onSubmit={(e) => {
      e.preventDefault();
      // manage form submission
    }}
  >
    <FormControl id="email">
      <FormLabel srOnly>Enter your email</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        size="lg"
        fontSize="md"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      />
    </FormControl>
    <Button
      type="submit"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="md"
      colorScheme="blue"
      size="lg"
    >
      Get my 20% off
    </Button>
  </Stack>
);

export const Logo = (props: IconProps) => (
  <chakra.svg
    viewBox="0 0 116 15"
    fill="currentColor"
    flexShrink={0}
    {...props}
  >
    <path d="M0 6.95215C0 5.97363 0.18457 5.0625 0.553711 4.21875C0.922852 3.36914 1.45605 2.63379 2.15332 2.0127C2.85645 1.38574 3.71191 0.893555 4.71973 0.536133C5.7334 0.178711 6.87891 0 8.15625 0C9.27539 0 10.3008 0.114258 11.2324 0.342773C12.1699 0.56543 13.04 0.908203 13.8428 1.37109L12.5596 3.48047C12.3193 3.32227 12.041 3.18164 11.7246 3.05859C11.4141 2.93555 11.0801 2.83301 10.7227 2.75098C10.3711 2.66309 10.0049 2.5957 9.62402 2.54883C9.24902 2.50195 8.87695 2.47852 8.50781 2.47852C7.61719 2.47852 6.82324 2.58984 6.12598 2.8125C5.42871 3.0293 4.83984 3.33691 4.35938 3.73535C3.88477 4.12793 3.52148 4.59961 3.26953 5.15039C3.02344 5.69531 2.90039 6.2959 2.90039 6.95215C2.90039 7.63184 3.0293 8.25586 3.28711 8.82422C3.54492 9.39258 3.91699 9.88477 4.40332 10.3008C4.89551 10.7109 5.49316 11.0332 6.19629 11.2676C6.90527 11.4961 7.70508 11.6104 8.5957 11.6104C9 11.6104 9.40137 11.5811 9.7998 11.5225C10.1982 11.4639 10.582 11.3848 10.9512 11.2852C11.3262 11.1797 11.6865 11.0566 12.0322 10.916C12.3779 10.7695 12.7002 10.6113 12.999 10.4414L14.2822 12.5508C13.5322 13.0312 12.665 13.4092 11.6807 13.6846C10.6963 13.9541 9.65039 14.0889 8.54297 14.0889C7.13086 14.0889 5.8916 13.9072 4.8252 13.5439C3.75879 13.1748 2.86816 12.6709 2.15332 12.0322C1.43848 11.3877 0.899414 10.6318 0.536133 9.76465C0.178711 8.8916 0 7.9541 0 6.95215Z" />
    <path d="M20.9496 0.166992H23.7357V3.75293H32.2787V0.166992H35.0736V13.9043H32.2787V6.13477H23.7357V13.9043H20.9496V0.166992Z" />
    <path d="M47.2605 0.166992H50.2137L56.8582 13.9043H53.9314L52.8328 11.5928H44.8084L43.7449 13.9043H40.8094L47.2605 0.166992ZM51.7342 9.29883L48.7635 3.05859L45.8719 9.29883H51.7342Z" />
    <path d="M62.5939 0.166992H65.3801V7.27734L72.6311 0.166992H76.1994L69.4318 6.72363L76.1994 13.9043H72.4904L67.4279 8.66602L65.3801 10.6436V13.9043H62.5939V0.166992Z" />
    <path d="M81.1705 0.166992H88.1578C89.2125 0.166992 90.1266 0.27832 90.9 0.500977C91.6734 0.717773 92.315 1.03418 92.8248 1.4502C93.3346 1.86621 93.7125 2.37305 93.9586 2.9707C94.2105 3.56836 94.3365 4.24512 94.3365 5.00098C94.3365 5.51074 94.275 5.99707 94.152 6.45996C94.0289 6.91699 93.8385 7.33887 93.5807 7.72559C93.3287 8.1123 93.0094 8.45801 92.6227 8.7627C92.2359 9.06152 91.7818 9.31055 91.2604 9.50977L94.2486 13.9043H90.8385L88.2545 10.002H88.1754L83.9566 9.99316V13.9043H81.1705V0.166992ZM88.2281 7.58496C88.7555 7.58496 89.2154 7.52344 89.608 7.40039C90.0064 7.27734 90.3375 7.10449 90.6012 6.88184C90.8707 6.65918 91.0699 6.38965 91.1988 6.07324C91.3336 5.75098 91.401 5.39355 91.401 5.00098C91.401 4.2334 91.1373 3.6416 90.61 3.22559C90.0826 2.80371 89.2887 2.59277 88.2281 2.59277H83.9566V7.58496H88.2281Z" />
    <path d="M105.926 0.166992H108.879L115.523 13.9043H112.597L111.498 11.5928H103.474L102.41 13.9043H99.4746L105.926 0.166992ZM110.399 9.29883L107.429 3.05859L104.537 9.29883H110.399Z" />
  </chakra.svg>
);
export const PopupWithDiscount = () => (
  <Box height="100vh">
    <Modal
      isOpen={true}
      onClose={() => void 0}
      size="2xl"
      // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" mx="4">
        <ModalBody>
          <Stack
            maxW="xs"
            mx="auto"
            py={{ base: "12", md: "16" }}
            spacing={{ base: "6", md: "10" }}
          >
            <Logo height="5" />
            <Stack spacing="3" textAlign="center">
              <Text fontSize="lg">Enter your email below &amp; get</Text>
              <Text
                color={useColorModeValue("blue.500", "blue.200")}
                fontWeight="extrabold"
                fontSize={{ base: "5xl", md: "6xl" }}
                textTransform="uppercase"
                transform="scale(1.2)"
              >
                20% off
              </Text>
              <Text fontSize="lg">
                <Box as="span" whiteSpace="nowrap" fontWeight="bold">
                  on your next purchase
                </Box>{" "}
                + exclusive access to new products
              </Text>
            </Stack>
            <SubscribeForm />
            <Link
              fontSize="sm"
              textAlign="center"
              color={useColorModeValue("gray.600", "gray.400")}
              textDecoration="underline"
            >
              No, I don’t want discounts
            </Link>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);
