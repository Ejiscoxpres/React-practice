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
      
      
      <Person name = {'Praise'}
       lastName = {'Emeka'} 
       age ={500}/> 
      <Person name = {'Great'}  
      lastName = {'Grace'}
       age ={501}/> 
      <Person name = {'Precious'} 
      lastName = {'Promise'}
      age ={502}/> 
      <Person name = {'Ihechi'} 
      lastName = {'Amaka'} 
      age ={503}/> 
      <Person name = {'Marvellous'} lastName = {'Munachi'} age ={505}/> 
      
      
    </div>
  );
}

export default App;
