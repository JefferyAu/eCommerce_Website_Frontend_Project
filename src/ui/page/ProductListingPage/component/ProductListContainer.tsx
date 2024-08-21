import SingleFurniture from "./SingleFurniture.tsx";
import {FurnitureDto} from "../../../../data/product/FurnitureDto.type.ts";
import Grid from '@mui/material/Unstable_Grid2';

type Props ={
  getFurnitureDtoList:FurnitureDto[]
}

export default function ProductListContainer({getFurnitureDtoList}:Props){
  return(
    <>
      <h1> All Product</h1>
      <Grid container spacing={2}>
        {
          getFurnitureDtoList.map((value) => (
            <Grid  md={4} sm={6} xs={12} display="flex" justifyContent="center" alignItems="center">
            <SingleFurniture key={value.pid} getFurnitureDto={value}/>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}