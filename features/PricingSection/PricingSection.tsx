import {
  Flex,
  Box,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { Mentorship, TradeCard } from "@app/common";
import { subscriptionDetails } from "@app/constants";
import { AiFillWarning } from "react-icons/ai";

export const PricingSection = () => {
  return (
    <Flex
      width="100%"
      // position="relative"
      // top={100}
      py={20}
      flexDirection="column"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage="images/background-pattern.svg"
    >
      <Mentorship />
      <Box
        mt={10}
        alignSelf="center"
        display="flex"
        px={{ base: 8, md: 8 }}
        // display="none"
      >
        <HStack spacing="2">
          <Icon
            color="#FFB800"
            h={{ base: "", md: 8 }}
            w={{ base: "", md: 8 }}
            as={AiFillWarning}
            mb={{ base: "2", md: 0 }}
          />

          <Text
            fontFamily="'KENOKY', sans-serif"
            fontWeight={300}
            color="#4F4F4F"
            textAlign="center"
            fontSize={{ base: "15px", md: "23px" }}
            lineHeight={{ base: "20px", md: "27.6px" }}
          >
            Please note, All general bootcamp happens two times a month
          </Text>
        </HStack>
      </Box>

      <Box
        py="4"
        px="4"
        // display="none"
        mt={20}
        mb={10}
        minW={{ base: "300px", md: "589.85px" }}
        alignSelf="center"
        borderRadius="50px"
        backgroundColor="#fff"
      >
        <Text
          fontFamily="'KENOKY', sans-serif"
          fontWeight={300}
          textAlign="center"
          fontSize={{ base: "35px", md: "50px" }}
          lineHeight={{ base: "42px", md: "50px" }}
        >
          Trade-Ideas package
        </Text>
      </Box>

      <Flex justifyContent="center" pb={28} mt={20}>
        <Wrap
          justify="center"
          spacing="4"
          direction={{ base: "column", md: "row" }}
        >
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
                  thirdItem={details.thirdItem}
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
