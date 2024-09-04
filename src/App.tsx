import Carousel from "./Carousel";
import images from "./images";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
