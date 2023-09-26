import './App.css';
const name = 'Praise';


const App =()  => {
  return (
    <div className="App">
      <h1>Hello {7+7}!</h1>
      {name ?(
        <>
        <h1>{name}</h1>
        </>
      ) :(
        <>

        <h1>Peace and LOVE</h1>
        <h2>There is no space for hate.</h2>

        </>
      )}
    </div>
  );
}

export default App;
