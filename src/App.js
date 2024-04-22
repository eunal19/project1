import './App.css';
import ImageSlider from './components/image-slider';
// import Accordion from './components/accordion';
// import RandomColor from './components/random-color';
import StarRating from './components/star-rating';




function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"4"} />
    </div>
  );
}

export default App;