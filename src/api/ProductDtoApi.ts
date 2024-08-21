import axios from "axios";
import {ProductDetailDto, ProductDto} from "../data/product/ProductDto.type.ts";

export const getProductDto = async () =>{
    const response = await axios.get<ProductDto[]>("http://localhost:8080/public/product")
    return response.data
}

export const getProductByPid = async (pid:string) =>{
  const response = await axios.get<ProductDetailDto>(`http://localhost:8080/public/product/${pid}`)
  return response.data;
}