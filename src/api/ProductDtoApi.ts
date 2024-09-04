import axios from "axios";
import {ProductDetailDto, ProductDto} from "../data/product/ProductDto.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import getEnvConfig from "../config/env/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl

export const getProductDto = async () =>{
    const response = await axios.get<ProductDto[]>(`${baseUrl}/public/product`)
    return response.data
}

export const getProductByPid = async (pid:string) =>{
  const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`)
  return response.data;
}

export const addProductDtoDetail =  async (addProductDto:ProductDetailDto) =>{
  const response = await axios.post<ProductDetailDto>(
    `${baseUrl}/product`,
    addProductDto,
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const deleteProductDtoDetail= async (pid:number) =>{
  await axios.delete(
    `${baseUrl}/product/${pid}`,
    await FirebaseAuthService.getAuthConfig()
  )
}

export const updateProductDtoDetail= async (pid:number,updateProductDto:ProductDetailDto) =>{
  await axios.put(
    `${baseUrl}/product/${pid}`,
    updateProductDto,
    await FirebaseAuthService.getAuthConfig()
  )
}