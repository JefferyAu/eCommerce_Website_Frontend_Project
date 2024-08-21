import {FurnitureDto} from "../../../data/product/FurnitureDto.type.ts";
import {useState} from "react";
import * as FurnitureDtoApi from "../../../../src/api/FurnitureDtoApi.ts";
import Header from "../../component/Header";
import {Container} from "@mui/material";
import ProductListContainer from "./component/ProductListContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate} from "react-router-dom";

export default function ProductListingPage(){

  const [getFurnitureDtoList, setFurnitureDtoList] = useState<FurnitureDto[] | undefined>(undefined);

  const navigate = useNavigate();

  const getFurnitureDto = async () =>{
    try{
      const responseData = await FurnitureDtoApi.getFurnitureDto();
      setFurnitureDtoList(responseData);
    }catch (err){
      console.log(err);
      navigate("/error");
    }
  }

  useState(()=>{
    getFurnitureDto();
  })

  return(
    <>
      <Header/>
      <Container>
        {
          getFurnitureDtoList ?
            <ProductListContainer getFurnitureDtoList={getFurnitureDtoList}/>
            :<LoadingContainer/>
        }
      </Container>
    </>
  )
}