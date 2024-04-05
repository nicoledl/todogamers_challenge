import InfoContainer from "@/components/info/InfoContainer";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Info({params}) {


  return (
    <Box p={4}>
        <InfoContainer params={params} />
    </Box>
  )
}
