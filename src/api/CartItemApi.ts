import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import axios from "axios";
import {CartItemDto} from "../data/CartItem/CartItem.type.ts";

const baseUrl = "http://localhost:8080";

export const getUserCart = async () => {
  const response = await axios.get<CartItemDto[]>(`${baseUrl}/cart`,
    {
      headers: {
        Authorization: `Bearer ${await FirebaseAuthService.getAccessToken()}`
      }
    }
  )
  return response.data;
}