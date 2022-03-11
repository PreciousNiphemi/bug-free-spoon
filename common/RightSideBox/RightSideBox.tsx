import { Box, Flex } from "@chakra-ui/react";

export const RightSideBox = () => {
  return (
    <Flex flexDir="column">
      <Flex>
        <Box
          mt="1"
          h="33.21px"
          w={{ base: "21.75px", md: "33.21px" }}
          backgroundColor="#FB006D"
        />
        <Box
          h="66.25px"
          w={{ base: "21.75px", md: "33.21px" }}
          backgroundColor="#00B5FF"
        />
      </Flex>
    </Flex>
  );
};
