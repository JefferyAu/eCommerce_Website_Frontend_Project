import Header from "../../component/Header";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/product/ProductDto.type.ts";
import * as ProductApi from "../../../api/ProductDtoApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import LoadingContainer from "../../component/LoadingContainer.tsx";

type Params = {
  productId: string
}

export default function ProductDetailPage(){
  const [productDetailDto,setProductDetailDto] = useState<ProductDetailDto | undefined>(undefined)
  const params = useParams<Params>();

  const navigate = useNavigate();

  const getProductByPid = async () =>{
    if(params.productId) {
      try{
      const responseData = await ProductApi.getProductByPid(params.productId);
      setProductDetailDto(responseData);
      document.title = responseData.name;
      }catch (err){
        console.log(err);
        navigate('/error');
      }
    }
  }

  useEffect(()=> {
    getProductByPid();
  },[])

  return(
    <>
      <Header/>
      <Container>
        {
          productDetailDto ?
            <ProductDetailContainer key={productDetailDto.pid} productDetailDto={productDetailDto}/>
            : <LoadingContainer/>
        }
      </Container>
    </>
  )
}