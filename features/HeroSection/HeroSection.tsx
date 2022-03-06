import { Flex, Text, Box, Stack, Spacer, Image } from "@chakra-ui/react";
import { NavigationHeader } from "@app/common";

export const HeroSection = () => {
  return (
    <Box
      minH="90vh"
      width="100%"
      display="flex"
      justifyContent="center"
      flexDir="column"
      pt={{ base: "2", md: "", lg: "", xl: "4" }}
      px={{ base: "4", md: "10", lg: "10", xl: "16" }}
      backgroundColor="#2737C7"
      //   backgroundColor="#fff"
      backgroundRepeat="no-repeat"
      backgroundPosition="left , right top "
      backgroundImage="url('/images/pattern-side-hero.svg' ), url('/images/pattern-side-hero.svg')"
    >
      <Flex width="100%">
        <NavigationHeader />
      </Flex>
      <Flex flexDir="column" flex="1" justifyContent="center">
        <Flex justifyContent="space-between">
          <Box>
            <Stack>
              <Box>
                <Text
                  color="#fff"
                  textAlign="left"
                  lineHeight="72px"
                  fontFamily="'KENOKY', sans-serif"
                  fontSize={{ base: "", md: "", lg: "", xl: "60px" }}
                >
                  Hi 👋; <br /> I’m Adekanbi Idowu
                </Text>
              </Box>
              <Text
                color="#FFFFFF80"
                fontFamily="Montserrat"
                lineHeight="24.38px"
                fontSize={{ base: "", md: "", lg: "", xl: "20px" }}
              >
                Insightful teacher & mentor, passionate about impacting and
                building communities.
              </Text>
            </Stack>
          </Box>
          <Spacer />

          <Box
            mr={16}
            h="315.35px"
            w="315.35px"
            padding="3"
            transform="rotate(20deg)"
            borderRadius="60px"
            backgroundColor="gray"
          >
            <Box
              h="315.35px"
              w="315.35px"
              borderWidth=" 1px"
              borderColor="#FFFFFF"
              borderRadius="60px"
            />
          </Box>
        </Flex>
        <Flex>
          <Stack direction="row" spacing={2}>
            <Text
              color="#fff"
              fontSize="20px"
              fontWeight={500}
              lineHeight="24.38px"
              fontFamily="Montserrat"
            >
              Get Started
            </Text>
            <Image src="images/arrow.svg" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
