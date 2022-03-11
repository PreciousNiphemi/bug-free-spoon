import { Box, Stack, Text, Image } from "@chakra-ui/react";

export const Backstory = () => {
  return (
    <Stack spacing={20} backgroundColor="#fff">
      <Box
        display="flex"
        flexDir="column"
        position={{ base: "relative", md: "relative" }}
      >
        <Text
          display={{ base: "block", md: "block" }}
          color="#000000"
          fontSize={{ base: "35px", md: "45px" }}
          alignSelf="center"
          zIndex={6}
          fontFamily="'KENOKY', sans-serif"
          lineHeight={{ base: "42px", md: "50px", lg: "56px", xl: "60px" }}
        >
          Backstory
        </Text>
        <Box mt={1} display={{ base: "block", md: "block" }}>
          <Image
            position="absolute"
            top={{ base: "0", md: "0" }}
            right={{ base: "4", md: "2" }}
            src="/images/wrapper.svg"
            width={{ base: "160px", md: "1200px" }}
          />
        </Box>
      </Box>

      <Box
        alignSelf="center"
        border="1px solid #000000"
        minHeight="240.59px"
        maxHeight="240.59px"
        backgroundColor="#000000"
        display={{ base: "none", md: "none", lg: "block" }}
      />
    </Stack>
  );
};
