import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {ProductDetailDto} from "../../../../data/product/ProductDto.type.ts";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../../api/CartItemApi.ts";
import AddToCartSuccessSnackBar from "./AddToCartSuccessSnackBar.tsx";

type Props = {
  productDetailDto: ProductDetailDto
}


export default function ProductDetailContainer({productDetailDto}:Props){
  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate();
  const [quantity,setQuantity] = useState<number>(1);
  const [isAddingToCart,setIsAddingToCart] = useState<boolean>(false);
  const [snackbarOpen,setSnackbarOpen] = useState<boolean>(false);

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
        <Button
          color="success"
          onClick={()=>{
            navigate('/login')
          }}
        >
          Add to cart
        </Button>
      )
    }else {
      return <Button color="success"
      onClick={handleAddToCart}
      disabled={isAddingToCart}> Add to cart </Button>
    }
  }

  const renderAddToCartContainer = () =>{
    if(productDetailDto.stock > 0){
      return(
        <Stack direction="row">
          <QuantitySelector quantity={quantity} handleMinus={handleQuantityMinus} handlePlus={handleQuantityPlugs}/>
          {
            renderAddCartBtn()
          }
        </Stack>
      )
    }else {
      return <Typography variant="body1" color="red">Sold Out</Typography>
    }
  }

  return(
    <>
    <Paper sx={{
      mt:3
    }}>
        <Stack
          direction={{
            md:"row",
            sm:"column"
          }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box>
            <img src={productDetailDto.imageUrl}/>
          </Box>
          <Box>
            <Typography variant="h5">
              {productDetailDto.name}
            </Typography>
            <Typography variant="h6">
              {productDetailDto.description}
            </Typography>
            <Typography variant="h6">
              Price: {productDetailDto.price.toLocaleString()}
            </Typography>
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