import React,{useEffect, useState} from 'react';
import './App.css';

import Todo from './Todo';


const App = () => {

    //const APP_ID = "ac7a27fb";
    //const APP_KEY = "160b6fb154cac60808fad8b518a415e1";
    

    //example of useState, heading increments on click (5) represents the starting number
    const [counter,setCounter] = useState(5);

    const [todos,setTodos] = useState([]); //puts 3 objects into the array

    useEffect(() => {
      getTodos();
    },[]);

    const getTodos = async () => {
      // const response = await fetch('/api/endpoints'); //fetches proxy in package.json
      // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');

      const data = await response.json();
      setTodos(data); // sets todos into an array of 200 todos fetched from the api

      console.log(data[3].completed);
      console.log(data);
    
      

      
      // fills the empty array with array from fetch
      // hits is an array of recipes in data 
      


    }
// notes:
// "key={todo.title}" in return Todo is to fix a warning
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

      {todos.map(todo =>(
        <Todo 
          key={todo.title}
          id={todo.id} 
          userId={todo.userId} 
          title={todo.title} 
          completed={todo.completed}
        />
      ))}

    </div>
  );
}

export default App;
