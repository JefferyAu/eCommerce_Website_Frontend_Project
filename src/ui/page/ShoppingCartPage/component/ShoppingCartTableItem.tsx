import {IconButton, TableCell, TableRow} from "@mui/material";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CartItemDto} from "../../../../data/CartItem/CartItem.type.ts";

type Props = {
  cartItemDto:CartItemDto
}

export default function ShoppingCartTableItem({cartItemDto}:Props){
  return(
    <TableRow>
      <TableCell>
        <img height={150} src={cartItemDto.imageUrl}/>
      </TableCell>
      <TableCell>
        {cartItemDto.name}
      </TableCell>
      <TableCell>
        ${cartItemDto.price.toLocaleString()}
      </TableCell>
      <TableCell>
        <QuantitySelector
          quantity={cartItemDto.cartQuantity}
          handleMinus={()=>{}}
          handlePlus={()=>{}}
        />
      </TableCell>
      <TableCell>{cartItemDto.cartQuantity}</TableCell>
      <TableCell>
        <IconButton color="error">
          <DeleteForeverIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}