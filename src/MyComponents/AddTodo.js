import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit = (e) => {
        e.preventDefault()
        if (!title || !description) {
            alert("Title or description cannot be empty.")
        } else {
            props.addTodo(title, description)
            setTitle("")
            setDescription("")
        }
    }
    return (
        <div className='container col-md-6 col-sm-6 my-3'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter title here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className="form-control" id="description" rows="3"></textarea>
                </div>
                <button className='btn btn-success btn-sm'>Add</button>
            </form>
        </div>
    )
}
