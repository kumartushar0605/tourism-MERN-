import React from 'react'
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <Container maxW="container.md" h={'70vh'} mt={8}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5}}
        >
          <Box
            textAlign="center"
            bg="gray.100"
            p={8}
            borderRadius="lg"
            borderWidth="2px"
            borderStyle="solid"
          >
            <Heading
              as="h1"
              size="xl"
              mb={4}
              color="teal.500"
              // whileHover={{ scale: 1.1, color: "teal.600" }}
              // whileTap={{ scale: 0.9 }}
              // transition={{ duration: 0.2 }}
            >
              About Us
            </Heading>
            <Text
              fontSize="lg"
              color="gray.700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum tellus eget dui euismod ultrices. Nullam condimentum
              nisl vitae convallis sollicitudin. Suspendisse potenti. Fusce tempor
              rutrum justo, nec tempor lorem faucibus sed. Ut consectetur dui non
              nisi consequat, quis efficitur risus eleifend. Aliquam sit amet enim
              porta, laoreet tortor non, efficitur nisi. Phasellus lacinia magna
              non sapien posuere, at ullamcorper justo commodo. Vestibulum euismod
              aliquet justo, ac facilisis neque. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default About