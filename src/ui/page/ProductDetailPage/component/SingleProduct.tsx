import {FurnitureDto} from "../../../../data/product/FurnitureDto.type.ts";
import {Link} from "@mui/material";

type Props = {
  getFurnitureDtoById:FurnitureDto
}

export default function SingleProduct({getFurnitureDtoById}:Props){
  return(
    <>
      <Link href={`/`}>Home</Link>
      <img src={getFurnitureDtoById.imageUrl}/>
      <h1>{getFurnitureDtoById.pid}</h1>
      <h1>{getFurnitureDtoById.name}</h1>
      <h1>{getFurnitureDtoById.description}</h1>
      <h1>{getFurnitureDtoById.hasStock}</h1>
    </>
  )
}