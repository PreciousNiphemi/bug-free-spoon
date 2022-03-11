import { Flex, Box, Text, Image, Stack, HStack } from "@chakra-ui/react";
import { CheckBox } from "@app/common";

export const WhySection = () => {
  return (
    <Flex
      flexDir="column"
      minH="80vh"
      width="100%"
      justifyContent="center"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      backgroundImage=" /images/pattern-side-hero.svg"
      backgroundColor="#2737C7"
      mt={20}
      px={{ base: "4", md: "10", lg: "10", xl: "16" }}
    >
      <Flex
        flexDir={{ base: "column", md: "column", lg: "row" }}
        justifyContent="space-between"
        minH="80vh"
        py={{ base: "10", md: "10", lg: 0 }}
      >
        <Image src="images/people.svg" />

        <Stack
          spacing={{ base: 4, md: 4, lg: 8 }}
          alignSelf={{ base: "center", md: "center", lg: "center" }}
        >
          <Text
            color="#fff"
            fontSize="40px"
            textAlign={{ base: "center", md: "center", lg: "left" }}
            fontWeight={300}
            fontFamily="'KENOKY', sans-serif"
            lineHeight="48px"
          >
            Why am I doing this?
          </Text>
          <HStack spacing={2}>
            <CheckBox />
            <Text
              mt="20px"
              color="#fff"
              textAlign={{ base: "left", md: "center", lg: "justify" }}
              fontWeight={500}
              fontFamily="'Montserrat', sans-serif"
              fontSize={{ base: "15x", md: "15px", lg: "18px" }}
              lineHeight={{ base: "18.29px", md: "18.29px", lg: "21.94px" }}
            >
              Help struggling traders get a solid footing in this business.
            </Text>
          </HStack>
          <HStack spacing={2}>
            <CheckBox />

            <Text
              color="#fff"
              textAlign={{ base: "left", md: "center", lg: "justify" }}
              fontWeight={500}
              fontFamily="'Montserrat', sans-serif"
              fontSize={{ base: "15x", md: "15px", lg: "18px" }}
              lineHeight={{ base: "18.29px", md: "18.29px", lg: "21.94px" }}
            >
              Community is powerful.
            </Text>
          </HStack>
          <HStack spacing={2}>
            <CheckBox />
            <Text
              color="#fff"
              textAlign={{ base: "left", md: "center", lg: "justify" }}
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize={{ base: "15x", md: "15px", lg: "18px" }}
              lineHeight={{ base: "18.29px", md: "18.29px", lg: "21.94px" }}
            >
              It changed my life, it can change the lives of many others too.
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </Flex>
  );
};
