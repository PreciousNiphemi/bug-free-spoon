import { Box, Stack, Text, Image } from "@chakra-ui/react";

export const Backstory = () => {
  return (
    <Stack spacing={20} backgroundColor="#fff">
      <Box display="flex" flexDir="column">
        <Box mt={1}>
          <Image src="/images/wrapper.svg" width="160px" />
        </Box>
        <Text
          position="absolute"
          pl="4"
          color="#000000"
          fontSize="30px"
          alignSelf="center"
          zIndex={10}
          fontFamily="'KENOKY', sans-serif"
          lineHeight={{ base: "", md: "", lg: "", xl: "60px" }}
        >
          Backstory
        </Text>
      </Box>

      <Box
        alignSelf="center"
        minWidth="1px"
        maxWidth="1px"
        minHeight="240.59px"
        maxHeight="240.59px"
        backgroundColor="#000000"
      />
    </Stack>
  );
};
