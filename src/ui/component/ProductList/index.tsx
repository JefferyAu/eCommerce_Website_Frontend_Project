import SingleFurniture from "./SingleFurniture.tsx";
import {Col, Row} from "react-bootstrap";
import {FurnitureDto} from "../../../data/FurnitureDto.type.ts";

type Props ={
  getFurnitureDtoList:FurnitureDto[]
}

export default function ProductList({getFurnitureDtoList}:Props){
  return(
    <>
      <br/>
      <h1> All Product</h1>
      <Row>
        {
          getFurnitureDtoList.map((value)=>(
            <Col xs={12} sm={6} md={4}>
            <SingleFurniture key={value.pid} getFurnitureDto={value}/>
            </Col>
          ))
        }
      </Row>
    </>
  )
}