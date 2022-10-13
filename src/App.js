import React, { useEffect, useState } from 'react';
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import {Header} from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {About} from './MyComponents/About';
import {Contact} from './MyComponents/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodo([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      
      <Footer/>
    </>  
  );
}

export default App;
