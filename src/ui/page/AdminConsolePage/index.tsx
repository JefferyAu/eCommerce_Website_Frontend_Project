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

  // const changeQuantity = (pid:number,quantity:number) => {
  //   const updatedDtoList = cartItemDtoList?.map((value)=>{
  //     if(value.pid === pid){
  //       value.cartQuantity = quantity;
  //     }
  //     return value;
  //   })
  //   setCartItemDtoList(updatedDtoList);
  // }

  const addProductDtoDetail = (addProductDto:ProductDetailDto) =>{
    const updateAddDtoList = getProductDtoList?.map((value)=>{
      if(value.pid === addProductDto.pid){
        value.name = addProductDto.name;
        value.category = addProductDto.category;
        value.imageUrl = addProductDto.imageUrl;
        value.price = addProductDto.price;
      }
      return value;
    })
    setGetProductDto(updateAddDtoList)
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
              addProductDtoDetail={addProductDtoDetail}
          />
      }
    </>
  )
}