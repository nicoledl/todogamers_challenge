'use client'

import { Alert, AlertIcon, Box, Collapse, Fade, Text} from "@chakra-ui/react"
import { useState } from "react";

export default function Message({status, title, message}) {
  const [show, setShow] = useState(true)
 
  return (
    <Collapse in={show} animateOpacity={true} onClick={()=>setShow(false)}>
      <Fade in={show}>
      <Alert status={status} color='#000000' borderLeft='5px solid #C05621'>
          <AlertIcon />
          <Box display='grid' fontSize='sm'>
            <Text as='b' fontSize='md'>{title}</Text>
            <Text fontSize='md'>{message}</Text>
          </Box>
        </Alert>
      </Fade>
    </Collapse>
  )
}