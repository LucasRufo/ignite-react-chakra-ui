import { Box, Flex, Text } from "@chakra-ui/react";

interface ContinentInfoProps {
  description: string;
  countriesCount: number;
  languagesCount: number;
  citiesCount: number;
}

export function ContinentInfo({ description, countriesCount, languagesCount, citiesCount }: ContinentInfoProps) {
  return (
    <Flex
      marginTop={["24px", "80px"]}
      marginBottom={["32px", "80px"]}
      gap={["16px", "70px"]}
      flexDirection={["column", "row"]}
      flexWrap={["wrap", "nowrap"]}
    >
      <Box w="100%" h={["100%", "220px"]}>
        <Text
          fontSize={[14, 24]}
          fontWeight={400}
          textAlign="justify"
          lineHeight={["21px", "36px"]}
          color="gray.300"
        >
          {description}
        </Text>
      </Box>

      <Box w="100%" h={["100%", "220px"]}>
        <Flex
          justify="space-around"
          align="center"
          h="100%"
          w="100%"
        >
          <Box>
            <Text
              fontSize={[24, 48]}
              lineHeight={["36px", "40px"]}
              fontWeight={600}
              textAlign="center"
              color="yellow.300"
            >
              {countriesCount}
            </Text>
            <Text
              fontSize={[18, 24]}
              fontWeight={600}
              lineHeight={["27px", "36px"]}
              textAlign="center"
              color="gray.300"
            >
              países
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={[24, 48]}
              lineHeight={["36px", "40px"]}
              fontWeight={600}
              textAlign="center"
              color="yellow.300"
            >
              {languagesCount}
            </Text>
            <Text
              fontSize={[18, 24]}
              fontWeight={600}
              lineHeight={["27px", "36px"]}
              textAlign="center"
              color="gray.300"
            >
              linguas
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={[24, 48]}
              lineHeight={["36px", "40px"]}
              fontWeight={600}
              textAlign="center"
              color="yellow.300"
            >
              {citiesCount}
            </Text>
            <Text
              fontSize={[18, 24]}
              fontWeight={600}
              lineHeight={["27px", "36px"]}
              textAlign="center"
              color="gray.300"
            >
              cidades +100
            </Text>
          </Box>
        </Flex>
      </Box>

    </Flex>
  )
}