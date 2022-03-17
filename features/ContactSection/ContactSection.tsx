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
    <Flex
      flexDir="column"
      position={{
        base: "relative",
        md: "relative",
        lg: "relative",
        xl: "relative",
      }}
      id="contact"
    >
      <Flex
        backgroundColor="#2737C7"
        minH={{ base: "90vh", md: "90vh" }}
        width="100%"
        clipPath={{
          base: "none",
          md: " polygon(41% 0, 82% 100%, 82% 100%, 0 100%, 0 0)",
          lg: " polygon(41% 0, 82% 100%, 82% 100%, 0 100%, 0 0)",
          xl: " polygon(41% 0, 82% 100%, 82% 100%, 0 100%, 0 0)",
        }}
      >
        <Box
          width={{ base: "100%", md: "40%", xl: "40%" }}
          px={{ base: "8", md: "10", xl: "20" }}
          pt={{ base: "20", md: "auto", xl: "auto" }}
          minH="100%"
          justifyContent="center"
          display="flex"
        >
          <Flex
            justifyContent={{ base: "start", md: "center" }}
            flexDir="column"
          >
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

      {/* Input form */}
      <Box
        w={{ base: "80%", md: "50%", lg: "", xl: "50%" }}
        paddingY="40px"
        px={{ base: "24px", md: "auto", lg: "auto", xl: "auto" }}
        maxH="661.86px"
        display="flex"
        // display="none"
        zIndex={{ base: 100 }}
        backgroundColor="#FFFFFF"
        top={{ base: "80", md: "60", lg: "420px", xl: "20" }}
        left={{ base: "8", md: "80", lg: "400", xl: "500" }}
        // display="none"
        flexDir="column"
        justifyContent="center"
        position={{
          base: "absolute",
          md: "absolute",
          lg: "absolute",
          xl: "absolute",
        }}
      >
        <Stack
          spacing="4"
          alignSelf="center"
          width={{ base: "100%", md: "100%", lg: "100%", xl: "auto" }}
        >
          <Box
            width={{ base: "100%", md: "", lg: "400.7px", xl: "400.7px" }}
            backgroundColor="#FAFAFA"
            alignSelf="center"
          >
            <Input variant="filled" placeholder="Name*" borderRadius="0" />
          </Box>
          <Box
            width={{ base: "100%", md: "", lg: "400.7px", xl: "400.7px" }}
            backgroundColor="#FAFAFA"
            alignSelf="center"
          >
            <Input
              variant="filled"
              placeholder="Email Address*"
              borderRadius="0"
            />
          </Box>{" "}
          <Box
            width={{ base: "100%", md: "", lg: "400.7px", xl: "400.7px" }}
            backgroundColor="#FAFAFA"
            alignSelf="center"
          >
            <Input
              variant="filled"
              placeholder="Phone Number"
              borderRadius="0"
            />
          </Box>{" "}
          <Box
            width={{ base: "100%", md: "", lg: "400.7px", xl: "400.7px" }}
            alignSelf="center"
          >
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
    </Flex>
  );
};
