import Header from "../../component/Header";
import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankYouPage(){
  const [counter,setCounter] = useState<number>(5);
  const navigate = useNavigate();

  const t = setTimeout(()=>{
    setCounter((prevState)=>(
      prevState -1
    ))
  },1000);

  useEffect(() => {
    if(counter === 0){
      navigate("/")
    }
    return () =>{
      clearTimeout(t)
    }
  }, [counter]);

  return(
    <>
    <Header/>
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="85vh"
        flexDirection="column"
      >
        <Typography variant="h5">
          Return to home page in {counter} seconds
        </Typography>
        <img src="https://media.tenor.com/BMkCv-UCFIgAAAAM/bear-byebear.gif"/>
     </Box>
    </Container>
    </>
  )
}