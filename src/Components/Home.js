import { Box, Button, Container ,HStack,Heading,Text, VStack,Image} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { hover } from '@testing-library/user-event/dist/hover'
import { transform } from 'framer-motion'
// import React from 'react'
import codex from "../assets/codex.png"
import { FaInstagram,FaLinkedinIn,FaGithub ,FaFacebook , FaTwitter , FaYoutube , FaTelegram, FaPeopleCarry,FaMap } from 'react-icons/fa'
import {BsFillPlayCircleFill}  from 'react-icons/bs' 
import Header from './Header'
import img from '../assets/ol.jpg'
import img2 from '../assets/man-37500.svg'
import { motion } from 'framer-motion'
import '../Styles/home.css'
import {Link} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

  import {Context, serverr} from "../index"
  import axios from 'axios'

const Home = () => {
  
  const animation ={
    h1:{
        initial:{
x:"-100%",
opacity:0,

},
whileInView:{
x:0,
opacity:1
}

    }
  }
  return (
    
    <>
    
    <Box marginTop={-1}>
      <Container maxW={'container.x1'} minH={'85vh'}>
      
      <HStack marginTop={30}>
      <VStack>
      <VStack marginStart={20}>
      <motion.Heading   {...animation.h1} marginTop={70} marginStart={-20} className='heading' >Welcome To Explore</motion.Heading>
      <Text fontFamily={'cursive'} fontSize={40} paddingTop={2} >We are here , <br/>To Explore With You </Text>
      </VStack>
      <HStack p={7} gap={4}  className='icon'>
      <div className='div' style={{
        animationDelay:"0.3s"
      }}><a  href='/'> <FaFacebook  size={25}  /></a></div>
      <div style={{
        animationDelay:"0.5s"
      }} className='div'><a href='/'><FaGithub size={25}/></a></div>
      <div style={{
        animationDelay:"0.7s"
      }} className='div'><a href='/'><FaInstagram size={25}/></a></div>
      <div style={{
        animationDelay:"1s"
      }} className='div'><a href='/'><FaLinkedinIn size={25}/></a></div>
      <div style={{
        animationDelay:"1.2s"
      }} className='div'><a href='/'> <FaTwitter size={25}/></a></div>
      <div style={{
        animationDelay:"1.4s"
      }} className='div'><a href='/'><FaYoutube scale={25}/></a></div>
      </HStack>
      <VStack alignItems={'flex-start'} ms={8} >
      <Link to={"/explore"}>
        <Button css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }}  w={170} h={50} colorScheme='messenger'><FaMap color='black'/> <Text marginStart={2}>Explore</Text></Button></Link>

      </VStack>
      </VStack>
      <section className='im'>
        <Image className='img' src={img2}></Image>
      </section>
      </HStack>
     
      
      </Container>
     
     
      
      
    </Box>
    
    </>
  )
  
}



export default Home