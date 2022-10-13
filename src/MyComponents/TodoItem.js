import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
      <h3 className='my-3'>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
      <button className='btn btn-sm btn-danger' onClick={() => {props.onDelete(props.todo)}}>Delete</button>
      <hr />
    </>
  )
}
