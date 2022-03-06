import { Flex, Box, Text, Image, Stack, HStack } from "@chakra-ui/react";
import { CheckBox } from "@app/common";

export const WhySection = () => {
  return (
    <Flex
      flexDir="column"
      minH="80vh"
      justifyContent="center"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      backgroundImage=" /images/pattern-side-hero.svg"
      backgroundColor="#2737C7"
      px={{ base: "4", md: "10", lg: "10", xl: "16" }}
    >
      <Flex justifyContent="space-between" height="80vh">
        <Image src="images/people.svg" />

        <Stack spacing={8} mt={28}>
          <Text
            color="#fff"
            fontSize="40px"
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
              textAlign="justify"
              fontWeight={500}
              fontFamily="'Montserrat', sans-serif"
              fontSize="18px"
              lineHeight="21.94px"
            >
              Help struggling traders get a solid footing in this business.
            </Text>
          </HStack>
          <HStack spacing={2}>
            <CheckBox />

            <Text
              color="#fff"
              textAlign="justify"
              fontWeight={500}
              fontSize="18px"
              lineHeight="21.94px"
            >
              Community is powerful.
            </Text>
          </HStack>
          <HStack spacing={2}>
            <CheckBox />
            <Text
              color="#fff"
              textAlign="justify"
              fontWeight={500}
              fontSize="18px"
              lineHeight="21.94px"
            >
              It changed my life, it can change the lives of many others too.
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </Flex>
  );
};
