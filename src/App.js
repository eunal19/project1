import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import Test1 from './components/test1/test1';
import Test2 from './components/test2/test2';
import Test3 from './components/test3/test3';
import Test4 from './components/test4/test4';


function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      <RandomColor />
      <Test1 />
      <Test2 />
      <Test3 />
      <Test4 />
    </div>
  );
}

export default App;