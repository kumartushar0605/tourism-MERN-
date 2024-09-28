import { Button, Container, HStack, Input, VStack ,Box} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../Styles/blog.css'
import axios from "axios";

import { useEffect, useState } from "react";

const Exchanges = () => {
 const [image,setImage]= useState(null);
 const [allImage,setAllImage]= useState(null);
 const [blog,setBlog] = useState('');

 useEffect(()=>{
  getImage();
 },[]);

 const submitImage = async (e)=>{
  e.preventDefault();

  const formData = new FormData();
  formData.append("image",image)
  formData.append("blogtest",blog)
  
  console.log(`blog 22 ${blog}`)
  console.log(formData)
  const result = await axios.post(
    "http://localhost:5000/user/image",
    formData
  ,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  )

 }

 const onInputChange = (e) => {
  console.log(e.target.files[0]);
  setImage(e.target.files[0]);
};

const getImage = async()=>{
  const result = await axios.get("http://localhost:5000/get-image");
  console.log(`apka result bhai ${result.data.data}`)
  setAllImage(result.data.data);
  console.log(allImage)
}
  

  return (
<>
  <Container height={'250vh'} >
   <VStack>
   <form method="POST" onSubmit={submitImage}>
    <HStack marginTop={10}>
    <Input type='text' value={blog}  onChange={(e)=>setBlog(e.target.value)} w={500} placeholder="Enter your blog"/>
    <Input onChange={onInputChange} variant={'unstyled'} type='file' accept="image/*" />
    <Button w={120} type='submit'>Submit</Button>
    </HStack>
   </form>
   </VStack>
  <Box height={'50vh'}>
      {allImage == null
        ? ""
        :<section>
      <article >
          {allImage.map((item) => (
           
            <div  key={item.title} id="worrkon">
              <img id="imgm" src={require(`../images/${item.image}`)}  />
              <aside>
              
                <p id="textt">{item.blogg}</p>              
              </aside>
            </div>
          ))}

      </article>
    </section>}
  </Box>
   
  </Container>
</>
      
      );
};

export default Exchanges