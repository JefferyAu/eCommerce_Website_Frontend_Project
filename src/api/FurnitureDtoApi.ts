import axios from "axios";
import {FurnitureDto} from "../data/FurnitureDto.type.ts";

export const getFurnitureDto = async () =>{
  try{
    const response = await axios.get<FurnitureDto[]>("http://localhost:8080/public/product")
    return response.data
  }catch (err){
    console.log(err)
  }
}