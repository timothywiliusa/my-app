import React,{useEffect, useState} from 'react';
import './App.css';

import Recipe from './Recipe';


const App = () => {

    //const APP_ID = "ac7a27fb";
    //const APP_KEY = "160b6fb154cac60808fad8b518a415e1";
    

    //example of useState, heading increments on click (5) represents the starting number
    const [counter,setCounter] = useState(5);

    const [recipes,setRecipes] = useState([{},{},{}]);

    useEffect(() => {
      getRecipes();
    },[]);

    const getRecipes = async () => {
      // const response = await fetch('/api/endpoints');
      // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');

      const data = await response.json();
      console.log(data);
    
      

      // setRecipes({},{},{}); 
      // fills the empty array with array from fetch
      // hits is an array of recipes in data 
      


    }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button 
        className="search-button" 
        type="submit">
          go
        </button>
      </form>

      <h1 onClick={()=> setCounter(counter-1)}> decreasing counter: {counter} </h1>

      {recipes.map(recipe=>(
        <Recipe/>
      ))}

    </div>
  );
}

export default App;
