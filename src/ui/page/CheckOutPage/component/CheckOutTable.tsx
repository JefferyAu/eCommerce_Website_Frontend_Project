import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CheckOutTableItem from "./CheckOutTableItem.tsx";
import {TransactionDto} from "../../../../data/transaction/Transaction.type.ts";

type Props={
  transactionDto:TransactionDto
}

export default function CheckOutTable({transactionDto}:Props){
  return(
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Unit Price</TableCell>
              <TableCell >Quantity</TableCell>
              <TableCell >Sub-Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              transactionDto.items.map((value) => (
              <CheckOutTableItem key={value.tpid} transactionItemDto={value}/>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}