import './App.css';
const name = null;


const App =()  => {
  return (
    <div className="App">
      <h1>Hello {7+7}!</h1>
      {name ?(
        <>
        test
        </>
      ) :(
        <>

        <h1>Peace and LOVE</h1>
        <h1>there is no space for hate.</h1>

        </>
      )}
    </div>
  );
}

export default App;
