'use client'

import { Box, Button, Fade, Grid, GridItem, Image, SlideFade, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_random_six } from "@/hooks/fetch_breweries";
import Link from "next/link";
import Slider from "react-slick";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";

export default function SliderCards({title}) {
  const [content, setContent] = useState([])
  
  const settings = {
    dots:false,
    adaptiveHeight:true,
    infinite:false,
    swipe:true,
    arrows:false,
    slidesToShow: 1.05,
  };

  async function fetchData(){
    try {
      const response = await get_random_six();
      setContent(response)
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <SlideFade in={true} offsetY='20px' transition={{ enter: {delay: 0.03}}}>
      <Box mb={10} maxHeight='500px'>
        <Text fontSize={{base:'2xl' ,sm:'2xl', md:'3xl'}} as='b' lineHeight={1}>{title}</Text>
        <Box marginTop={3}>
          <Slider {...settings}>
            {
              content?.map((element) => <Fade in={true} key={element.id} transition={{ enter: {delay: 0.5}}}><Card className='card' info={element} /></Fade>)
            }
          </Slider>
        </Box>
      </Box>
    </SlideFade>
  )
}


function Card({info}){
  const {id, name, address_1, phone} = info

  return (
    <Grid
    p={3}
    m={1}
    h='200px'
    borderRadius={10}
    bg='#13132D'
    templateRows='repeat(3, 1fr)'
    templateColumns='repeat(3, 1fr)'
    rowGap={2}
    >
      <GridItem colSpan={3} display='flex' alignItems='center' pl={2}><Text as='b' textTransform='capitalize' fontSize='lg'>{name}</Text></GridItem>
      <GridItem colSpan={1} display='flex' justifyContent='center' alignItems='center'>
        <Image boxSize={{base:70, sm:75, md:85}}
          objectFit='cover'
          borderRadius='full'
          src='https://d33byq9npfy6u9.cloudfront.net/2/2016/11/003-DSC_4012print.jpg'
          alt='Dan Abramov' /> 
      </GridItem>
      <GridItem colSpan={2} pl={1} alignItems='center' alignContent='space-evenly' display='grid'>
        <Text display='flex' fontSize={{base:'sm', sm:'md', md:'lg'}} gap={2}><HiOutlineLocationMarker size={20} />{address_1.length > 16 ? address_1.substring(0, 16) + '...' : address_1}</Text>
        <Text display='flex' fontSize='sm' gap={2}><HiPhone size={20} />{phone}</Text>
      </GridItem>
      <GridItem colSpan={3} display='flex' justifyContent='center' alignItems='center'>
        <Link href={`/${id}`}>
        <Button className="button_bg" bg='' color='#ffffff' size='sm' variant='solid' width={{ base: 150, sm: 200, md: 230 }}>Ver más</Button>
        </Link>
      </GridItem>
    </Grid>
  )
}
