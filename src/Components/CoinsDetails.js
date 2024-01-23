import { Box, Container, HStack, Radio, RadioGroup, VStack ,Text,Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { useParams } from 'react-router-dom';

import ErrorMsg from './ErrorMsg';
import Loaderr from './Loaderr';
import axios from 'axios';
import Chart from './Chart';


const CoinsDetails = ({high,low}) => {


  const CustomBar = ({low,high}) =>(
    <VStack w={'full'} >
      <Progress value={60} colorScheme='messenger' w={'full'}/>
      <HStack justifyContent={'space-between'} w={'full'}>

<Badge children={low} colorScheme={'red'}/>
<Text fontSize={'small'}>24H Range</Text>

<Badge  colorScheme='green'>
    {high}
    </Badge>

      </HStack>
    </VStack>

  )

  const Item =({title,value})=>(
        <HStack justifyContent={'space-between'} w={'full'} my={4}>
<Text fontFamily={'Bebas Neue'} >{title}</Text>
{/* bebas font family we wriiten the code in index.html in public folder in Linktag */}
<Text>{value}</Text>

        </HStack>
  )

  const [coin,setCoin] = useState({});
  const [loading,setLoading ]= useState(true);
  const [error,setError] = useState(false)
  const [currency,SetCurrency]=useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =currency==="inr"?"₹":currency==="eur"?"€":"$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };


  const params = useParams();

  

  useEffect(()=>{
    try{
      const fetchCoin = async()=>{
          const data = await axios.get(`${server}/coins/${params.id}`)
          const  chartData  = await axios.get(
            `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
          );
          console.log(data.data);
          setCoin(data.data);   
                  setChartArray(chartData.data.prices);
                  console.log(chartData)

          setLoading(false);     
      }
      fetchCoin();

    }catch(error){
      loading(false);
      setError(true);
    }
  },[params.id,currency,days])
  
  if(error)
  return <ErrorMsg message={"Error while fetching coins"}/>

  return (
<Container maxW={'container.xl'}>
{loading ? (
        <Loaderr />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart  arr={chartArray} currency={currencySymbol} days={days}/>
          </Box>
<HStack m={4} overflowX={'auto'} >
          {btns.map((i) => (
              <Button
                
                onClick={() => switchChartStats(i)}
              >
                {i}
              </Button>
            ))}
          </HStack>
          

  <RadioGroup value={currency} onChange={SetCurrency}>
    {/* onChange me event.target iss liye nhi kiye kyu ki ye chkra ui ka RAdioButtons h */}
      <HStack spacing={'8'} m={12}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={"eur"}>EURO</Radio>
            <Radio value={'usd'}>USD</Radio>

      </HStack>
    </RadioGroup>


    <VStack spacing={'4'} p={16} alignItems={'flex-start'}>

    <Text fontSize={'small'} alignSelf={'center'} opacity={0.7}>
    Last Updated On {Date(coin.market_data.last_updated).split('G')[0]}
    {/* Date();we will get Fri Apr 14 2023 16:30:23 GMT+0530 (India Standard Time) */}
{/* But if we spilt form G or vo phir do array me tor dega so whehn we write at 0 index we get the 0 index array so, we get Fri Apr 14 2023 16:33:59*/}
    </Text>

<Image src={coin.image.large} w={16} h={16} objectFit={'cover'}></Image>
{console.log(`your coin is ${coin}`)}


    <Stat>

       <StatLabel>{coin.name}</StatLabel>
       <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
       <StatHelpText>
        {/* <StatArrow type='decrease'></StatArrow> we get a symbol of decrese */}
        <StatArrow type={coin.market_data.price_change_percentage_24h > 0?'increase':'decrease'}></StatArrow>
        {coin.market_data.price_change_percentage_24h}%
       </StatHelpText>

    </Stat>

    <Badge fontSize={'2xl'} colorScheme='messenger'>
      {`#${coin.market_cap_rank}`}
    </Badge>

<CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>
{/* we are using props here */}


<Box w={'full'} p={4}>
<Item title={'Max Supply'} value={coin.market_data.max_supply}/>
<Item title={'Circulating Supply'} value={coin.market_data.circulating_supply}/>
<Item title={'Market Cap'} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
<Item title={'All Time Low'} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
<Item title={'All Time High'} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>



{/* we are using props here */}

</Box>

    
    </VStack>


</>)}

</Container>

    )
  }
  

export default CoinsDetails