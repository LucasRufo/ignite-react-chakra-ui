import { Flex, Image, Text, Box, useBreakpointValue } from "@chakra-ui/react";

const travelTypes = [
  {
    src: "/svgs/cocktail.svg",
    alt: "cocktail",
    text: "vida noturna"
  },
  {
    src: "/svgs/surf.svg",
    alt: "surf",
    text: "praia"
  },
  {
    src: "/svgs/building.svg",
    alt: "building",
    text: "moderno"
  },
  {
    src: "/svgs/museum.svg",
    alt: "museum",
    text: "clássico"
  },
  {
    src: "/svgs/earth.svg",
    alt: "earth",
    text: "e mais..."
  }
]

export function TravelTypes() {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      w="100%"
      maxW="1160px"
      margin="0 auto"
      justifyContent="space-between"
      alignContent="center"
      mt={["8px", "100px"]}
      mb={["36px", "80px"]}
    >
      <Flex
        w="100%"
        maxW={isMobileVersion ? "375px" : "100%"}
        justifyContent={["space-around", "space-between"]}
        gap={[]}
        flexWrap="wrap"
        paddingX={["50px", "0px"]}
      >
        {!isMobileVersion && (
          travelTypes.map(({ src, alt, text }) => (
            <Flex
              key={src}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              w="160px"
            >
              <Image src={src} alt={alt} />
              <Text
                as="h3"
                color="gray.300"
                fontWeight={600}
                fontSize={24}
                lineHeight="36px"
                textAlign="center"
                mt="24px"
              >
                {text}
              </Text>
            </Flex>
          ))
        )}

        {isMobileVersion && (
          travelTypes.map(({ src, alt, text }) => (
            <Flex
              key={src}
              justify="center"
              align="center"
              gap="8px"
              mt="28px"
            >
              <Box
                rounded="full"
                bgColor="yellow.300"
                w="8px"
                h="8px"
              >
              </Box>
              <Text
                as="h3"
                color="gray.300"
                fontWeight={600}
                fontSize={18}
                lineHeight="27px"
                textAlign="center"
              >
                {text}
              </Text>
            </Flex>
          ))
        )}

      </Flex>

    </Flex>
  )
}