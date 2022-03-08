import {
  Flex,
  Text,
  Box,
  Stack,
  Spacer,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavigationHeader } from "@app/common";

export const HeroSection = () => {
  const variant = useBreakpointValue({
    base: `  <Text>Hi 👋; I’m Adekanbi Idowu</Text>`,
    md: ` <Text>Hi 👋; <br /> I’m Adekanbi Idowu</Text>`,
  });

  return (
    <Box
      minH="90vh"
      width="100%"
      display="flex"
      justifyContent="center"
      flexDir="column"
      pt={{ base: "2", md: "4" }}
      px={{ base: "2", md: "10", lg: "10", xl: "16" }}
      position="relative"
      backgroundColor="#2737C7"
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
              <Box
                px={{ base: "4", md: "", lg: "", xl: "" }}
                color="#fff"
                textAlign={{ base: "center", md: "left" }}
                lineHeight={{ base: "54px", md: "", lg: "", xl: "72px" }}
                fontFamily="'KENOKY', sans-serif"
                fontSize={{ base: "45px", md: "", lg: "", xl: "60px" }}
                dangerouslySetInnerHTML={{ __html: variant }}
              />
              <Box px={{ base: "4", md: "", lg: "", xl: "" }}>
                <Text
                  color="#FFFFFF80"
                  textAlign={{ base: "center", md: "left" }}
                  fontFamily="'Montserrat', sans-serif"
                  lineHeight="24.38px"
                  fontSize={{ base: "", md: "", lg: "", xl: "20px" }}
                >
                  Insightful teacher & mentor, passionate about impacting and
                  building communities.
                </Text>
              </Box>
            </Stack>
          </Box>
          <Spacer />

          <Box
            mr={{ base: "0", md: 4, lg: 16 }}
            h={{ base: "255.57px", md: "315.35px" }}
            w={{ base: "255.57px", md: "315.35px" }}
            padding="3"
            borderRadius="60px"
            backgroundColor="gray"
            transform="rotate(20deg)"
            position={{ base: "absolute", md: "initial" }}
            // top={{ base: "600px", md: "" }}
            bottom={{ base: "-20%", md: "" }}
            left={{ base: "16%", md: "" }}
            // display={{ base: "none", md: "block" }}
          >
            <Box
              h={{ base: "255.57px", md: "315.35px" }}
              w={{ base: "255.57px", md: "315.35px" }}
              borderWidth=" 1px"
              borderColor="#FFFFFF"
              borderRadius="60px"
            />
          </Box>
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "normal" }}
          mt={{ base: "20", md: "0" }}
          mb={{ base: "20%", md: "0" }}
          pb={{ base: "20%", md: "0" }}
          px={{ base: "0", md: "4", lg: "", xl: "" }}
        >
          <Stack direction="row" spacing={{ base: 3, md: 2 }}>
            <Text
              color="#fff"
              fontSize="20px"
              fontWeight={500}
              lineHeight="24.38px"
              fontFamily="'Montserrat', sans-serif"
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
