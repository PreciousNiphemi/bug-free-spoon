import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Backstory } from "@app/common";

export const BackstorySection = () => {
  return (
    <Box
      px={{ base: "10", md: "10", lg: "90", xl: "90" }}
      py={{ base: "40", md: "20", lg: "20", xl: "20" }}
      mt={{ base: "60", md: 0 }}
      h={{ base: "160vh", md: "90vh", lg: "80vh", xl: "80vh" }}
      width="100%"
      display="flex"
      flexDir={{ base: "column", md: "column", lg: "row" }}
      // backgroundColor="red"
      justifyContent={{ base: "", md: "", lg: "space-between" }}
      backgroundImage="/images/Polypodium.svg"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
    >
      <Flex mb={{ base: "8%", md: " 8%", lg: 0 }}>
        <Backstory />
      </Flex>
      <Flex pl={{ base: "4", md: "10" }}>
        <Box
          minWidth="1px"
          maxWidth="1px"
          minHeight="240.59px"
          maxHeight="240.59px"
          backgroundColor="#000000"
          mt={{ base: "2", md: "4", lg: "0" }}
          mr={{ base: "10", md: "0", lg: "0" }}
          display={{ base: "block", md: "block", lg: "none" }}
        />
        <Box
          maxWidth={{ base: "auto", md: "auto", lg: "677px", xl: "677px" }}
          minWidth={{ base: "auto", md: "auto", lg: "677px", xl: "677px" }}
          maxHeight={{ base: "auto", md: "400px" }}
          zIndex="auto"
          paddingX={{ base: "", md: "30px", lg: "30px", xl: "40px" }}
          backgroundColor="#fff"
        >
          <Text
            fontFamily="'Montserrat', sans-serif"
            textAlign="justify"
            fontWeight={500}
            color="#000000B2"
            fontSize={{ base: "15px", md: "16px", lg: "16px", xl: "16px" }}
            lineHeight={{
              base: "31.28px",
              md: "37.53px",
              lg: "37.53px",
              xl: "37.53px",
            }}
          >
            I started trading in the forex markets in 2017, and just like most
            people who are new in an ecosystem, I had a rather rough start—
            however, I had to make sure the rocky beginnings didn’t last so
            long. I dedicated most of my resources to getting quality mentorship
            and courses that made me get a solid fitting in this career path I
            had chosen to ply. Oh, worthy to mention; these mentorships and
            courses I took on didn’t automatically switch me up to
            profitability; It took months of consistent learning and unlearning,
            focus and determination to get a hang of most things. Learning to be
            a profitable trader is hard enough but having a mentor to guide me
            definitely made the experience not as daunting. I’m on the path of
            alleviating more and more people .
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
