import SingleFurniture from "./SingleFurniture.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";

type Props ={
  getProductDtoList:ProductDto[]
}

export default function ProductListContainer({getProductDtoList}:Props){
  return(
    <>
      <Grid container spacing={2}>
        {
          getProductDtoList.map((value) => (
            <Grid  md={4} sm={6} xs={12} display="flex" justifyContent="center" alignItems="center">
            <SingleFurniture key={value.pid} getProductDto={value}/>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}