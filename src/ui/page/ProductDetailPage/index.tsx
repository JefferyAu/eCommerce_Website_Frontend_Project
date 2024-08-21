import {useState} from "react";
import {FurnitureDto} from "../../../data/product/FurnitureDto.type.ts";
import Header from "../../component/Header";
import * as FurnitureDtoApi from "../../../api/FurnitureDtoApi.ts";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";


export default function ProductDetailPage(){

  const [getFurnitureDtoById,setFurnitureDtoById] = useState<FurnitureDto[]| undefined>(undefined);

  const getFurnitureDto = async () =>{
    const responseData = await FurnitureDtoApi.getFurnitureDto();
    setFurnitureDtoById(responseData);
  }

  useState(()=>{
    getFurnitureDto();
  })

  return(
    <>
      <Header/>
      {
        getFurnitureDtoById ?
          <ProductDetailContainer getFurnitureDtoById={getFurnitureDtoById}/>
          : <LoadingContainer/>
      }

    </>
  )
}