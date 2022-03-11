import { Box, Flex, HStack, Stack } from "@chakra-ui/react";

export const SideBox = () => {
  return (
    <Flex flexDir="column">
      <Box
        h="66.25px"
        w={{ base: "21.75px", md: "33.21px" }}
        backgroundColor="#9327FF"
      />
      <Flex>
        <Box
          h={{ base: "21.75px", md: "33.21px" }}
          w={{ base: "21.75px", md: "33.21px" }}
          backgroundColor="#fff"
        />
        <Box
          h={{ base: "21.75px", md: "33.21px" }}
          w={{ base: "21.75px", md: "33.21px" }}
          backgroundColor="#FFB800"
        />
      </Flex>
    </Flex>
  );
};
