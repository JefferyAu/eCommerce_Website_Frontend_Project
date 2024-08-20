import {Card} from "react-bootstrap";
import {FurnitureDto} from "../../../data/FurnitureDto.type.ts";


type Props = {
  getFurnitureDto:FurnitureDto
}

export default function SingleFurniture({getFurnitureDto}:Props){
  return(
    <Card >
      <Card.Img variant="top" src={getFurnitureDto.imageUrl} />
      <Card.Body>
        <Card.Title>{getFurnitureDto.name}</Card.Title>
        <Card.Text>
          {getFurnitureDto.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>
          {getFurnitureDto.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}