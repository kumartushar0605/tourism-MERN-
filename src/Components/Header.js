import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <HStack bgColor={"blackAlpha.900"} p={'6'}>
      <Button variant={'link'} colorScheme='messenger'>
  <Link to='/'>Home</Link>
      </Button>

      <Button variant={'link'} colorScheme='messenger'>
  <Link to='/exchanges'>Exchanges</Link>
      </Button>

      <Button variant={'link'} colorScheme='messenger'>
  <Link to='/coins'>Coins</Link>
      </Button>
      
      </HStack>
  )
}

export default Header