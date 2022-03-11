import {
  Flex,
  Box,
  Text,
  WrapItem,
  Wrap,
  Image,
  Stack,
} from "@chakra-ui/react";
import { InfoBox, SideBox } from "@app/common";
import { quotesDetails } from "@app/constants";

export const info = [1, 2, 3, 4];

type Props = {
  title: string;
  innerColor: string;
  outerColor: string;
  image: string;
  backgroundColor: string;
};

export const QuoteBox = ({
  title,
  innerColor,
  outerColor,
  image,
  backgroundColor,
}: Props) => {
  return (
    <Box
      width={{ base: "236.37px", md: "365.28px" }}
      pl={{ base: "20", md: "16" }}
      pr={{ base: "18", md: "16" }}
      height={{ base: "130.41px", md: "201.53px" }}
      display="flex"
      flexDir="column"
      justifyContent="center"
      borderRadius="80px"
      position="relative"
      backgroundColor={backgroundColor}
    >
      <InfoBox innerColor={innerColor} outerColor={outerColor} image={image} />
      <Flex justifyContent="center">
        <Text
          fontFamily="Montserrat"
          fontWeight="500"
          textAlign="left"
          fontSize={{ base: "12.94px", md: "20px" }}
          lineHeight={{ base: "15.78px", md: "24.38px" }}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  );
};

export const QuoteSection = () => {
  return (
    <Flex
      flexDir="column"
      py="20"
      minHeight="80vh"
      backgroundRepeat="no-repeat"
      backgroundPosition="right center"
      backgroundImage="images/dots.svg"
    >
      <Flex justifyContent="center">
        <Stack>
          <Text
            color="#000000"
            fontSize="30px"
            alignSelf="center"
            textAlign="center"
            zIndex={10}
            fontFamily="'KENOKY', sans-serif"
            lineHeight={{ base: "", md: "", lg: "", xl: "50px" }}
          >
            No whitewash or fake
          </Text>
          <Box position="relative" display="flex" justifyContent="center">
            <Box alignSelf="center">
              <Image src="/images/wrapper.svg" width="190px" />
            </Box>
            <Text
              color="#000000"
              fontSize="30px"
              alignSelf="center"
              textAlign="center"
              zIndex={10}
              fontFamily="'KENOKY', sans-serif"
              lineHeight={{ base: "", md: "", lg: "", xl: "50px" }}
              position="absolute"
              top={{ base: "0px", md: "0px", lg: "0px", xl: "0px" }}
            >
              deep quotes
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Flex
        my={{ base: "6", md: "6" }}
        justifyContent="flex-start"
        width="100%"
      >
        <SideBox />
      </Flex>
      <Flex my={{ base: "", md: "6" }} justifyContent="center" width="100%">
        <Text
          textAlign="center"
          color="#7D7D7D"
          fontSize={{ base: "", md: "20px" }}
          fontFamily="Montserrat"
          fontWeight={500}
          lineHeight={{ base: "", md: "24.38px" }}
          display={{ base: "none", md: "block" }}
        >
          Get quality value for your money.
        </Text>
      </Flex>
      <Flex justifyContent="center" px={{ base: "20", md: "20" }}>
        <Wrap justify="center" spacing="20">
          {quotesDetails.map((quoteDetails, quoteKey) => {
            return (
              <WrapItem>
                <QuoteBox
                  title={quoteDetails.title}
                  innerColor={quoteDetails.innerColor}
                  outerColor={quoteDetails.outerColor}
                  image={quoteDetails.image}
                  backgroundColor={quoteDetails.backgroundColor}
                  key={quoteKey}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
      <Flex mt={20} justifyContent="center">
        <Stack direction="row" spacing={{ base: 2, md: 2 }}>
          <Text
            color="#000000"
            fontSize="20px"
            fontWeight={500}
            lineHeight="24px"
            fontFamily="'Montserrat', sans-serif"
          >
            Get Started
          </Text>
          <Image src="images/arrow2.svg" />
        </Stack>
      </Flex>
    </Flex>
  );
};
