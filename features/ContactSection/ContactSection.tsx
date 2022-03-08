import { useState } from "react";
import { Box, Flex, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

const SOCIAL_ICON_STYLE = {
  width: 40,
  height: 40,
  marginRight: 20,
};

export const ContactSection = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Flex flexDir="column">
      <Box width="30%"></Box>
      <Box
        paddingY="40px"
        minH="60vh"
        display="flex"
        flexDir="column"
        justifyContent="center"
        mt="100px"
        zIndex={2}
        left="380"
        width="60%"
        backgroundColor="#fff"
        position="absolute"
      >
        <Stack spacing="4" alignSelf="center">
          <Box width="400.7px" backgroundColor="#FAFAFA" alignSelf="center">
            <Input variant="filled" placeholder="Name*" borderRadius="0" />
          </Box>
          <Box width="400.7px" backgroundColor="#FAFAFA" alignSelf="center">
            <Input
              variant="filled"
              placeholder="Email Address*"
              borderRadius="0"
            />
          </Box>{" "}
          <Box width="400.7px" backgroundColor="#FAFAFA" alignSelf="center">
            <Input
              variant="filled"
              placeholder="Phone Number"
              borderRadius="0"
            />
          </Box>{" "}
          <Box width="400.7px" alignSelf="center">
            <Textarea
              value={value}
              variant="filled"
              onChange={handleInputChange}
              placeholder="Message*"
              size="sm"
              height="200px"
            />
          </Box>
        </Stack>
      </Box>
      <Flex
        backgroundColor="#2737C7"
        minH="90vh"
        width="100%"
        clipPath=" polygon(41% 0, 82% 100%, 82% 100%, 0 100%, 0 0)"
      >
        <Box
          width="50%"
          minH="90vh"
          pl="10"
          backgroundColor="#2737C7"
          display="flex"
        >
          <Flex justifyContent="center" flexDir="column" width="50%">
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
            <Box px="2">
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
              <Stack direction="row" alignSelf="center" mt={10}>
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
      </Flex>
    </Flex>
  );
};
