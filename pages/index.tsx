import { Flex } from "@chakra-ui/react";
import { Footer } from "@app/common";
import {
  BackstorySection,
  HeroSection,
  WhySection,
  PricingSection,
  ContactSection,
  QuoteSection,
} from "@app/features";

const IndexPage = () => (
  <Flex flexDir="column" width="100%">
    <HeroSection />
    <BackstorySection />
    <WhySection />
    <QuoteSection />
    <PricingSection />
    <ContactSection />
    <Footer />
  </Flex>
);

export default IndexPage;
