import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import { Backstory, SideBox, TradeCard } from "@app/common";
import { BackstorySection, HeroSection, WhySection } from "@app/features";

const IndexPage = () => (
  <Flex flexDir="column">
    <HeroSection />
    <BackstorySection />
    <WhySection />
    <Box padding={10}>
      <TradeCard />
    </Box>
    {/* <SideBox /> */}
  </Flex>
);

export default IndexPage;
