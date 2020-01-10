import React,{useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

import Todo from './Todo';

const App = () => {

    //const APP_ID = "ac7a27fb";
    //const APP_KEY = "160b6fb154cac60808fad8b518a415e1";
    //const response = await fetch('https://api.edamam.com/search?q=${query}&app_id=ac7a27fb&app_key=160b6fb154cac60808fad8b518a415e1');
    

    //example of useState, heading increments on click (5) represents the starting number
    const [counter,setCounter] = useState(5);

    const [todos,setTodos] = useState([]); //empty array
    const [search, setSearch] = useState(""); // empty string
    const [reFetch, setFetch] = useState(""); 

    useEffect(() => {
      //getTodos();
    },[reFetch]);

    const getTodos = async () => {
      //const response = await fetch('/api/endpoints'); //fetches proxy in package.json
      //const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');

      const data = await response.json();

      var sliceTen = data.slice(0,5); //stes slice index 0-4
      setTodos(sliceTen); // sets todos into an array of 200 todos fetched from the api

      console.log(data);
    
      // fills the empty array with array from fetch
      // hits is an array of recipes in data
    }
    const counterDec = async () => {
      setCounter(counter+1);
    }

    const updateSearch = e => {
      setSearch(e.target.value); //syntax
      console.log(e.target.value); //test
    }

    const fetchSearch = e => {
      e.preventDefault(); //prevents refresh
      setFetch(search);
    }
  //event listener
  //document.getElementById('get').addEventListener('click', getTodos);

  //axios functions
  function axiosGetTodos(){
    // axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit: 5
    //   }
    // })
    // .then(res => console.error(res))
    // .catch(err => console.error(err));

    axios.get('https://jsonplaceholder.typicode.com/todos',{

    //axios.get('https://api.edamam.com/search?q=${query}&app_id=ac7a27fb&app_key=c80f216597c036993cc00cbcbc537edb',{
      params: {_limit:10}
    })
    .then(res => {setTodos(res.data);console.log(res)})
    .catch(err => console.error(err));

  }

// notes:
// "key={todo.title}" in return Todo is to fix a warning
  return (
    <div className="App">
      <form className="search-form" onSubmit={fetchSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button 
        className="search-button" 
        type="submit">
          go
        </button>
      </form>

      <h1 onClick={counterDec}> decreasing counter = {counter} </h1>

      
        <button className="search-button" onClick={axiosGetTodos}>axios get</button>
        <button className="search-button">axios apend</button>
        <button className="search-button">axios fetch</button>
    

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
