'use client'

import { BellIcon, HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Grid,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import style from "../../styles/navbars.module.css"
import { useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()
  
  useEffect(()=>{
  },[pathname])


  return (
    <Box bg='#010316' className={style.navbar} p={4}>
      <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
        <Box w='70px' h='10' className={style.box}>
          {pathname === '/' ? 
            <HamburgerIcon w={6} h={6}/> 
            : 
            <Link href='/'>
              <ArrowBackIcon w={6} h={6}/>
            </Link>
          }
        </Box>
        <Box w='100%' h='10' display='flex' justifyContent='end' gap={4} className={style.box}>
          <BellIcon w={6} h={6}/>
          <Avatar size='xs' src='https://bit.ly/broken-link'/>
        </Box>
      </Grid>
    </Box>
  )
}