import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

const SOCIAL_ICON_STYLE = {
  width: 40,
  height: 40,
  marginRight: 40,
};

export const ContactSection = () => {
  return (
    <Flex backgroundColor="#fff" width="100%">
      <Box
        display="flex"
        flex="3"
        minH="90vh"
        backgroundColor="#2737C7"
        clipPath="polygon(60% 0, 100% 100%, 100% 100%, 0 100%, 0 0)"
      >
        <Flex justifyContent="center" flexDir="column" width="60%">
          <Flex justifyContent="center">
            <Text
              fontFamily="'KENOKY', sans-serif"
              color="#fff"
              fontWeight={300}
              fontSize="50px"
              lineHeight="60px"
            >
              Get In Touch
            </Text>
          </Flex>
          <Box px="20">
            <Text
              alignSelf="center"
              textAlign="center"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize="18px"
              color="#FFFFFF"
              lineHeight="25.36px"
            >
              Send a message, or reach out through any of the links below
            </Text>
          </Box>
          <Flex justifyContent="center">
            <Stack
              // width="100%"
              direction="row"
              alignSelf="center"
              mt={10}
            >
              <SocialIcon
                url="https://whatsapp.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#2737C7"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://instagram.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#2737C7"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://youtube.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#2737C7"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://reddit.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#2737C7"
                fgColor="#fff"
              />
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box
        minH="40vh"
        mt={20}
        flex="3"
        // zIndex={200}
        // width="400"
        backgroundColor="#fff"
        position="relative"
        right="280"
      ></Box>
    </Flex>
  );
};
