import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {ProductDetailDto} from "../../../../data/product/ProductDto.type.ts";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../../api/CartItemApi.ts";
import AddToCartSuccessSnackBar from "./AddToCartSuccessSnackBar.tsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';

type Props = {
  productDetailDto: ProductDetailDto
}


export default function ProductDetailContainer({productDetailDto}:Props){
  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate();
  const [quantity,setQuantity] = useState<number>(1);
  const [isAddingToCart,setIsAddingToCart] = useState<boolean>(false);
  const [snackbarOpen,setSnackbarOpen] = useState<boolean>(false);

  const blackTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000', // 黑色主色調
      },
    },
  });

  const handleQuantityMinus = () => {
    if(quantity > 1){
      setQuantity((prevState)=>(
        prevState - 1
      ));
    }
  }

  const handleQuantityPlugs = () =>{
     if(quantity < productDetailDto.stock){
      setQuantity((prevState)=>(
        prevState + 1
      ));
     }
  }

  const handleAddToCart = async () =>{
    try{
      setIsAddingToCart(true);
      await CartItemApi.putCartItem(productDetailDto.pid,quantity)
      setSnackbarOpen(true);
      setIsAddingToCart(false);
    }catch (err){
      console.log(err)
    }
  }

  const handleSnackbarClose = () =>{
    setSnackbarOpen(false)
  }

  const renderAddCartBtn = () =>{
    if(loginUser === null){
      return(
        <>
        <ThemeProvider theme={blackTheme}>
        <Button
          variant="contained"
          onClick={()=>{
            navigate('/login')
          }}
        >
          Add to cart
        </Button>
        </ThemeProvider>
      </>
      )
    }else {
      return (
        <>
        <ThemeProvider theme={blackTheme}>
          <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'common.white',
                    '&:disabled': {
                      backgroundColor: 'grey.500',
                      color: 'grey.300',
                    },
                  }}
          > Add to cart </Button>
        </ThemeProvider>
        </>
      )
    }
  }

  const renderAddToCartContainer = () =>{
    if(productDetailDto.stock > 0){
      return(
        <Stack direction="column" style={{
          display:"block"
        }}>
          <QuantitySelector
            quantity={quantity} handleMinus={handleQuantityMinus} handlePlus={handleQuantityPlugs}/>
          {
            renderAddCartBtn()
          }
        </Stack>
      )
    }else {
      return <Typography variant="body1" color="#e6ae22">Sold Out</Typography>
    }
  }

  return(
    <>
    <Paper sx={{
      mt:3,
      backgroundColor:"#EEEEEE"
    }}>
        <Stack
          direction={{
            md:"row",
            sm:"column"
          }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            mb:3
          }}
        >
          <Box>
            <img src={productDetailDto.imageUrl}/>
          </Box>
          <Box sx={{
            mr: 10,
            ml: 10
          }}>
            <Typography variant="h6">
              {productDetailDto.name}
            </Typography>
            <Typography variant="h6" style={{
              color: "#e6ae22"
            }}>
              ${productDetailDto.price.toLocaleString()}
            </Typography> <br/>
            <Typography variant="body1">
              {productDetailDto.description}
            </Typography> <br/>
            {
              renderAddToCartContainer()
            }

          </Box>
        </Stack>
    </Paper>
    <AddToCartSuccessSnackBar open={snackbarOpen} handleClose={handleSnackbarClose}/>
    </>
  )
}