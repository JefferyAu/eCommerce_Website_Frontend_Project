import Header from "../../component/Header";
import CheckOutTable from "./component/CheckOutTable.tsx";
import {Container, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/Transaction.type.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import { useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import LoadingBackdrop from "../../component/LoadingBackdrop.tsx";

type Params ={
  transactionId:string
}


export default function CheckOutPage(){
  const [transactionDto,setTransactionDto] = useState<TransactionDto | undefined>(undefined);
  const [loadingBackdropOpen,setLoadingBackdropOpen] = useState<boolean>(false);
  // const [checkOutSession,setCheckOutSession] = useState<string>("");

  const {transactionId} = useParams<Params>();

  const navigate = useNavigate()

  const loginUser = useContext(LoginUserContext)

  const getTransactionByTid = async () =>{
    if(!transactionId){
        navigate(`/error`)
    }else {
      try{
        const responseData  = await TransactionApi.getTransactionByTid(transactionId);
        setTransactionDto(responseData);
      }catch (err){
        console.log(err);
        navigate(`/error`)
      }
    }
  }

  // const createCheckoutSession = async () => {
  //   if (!transactionId) {
  //     console.error('Transaction ID is missing');
  //     navigate(`/error`);
  //     return;
  //   }
  //   try {
  //     const responseData = await TransactionApi.createCheckoutSession(transactionId);
  //     setCheckOutSession(responseData);
  //   } catch (err) {
  //     console.error('Error creating checkout session:', err);
  //     navigate(`/error`);
  //   }
  // }

  // const handleCheckOutClick = () => {
  //   return window.location.href = `${checkOutSession}`;
  // };

  const handleCheckOut = async () =>{
    if(!transactionId){
      navigate(`/error`)
    }
    try{
      setLoadingBackdropOpen(true)
      const response =  await TransactionApi.payTransaction(transactionId!);
      window.location.href = `${response}`;
      // await TransactionApi.finishTransaction(transactionId!);
    }catch (err){
      console.error(err);
      navigate("/error")
    }
  }

  useEffect(() => {
    if(loginUser){
      getTransactionByTid();
      // createCheckoutSession();
    }else if(loginUser === null){
      navigate("/")
    }
  }, [loginUser]);


  const renderCheckOutContainer = () =>{
    if(transactionDto){
      return(
        <Container sx={{
          py:2
        }}>
          <CheckOutTable transactionDto={transactionDto}/>
          <Stack direction="row" justifyContent="space-between" sx={{my:2}}>
            <Typography variant="h5">${transactionDto.total.toLocaleString()}</Typography>
            <Button
              size="large"
              variant="contained"
              onClick={handleCheckOut}
            >
              Check Out
            </Button>
            {/*<Button*/}
            {/*  onClick={handleCheckOutClick}*/}
            {/*>*/}
            {/*  Pay*/}
            {/*</Button>*/}
          </Stack>
        </Container>
      )
    }else {
      return (
        <LoadingContainer/>
      )
    }
  }

  return(
    <>
      <Header/>
      {
        renderCheckOutContainer()
      }
      <LoadingBackdrop open={loadingBackdropOpen}/>
    </>
  )
}