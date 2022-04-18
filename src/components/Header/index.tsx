import { Flex, forwardRef, Image, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBackIosNew } from 'react-icons/md';

export function Header() {
  const router = useRouter();
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      as="header"
      align="center"
      justify='center'
      w="100%"
      h={["50px", "100px"]}
      maxW="1160px"
      margin="0 auto"
      position="relative"
    >
      {router.pathname !== "/" && (
        <Link href="/">
          <MdArrowBackIosNew style={{ cursor: 'pointer', position: 'absolute', left: isMobileVersion ? 12 : 0 }}
            color="black"
            size={isMobileVersion ? 14 : 20}
          />
        </Link>
      )}

      <Image src="/svgs/Logo.svg" alt="logo" h={["20px", "initial"]} w={["80px", "initial"]} />
    </Flex>
  )
}
