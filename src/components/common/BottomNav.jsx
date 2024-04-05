'use client'

import {
  Box,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { CalendarIcon, ChatIcon} from '@chakra-ui/icons'
import { HiHome } from "react-icons/hi";
import style from "../../styles/navbars.module.css"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const [onClick, setOnClick] = useState(2)
  const pathname = usePathname()
  
  const handleClick = (id) => {
    setOnClick(id)
  }

  useEffect(()=>{
    if (pathname !== '/') {
      setOnClick(null)
    } else {
      setOnClick(2)
    }
  },[pathname])

  return (
    <Box bg='#040210' className={style.bottom_navbar} p={3}>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem className={style.bottom_navbar_item} color={onClick == 1 && '#373fe7'} id={1} onClick={() => handleClick(1)}> 
          <CalendarIcon w={5} h={5} />
          <Text fontSize='xs'>Calendario</Text>
        </GridItem>
        <GridItem className={style.bottom_navbar_item} color={onClick == 2 && '#373fe7'} onClick={() => handleClick(2)}>
          <Link href="/">
            <HiHome size={27}/>
            <Text fontSize='xs'>Inicio</Text>
          </Link>
        </GridItem>
        <GridItem className={style.bottom_navbar_item} color={onClick == 3 && '#373fe7'} onClick={() => handleClick(3)}>
          <ChatIcon w={5} h={5} />
          <Text fontSize='xs'>Chat</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}