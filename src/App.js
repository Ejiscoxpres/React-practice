import './App.css';
import Person from './components/person';

const person = () => {
  return(
    <>
    <h1>Name: Bamidele</h1>
    <h2>Last Name: Adeleke</h2>
    <h2>Age: 31</h2>
    </>
  )
}
const App =()  => {
  return (
    <div className="App">
      {person ()}
      {person ()}
      {person ()}
      {person ()}
      {person ()}
      
      {/*<Person /> */}
      
      
    </div>
  );
}

export default App;
