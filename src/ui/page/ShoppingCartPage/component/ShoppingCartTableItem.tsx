import {IconButton, TableCell, TableRow} from "@mui/material";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CartItemDto} from "../../../../data/CartItem/CartItem.type.ts";
import * as CartItemApi from "../../../../api/CartItemApi.ts"
import {useState} from "react";

type Props = {
  cartItemDto:CartItemDto,
  changeQuantity: (pid:number, quantity:number) => void
  deleteCartItem: (pid:number) => void
}

export default function ShoppingCartTableItem({
                                                cartItemDto,
                                                changeQuantity,
                                                deleteCartItem
                                              }:Props){
  const [isQuantityUpdating,setIsQuantityUpdating] = useState<boolean>(false);
  const [isDeleting,setIsDeleting] = useState<boolean>(false);

  const handleQuantityMinusOne = async () =>{
    if(cartItemDto.cartQuantity > 1){
      setIsQuantityUpdating(true);
      const responseData = await CartItemApi.patchCartQuantity(cartItemDto.pid, cartItemDto.cartQuantity - 1);
      setIsQuantityUpdating(false);
      changeQuantity(cartItemDto.pid,responseData.cartQuantity);
    }
  }

  //Optimist
  // const handleQuantityMinusOne = async () =>{
  //   if(cartItemDto.cartQuantity > 1){
  //     const updateQuantity = cartItemDto.cartQuantity - 1;
  //     handleQuantityChange(cartItemDto.pid,updateQuantity);
  //     await CartItemApi.patchCartQuantity(cartItemDto.pid, updateQuantity);
  //   }
  // }

  const handleQuantityPlusOne = async () =>{
    if(cartItemDto.cartQuantity < cartItemDto.stock){
      setIsQuantityUpdating(true);
      const responseData = await CartItemApi.patchCartQuantity(cartItemDto.pid, cartItemDto.cartQuantity + 1);
      setIsQuantityUpdating(false);
      changeQuantity(cartItemDto.pid,responseData.cartQuantity);
    }
  }

  //Optimist
  // const handleQuantityPlusOne = async () =>{
  //   if(cartItemDto.cartQuantity < cartItemDto.stock){
  //     const updateQuantity = cartItemDto.cartQuantity + 1;
  //     handleQuantityChange(cartItemDto.pid,updateQuantity);
  //     await CartItemApi.patchCartQuantity(cartItemDto.pid, updateQuantity);
  //   }
  // }



  const handleCartItemDelete = async () =>{
    setIsDeleting(true);
    await CartItemApi.deleteCartItem(cartItemDto.pid);
    deleteCartItem(cartItemDto.pid);
    setIsDeleting(false);
  }

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
          handleMinus={handleQuantityMinusOne}
          handlePlus={handleQuantityPlusOne}
          isLoading={isQuantityUpdating}
        />
      </TableCell>
      <TableCell>${(cartItemDto.cartQuantity * cartItemDto.price).toLocaleString()}</TableCell>
      <TableCell>
        <IconButton
          color="error"
          onClick={handleCartItemDelete}
          disabled={isDeleting}
        >
          <DeleteForeverIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}