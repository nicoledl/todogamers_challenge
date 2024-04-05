import Message from "@/components/common/Message"
import SliderCards from "@/components/home/SliderCards"
import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Message status='warning' title='Happy Hour' message='16 - 17 hs MEX'/>
      <Box mt={4} p={4}>
        <SliderCards title='Opciones con las mejores Promociones' />
        <SliderCards title='Opciones con Promociones' />
      </Box>
    </>
  )
}
