import { Box, Flex, HStack, Stack } from "@chakra-ui/react";

export const SideBox = () => {
  return (
    <Flex flexDir="column" padding="20">
      <Box h="66.25px" w="33.21px" backgroundColor="#9327FF" />
      <Flex>
        <Box h="33.21px" w="33.21px" backgroundColor="#fff" />
        <Box h="33.21px" w="33.21px" backgroundColor="#FFB800" />
      </Flex>
    </Flex>
  );
};
