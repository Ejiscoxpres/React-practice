import {useState} from 'react';
import './App.css';
/*import Person from './components/person';*/


const App =()  => {
const [counter,setCounter] = useState(0);

  return (
    <div className="App">
     {/* {person ()}*/}
      
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      
      
    </div>
  );
}

export default App;
