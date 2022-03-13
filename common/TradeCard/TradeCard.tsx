import { Box, Text, HStack, Stack, Flex } from "@chakra-ui/react";

type Props = {
  subscriptionName: string;
  color: string;
  price: string;
  image: string;
  firstItem: string;
  secondItem: string;
  thirdItem?: string;
  btnColor: string;
};

export const TradeCard = ({
  subscriptionName,
  color,
  price,
  image,
  firstItem,
  secondItem,
  thirdItem,
  btnColor,
}: Props) => {
  return (
    <Box
      minH="413.19px"
      maxH="413.19px"
      minW={{ base: "300px", md: "350.9px", lg: "413.9px" }}
      maxW={{ base: "300px", md: "350.9px", lg: "413.9px" }}
      px={{ base: "8px", md: "", lg: "", xl: "12px" }}
      display="flex"
      // display="none"
      flexDirection="column"
      justifyContent="center"
      borderRadius="50px"
      backgroundColor={color}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={image}
    >
      <Stack>
        <Box>
          <Stack>
            <Text
              fontWeight={300}
              fontSize="30px"
              lineHeight="36px"
              color="#FFFFFF"
              textAlign="center"
              fontFamily="'KENOKY', sans-serif"
            >
              {subscriptionName} <br /> subscription
            </Text>
            <Box
              h="1px"
              backgroundColor="#E9E9E9"
              width="176.23px"
              alignSelf="center"
            />
          </Stack>
        </Box>
        <Stack alignSelf="center">
          <Text
            textAlign="center"
            color="#FFFFFF"
            fontFamily="'Montserrat', sans-serif"
            fontWeight={500}
            fontSize={{ base: "14px", md: "17px" }}
            lineHeight={{ base: "21px", md: "26.42px" }}
          >
            Which includes:
          </Text>
          <HStack>
            <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize={{ base: "14px", md: "17px" }}
              lineHeight={{ base: "21px", md: "26.42px" }}
              textAlign="center"
            >
              {firstItem}
            </Text>
          </HStack>

          <HStack>
            <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize={{ base: "14px", md: "17px" }}
              lineHeight={{ base: "21px", md: "26.42px" }}
              textAlign="center"
            >
              {secondItem}
            </Text>
          </HStack>

          <HStack display={thirdItem ? "flex" : "none"}>
            <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize={{ base: "14px", md: "17px" }}
              lineHeight={{ base: "21px", md: "26.42px" }}
              textAlign="center"
            >
              {thirdItem}
            </Text>
          </HStack>
        </Stack>
      </Stack>
      <Flex justifyContent="flex-end" mt={6}>
        <Text
          fontFamily="'KENOKY', sans-serif"
          color="#fff"
          fontWeight={300}
          textAlign="center"
          fontSize={{ base: "40px", md: "50px" }}
          lineHeight={{ base: " 48px", md: "60px" }}
        >
          {" "}
          {price}
        </Text>
      </Flex>

      <Flex justifyContent="center">
        <Box
          _hover={{
            textDecoration: "underline",
          }}
          as="button"
          color="#fff"
          fontFamily="'Montserrat', sans-serif"
          fontWeight={500}
          fontSize="15px"
          lineHeight="23.31px"
          width={{ base: "105px", md: "125.59px" }}
          height="40.08px"
          borderRadius="20px"
          backgroundColor={btnColor}
        >
          Select
        </Box>
      </Flex>
    </Box>
  );
};
