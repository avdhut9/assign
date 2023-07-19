import { Box, Image, Text } from "@chakra-ui/react";

export default function Card({formdata}){
 return(
        <Box w="350px" h="200px" bgColor="blue.700" borderRadius="30px" m="20px" position="relative">
       <Text fontSize="40px" fontWeight="bold" color="white" position="absolute" top="5px" right="15px">VISA</Text>
       <Text position="absolute" top="50%" left="30%" color="white">{formdata.number}</Text>
       <Text position="absolute" bottom="10px" left="15px"  color="white">{formdata.name}</Text>
       <Text position="absolute" bottom="10px" left="50%"  color="white">{formdata.valid}</Text>
       <Text position="absolute" bottom="10px" right="15px"  color="white">{formdata.cvc}</Text>
        </Box>
    )
}