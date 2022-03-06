import { Box, Text, HStack, Stack, Image } from "@chakra-ui/react";

export const TradeCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="604px"
      minWidth="359.74px"
      maxWidth="359.74px"
      boxShadow="md"
    >
      <Box width="100%" height="17.12px" backgroundColor="#FFB800" />
      <Stack mt={4}>
        <Image src="images/Star1.svg" h="20" w="20" alignSelf="center" />
        <HStack alignSelf="center">
          <Box h={2} w={8} shadow="sm" />
          <Text
            color="#7D7D7D"
            fontSize="18px"
            fontWeight={700}
            lineHeight="21.94px"
            fontFamily="'Montserrat', sans-serif"
          >
            Bootcamp Package
          </Text>
          <Box h={2} w={8} shadow="sm" />
        </HStack>
      </Stack>
    </Box>
  );
};
