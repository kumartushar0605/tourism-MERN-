import { Button, Container, HStack, Input, VStack ,Text, Box, Skeleton, SkeletonText} from '@chakra-ui/react'
import React, { useRef, useState ,useEffect} from 'react'
import {FaSearch,FaMapMarked ,FaImages} from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImCross} from 'react-icons/im'
import img from '../assets/wlc.png'
import '../Styles/explore.css'
// import datajson from "../assets/data.json";
import {useJsApiLoader,GoogleMap,Marker,DirectionsRenderer,Autocomplete} from '@react-google-maps/api'
 const center ={lat:25.9644 , lng:85.2722}
const Explore = () => {
  const [map,setMap] = useState(/** @type google.maps.Map */(null));
  const [directionResponse,setDirectionResponse]=useState(null);
  const [distance,setDistance] =useState("");
  const [duration,setDuration] =useState("");
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput,setSearchInput]=useState('');
  const [bool,setBool] = useState(false);
  const handleSearch = event => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    // Fetch JSON data containing photos
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);
  console.log(photos);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('data.json');
  //       const jsonData = await response.json();
  //       setPhotos(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching JSONmm:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
   
 

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  
  function search() {
    setBool(true);
    setSearchTerm(searchInput)  
  }
  


  const filteredPhotos= photos.filter(pm =>
    pm.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
 
  console.log(`fffffff${filteredPhotos}`)
  console.log(`ppppp${photos}`)
  

  const {isLoaded}= useJsApiLoader({ // this is a hook which is loading the google map script form the cdn to be used in our application
    googleMapsApiKey:'AIzaSyA2m3gyX0DJndSQ-TFpmtH-YTlwEyKvEbI',
    libraries: ['places']
  })
  if(!isLoaded){
   return <SkeletonText/>
  }
  async function calculateRoute(){
    console.log(originRef.current.value)
    if(originRef.current.value === '' || destiantionRef.current.value ===''){
      return
    }
     // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }  
  function clearRoute(){
    setDirectionResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = ''
    destiantionRef.current.value=''
  }
 
  

  return (
   <>
    <Container height={'100vh'} >
    <VStack>
    <HStack marginTop={10} zIndex={'modal'}>
      <Input ref={originRef} placeholder='Current location' />
  <Input ref={destiantionRef} placeholder='Search for the place'  value={searchInput} onChange={handleSearch} />
      <Button type='submit'  onClick={calculateRoute } variant={'outline'} colorScheme='messenger'><FaSearch size={'larger'} /></Button>
      <Button onClick={()=>map.panTo(center)}
       variant={'outline'} colorScheme='messenger'><FaMapMarked size={'larger'} /></Button>     
             <Button type='submit' onClick={clearRoute} variant={'outline'} colorScheme='messenger'><ImCross size={'larger'} /></Button>
             <Button type='submit' onClick={search} variant={'outline'} colorScheme='messenger'><FaImages size={'larger'} /></Button>
 
     </HStack>
    <Box className='box' zIndex={'modal'}>
    <VStack >
      <HStack className='text' ><Text color={'messenger.100'} >Distance : </Text> <Text color={'whatsapp.100'}>{distance}</Text></HStack>
      <HStack  className='text'><Text color={'messenger.100'}>Duration : </Text> <Text color={'whatsapp.100'}>{duration}</Text></HStack>
     </VStack>
    </Box>
    <HStack direction={'row'}>
    <Box className='mapbox'  left={0} bottom={200} top={220} position={'absolute'} >
    <GoogleMap mapContainerClassName='map' center={center}  zoom={8} mapContainerStyle={{width:'50%' ,height:'50%' ,borderRadius:'40px' }}
    onLoad={map=>setMap(map)}
    >
    <Marker position={center}/>
      {/* Displaying markers and directions */}
      {directionResponse && (<DirectionsRenderer directions={directionResponse}/>)} 
      {/* if we have directionResponse then only we display the directionrenderer */}
    </GoogleMap>
    </Box>
    <Box className='carosel'>
    <div id="work">
    
    {
      
      bool ? (<section>
      <article>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={200000000}
          infiniteLoop={true}
          autoPlay={true}
        >
        
          {filteredPhotos.map((item) => (
            
            <div key={item.title} className="workItem">
            {console.log(item.title)}
            
              <img className='imgcaro' src={item.imgSrc} alt={item.title} />
              <aside>
                <p>{item.description}</p>              
              </aside>
            </div>
          ))}
        </Carousel>
      </article>
    </section>) :(
      <section>
      <article>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000000}
          infiniteLoop={true}
          autoPlay={true}
        >
        
          
            
            <div  className="workItem">
            
            
              <img className='imgcaro' src={img}  />
              <aside>
                <p>welcome here....</p>              
              </aside>
            </div>
          ))
        </Carousel>
      </article>
    </section>      
      )
    }
  </div>
    </Box>
    </HStack>
    </VStack>
    </Container>
   </>
  )
}

export default Explore