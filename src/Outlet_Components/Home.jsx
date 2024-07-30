import React, { useState } from "react"
import { useTodo } from "../TodoContext"

const Home=()=>{

    const [Todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=()=>{
        if(!Todo) return 
        addTodo({todo:Todo,completed:false})
        setTodo("")
    }

    return(
        <div className="flex flex-col mb-4 lg:mb-9 mt-9 gap-5 items-center">
            <div className="text-2xl font-bold">Manage Your Todos</div>
            <div className="">
                <input type="text" value={Todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Write Todo..." className="h-9 rounded-l-lg focus:outline-none bg-slate-500 w-52 md:w-72 lg:w-96 p-3 overflow-x-auto"/>
                <button onClick={add} className="bg-green-400 h-9 px-2 rounded-r-lg font-semibold">Add</button>
            </div>
        </div>
    )
}

export default Home