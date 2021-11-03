import {
  Box,
  Flex,
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

interface Props {
  image: string;
  name: string;
  role: string;
  twitter?: string;
  linkedIn?: string;
  children: React.ReactNode;
}

const Member = (props: Props) => {
  const { image, name, role, twitter, linkedIn, children } = props;
  return (
    <Flex direction="column" align="center" textAlign="center">
      <Img
        alt={name}
        w="40"
        h="40"
        rounded="full"
        objectFit="cover"
        src={image}
      />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text
          fontWeight="semibold"
          color={useColorModeValue("gray.500", "whiteAlpha.700")}
        >
          {role}
        </Text>
      </Box>
      <Text
        mt="2"
        color={useColorModeValue("gray.600", "whiteAlpha.900")}
        maxW={{ base: "unset", md: "20rem" }}
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
    </Flex>
  );
};

const WithCentredLayout = () => (
  <Box as="section">
    <Box
      mx="auto"
      maxW={{ base: "xl", md: "7xl" }}
      px={{ base: "6", md: "8" }}
      py={{ base: "12", md: "20" }}
    >
      <Box textAlign="center">
        <Heading size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
          About the team
        </Heading>
        <Text fontSize="xl" maxW="2xl" mx="auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
      </Box>
      <SimpleGrid
        mt="20"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX="6"
        spacingY="16"
      >
        {members.map((member, idx) => (
          <Member
            key={idx}
            role={member.role}
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

export default WithCentredLayout;
