import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  let containerStyle = {
    minHeight: "10vh",
    margin: "50px auto",
  }
  return (
    <div className='container col-md-5 col-md-6' style={containerStyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ?
        <p>No todos to display!</p>
        :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}
    </div>
  )
}
