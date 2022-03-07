import { Flex, Box, Text, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Mentorship, TradeCard } from "@app/common";
import { subscriptionDetails } from "@app/constants";
import { AiOutlineWarning, AiFillWarning } from "react-icons/ai";

export const PricingSection = () => {
  return (
    <Flex
      py={20}
      flexDirection="column"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage="images/background-pattern.svg"
    >
      <Mentorship />
      <Box mt={10} alignSelf="center">
        <HStack>
          <AiFillWarning
            color="#FFB800"
            style={{
              height: "25px",
              width: "25px",
            }}
          />
          <Text
            fontFamily="'KENOKY', sans-serif"
            fontWeight={300}
            color="#4F4F4F"
            textAlign="center"
            fontSize="23px"
            lineHeight="27.6px"
          >
            Please note, All general bootcamp happens two times a month
          </Text>
        </HStack>
      </Box>

      <Box
        py="4"
        mt={20}
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
          Trade-Ideas package
        </Text>
      </Box>
      <Flex justifyContent="center">
        <Wrap justify="center" spacing="8">
          {subscriptionDetails.map((details, detailsId) => {
            return (
              <WrapItem key={detailsId}>
                <TradeCard
                  subscriptionName={details.subscriptionName}
                  color={details.color}
                  price={details.price}
                  image={details.image}
                  firstItem={details.firstItem}
                  secondItem={details.secondItem}
                  btnColor={details.btnColor}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Flex>
  );
};
