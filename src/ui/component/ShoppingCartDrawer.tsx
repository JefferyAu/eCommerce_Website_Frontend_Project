import {Button, Container, Divider, Drawer, Typography} from "@mui/material";
import ShoppingCartDrawerItem from "./ShoppingCartDrawerItem.tsx";
import {useState} from "react";
import {CartItemDto} from "../../data/CartItem/CartItem.type.ts";
import LoadingContainer from "./LoadingContainer.tsx";
import * as CartItemApi from "../../api/CartItemApi.ts"

type Props = {
  open:boolean,
  closeDrawer: () => void
}

export  default function ShoppingCartDrawer({open,closeDrawer}:Props){
  const [cartItemDtoList,setCartItemDtoList] = useState<CartItemDto[]|undefined>(undefined);

  const getUserCart = async () => {
    try{
    const responseDataList = await CartItemApi.getUserCart();
    setCartItemDtoList(responseDataList);
    }catch (err){
      console.log(err)
    }
  }

  const renderDrawerItem = () =>{
    if(cartItemDtoList){
      if(cartItemDtoList.length > 0){
        return (
          cartItemDtoList.map((value)=>(
            <>
              <ShoppingCartDrawerItem key={value.pid} cartItemDto={value}/>
              <Divider sx={{my:2}}></Divider>
            </>
          ))
        )
      }else {
        return (
          <Typography>
            No products in the cart.
          </Typography>
        )
      }
    }else {
      return (
        <LoadingContainer/>
      )
    }
  }

  return(
  <Drawer anchor="right" open={open} onClose={closeDrawer} onTransitionEnd={getUserCart}>
    <Button>購物車</Button>
    <Divider sx={{my:2}}></Divider>
    <Container>
    {
      renderDrawerItem()
    }
    </Container>
  </Drawer>
  )
}