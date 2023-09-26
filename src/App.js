import './App.css';
const name = 'Rejoice'
const isNameShowing = 'true'

const App =()  => {
  return (
    <div className="App">
      <h1>Hello, {isNameShowing?  name :'peter'}!</h1>
    </div>
  );
}

export default App;
