import React, {useState} from 'react';
import {FilterValueType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(taskID: number)=>void
    // filteredTasks: (filterValue: FilterValueType)=>void
}

export function Todolist(props: PropsType) {
    let[filter,setFilter]=useState<FilterValueType>( 'All')
 let afterFilterTasks=props.tasks
    if (filter === "Active")
    {
        afterFilterTasks=props.tasks.filter(el=>!el.isDone)
    }
    if (filter === "Completed") {
        afterFilterTasks=props.tasks.filter(el=>el.isDone)
    }


    const filteredTasks=(filterValue:FilterValueType)=>{
        setFilter(filterValue)
    }



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {afterFilterTasks.map((el, index)=>{
                return (
                    <li key={el.id}>
                        <button onClick={()=>
                            props.removeTask(el.id)
                        }>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>

                    </li>
                )
            })}

        </ul>
        <div>
            <button onClick={()=>{filteredTasks('All')}}>All</button>
            <button onClick={()=>{filteredTasks('Active')}}>Active</button>
            <button onClick={()=>{filteredTasks('Completed')}}>Completed</button>
        </div>
    </div>
}
