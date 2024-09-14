import {TableCell, TableRow} from "@mui/material";
import {TransactionDto, TransactionListDto} from "../../../../data/transaction/Transaction.type.ts";
import moment from "moment";
import TransactionRowItem from "./TransactionRowItem.tsx";
import * as TransactionApi from "../../../../api/TransactionApi.ts"
import {useEffect, useState} from "react";


type Props = {
  transactionListDto:TransactionListDto
}

export default function TransactionTableRow({transactionListDto}:Props){

  const [transactionDtoList,setTransactionDtoList] = useState<TransactionDto|undefined>(undefined);

  const getTransactionByTid = async () =>{
    const tidString = String(transactionListDto.tid);
    const responseData = await TransactionApi.getTransactionByTid(tidString);
    setTransactionDtoList(responseData);
  }

  useEffect(() => {
    getTransactionByTid();
  }, []);

  return(
    <>
          <TableRow>
            <TableCell>{transactionListDto.tid}</TableCell>
            <TableCell>{moment(transactionListDto.datetime).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
            <TableCell>{transactionListDto.status === 'SUCCESS' ? 'Paid' :
              transactionListDto.status === 'PREPARE' ? 'Unpaid' :
                transactionListDto.status}
            </TableCell>
            <TableCell>HKD$ {transactionListDto.total.toLocaleString()}</TableCell>
          </TableRow>
      <TableRow style={{
        width: "100%"
      }}>
        {
          transactionDtoList?.items.map((value)=>(
            <TransactionRowItem key={value.tpid} transactionItemDto={value}/>
          ))
        }

      </TableRow>
    </>
  )
}