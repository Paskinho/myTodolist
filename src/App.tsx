import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    // let tasks = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "TS", isDone: false }
    // ]

    let [tasks, setTasks] = useState (initialState: [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "TS", isDone: false }
    ])


    const removeTasks=(taskID: number)=> {
        setTasks(tasks.filter(el=>el.id!==taskID))

}


const filteredTasks=(filterValue:string)=>{
console.log(filterValue)
}
    let afterFilterTasks=tasks

if (filterValue === "Active")
    return{
        afterFilterTasks=tasks.filter(el=>el.isDone)
    }
    else if (filterValue === "Complited") return {
    afterFilterTasks=tasks.filter(el=>el.!isDone)
    }





    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={afterFilterTasks}
            removeTask={removeTasks}
                      filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
