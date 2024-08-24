import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ShoppingCartTableItem from "./ShoppingCartTableItem.tsx";
import {CartItemDto} from "../../../../data/CartItem/CartItem.type.ts";

type Props ={
  carItemDtoList: CartItemDto[]
}

export default function ShoppingCartTable({carItemDtoList}:Props){
  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell></TableCell>
            <TableCell>Sub-total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            carItemDtoList.map((value)=>(
              <ShoppingCartTableItem key={value.pid} cartItemDto={value} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}