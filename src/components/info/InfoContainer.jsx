'use client'
import { Box, Fade, Text } from '@chakra-ui/react';
import Reviews from './reviews';
import { get_one } from '@/hooks/fetch_breweries';
import { useEffect, useState } from 'react';
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import ActionButtons from './ActionButtons';
import SliderGalery from './SliderGalery';

export default function InfoContainer({params}) {
  const [info, setInfo] = useState([])
  const id = params.slug
  const {name, address_1, phone} = info
  
  async function fetchData(){
  try {
      const response = await get_one(id);
      setInfo(response)
  } 
  catch (error) {
      console.error(error);
  }
  };

  useEffect(()=>{
  fetchData()
  },[])

  return (
    <Fade in={true}  transition={{ enter: {delay: 0.04}}}>
      <Box display='grid' rowGap={4}>
          <Text fontSize='3xl' as='b'>{name}</Text>
          <Text display='flex' fontSize='lg' gap={2}><HiOutlineLocationMarker size={20} />{address_1}</Text>
          <Text display='flex' fontSize='lg' gap={2}><HiPhone size={20} />{phone}</Text>
        <SliderGalery/>
        <Reviews />
        <ActionButtons />
      </Box>
    </Fade>
  )
}