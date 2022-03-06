import React from "react";
import Link from "next/link";
import { slide as HamBurgerMenu } from "react-burger-menu";
import { Box, Flex, Spacer, VStack, Img } from "@chakra-ui/react";
import { NavigationLogo } from "./NavigationLogo";
import { NavText } from "../NavText";

export const NavigationHeader = () => {
  return (
    <Box width="100%">
      <Flex
        as="nav"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <NavigationLogo />
        <Spacer />

        {/* desktop view */}

        <Flex display={{ base: "none", md: "none", lg: "flex" }}>
          <Link href="">
            <NavText>Backstory</NavText>
          </Link>
          <Link href="">
            <NavText>Pricing</NavText>
          </Link>

          <Link href="">
            <NavText>Contact</NavText>
          </Link>
          <Spacer />
        </Flex>

        {/* Tablet & Mobile View */}
        <Flex flex={1} d={{ base: "flex", lg: "none" }}>
          <Spacer />

          <Box d={{ base: "block", lg: "none" }}>
            <HamBurgerMenu
              right
              menuClassName={"bm-menu "}
              customBurgerIcon={
                <Img src={"/images/menu.svg"} alt="Hamburger menu" />
              }
              overlay
            >
              <VStack textAlign="center" spacing={6}>
                <Link href="" passHref>
                  <NavText>Backstory</NavText>
                </Link>

                <Link href="" passHref>
                  <NavText>Pricing</NavText>
                </Link>
                <Link href="" passHref>
                  <NavText>Contacts</NavText>
                </Link>
              </VStack>
            </HamBurgerMenu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
