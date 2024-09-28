import { Button, HStack ,Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Context} from "../index"


const Header = () => {
  const {setUserr,isAuthenticated,setIsAuthenticated} = useContext(Context);
   console.log(`set useeer ${setUserr}`)

  return (
      <HStack bgColor={"blackAlpha.900"} p={'6'} gap={4}>
      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}>
  <Link to='/'>Home</Link>
      </Button>

      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}>
  <Link to='/blogs'>Blogs</Link>
      </Button>
      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}>
  <Link to='/signup'>Register</Link>
      </Button>
      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}>
  {/* <Link to='/explore'>Explore2</Link>
      </Button>
      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}> */}
  <Link to='/explore2'>Explore</Link>
      </Button>

      <Button variant={'link'} colorScheme='messenger' css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}>
  <Link to='/about'>About</Link>
      </Button>

      <Text colorScheme='messenger' css={{ transform :'translateX(600%)'}}> {isAuthenticated?setUserr:""}</Text>
      
      </HStack>
  )
}

export default Header