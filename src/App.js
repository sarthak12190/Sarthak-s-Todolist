
import './App.css';
import Header from "./My Components/Header";
import {Todos} from "./My Components/Todos";
import Footer from "./My Components/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "Go to the gym",
    desc: "You wanna get aesthetic!!"
  },
  {
    sno: 2,
    title: "Go for running",
    desc: "You wanna get leaner!!"
  },
  {
    sno: 3,
    title: "Eat healthy",
    desc: "You wanna eat healthy to get those abs!!"
  },
  {
    sno: 4,
    title: "Work hard",
    desc: "Work hard to get rich!!"
  }
]);

  return (
    <> 
        <Header title = "Sarthak's Todos List" searchbar={false}/>
        <Todos todos = {todos}  onDelete={onDelete}/>
        <Footer/>
     </>
  );
}

export default App;
