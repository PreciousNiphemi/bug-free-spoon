import React from "react";
import { SocialIcon } from "react-social-icons";
import { Flex, Text, Stack, HStack, Spacer } from "@chakra-ui/react";

const SOCIAL_ICON_STYLE = {
  width: 40,
  height: 40,
  marginRight: 40,
};

export const Footer = () => {
  return (
    <Flex
      flexDir="column"
      minH="477.97px"
      backgroundColor="#282A3F"
      width="100%"
      alignItems="center"
      px={[3, 10]}
      justifyContent="center"
    >
      <Flex justifyContent="center">
        <Flex flexDirection="column">
          <Text
            alignSelf="center"
            fontFamily="'KENOKY', sans-serif"
            color="#FFFFFF"
            fontWeight={300}
            fontSize="25.2px"
            lineHeight="30.2px"
          >
            Hendray
          </Text>
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
                bgColor="#282A3F"
                fgColor="#FFFFFF4D"
              />
              <SocialIcon
                url="https://instagram.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#282A3F"
                fgColor="#FFFFFF4D"
              />
              <SocialIcon
                url="https://youtube.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#282A3F"
                fgColor="#FFFFFF4D"
              />
              <SocialIcon
                url="https://reddit.com"
                style={SOCIAL_ICON_STYLE}
                bgColor="#282A3F"
                fgColor="#FFFFFF4D"
              />
            </Stack>
          </Flex>

          <Flex justifyContent="center">
            <HStack spacing={28} alignSelf="center" mt={10}>
              <Text
                fontFamily="'Montserrat', sans-serif"
                color="#FFFFFF"
                fontWeight={500}
                fontSize="18px"
                lineHeight="25.36px"
              >
                Home
              </Text>
              <Text
                fontFamily="'Montserrat', sans-serif"
                color="#FFFFFF"
                fontWeight={500}
                fontSize="18px"
                lineHeight="25.36px"
              >
                Get in touch
              </Text>
              <Text
                fontFamily="'Montserrat', sans-serif"
                color="#FFFFFF"
                fontWeight={500}
                fontSize="18px"
                lineHeight="25.36px"
              >
                Contact Me
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
