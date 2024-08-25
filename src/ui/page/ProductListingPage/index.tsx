import {ProductDto} from "../../../data/product/ProductDto.type.ts";
import {useState} from "react";
import * as ProductDtoApi from "../../../../src/api/ProductDtoApi.ts";
import Header from "../../component/Header";
import {Container} from "@mui/material";
import ProductListContainer from "./component/ProductListContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate} from "react-router-dom";
import CarouselBanner from "../../component/CarouselBanner";
import SearchSection from "./component/SearchSection.tsx";

export default function ProductListingPage(){

  const [getProductDtoList, setProductDtoList] = useState<ProductDto[] | undefined>(undefined);

  const navigate = useNavigate();

  const getProductDto = async () =>{
    try{
      const responseData = await ProductDtoApi.getProductDto();
      setProductDtoList(responseData);
    }catch (err){
      console.log(err);
      navigate("/error");
    }
  }

  useState(()=>{
    getProductDto();
    document.title = "SAVOY";
  })

  return(
    <>
      <Header/>
      <CarouselBanner/>
      <Container>
      <SearchSection/>
      </Container>
      <Container>
        {
          getProductDtoList ?
            <ProductListContainer getProductDtoList={getProductDtoList}/>
            :<LoadingContainer/>
        }
      </Container>
    </>
  )
}