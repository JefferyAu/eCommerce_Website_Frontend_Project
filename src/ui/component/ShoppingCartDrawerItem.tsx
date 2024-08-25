import {Box, Typography} from "@mui/material";
import {CartItemDto} from "../../data/CartItem/CartItem.type.ts";
import Grid from "@mui/material/Unstable_Grid2";

type Props ={
  cartItemDto: CartItemDto
}

export default function ShoppingCartDrawerItem({cartItemDto}:Props){

  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs
            sx={{
              p:0,
              mt:1,
              mb:1
            }}
          >
            <Box
              sx={{
                height: "100px",
                width: "100px",
                backgroundImage: `url(${cartItemDto.imageUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition:"center"
              }}
            >
            </Box>
          </Grid>
          <Grid xs={6}
            sx={{
              ml:5
            }}
          >
            <Typography variant="body2">
              {cartItemDto.name}
            </Typography>
            <Typography variant="body1">
              Qty: {cartItemDto.cartQuantity}
            </Typography>
          </Grid>
          <Grid xs>
            <Typography variant="body1">
              ${cartItemDto.price.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}