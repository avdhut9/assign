import logo from './logo.svg';
import './App.css';
import { Box, FormControl, Input } from "@chakra-ui/react";
import Card from './components/card';

import { useState } from 'react';
const initialstate={
  number:"",
  name:"",
  valid:"",
  cvc:""
}
const breakpoints={
  base:"column",
  sm:"column",
  md:"row",
  lg:"row"
}
function App() {
  const[formdata,setformdata]=useState(initialstate)
    function change(e){
        const{value,name}=e.target
        setformdata({...formdata,[name]:value})
    }
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh" flexDirection={breakpoints}>
      <Card  formdata={formdata}/>
      <Box>
 <FormControl w="80%" m="auto" >
  <Input mt="10px" placeholder="Card Number" type="text"  maxLength="16" name="number" onChange={change} />
  <Input mt="10px" placeholder="Name" name="name" onChange={change} maxLength="7" />
<Box display="flex" justifyContent="center"  mt="10px" gap="10px">  <Input placeholder="Valid Thru" name="valid" maxLength="4" onChange={change}/>
  <Input placeholder="CVC" name="cvc"  type="password" maxLength="3" onChange={change}/></Box>
 
</FormControl>
        </Box>
    </Box>
  );
}

export default App;
