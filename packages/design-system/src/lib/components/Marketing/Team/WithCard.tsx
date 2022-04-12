import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Img,
  Link,
  LinkProps,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface Member {
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

interface SocialLinkProps extends LinkProps {
  href?: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const SocialLink = (props: SocialLinkProps) => {
  const { href, children, icon: SocialIcon, ...rest } = props;
  return (
    <Link
      flex="1"
      display="flex"
      py="3"
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      fontSize="sm"
      isExternal
      color={useColorModeValue("blue.600", "blue.300")}
      href={href}
      _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
      {...rest}
    >
      <SocialIcon aria-hidden />
      <Text ms="2">{children}</Text>
    </Link>
  );
};

interface MemberProps {
  image: string;
  name: string;
  role: string;
  twitter?: string;
  linkedIn?: string;
  children: React.ReactNode;
}

const Member = (props: MemberProps) => {
  const { image, role, name, twitter, linkedIn, children } = props;
  return (
    <Flex
      direction="column"
      bg={useColorModeValue("white", "gray.700")}
      shadow={useColorModeValue("base", "none")}
    >
      <Box p="6" flex="1">
        <Img
          float="right"
          alt={name}
          w="16"
          h="16"
          rounded="lg"
          objectFit="cover"
          src={image}
          zIndex="1"
        />
        <Box mt="2">
          <Text fontWeight="bold">{name}</Text>
          <Text
            color={useColorModeValue("gray.500", "whiteAlpha.700")}
            fontWeight="medium"
            fontSize="sm"
          >
            {role}
          </Text>
        </Box>
        <Text
          color={useColorModeValue("gray.600", "whiteAlpha.800")}
          maxW={{ base: "unset", md: "20rem" }}
          mt="6"
        >
          {children}
        </Text>
      </Box>
      <Flex align="center" spacing="5" borderTopWidth="1px">
        <SocialLink icon={FaTwitter} href={twitter} borderEndWidth="1px">
          Twitter
        </SocialLink>
        <SocialLink icon={FaLinkedinIn} href={linkedIn}>
          LinkedIn
        </SocialLink>
      </Flex>
    </Flex>
  );
};

const WithCard = () => (
  <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
    <Box
      maxW={{ base: "xl", md: "7xl" }}
      mx="auto"
      px={{ base: "6", md: "8" }}
      py={{ base: "12", md: "20" }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "24rem 1fr" }}
        gap={{ base: "8", md: "12", lg: "16" }}
      >
        <Box>
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
            fontSize="xl"
            maxW="2xl"
            color={useColorModeValue("blackAlpha.700", "whiteAlpha.800")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
          <HStack
            mt="8"
            as="a"
            display="inline-flex"
            href="#"
            className="group"
            fontSize="lg"
            fontWeight="bold"
            color={useColorModeValue("blue.600", "blue.300")}
          >
            <span>Join the team</span>
            <Box
              as={FaArrowRight}
              transition="all 0.2s"
              _groupHover={{ transform: "translateX(5px)" }}
            />
          </HStack>
        </Box>
        <SimpleGrid
          mt={{ base: "8", md: "0" }}
          columns={{ base: 1, md: 2 }}
          spacing="10"
        >
          {members.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              role={member.role}
              name={member.name}
              twitter="#"
              linkedIn="#"
            >
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Grid>
    </Box>
  </Box>
);

export default WithCard;
