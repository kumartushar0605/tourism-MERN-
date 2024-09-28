import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  
  import React, { useContext, useEffect, useState } from 'react'

  import {Context, serverr} from "../index"
import axios from 'axios';
import { toast } from 'react-hot-toast';

  import { Link ,Navigate} from 'react-router-dom';
  
  const Login = () => {
   

    const {setUserr,isAuthenticated,setIsAuthenticated} = useContext(Context);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler = async(e)=>{
      e.preventDefault();
      console.log(email,password)
      const formData = new FormData();
      formData.append("emaill",email);
      formData.append("passwordd",password);
      
 
      try {
         const data = await axios.post('http://localhost:5000/user/login',
          formData
         ,{
             headers:{
              'Content-Type': 'multipart/form-data'
            },
             
             
         })
         
        //  alert("login sucessfully")
         toast.success("login sucessfully")
         setIsAuthenticated(true)
        
         
      } catch (error) {
         console.log(error)
         toast.error(error.response.data.message)// we the message that we have written in the backend
        //  setIsAuthenticated(false)
         
         
      }
    }

  
 
 
     if(isAuthenticated) return <Navigate to={"/"}/>// if the user isauthenticated then navigate it to home page 
 
    return (
      <Container  h={['80vh','100vh']} p={'5'}>
        <form onSubmit={submitHandler} action="">
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
  
            <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>
  
            <Button colorScheme={'purple'} type={'submit'}>
              Log In
            </Button>
  
            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Login;
  