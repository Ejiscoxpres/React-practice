import './App.css';
import Person from './components/person';

const person = () => {
  return(
    <>
    <h1>Name: bamidele</h1>
    <h2>Last Name: Adeleke</h2>
    <h2>Age: 31</h2>
    </>
  )
}
const App =()  => {
  return (
    <div className="App">
     {/* {person ()}*/}
      
      
      <Person name = {'Praise'} /> 
      <Person /> 
      <Person /> 
      <Person /> 
      
      
    </div>
  );
}

export default App;
