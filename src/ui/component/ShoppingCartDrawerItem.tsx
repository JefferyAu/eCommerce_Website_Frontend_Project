import {Box, Stack, Typography} from "@mui/material";
import {CartItemDto} from "../../data/CartItem/CartItem.type.ts";

type Props ={
  cartItemDto: CartItemDto
}

export default function ShoppingCartDrawerItem({cartItemDto}:Props){
  return(
    <>
      <Stack direction="column">

        <Box
          sx={{
            height: "250px",
            width: "250px",
            backgroundImage: `url(${cartItemDto.imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center"
          }}
        >

        </Box>
        <Typography variant="h5">
          {cartItemDto.name}
        </Typography>
        <Typography variant="body1">
          {cartItemDto.price.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          Quantity: {cartItemDto.cartQuantity}
        </Typography>
      </Stack>
    </>
  )
}