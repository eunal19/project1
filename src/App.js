import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import Test1 from './components/test1/test1';
import Test2 from './components/test2/test2';
import Test3 from './components/test3/test3';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      <RandomColor />
      <Test1 />
      <Test2 />
      <Test3 />
      <span><div class="container">
        <div class="team">
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/fc-barcelona-logo.png"
            alt="" />
          <h3>Barcelona</h3>
          <button id="barcelona">Vote</button>
          <p>Vote Count: <span class="barcelona">0</span></p>
        </div>
        <div class="team">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-juventus-logojuventuslogojuventus-turin-logonew-21529676316hzqzr.png"
            alt="" />
          <h3>Juventus</h3>
          <button id="juventus">Vote</button>
          <p>Vote Count: <span class="juventus">0</span></p>
        </div>
        <div class="team">
          <img
            src="https://i.pinimg.com/originals/5f/7d/b6/5f7db63e2c0fc694aef02f1c64a31aab.jpg"
            alt="" />
          <h3>Manchester United</h3>
          <button id="manchester">Vote</button>
          <p>Vote Count: <span class="manchester">0</span></p>
        </div>
      </div></span >
    </div>
  );
}

export default App;