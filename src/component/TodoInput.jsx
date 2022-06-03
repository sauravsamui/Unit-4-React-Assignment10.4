import React from 'react'
import { useContext } from 'react'

import { TodoContext } from '../Context/TodoContext'
const TodoInput = () => {
 
  const {addTodo,inputTodo,value} = useContext(TodoContext)
  return (
    <div className='inputDiv'>
      <input className='input' value={value} placeholder='Add to List' onChange={(e)=>{inputTodo(e.target.value)}}/>
      <button className='btn' onClick={()=>{
       addTodo()
      }}>Add</button>

    </div>
  )
}

export default TodoInput