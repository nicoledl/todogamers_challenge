'use client'

import { Avatar, Box, Grid, GridItem, ScaleFade, Text, useDisclosure } from '@chakra-ui/react';
import reviews from '../../database/reviews.JSON';

export default function Reviews() {

  return (
    <>
      <Text fontSize='xl' as='b'>Opiniones</Text>
      <Box>
        {
          reviews.map((elem, id)=>{
          const {name, review, img_url} = elem

          return(
          <ScaleFade key={id} initialScale={0.2} in={true} transition={{ enter: {delay: id/2}}}>
            <Grid
            h='min-content'
            mb={5}
            templateColumns='repeat(3, 1fr)'
            >
              <GridItem colSpan={2} display='flex' alignItems='center' gap={2} justifyContent='start'><Avatar size='md' src={img_url}/><Text as='b' fontSize='md'>{name}</Text></GridItem>
              <GridItem colSpan={1} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs' color='#e11ad6'>responder</Text></GridItem>
              <GridItem h='max-content' colSpan={3} display='flex' alignItems='center'><Text fontSize='sm'>{review}</Text></GridItem>
            </Grid>
          </ScaleFade>
          )
          })
        }
      </Box>
    </>
  )
}