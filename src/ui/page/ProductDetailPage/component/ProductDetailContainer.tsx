import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {ProductDetailDto} from "../../../../data/product/ProductDto.type.ts";


type Props = {
  productDetailDto: ProductDetailDto
}


export default function ProductDetailContainer({productDetailDto}:Props){

  return(
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
            <Stack direction="row">
              <QuantitySelector/>
              <Button color="success">
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Stack>
    </Paper>
  )
}