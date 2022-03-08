import {
  Flex,
  Box,
  Text,
  WrapItem,
  Wrap,
  Image,
  Stack,
} from "@chakra-ui/react";
import { InfoBox } from "@app/common";
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
      width="365.28px"
      pl="16"
      pr="16"
      height="201.53px"
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
          fontSize="20px"
          lineHeight="24.38px"
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
      px="20"
      minHeight="100vh"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      backgroundImage="images/dots.svg"
    >
      <Flex justifyContent="center" mb={20} position="relative">
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
            No whitewash or fake <br />
            <Text as="span" textAlign="center">
              deep quotes
            </Text>
          </Text>
          <Box
            alignSelf="center"
            position="absolute"
            top={{ base: "", md: "", lg: "", xl: "42px" }}
          >
            <Image src="/images/wrapper.svg" width="190px" />
          </Box>
        </Stack>
      </Flex>
      <Flex justifyContent="center">
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
    </Flex>
  );
};
