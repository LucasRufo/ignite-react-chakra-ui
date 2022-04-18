import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />

      <Box as="main">
        <HeroSection />
        <TravelTypes />
        <Divider />
        <Carousel />
      </Box>
    </>
  )
}
