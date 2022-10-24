import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {log} from "util";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void

}


export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const removeTaskHandler = (tID:string) => {
        props.removeTask(tID)
    }



    const changeFilterTsarHsandler=(filterValue:FilterValuesType) => {
        props.changeFilter(filterValue)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onKeyDown={onKeyPressHandler}
                   onChange={onChangeHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    //         const removeTaskHandler=()=> {
                    //     props.removeTask(t.id)
                    // }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=>removeTaskHandler(t.id)}>x</button>
                        </li>
                    )

                })
            }
        </ul>
        <div>
            <button onClick={() => changeFilterTsarHsandler('all')}>All</button>
            <button onClick={() => changeFilterTsarHsandler('active')}>Active </button>
            <button onClick={() => changeFilterTsarHsandler('completed')}>Completed</button>
        </div>
    </div>
}
