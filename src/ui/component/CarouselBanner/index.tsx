import Carousel from "react-material-ui-carousel";
import Items from "./Items.tsx";
import mockData from "./slider.json"
import {useEffect, useState} from "react";
import {CarouselDto} from "../../../data/Carousel/Carousel.type.ts";

export default function CarouselBanner(){
  const [carouselDtoList,setCarouselDtoList] = useState<CarouselDto[]| undefined>(undefined);

  useEffect(() => {
    setCarouselDtoList(mockData)
  }, []);

  return(
    <>
      <Carousel>
        {
          carouselDtoList &&
          carouselDtoList.map( (item) => <Items key={item.pid} carouselDto={item} /> )

        }
      </Carousel>
    </>
  )
}