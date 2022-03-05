import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Backstory } from "@app/common";

export const BackstorySection = () => {
  return (
    <Box
      px="90"
      py="80"
      width="100%"
      h="480px"
      display="flex"
      justifyContent="space-between"
      backgroundImage="/images/Polypodium.svg"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"

      //   backgroundPosition="100% 100%"

      //   backgroundColor="red"
    >
      <Backstory />
      <Box
        maxWidth="677px"
        minWidth="677px"
        maxHeight="400px"
        paddingX="40px"
        backgroundColor="#fff"
      >
        <Text
          fontFamily="'Montserrat', sans-serif"
          textAlign="justify"
          fontWeight={500}
          fontSize="16px"
          color="#000000B2"
          lineHeight="37.53px"
        >
          I started trading in the forex markets in 2017, and just like most
          people who are new in an ecosystem, I had a rather rough start—
          however, I had to make sure the rocky beginnings didn’t last so long.
          I dedicated most of my resources to getting quality mentorship and
          courses that made me get a solid fitting in this career path I had
          chosen to ply. Oh, worthy to mention; these mentorships and courses I
          took on didn’t automatically switch me up to profitability; It took
          months of consistent learning and unlearning, focus and determination
          to get a hang of most things. Learning to be a profitable trader is
          hard enough but having a mentor to guide me definitely made the
          experience not as daunting. I’m on the path of alleviating more and
          more people .
        </Text>
      </Box>
    </Box>
  );
};
