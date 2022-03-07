import { Box, Text, HStack, Stack, Flex } from "@chakra-ui/react";

type Props = {
  subscriptionName: string;
  color: string;
  price: string;
  image: string;
  firstItem: string;
  secondItem: string;
  btnColor: string;
};

export const TradeCard = ({
  subscriptionName,
  color,
  price,
  image,
  firstItem,
  secondItem,
  btnColor,
}: Props) => {
  return (
    <Box
      minH="413.19px"
      maxH="413.19px"
      minW="523.79px"
      maxW="523.79px"
      padding={10}
      display="flex"
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
            fontSize="17px"
            lineHeight="26.42px"
          >
            Which includes:
          </Text>
          <HStack>
            {/* <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize="17px"
              lineHeight="26.42px"
              textAlign="center"
            >
              .
            </Text> */}
            <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize="17px"
              lineHeight="26.42px"
              textAlign="center"
            >
              {firstItem}
            </Text>
          </HStack>

          <HStack>
            {/* <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize="17px"
              lineHeight="26.42px"
              textAlign="center"
            >
              .
            </Text> */}
            <Text
              color="#FFFFFF"
              fontFamily="'Montserrat', sans-serif"
              fontWeight={500}
              fontSize="17px"
              lineHeight="26.42px"
              textAlign="center"
            >
              {secondItem}
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
          fontSize="50px"
          lineHeight="60px"
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
          width="125.59px"
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
