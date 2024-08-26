import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import axios from "axios";
import {CartItemDto} from "../data/CartItem/CartItem.type.ts";

const baseUrl = "http://localhost:8080";


export const getUserCart = async () => {
  const response = await axios.get<CartItemDto[]>(
    `${baseUrl}/cart`,
    await  FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const putCartItem = async (pid:number,quantity:number) =>{
  await axios.put(
    `${baseUrl}/cart/${pid}/${quantity}`,
   null ,
   await FirebaseAuthService.getAuthConfig()
  )
}

export const patchCartQuantity =  async (pid:number,quantity:number) =>{
  const response = await axios.patch<CartItemDto>(
    `${baseUrl}/cart/${pid}/${quantity}`,
    null,
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const deleteCartItem = async (pid:number) =>{
  await axios.delete(
    `${baseUrl}/cart/${pid}`,
    await FirebaseAuthService.getAuthConfig()
  )
}