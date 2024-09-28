import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useContext, useState } from 'react'

  import { Link,Navigate } from 'react-router-dom';
  import {toast} from "react-hot-toast";
  import axios from "axios";
import { Context, serverr } from "../index";
  
  const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [formData, setFormData] = useState(new FormData());

    // const handleChange = (e) => {
    //   formData.set(e.target.name, e.target.value);
    // };

    // using useContext hook and destrucutring it
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);

   const submitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("naame",name);
    formData.append("emaail",email);
    formData.append("passsword",password);

    // console.log(formData);
    // console.log(name);
    const result = await axios.post(
        "http://localhost:5000/user/signup",
        formData,{
          
          headers: {
            'Content-Type': 'multipart/form-data'
          }}
    )
    // alert('Data submitted successfully');
    setIsAuthenticated(true);
    toast.success("Register sucessfully")
   }
 
  if(isAuthenticated) return <Navigate to={"/"}/>
    return (
      <Container  h={'110vh'} p={'10'}>
        <form method="POST" onSubmit={submitHandler}>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            // m={'auto'}
            my={'-10'}
          >
            <Heading  alignSelf={'center'}>Welcome</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input

              placeholder={'Name'}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type='text'
              name='name'
              required // requiured matlab chaiye hi chahiye
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Email'}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type='email'
              name='email'
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={'password'}
              name='password'
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button type='submit' colorScheme={'purple'} >
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signin'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  