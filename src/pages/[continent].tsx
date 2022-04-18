import { Box, Text, StyleProps, Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ContinentInfo } from "../components/ContinentInfo";
import { Header } from "../components/Header";
import { PrincipalCities } from "../components/PrincipalCities";

type ContinentProps = {
  selectedContinent: {
    name: string;
    description: string;
    countriesCount: number;
    languagesCount: number;
    citiesCount: number;
    bgImage: string;
    cities: Array<{
      name: string;
      country: string;
      flag: string;
      image: string;
    }>
  }
}

export default function Continent({ selectedContinent }: ContinentProps) {
  return (
    <>
      <Header />

      <Box as="main">
        <Box
          bgImage={selectedContinent.bgImage}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgColor="black"
          w="100%"
          h={["150px", "500px"]}
        >
          <Container
            height="100%"
            paddingTop={["0px", "370px"]}
            paddingX="16px"
            display={["flex", "block"]}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize={[28, 48]}
              fontWeight={600}
              lineHeight={["42px", "72px"]}
              color="gray.50"
            >
              {selectedContinent.name}
            </Text>
          </Container>
        </Box>


        <Container paddingX="16px" mb="35px">

          <ContinentInfo
            description={selectedContinent.description}
            countriesCount={selectedContinent.countriesCount}
            languagesCount={selectedContinent.languagesCount}
            citiesCount={selectedContinent.citiesCount}
          />

          <PrincipalCities cities={selectedContinent.cities} />

        </Container>
      </Box>
    </>
  );
}

interface ContainerProps extends StyleProps {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box
      width="100%"
      maxW="1160px"
      margin="0 auto"
      {...props}
    >
      {children}
    </Box >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continent: "europa", } },
      { params: { continent: "america-do-norte", } },
      { params: { continent: "america-do-sul", } },
      { params: { continent: "oceania", } },
      { params: { continent: "asia", } },
      { params: { continent: "africa", } },
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const data = [{
    name: 'Europa',
    slug: 'europa',
    bgImage: '/Europe.png',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    countriesCount: 50,
    languagesCount: 60,
    citiesCount: 98,
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
      },
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
      },
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
      },
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
      },
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
      },
    ]
  }]

  const selectedContinent = data.find(m => m.slug === continent);

  return {
    props: {
      selectedContinent,
    },
  }
}