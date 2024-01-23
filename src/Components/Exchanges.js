import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { Container, HStack } from '@chakra-ui/react';
import Loaderr from './Loaderr';
import ExchangeCart from './ExchangeCart';
import ErrorMsg from './ErrorMsg';
const Exchanges = () => {
 
  const [exchanges,setExchanges] = useState([]);
  const [loading,setLoading ]= useState(true);
  const [error,setError] = useState(false)
  
    useEffect(()=>{
               const fetchExchanges = async()=>{
                try{
                  const data = await axios.get(`${server}/exchanges`)
                console.log(data.data)

                setExchanges(data.data);
                setLoading(false);// gab tak data nhi mila loding true else data milte hi loding false
                }catch (error) {
                  setError(true);
                  setLoading(false);
                  console.log(error)
                  
                }
               }
               fetchExchanges();


    },[]);

    
    if(error)
    return <ErrorMsg message={"Error while fetching exchanges"}/>

      
    return (
                
    <Container maxW={'container.xl'} >
    {/* ye tarnary operator h agar loading true h to Loderr : nhi to <>Data</> */}
    {loading ?<Loaderr/> : <>
      <HStack wrap={'wrap'}>
        {exchanges.map((i)=>(
          <ExchangeCart name={i.name} symbol={i.symbol} img ={i.image} rank={i.trust_score_rank} url={i.url} key={i.id}/>
        ))}
      </HStack>
    </>
    
    }

    </Container>
    )
}

export default Exchanges