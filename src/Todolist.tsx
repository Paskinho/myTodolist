import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./components/Button";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    todolistId: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTaskHandler();
        }
    }

    const removeToDoListHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    const addTaskHandler =()=> {
        props.addTask(title, props.todolistId)
        setTitle('')
    }

    const removeTaskHandler = (tID: string)=> {
        props.removeTask(tID,props.todolistId)
    }


    const tsarChangeFilterHandler=(value: FilterValuesType) => {
      props.changeFilter(value, props.todolistId)
    }


    return <div>
        <h3> {props.title}
            {/*<button onClick={() => {'removeTodolist'}}>x</button>*/}
            <Button name={'x'} callBack={removeToDoListHandler} />
            
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={() => {'addTask'}}>+</button>
            <Button name={"+"} callBack={addTaskHandler}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.todolistId);
                    }

                    // const removeTaskHandler = ()=> {
                    //     props.removeTask(t.taskId,props.todolistId)
                    // }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={props.removeTask}>x</button>*/}
                        <Button name={'x'} callBack={()=> removeTaskHandler(t.taskId)}/>
                    </li>
                })
            }
        </ul>
        <div>
            {/*<button className={props.filter === 'all' ? "active-filter" : ""} onClick={()=>{}}>All </button>*/}
            <Button name={'all'} callBack={()=>tsarChangeFilterHandler('all')}/>
            <Button name={'active'} callBack={()=>tsarChangeFilterHandler('active')}/>
            <Button name={'completed'} callBack={()=>tsarChangeFilterHandler('completed')}/>
        {/*    <button className={props.filter === 'all' ? "active-filter" : ""} onClick={()=>tsarChangeFilterHandler('all')}>All </button>*/}
        {/*    <button className={props.filter === 'active' ? "active-filter" : ""}  onClick={()=>tsarChangeFilterHandler('active')}>Active </button>*/}
        {/*    <button className={props.filter === 'completed' ? "active-filter" : ""}  onClick={()=>tsarChangeFilterHandler('completed')}>Completed </button>*/}
        {/*</div>*/}
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


