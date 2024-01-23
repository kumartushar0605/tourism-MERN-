import { VStack ,Image, Heading,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ id ,name,symbol,img,rank ,price,currencySymbol}) => {
  return (
    <Link to={`/coins/${id}`} >
    {/* see the App.js we have Route /coins/:id */}
<VStack w={52} m={8} shadow={'dark-lg'} p={8} borderRadius={50} transition={'all 0.3s'}  
css={{
    '&:hover':{
        transform:"scale(1.1)"
    }
}}>
    <Image src={img} w={10} h={10} objectFit={'contain'}></Image>
    <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
    <Text noOfLines={1} >{name}</Text>
    <Text noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>

</VStack>

    </Link>
  )
}



export default CoinCard