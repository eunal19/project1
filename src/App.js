import './App.css';
// import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';




function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;