import {Box, Button, Container, Divider, Drawer, Typography} from "@mui/material";
import ShoppingCartDrawerItem from "./ShoppingCartDrawerItem.tsx";
import {useState} from "react";
import {CartItemDto} from "../../data/CartItem/CartItem.type.ts";
import LoadingContainer from "./LoadingContainer.tsx";
import * as CartItemApi from "../../api/CartItemApi.ts"
import {useNavigate} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";

type Props = {
  open:boolean,
  closeDrawer: () => void
}

export  default function ShoppingCartDrawer({open,closeDrawer}:Props){
  const [cartItemDtoList,setCartItemDtoList] = useState<CartItemDto[]|undefined>(undefined);
  const navigate = useNavigate();

  const getUserCart = async () => {
    // setCartItemDtoList(undefined);
    const responseDataList = await CartItemApi.getUserCart();
    setCartItemDtoList(responseDataList);

  }

  const blackTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000', // 黑色主色調
      },
    },
  });

  const renderLoginBtn = () =>{
    if(cartItemDtoList){
    if(cartItemDtoList.length > 0){
      return(
        <>
          <ThemeProvider theme={blackTheme}>
            <Container>
          <Button
            variant="contained"
            onClick={()=>{navigate(`/shoppingcart`)}}
            style={{
              width:"322px"
            }}
          >
            View Cart
          </Button>
            </Container>
            <Container>
          <Button
            variant="contained"
            sx={{
              mt:1,
              mb:2,
              width:"322px"
            }}
          >
            Checkout
          </Button>
            </Container>
          </ThemeProvider >
        </>
      )
    }
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

  <Drawer anchor="right" open={open} onClose={closeDrawer} onTransitionEnd={getUserCart} >
    <ThemeProvider theme={blackTheme}>
      <Container
      sx={{
        display:"flex",
        justifyContent:"flex-end"
      }}
      >
    <Box
      onClick={closeDrawer}
      sx={{
        mt:2,
        cursor:"pointer"
      }}
    >
      Close
    </Box>
      </Container>
    </ThemeProvider >
    <Divider sx={{
      my:2,
      mb:2,
      mr:2,
      ml:2
    }}></Divider>
    <Container >
    {
      renderDrawerItem()
    }
    </Container>
    {
      renderLoginBtn()
    }
  </Drawer>
  )
}