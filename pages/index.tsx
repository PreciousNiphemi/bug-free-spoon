import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import { Backstory, SideBox, TradeCard, Footer } from "@app/common";
import {
  BackstorySection,
  HeroSection,
  WhySection,
  PricingSection,
} from "@app/features";

const IndexPage = () => (
  <Flex flexDir="column">
    <HeroSection />
    <BackstorySection />
    <WhySection />
    <PricingSection />
    <Footer />
  </Flex>
);

export default IndexPage;
