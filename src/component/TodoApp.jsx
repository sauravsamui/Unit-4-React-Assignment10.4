import React from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'

const TodoApp = () => {
  return (
    <>
    <div className='todoDiv'>
        <h1 className='head'>TodoApp</h1>
        <TodoInput/>
    </div>
    
    <TodoItems/>
    </>
  )
}

export default TodoApp