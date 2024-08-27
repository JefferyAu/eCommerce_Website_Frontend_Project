import SingleProduct from "./SingleProduct.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";

type Props ={
  getProductDtoList:ProductDto[],
  productNameFilter:string,
  categoryFilter:string
}

export default function ProductListContainer({getProductDtoList,productNameFilter,categoryFilter}:Props){
  return(
    <>
      <Grid container spacing={2}>
        {
          getProductDtoList.filter((value)=>(
            value.name.toLowerCase().includes(productNameFilter.toLowerCase())
            && value.category.includes(categoryFilter)
          ))
         .map((value) => (
            <Grid  md={4} sm={6} xs={12} display="flex" justifyContent="center" alignItems="center">
            <SingleProduct key={value.pid} getProductDto={value}/>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}