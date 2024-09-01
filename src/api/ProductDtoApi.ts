import axios from "axios";
import {ProductDetailDto, ProductDto} from "../data/product/ProductDto.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

export const getProductDto = async () =>{
    const response = await axios.get<ProductDto[]>("http://localhost:8080/public/product")
    return response.data
}

export const getProductByPid = async (pid:string) =>{
  const response = await axios.get<ProductDetailDto>(`http://localhost:8080/public/product/${pid}`)
  return response.data;
}

export const addProductDtoDetail =  async (addProductDto:ProductDetailDto) =>{
  const response = await axios.post<ProductDetailDto>(
    "http://localhost:8080/product",
    addProductDto,
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const deleteProductDtoDetail= async (pid:number) =>{
  await axios.delete(
    `http://localhost:8080/product/${pid}`,
    await FirebaseAuthService.getAuthConfig()
  )
}

export const updateProductDtoDetail= async (pid:number,updateProductDto:ProductDetailDto) =>{
  await axios.put(
    `http://localhost:8080/product/${pid}`,
    updateProductDto,
    await FirebaseAuthService.getAuthConfig()
  )
}