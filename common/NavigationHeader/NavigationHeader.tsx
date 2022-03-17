import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Spacer,
  VStack,
  Img,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { NavigationLogo } from "./NavigationLogo";
import { NavText } from "../NavText";

const MobileNavigation = ({ isOpen, onClose }) => {
  const variant = useBreakpointValue({ base: isOpen, md: false });
  return (
    <Flex
      direction="column"
      position="relative"
      mt="20"
      display={{ base: "flex", md: "none" }}
    >
      <Modal isOpen={variant} size="xs" onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent paddingY="40" borderRadius="20">
          <Box
            top="-20"
            display="flex"
            justifyContent="center"
            left="40%"
            position="absolute"
            boxSize="60px"
            borderRadius="full"
            backgroundColor="#fff"
            onClick={onClose}
          >
            <CloseIcon alignSelf="center" />
          </Box>
          <VStack textAlign="center" spacing={6}>
            <Link href="#backstory" passHref>
              <NavText>Backstory</NavText>
            </Link>

            <Link href="#pricing" passHref>
              <NavText>Pricing</NavText>
            </Link>
            <Link href="#contact" passHref>
              <NavText>Contacts</NavText>
            </Link>
          </VStack>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export const NavigationHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

        <Flex display={{ base: "none", md: "flex", lg: "flex" }}>
          <Link href="#backstory">
            <NavText>Backstory</NavText>
          </Link>
          <Link href="#pricing">
            <NavText>Pricing</NavText>
          </Link>

          <Link href="#contact">
            <NavText>Contact</NavText>
          </Link>
          <Spacer />
        </Flex>

        {/*  Mobile View */}
        <Flex flex={1} d={{ base: "flex", md: "none" }}>
          <Spacer />

          <Box d={{ base: "block", md: "none" }}>
            <Img
              src={"/images/menu.svg"}
              alt="Hamburger menu"
              onClick={onOpen}
            />
            <MobileNavigation isOpen={isOpen} onClose={onClose} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
