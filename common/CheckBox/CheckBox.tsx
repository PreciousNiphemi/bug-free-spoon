import { Box, Image } from "@chakra-ui/react";

export const CheckBox = () => {
  return (
    <Box
      borderRadius="full"
      padding="2"
      backgroundColor="rgba(255, 214, 0, 0.1)"
    >
      <Image src="images/verified.svg" />
    </Box>
  );
};
