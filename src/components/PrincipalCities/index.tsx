import { Box, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";

interface PrincipalCitiesProps {
  cities: City[];
}

interface City {
  name: string;
  country: string;
  flag: string;
  image: string;
}

export function PrincipalCities({ cities }: PrincipalCitiesProps) {
  return (
    <Box>
      <Text
        as="h1"
        marginBottom={["20px", "40px"]}
        fontSize={[24, 36]}
        fontWeight={500}
        lineHeight={["36px", "54px"]}
        color="gray.300"
      >
        Cidades +100
      </Text>

      <SimpleGrid columns={[1, 4]} spacing="45px" paddingX={["44px", "0px"]}>
        {cities.map((city, index) => (
          <Box key={index} h="280px" maxH="280px" >
            <Image
              src={city.image}
              borderTopRadius={4}
              overflow=""
              h="173px"
              w="100%"
            />
            <Flex
              h="107px"
              paddingX={["24px", "24px"]}
              border="1px solid"
              borderColor="yellow.300"
              borderTop="none"
              borderBottomRadius={4}
              bgColor="white"
              justify="space-between"
              align="center"
            >
              <Box>
                <Text
                  fontSize={20}
                  lineHeight="25px"
                  fontWeight={600}
                  color="gray.300"
                >
                  {city.name}
                </Text>
                <Text
                  mt="12px"
                  fontSize={16}
                  lineHeight="26px"
                  fontWeight={500}
                  color="gray.200"
                >
                  {city.country}
                </Text>
              </Box>
              <Box>
                <Image h="30px" w="30px" rounded="full" src={city.flag} />
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

    </Box>
  )
}