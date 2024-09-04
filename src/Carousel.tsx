import "./carousel.css";
import { Image } from "./images";

function Carousel({ images }: { images: Image[] }) {
  return (
    <div className="carousel-container">
      <div className="carousel">
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
