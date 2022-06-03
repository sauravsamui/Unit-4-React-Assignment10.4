import { createContext } from "react";
import { useState } from "react";
 
import { useReducer } from "react";
import { v4 } from "uuid";
 const initialState ={todo:[]}


function reducer({todo},{type,payload}){
    switch (type){
        case "add":{
        return {todo:[...todo,payload]}
        }
         case "delete":{
          return{todo:(todo.filter((e)=> e.id != payload))}
         }
         case "completed":{
             return{todo:[...payload]}
         }
        default:
            throw new Error()
    }
}



export const TodoContext = createContext();

export const TodoProvider = ({children})=>{
     const [{todo},dispatch] = useReducer(reducer,initialState)
     const [value,setValue] = useState("")
    

     let addTodo=()=>{

        let newTodo = todo.some((el)=>(el.value==value))
        if(!newTodo && value){
            dispatch({type:"add",payload:{
                id:v4(),
                value:value,
                isCompleted:false
            }})
            setValue("")
        }
     }
    
     let deleteTodo = (id)=>{
         dispatch({type:"delete",
        payload:id})
     }
     let TaskCompleted =(e,v)=>{
         
      let t = todo.reduce((acu,el)=>{
          if(el.id==e){
           el.isCompleted=v;
           acu.push(el)
          }else{
              acu.push(el)
          }
         return acu

        },[])
       
         dispatch({
             type:"completed",
             payload:t
         })
     }

     let inputTodo = (e)=>{
         setValue(e)
       
     }
    


return (
    <TodoContext.Provider value={{TaskCompleted,deleteTodo,addTodo,inputTodo,value,todo}}>{children}</TodoContext.Provider>
)

}