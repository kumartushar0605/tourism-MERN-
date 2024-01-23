import { Spinner, VStack,Box } from '@chakra-ui/react'
import React from 'react'

const Loaderr = () => {
  return (
    <VStack h={"90vh"} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'xl'}/>
      </Box>
    </VStack>
  )
}

export default Loaderr