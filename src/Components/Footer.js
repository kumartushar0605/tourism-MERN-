import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text textTransform={"uppercase"}
            fontSize={"sm"}
            letterSpacing={"1px"}
            textAlign={["center", "left"]}
          >
          We are here to explore with you , The bueaty of bihar
          </Text>
        </VStack>

        <VStack>
          {/* <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} /> */}
          <Avatar boxSize={"28"} mt={["4", "0"]}  />

          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
