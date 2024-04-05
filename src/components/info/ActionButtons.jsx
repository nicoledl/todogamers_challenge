'use client'
import { Box, Button } from '@chakra-ui/react';

export default function ActionButtons() {
 
  return (
    <Box display='grid' rowGap={6}>
      <Button className='button_bg' bg='' color='#ffffff' height='50px'>Reservar mesa</Button>
      <Button className='button_border' bg='' color='#ffffff' height='50px'>Opciones de transporte</Button>
    </Box>
  )
}