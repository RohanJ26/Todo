import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './TodoContext'
import Home from './Outlet_Components/Home'
import Todo_Components from './components/Todo_components'

function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>(prev.filter((prevTodo)=>(prevTodo.id!==id))))
  }

  const updateTodo=(todo,id)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>(prevTodo.id===id)? todo:prevTodo)))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo}}>
      <div className="flex flex-col flex-1 items-center">
        <Home/>
        <div className="flex flex-col gap-3 mb-3">
          {todos.map((todo)=>(
            <div key={todo.id}>
              <Todo_Components todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
