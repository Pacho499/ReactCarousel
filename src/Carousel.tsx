import { useRef, useState } from "react";
import "./carousel.css";
import { Image } from "./images";

function Carousel({ images }: { images: Image[] }) {
  const carousel = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);

  const incrementCarousel = (delta: number) => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    if (count + delta > images.length - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      //if first image go to latest
      setCount(images.length - 1);
      carousel.current.scrollTo(
        carousel.current.scrollLeft + width * images.length - 1,
        0
      );
      return;
    } else {
      //Carousel.current.scrollLeft is the number of the current x value
      //we take width of the carousel

      //at the end scrollTo(xscroll, yscroll)
      //it takes the actual position and give +500 if 1 -500 if -1

      setCount((c) => c + delta);
      carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);

      return;
    }
  };

  const incrementCarouselIndicator = (delta: number) => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    setCount(delta);
    carousel.current.scrollTo(width * delta, 0);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-btn carousel-left-btn"
        onClick={() => incrementCarousel(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 10.605 15.555"
          className="carousel-arrow"
        >
          <polygon points="10.605 12.727 5.656 7.776 10.605 2.828 7.777 0 0 7.776 7.777 15.555 10.605 12.727" />
        </svg>
      </div>
      <div
        className="carousel-btn carousel-right-btn"
        onClick={() => incrementCarousel(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 10.605 15.555"
          className="carousel-arrow"
        >
          <polygon points="2.828 15.555 10.605 7.776 2.828 0 0 2.828 4.949 7.776 0 12.727 2.828 15.555" />
        </svg>
      </div>
      <div className="carousel" ref={carousel}>
        {images.map((img, key) => {
          return (
            <div
              className={
                key === count ? "carousel-item active" : "carousel-item"
              }
              key={key}
            >
              <img src={img.src} alt="img of carousel" />
            </div>
          );
        })}
      </div>
      <div className="carousel-indicator-container">
        {[...Array(images.length)].map((_, key) => {
          return (
            <svg
              key={key}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              height={15}
              width={15}
              className={key === count ? "active" : ""}
              onClick={() => incrementCarouselIndicator(key)}
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
