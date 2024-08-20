import {Carousel} from "react-bootstrap";
import "./style.css";

export default function CarouselsBanner(){
  return(
    <Carousel slide={false} >
      <Carousel.Item className="carouselBanner">
        <img src="/src/assets/img/bannerPrice.jpg"/>
      </Carousel.Item>
      <Carousel.Item className="carouselBanner">
        <img src="/src/assets/img/bannerSleeping.jpg"/>
      </Carousel.Item >
      <Carousel.Item className="carouselBanner">
        <img src="/src/assets/img/banner3.jpg"/>
      </Carousel.Item>
    </Carousel>
  )
}