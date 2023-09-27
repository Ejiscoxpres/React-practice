import {useEffect} from 'react';

// dcbabb41

const API_URL = 'http://www.omdbapi.com?apikey=dcbabb41';
const App = () =>{
const searchMovie = async (title) => {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data);
}
    useEffect(() =>{

    },[]);
    return(
        <h1>App</h1>
    );

}

export default App;