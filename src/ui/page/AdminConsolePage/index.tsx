import Header from "../../component/Header";
import VerticalTabs from "./component/VerticalTabs.tsx";
import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";
import {ProductDetailDto, ProductDto} from "../../../data/product/ProductDto.type.ts";
import * as ProductDtoApi from "../../../../src/api/ProductDtoApi.ts";

export default function AdminConsolePage(){

  const [getProductDtoList,setGetProductDto] = useState<ProductDto[]|undefined>(undefined)
  const [addProductDto,setAddProductDto] = useState<ProductDetailDto>({
    pid:0,
    name:'',
    description:'',
    imageUrl: '',
    price:0,
    stock:0,
    category:''
  })

  const handleAddProductDtoChange = (addProductDto:ProductDetailDto) =>{
    setAddProductDto(addProductDto)
  }

  const handleRefreshGetAllApi = (getProductDtoList:ProductDto[]) =>{
    setGetProductDto(getProductDtoList)
  }

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate();

  const getProductDto = async () =>{
    try{
      const responseData = await ProductDtoApi.getProductDto();
      setGetProductDto(responseData);
    }catch (err){
      console.log(err);
      navigate("/error");
    }
  }

  const deleteProductDtoDetail = (pid:number) =>{
    const updateDtoList = getProductDtoList?.filter((value)=>(
      value.pid !== pid
    ));
    setGetProductDto(updateDtoList);
  }


  useEffect(
    ()=>{
      getProductDto()
      if(loginUser === null){
        navigate("/")
      }
    },[loginUser])

  return(
    <>
      <Header/>
      {
        getProductDtoList &&
          <VerticalTabs
              getProductDtoList={getProductDtoList}
              addProductDto={addProductDto}
              handleAddProductDtoChange={handleAddProductDtoChange}
              deleteProductDtoDetail={deleteProductDtoDetail}
              handleRefreshGetAllApi={handleRefreshGetAllApi}
          />

      }
    </>
  )
}