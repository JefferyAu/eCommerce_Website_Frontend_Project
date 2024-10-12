import Header from "../../component/Header";
import {Box, Container, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi"
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

type Params ={
  tid:string
}

export default function ThankYouPage(){
  const [counter,setCounter] = useState<number>(5);
  const navigate = useNavigate();

  const {tid} = useParams<Params>();
  const loginUser = useContext(LoginUserContext)

  const handleDeductStockApi = async () =>{
    // if(!tid){
    //   navigate(`/error`)
    // }
    try{
      await TransactionApi.finishTransaction(tid!);
      // console.log(tid);
    }catch (err){
      console.error(err);

      console.log(tid);
      navigate("/error")
    }
  }

  const t = setTimeout(()=>{
    setCounter((prevState)=>(
      prevState -1
    ))
  },1000);

  useEffect(() => {
    if(loginUser){
      handleDeductStockApi();
      // createCheckoutSession();
    }else if(loginUser === null){
      navigate("/")
    }
  }, [loginUser]);

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