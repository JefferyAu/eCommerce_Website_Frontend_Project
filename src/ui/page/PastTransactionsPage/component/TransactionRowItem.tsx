import {Box, TableCell, Typography} from "@mui/material";
import {TransationItemDto} from "../../../../data/transaction/Transaction.type.ts";

type Props = {
  transactionItemDto:TransationItemDto
}

export default function TransactionRowItem({transactionItemDto}:Props){
  return(
    <>
      <Typography variant="body1" >
        <TableCell>Name:{transactionItemDto.product.name}</TableCell>
        <TableCell>Description:{transactionItemDto.product.description}</TableCell>
        <TableCell>
          <Box
            sx={{
              width: "100px",
              height: 100,
              backgroundImage: `url(${transactionItemDto.product.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          >
          </Box>
        </TableCell>
        <TableCell>Price: {transactionItemDto.product.price}</TableCell>
        <TableCell>Quantity: {transactionItemDto.quantity}</TableCell>
      </Typography>
    </>
  )
}