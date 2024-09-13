import {TableCell, TableRow} from "@mui/material";
import {TransactionListDto} from "../../../../data/transaction/Transaction.type.ts";
import moment from "moment";

type Props = {
  transactionListDto:TransactionListDto
}

export default function TransactionTableRow({transactionListDto}:Props){
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
    </>
  )
}