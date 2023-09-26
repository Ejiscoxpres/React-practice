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
        <h1>test</h1>
      )}
    </div>
  );
}

export default App;
