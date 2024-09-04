import { useRef } from "react";
import "./carousel.css";
import { Image } from "./images";

function Carousel({ images }: { images: Image[] }) {
  const carousel = useRef<HTMLDivElement>(null);
  const incrementCarousel = (delta: number) => {
    if (carousel.current) {
      //Carousel.current.scrollLeft is the number of the current x value
      //we take width of the carousel
      const width = carousel.current.offsetWidth;
      //at the end scrollTo(xscroll, yscroll)
      //it takes the actual position and give +500 if 1 -500 if -1
      carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-btn left-btn"
        onClick={() => incrementCarousel(-1)}
      ></div>
      <div
        className="carousel-btn right-btn"
        onClick={() => incrementCarousel(1)}
      ></div>
      <div className="carousel" ref={carousel}>
        {images.map((img, key) => {
          return (
            <div className="carousel-item" key={key}>
              <img src={img.src} alt="img of carousel" />
              <p>{img.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
