import { Box, Flex, Image } from "@chakra-ui/react";

export const InfoBox = ({ innerColor, outerColor, image }) => {
  return (
    <Box
      h="80.07px"
      w="80.07px"
      boxShadow="md"
      borderRadius="20px"
      position="absolute"
      left={{ base: "-22px", md: "-24px", lg: "-28px", xl: "-40px" }}
      backgroundColor={innerColor}
    >
      <Box h="80.07px" w="80.07px" borderRadius="20px" position="relative">
        <Box
          h="80.07px"
          w="80.07px"
          display="flex"
          flexDir="column"
          justifyContent="center"
          borderRadius="20px"
          boxShadow="md"
          backgroundColor={outerColor}
          position="absolute"
          top={{ base: "", md: "-6px", lg: "-6px", xl: "-6px" }}
          left={{ base: "", md: "6px", lg: "6px", xl: "6px" }}
        >
          <Flex justifyContent="center">
            <Image src={image} h="7" w="7" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
