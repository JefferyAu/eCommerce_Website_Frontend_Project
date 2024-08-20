import Header from "../../component/Header";
import CarouselsBanner from "./component/CarouselsBanner.tsx";
import ProductList from "../../component/ProductList";
import {Container} from "react-bootstrap";
import {FurnitureDto} from "../../../data/FurnitureDto.type.ts";
import {useState} from "react";
import * as FurnitureDtoApi from "../../../../src/api/FurnitureDtoApi.ts";

export default function ProductListingPage(){

  const [getFurnitureDtoList, setFurnitureDtoList] = useState<FurnitureDto[] | undefined>(undefined);

  const getFurnitureDto = async () =>{
   const responseData = await FurnitureDtoApi.getFurnitureDto();
   setFurnitureDtoList(responseData);
  }

  useState(()=>{
    getFurnitureDto();
  })

  return(
    <>
      <Header/>
      <CarouselsBanner/>
      <Container>
        {
          getFurnitureDtoList &&
            <ProductList getFurnitureDtoList={getFurnitureDtoList}/>
        }

      </Container>
    </>
  )
}