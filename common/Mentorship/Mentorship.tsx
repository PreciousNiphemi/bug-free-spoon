import {
  Box,
  Text,
  HStack,
  Stack,
  Image,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";

export const Mentorship = () => {
  return (
    <Flex flexDirection="column">
      <Box
        py="4"
        mb={10}
        width="589.85px"
        alignSelf="center"
        borderRadius="50px"
        backgroundColor="#fff"
      >
        <Text
          fontFamily="'KENOKY', sans-serif"
          fontWeight={300}
          textAlign="center"
          fontSize="50px"
          lineHeight="50px"
        >
          My Mentorship Pricing
        </Text>
      </Box>
      <Flex justifyContent="center">
        <Wrap justify="center" spacing="14px">
          <WrapItem>
            <Box
              display="flex"
              backgroundColor="#fff"
              flexDirection="column"
              minHeight="604px"
              minWidth="359.74px"
              maxWidth="359.74px"
              boxShadow="md"
            >
              <Box width="100%" height="17.12px" backgroundColor="#FFB800" />
              <Stack mt={4} px="8">
                <Image
                  src="images/Star1.svg"
                  h="28"
                  w="28"
                  alignSelf="center"
                />
                <Text
                  alignSelf="center"
                  position="absolute"
                  pt={8}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="28px"
                  color="#fff"
                  lineHeight="34.13px"
                  fontWeight={700}
                >
                  $650
                </Text>
                <HStack alignSelf="center">
                  <Box h={2} w={8} shadow="sm" />
                  <Text
                    color="#7D7D7D"
                    fontSize="18px"
                    fontWeight={700}
                    lineHeight="21.94px"
                    fontFamily="'Montserrat', sans-serif"
                  >
                    Bootcamp Package
                  </Text>
                  <Box h={2} w={8} shadow="sm" />
                </HStack>
                <Stack alignSelf="center">
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      mt="auto"
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      {" "}
                      One-week group Bootcamp with Hendray
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Only intro and last day summary videos will be made
                      available
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      All other videos will not be made available
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Access to 6 months mentorship and trade Ideas
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Live sessions with me every week
                    </Text>
                  </Stack>

                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Get funding Opportunities from proprietary firms
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </WrapItem>
          {/* Second Box */}
          <WrapItem>
            <Box
              display="flex"
              backgroundColor="#fff"
              flexDirection="column"
              minHeight="604px"
              minWidth="359.74px"
              maxWidth="359.74px"
              boxShadow="md"
            >
              <Box width="100%" height="17.12px" backgroundColor="#9327FF" />
              <Stack mt={4} px="8">
                <Image
                  src="images/Star2.svg"
                  h="28"
                  w="28"
                  alignSelf="center"
                />
                <Text
                  alignSelf="center"
                  position="absolute"
                  pt={8}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="28px"
                  color="#fff"
                  lineHeight="34.13px"
                  fontWeight={700}
                >
                  $1800
                </Text>
                <HStack alignSelf="center">
                  <Box h={2} w={8} shadow="sm" />
                  <Text
                    color="#7D7D7D"
                    fontSize="18px"
                    fontWeight={700}
                    lineHeight="21.94px"
                    fontFamily="'Montserrat', sans-serif"
                  >
                    Bootcamp Package VIP
                  </Text>
                  <Box h={2} w={8} shadow="sm" />
                </HStack>
                <Stack alignSelf="center">
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      mt="auto"
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      {" "}
                      One-week group Bootcamp with Hendray
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      All videos will be made available
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      One-year mentorship access and trade Ideas group access
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Personal access to Hendray on live calls once a month
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Live sessions with Hendray every week
                    </Text>
                  </Stack>

                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Get funding Opportunities from proprietary firms
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </WrapItem>

          {/* Third Box */}
          <WrapItem>
            <Box
              backgroundColor="#fff"
              display="flex"
              flexDirection="column"
              minHeight="604px"
              minWidth="359.74px"
              maxWidth="359.74px"
              boxShadow="md"
            >
              <Box width="100%" height="17.12px" backgroundColor="#2737C7" />
              <Stack mt={4} px="8">
                <Image
                  src="images/Star3.svg"
                  h="28"
                  w="28"
                  alignSelf="center"
                />
                <Text
                  alignSelf="center"
                  position="absolute"
                  pt={8}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="28px"
                  color="#fff"
                  lineHeight="34.13px"
                  fontWeight={700}
                >
                  $2500
                </Text>
                <HStack alignSelf="center">
                  <Box h={2} w={8} shadow="sm" />
                  <Text
                    color="#7D7D7D"
                    textAlign="center"
                    fontSize="18px"
                    fontWeight={700}
                    lineHeight="21.94px"
                    fontFamily="'Montserrat', sans-serif"
                  >
                    One on One Training Sessions
                  </Text>
                  <Box h={2} w={8} shadow="sm" />
                </HStack>
                <Stack alignSelf="center">
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      One week one on one training session with me
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      All videos will be made available
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Lifetime mentorship access and trade Ideas group access
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Personal access to me on live calls once in two weeks
                    </Text>
                  </Stack>

                  <Stack direction="row">
                    <Text color="#323232">-</Text>
                    <Text
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight={500}
                      lineHeight="23.31px"
                      fontSize="15px"
                    >
                      Live sessions with Hendray every week
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <Text color="#323232">-</Text>
                  <Text
                    mt="auto"
                    fontFamily="'Montserrat', sans-serif"
                    fontWeight={500}
                    lineHeight="23.31px"
                    fontSize="15px"
                  >
                    {" "}
                    Get funding Opportunities from proprietary firms
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Flex>
  );
};
