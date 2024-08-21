import {useParams} from "react-router-dom";
import {FurnitureDto} from "../../../../data/product/FurnitureDto.type.ts";
import SingleProduct from "./SingleProduct.tsx";

type Props ={
  getFurnitureDtoById:FurnitureDto[]
}


export default function ProductDetailContainer({getFurnitureDtoById}:Props){
  const {productId} = useParams();
  return(
    <>
      <h1> Product Details</h1>
      {
        getFurnitureDtoById.filter((value)=>(
          value.pid == Number(productId)
        ))
          .map((value)=>(
            <SingleProduct getFurnitureDtoById={value}/>
          ))
      }
    </>
  )
}