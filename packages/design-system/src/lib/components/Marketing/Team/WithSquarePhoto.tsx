import {
  Box,
  Divider,
  Heading,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export interface Member {
  role: string;
  image: string;
  name: string;
  twitter: string;
  linkedin: string;
  description: string;
}

export const members: Member[] = [
  {
    role: "Co-Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Camila West",
    twitter: "#",
    linkedin: "#",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    role: "Co-Founder / CTO",
    image:
      "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Mark Linhsorg",
    twitter: "#",
    linkedin: "#",
    description:
      "Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi",
  },
  {
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Kim Yung",
    twitter: "#",
    linkedin: "#",
    description:
      "Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.",
  },
  {
    role: "Manager, Business Relations",
    image:
      "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Morgan Adebayo",
    twitter: "#",
    linkedin: "#",
    description:
      "Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.",
  },
  {
    role: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Bimbo Akintola",
    twitter: "#",
    linkedin: "#",
    description:
      "Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.",
  },
  {
    role: "Head of Human Resources",
    image:
      "https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Yasmine Jones",
    twitter: "#",
    linkedin: "#",
    description:
      "Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.",
  },
];

interface MemberProps {
  image: string;
  name: string;
  twitter?: string;
  linkedIn?: string;
  children: React.ReactNode;
}

const Member = (props: MemberProps) => {
  const { image, name, twitter, linkedIn, children } = props;
  return (
    <Box>
      <Box pos="relative">
        <Img
          pos="relative"
          alt={name}
          w="32"
          h="32"
          rounded="lg"
          objectFit="cover"
          src={image}
          zIndex="1"
        />
        <Box
          zIndex="0"
          pos="absolute"
          w="32"
          top="-2"
          left="2"
          h="100%"
          bg={useColorModeValue("blue.600", "blue.300")}
          rounded="lg"
        />
      </Box>
      <Text fontWeight="bold" mt="4">
        {name}
      </Text>
      <Text
        mt="2"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        maxW="20rem"
      >
        {children}
      </Text>
      <HStack mt="5" spacing="3">
        <Link
          isExternal
          color={useColorModeValue("blue.600", "blue.300")}
          href={twitter}
        >
          <VisuallyHidden>{`${name}'s Twitter page`}</VisuallyHidden>
          <FaTwitter aria-hidden />
        </Link>
        <Link
          isExternal
          color={useColorModeValue("blue.600", "blue.300")}
          href={linkedIn}
        >
          <VisuallyHidden>{`${name}'s Linkedin page`}</VisuallyHidden>
          <FaLinkedinIn aria-hidden />
        </Link>
      </HStack>
    </Box>
  );
};

const WithSquarePhoto = () => {
  return (
    <Box as="section">
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
        py={{ base: "12", md: "20" }}
      >
        <Heading
          size="2xl"
          letterSpacing="tight"
          mb="5"
          fontWeight="extrabold"
          color={useColorModeValue("blue.600", "blue.300")}
        >
          Meet our team
        </Heading>
        <Text
          fontSize="lg"
          color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          maxW="2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
        <Divider my="10" />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingX="6"
          spacingY="16"
        >
          {members.map((member, idx) => (
            <Member
              key={idx}
              image={member.image}
              name={member.name}
              twitter="#"
              linkedIn="#"
            >
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WithSquarePhoto;
