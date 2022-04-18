import { Flex, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { useRouter } from 'next/router';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    bgImage: '/Europe.png',
    name: 'Europa',
    text: 'O continente mais antigo.',
    link: 'europa'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1516141535911-e3b982713e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'América do Norte',
    text: 'Continente dos estadunidenses.',
    link: 'america-do-norte'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1519761112046-3abcd5a21728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    name: 'América do Sul',
    text: 'O continente do hexa.',
    link: 'america-do-sul'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Oceania',
    text: 'O continente das aranhas.',
    link: 'oceania'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    name: 'África',
    text: 'O continente das girafas.',
    link: 'africa'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1532236395709-7d70320fec2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80',
    name: 'Ásia',
    text: 'O continente do anime.',
    link: 'asia'
  },
];

export function Carousel() {
  const router = useRouter();

  return (
    <Flex
      mt={["24px", "52px"]}
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Text
        as="p"
        fontSize={[20, 36]}
        lineHeight={["30px", "54px"]}
        textAlign="center"
        fontWeight={500}
        color="gray.300"
      >
        Vamos nessa?
      </Text>
      <Text
        as="p"
        fontSize={[20, 36]}
        lineHeight={["30px", "54px"]}
        textAlign="center"
        fontWeight={500}
        color="gray.300"
      >
        Então escolha seu continente
      </Text>

      <Box
        mt={["20px", "52px"]}
        mb={["24px", "40px"]}
        h={["250px", "450px"]}
        w="100%"
        maxW="1240px"
      >
        <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>
          {data.map((item, index) => (
            <SwiperSlide key={index} onClick={() => router.push(`/${item.link}`)} style={{ cursor: 'pointer' }}>
              <Box
                bgImage={item.bgImage}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgColor="black"
                w="100%"
                h="100%"
                className="darken"
              >
                <Flex
                  w="100%"
                  h="100%"
                  justify="center"
                  align="center"
                  flexDirection="column"
                >
                  <Text
                    fontWeight={700}
                    fontSize={[24, 48]}
                    lineHeight={["36px", "72px"]}
                    textAlign="center"
                    color="gray.50"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontWeight={700}
                    fontSize={[14, 24]}
                    lineHeight={["21px", "36px"]}
                    textAlign="center"
                    color="gray.100"
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

      </Box>
    </Flex>
  )
}