import {useEffect} from 'react';
import './App.css';
import SearchIcon from './Search.svg';

// dcbabb41

const API_URL = 'http://www.omdbapi.com?apikey=dcbabb41';
const App = () =>{
const searchMovies = async (title) => {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.search);
}
    useEffect(() =>{
        searchMovies('stranded');

    },[]);
    return(
        <div className='app'>
            <h1>Mount Zion Movies</h1>
            <div className='search'>
                <input
                placeholder='search for movies'
                value='Abattoir'
                onChange={() => {}}
                />
                <img
                src='SearchIcon'
                alt='search'
                />
            </div>
        </div>
    );

}

export default App;