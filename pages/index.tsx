import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
// import { Backstory } from "@app/common";
import { BackstorySection } from "@app/features";

const IndexPage = () => (
  <Flex>
    <BackstorySection />

    {/* <Backstory /> */}
  </Flex>
);

export default IndexPage;
