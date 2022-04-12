import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Img,
  Link,
  LinkProps,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface MemberType {
  role: string;
  image: string;
  name: string;
  twitter: string;
  github: string;
  linkedin: string;
  description: string;
}

export const members: MemberType[] = [
  {
    role: "Co-Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Camila West",
    twitter: "camilyx",
    linkedin: "#",
    github: "#",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    role: "Co-Founder / CTO",
    image:
      "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Mark Linhsorg",
    twitter: "markysy",
    linkedin: "#",
    github: "#",
    description:
      "Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi",
  },
  {
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Kim Yung",
    twitter: "kkynx",
    linkedin: "#",
    github: "#",
    description:
      "Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.",
  },
  {
    role: "Manager, Business Relations",
    image:
      "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Morgan Adebayo",
    twitter: "margon_biz",
    linkedin: "#",
    github: "#",
    description:
      "Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.",
  },
  {
    role: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Bimbo Akintola",
    twitter: "life3coder",
    linkedin: "#",
    github: "#",
    description:
      "Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.",
  },
  {
    role: "Head of Human Resources",
    image:
      "https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Yasmine Jones",
    twitter: "yas4joy",
    linkedin: "#",
    github: "#",
    description:
      "Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.",
  },
];

const SocialLinkIcon = (props: BoxProps) => (
  <Box
    transition="all 0.2s"
    _hover={{ color: useColorModeValue("blue.700", "blue.200") }}
    fontSize="lg"
    color={useColorModeValue("blue.600", "blue.300")}
    {...props}
  />
);

interface SocialLinkProps extends LinkProps {
  icon?: React.ElementType;
  href: string;
  label?: string;
}

const SocialLink = (props: SocialLinkProps) => {
  const { icon, href, label, children, ...rest } = props;
  return (
    <Link
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      href={href}
      isExternal
      {...rest}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {icon && <SocialLinkIcon as={icon} />}
      {children}
    </Link>
  );
};

interface MemberProps {
  data: MemberType;
  children: React.ReactNode;
}

const Member = (props: MemberProps) => {
  const { data, children } = props;
  const { image, role, name, twitter, github } = data;

  return (
    <Box>
      <Stack direction="row" spacing={6}>
        <Img
          w="20"
          h="20"
          minW="20"
          objectFit="cover"
          rounded="full"
          src={image}
          alt={name}
        />
        <Box>
          <Text fontWeight="extrabold" fontSize="xl" mb="2">
            {name}
          </Text>
          <Text
            color={useColorModeValue("gray.500", "whiteAlpha.700")}
            fontWeight="medium"
          >
            {role}
          </Text>
          <HStack mt="1" mb="6">
            <SocialLink
              href="#"
              fontWeight="bold"
              color={useColorModeValue("blue.600", "blue.300")}
            >
              @{twitter}
            </SocialLink>
            <SocialLink href="#" icon={FaLinkedin} label="LinkedIn" />
            <SocialLink href={github} icon={FaGithub} label="Github" />
          </HStack>
          <Text
            fontWeight="medium"
            color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          >
            {children}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const WithCirclePhoto = () => {
  return (
    <Box as="section">
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
        py={{ base: "12", md: "20" }}
      >
        <Heading
          size="xl"
          letterSpacing="tight"
          mb={{ base: "12", md: "20" }}
          fontWeight="extrabold"
        >
          Meet our leadership
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
          {members.map((member, id) => (
            <Member key={id} data={member}>
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WithCirclePhoto;
