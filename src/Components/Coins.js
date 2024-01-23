import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loaderr from './Loaderr';
import ExchangeCart from './ExchangeCart';
import ErrorMsg from './ErrorMsg';
import CoinCard from './CoinCard';
const Coins = () => {
 


  const [coins,setCoins] = useState([]);
  const [loading,setLoading ]= useState(true);
  const [error,setError] = useState(false)
  const [page,setPage] = useState(1);
  const [currency,SetCurrency]=useState("inr")
  

const currencySymbol =currency==="inr"?"₹":currency==="eur"?"€":"$";

    useEffect(()=>{
               const fetchCoins = async()=>{
                try{
                  const data = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
                console.log(data.data)

                setCoins(data.data);
                setLoading(false);// gab tak data nhi mila loding true else data milte hi loding false
                }catch (error) {
                  setError(true);
                  setLoading(false);
                  console.log(error)
                  
                }
               }
               fetchCoins();


    },[currency,page]);

    
    if(error)
    return <ErrorMsg message={"Error while fetching coins"}/>

    const changePage = (page)=>{

      setPage(page);
      setLoading(true);

    }

    const btns = new Array(132).fill(1)
      
    return (
                
    <Container maxW={'container.xl'} >
    {/* ye tarnary operator h agar loading true h to Loderr : nhi to <>Data</> */}
    {loading ?<Loaderr/> : <>
    <RadioGroup value={currency} onChange={SetCurrency}>
    {/* onChange me event.target iss liye nhi kiye kyu ki ye chkra ui ka RAdioButtons h */}
      <HStack spacing={'8'} m={12}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={"eur"}>EURO</Radio>
            <Radio value={'usd'}>USD</Radio>

      </HStack>
    </RadioGroup>
      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {coins.map((i)=>(
          <CoinCard name={i.name} price={i.current_price} symbol={i.symbol} img ={i.image} rank={i.trust_score_rank} url={i.url} id={i.id} currencySymbol={currencySymbol}/>
        ))}
      </HStack>




<HStack width={'full'} m={10} p={8} overflowX={'auto'}>
  {
    btns.map((i,index )=>(
     <Button key={index} colorScheme='messenger' onClick={()=>changePage(index+1)}>{index +1}</Button>
    ))
  }
</HStack>


    </>
    
    }

    </Container>
    )
}



export default Coins