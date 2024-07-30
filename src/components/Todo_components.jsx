import React, { useEffect, useState } from "react";
import { useTodo } from "../TodoContext";

const Todo_Components=({todo})=>{
    const [BgColor,setBgColor]=useState(`purple-300`)
    const [isChecked,setIsChecked]=useState(false)
    const [isdisabled,setIsDisabled]=useState(false)
    const [line,setLine]=useState(`no-underline`)
    const [isEditable,SetIsEditable]=useState(false)
    const [TodoMsg,SetTodoMsg]=useState(todo.todo)

    const {deleteTodo,updateTodo} =useTodo()
    const checkHandler=()=>{
        if(!isChecked){
            setBgColor(`yellow-200`)
            setLine(`line-through`)
            setIsDisabled(true)
        }
        else{
            setIsDisabled(false)
            setBgColor(`purple-300`)
            setLine(`no-underline`)
        }
        setIsChecked(!isChecked)
    }

    const editTodo=()=>{
        updateTodo({...todo,todo:TodoMsg},todo.id)
        SetIsEditable((prev)=>(!prev))
    }

    const removetodo=()=>{
        deleteTodo(todo.id)
    }

    return(
        <div className={`flex flex-row flex-wrap bg-${BgColor} p-2 rounded-lg px-4 justify-between gap-2 items-center w-52 md:w-72 lg:w-96`}>
            <div className="flex flex-row gap-3">
                <input type="checkbox" checked={isChecked} onChange={checkHandler} className="cursor-pointer"/>
                <input className={`w-20 lg:w-64 md:w-40 text-decoration-line: ${line} bg-${BgColor} outline-none`} readOnly={!isEditable} onChange={(e)=>SetTodoMsg(e.target.value)} value={TodoMsg}></input>
            </div>
            <div className="flex flex-row gap-3">
                <input type="image" hidden={isEditable} onClick={editTodo} disabled={isdisabled} className="h-5 rounded-sm" src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle-thumbnail.png" alt="" />
                <input type="image" onClick={()=>(SetIsEditable((prev)=>(!prev)))} hidden={!isEditable} className="h-5 rounded-sm"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIPpSUS7CvALUfN3a1-5tB-THvx_oZ-iRecB361rtzWvwMzu9cQ9geFzrzIOODQlgBUw&usqp=CAU" alt="" />
                <input type="image" onClick={removetodo} className="h-5 rounded-sm" src="https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp" alt="" />
            </div>
        </div>
    )
}

export default Todo_Components