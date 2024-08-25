import {Paper} from "@mui/material";
import {CarouselDto} from "../../../data/Carousel/Carousel.type.ts";


type Props = {
  carouselDto: CarouselDto
}

export default function Items({carouselDto}:Props){
  return(
    <>
      <Paper sx={{
        mr: { xs: 0, md: 0, lg: 10, xl: 15 },
        ml: { xs: 0, md: 0, lg: 10, xl: 15 },
      }}>
        <img src={carouselDto.imageUrl}
             style={{
               width: "100%",
               height: "100%",
             }}
        />
      </Paper>
    </>
  )
}