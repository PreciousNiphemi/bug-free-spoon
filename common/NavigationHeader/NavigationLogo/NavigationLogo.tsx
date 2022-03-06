import Link from "next/link";
import { Flex, Img } from "@chakra-ui/react";

export const NavigationLogo = () => {
  return (
    <Link href="/">
      <Flex
        as="a"
        cursor="pointer"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Img
          h={{ base: "", md: "", lg: "", xl: "" }}
          w={{ base: "28", md: "", lg: "", xl: "" }}
          alt="Hendary logo"
          src="/images/hendary-logo.svg"
        />
      </Flex>
    </Link>
  );
};
