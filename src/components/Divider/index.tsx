import { Box, Flex } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
    >
      <Box
        border="1px solid"
        borderColor="gray.300"
        borderRadius={8}
        height="1px"
        w="90px"
      >
      </Box>
    </Flex>
  )
} 