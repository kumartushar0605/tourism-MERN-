import { Container ,Button,Box, HStack ,Input, VStack} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import '../Styles/explore2.css'
import img from '../assets/wlc.png'
import {FaSearch} from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";


 
const Explore2 = () => {
 

  const [photos, setPhotos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  const [searchInput,setSearchInput]=useState('');
  const[searchbtn,setSearchBtn]=useState('');
  const [bool,setBool] = useState(false);

    useEffect(() => {
        // Fetch JSON data containing photos
        fetch('http://localhost:3001/projects')
          .then(response => response.json())
          .then(data => setPhotos(data))
          .catch(error => console.error('Error fetching photos:', error));
      }, []);
      console.log(`photos ${photos}`)

      function search() {
        setBool(true);
        setSearchTerm(searchInput)  

      }
      function searchh(title) {
        setBool(true);
        setSearchTerm(title) 
        console.log(`output${searchTerm}`)
        // alert(title) 
      }
      const filteredPhotos= photos.filter(pm =>
        pm.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const handleSearch = event => {
        setSearchInput(event.target.value);
      };
  return (
    <>
        <Container height={'100vh'}>
 <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
          // transition={{ duration: 0.5}}
        >
          <Box
            textAlign="center"
            bg="gray.600"
            margin={5}
            p={8}
            height={'80vh'}
            width={'86vw'}
            borderRadius="lg"
            borderWidth="2px"
            borderStyle="solid"
            css={{
              transform:'translatex(-29%)'
            }}
          >


<HStack gap={10} css={{transform:'translate(7%,-23%)'}}>
       <Box height={'50vh'} width={'500vh'} id='box'>
       <HStack css={{
        transform:'translate(5%,7%)'
       }}>
       <Input mt={5} w={'57vh'} placeholder='Search for places' value={searchInput} onChange={handleSearch}/>
       <Button className='btn' css={{
        transform:'translateY(27%)'
       }}  variant={'outline'} colorScheme='messenger' onClick={search}><FaSearch /></Button>
       </HStack>
      <section>
      <article >
            <div  id="workon">
           
              <aside>
              {photos.map((i) => (
         <VStack>
         
         <Button
            // variant={'ghost'}
            
            className='bbtn'
            colorScheme={'facebook'}
            
            onClick={() => searchh(i.title)}
            
          >
            {i.title}
            
          </Button>
         </VStack>
        ))}
             
              </aside>
            </div>
          

      </article>
    </section>
  </Box>
  <Box className='ccarosel'>
    <div id="workk">
    {
      
      bool ? (<section>
      <article>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={200000000000000000}
          infiniteLoop={true}
          autoPlay={true}
        >
        
          {filteredPhotos.map((item) => (
            
            <div key={item.title} className="workItemm">
            {console.log(item.title)}
            
              <img className='imgcaroo' src={item.imgSrc} alt={item.title} />
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
            
            
              <img className='imgcaroo' src={img}  />
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

          </Box>
          </motion.div>
          </motion.div>
   
        </Container>
    </>
  )
  
}

export default Explore2