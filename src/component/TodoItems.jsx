import React from 'react'
import { useContext } from 'react'
import {TodoContext} from "../Context/TodoContext"
import styles from "./todo.module.css"
const TodoItems = () => {
  const {TaskCompleted,todo,deleteTodo} = useContext(TodoContext)
  return (
    <div className={styles.outerItem}>
    {todo.map((el=>(
      <div className={styles.itemDiv} key={el.id}>
        <div className={styles.value}>
       <input  type="checkbox" checked={el.isCompleted} onChange={(e)=>{
       TaskCompleted(el.id,e.target.checked)
       }} />
        <div style={{textDecoration:el.isCompleted?"line-through":"",marginLeft:"5px"}}>{el.value}</div>
        </div>
        <button className='btn bt' onClick={()=>{
          deleteTodo(el.id)
        }}>Delete</button>
      </div>
    )))}
    </div>
  )
}

export default TodoItems