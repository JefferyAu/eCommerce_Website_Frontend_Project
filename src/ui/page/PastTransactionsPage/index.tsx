import Header from "../../component/Header";
import TransactionTable from "./component/TransactionTable.tsx";
import {Container} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {TransactionListDto} from "../../../data/transaction/Transaction.type.ts";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

export default function PastTransactionsPage(){

  const [transactionListDto,setTransactionListDto] = useState<TransactionListDto[]|undefined>(undefined);
  const [paidStatusFilter,setPaidStatusFilter] = useState<string>("SUCCESS");
  const navigate = useNavigate();
  const loginUser = useContext(LoginUserContext);

  const handlePaidStatusFilterChange = (paidStatusFilter:string) =>{
    setPaidStatusFilter(paidStatusFilter);
  }

  const getTransactionListDto = async ()=>{
    try{
      const responseData = await TransactionApi.getTransactionListDto();
      setTransactionListDto(responseData);
    }catch (err){
      console.log(err);
      navigate("/error");
    }
  }

  useEffect(() => {
    if(loginUser){
      getTransactionListDto();
    }else if(loginUser === null){
      navigate("/");
    }
  }, [loginUser]);

  return(
    <>
    <Header/>
      <Container sx={{
        mt:2,
        mb:2
      }}>
        {
          transactionListDto &&
          <TransactionTable
              transactionListDto={transactionListDto}
              paidStatusFilter={paidStatusFilter}
              handlePaidStatusFilterChange={handlePaidStatusFilterChange}
          />
        }
      </Container>
    </>
  )
}