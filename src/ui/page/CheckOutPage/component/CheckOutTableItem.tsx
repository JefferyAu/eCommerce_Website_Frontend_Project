import {TableCell, TableRow} from "@mui/material";
import {TransationItemDto} from "../../../../data/transaction/Transaction.type.ts";

type Props = {
  transactionItemDto:TransationItemDto
}

export default function CheckOutTableItem({transactionItemDto}:Props){
  return(
    <>
      <TableRow>
        <TableCell>
  <img src={transactionItemDto.product.imageUrl} height={120}/>
</TableCell>
  <TableCell>{transactionItemDto.product.name}</TableCell>
  <TableCell>${transactionItemDto.product.price.toLocaleString()}</TableCell>
  <TableCell>{transactionItemDto.quantity}</TableCell>
   <TableCell>${transactionItemDto.subtotal.toLocaleString()}</TableCell>
</TableRow>
</>
  )
}