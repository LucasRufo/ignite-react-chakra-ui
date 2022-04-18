import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function HeroSection() {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      bgImage="/Background.png"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h={["163px", "335px"]}
    >
      <Flex
        w="100%"
        h="100%"
        maxW="1160px"
        margin="0 auto"
        justifyContent="space-between"
        alignContent="center"
      >
        <Flex
          h="100%"
          flexDirection="column"
          justifyContent="center"
          paddingX={["16px", "0px"]}
        >
          <Text
            as="h1"
            fontWeight={500}
            fontSize={[20, 36]}
            lineHeight={["30px", "54px"]}
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Text>
          <Text
            as="h2"
            fontWeight={400}
            fontSize={[14, 20]}
            lineHeight={["21px", "30px"]}
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você {!isMobileVersion && <br />} sempre sonhou.
          </Text>
        </Flex>
        <Image
          src="/svgs/Airplane.svg"
          alt="airplane"
          h="355px"
          mt="20px"
          display={["none", "initial"]}
        />
      </Flex>

    </Box >
  )
}