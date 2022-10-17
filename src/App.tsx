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

    let [tasks, setTasks] = useState ( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "TS", isDone: false }
    ])

let[filter,setFilter]=useState( 'All')

    const removeTasks=(taskID: number)=> {
        setTasks(tasks.filter(el=>el.id!==taskID))

}


    let afterFilterTasks=tasks
    if (filter === "Active")
        {
            afterFilterTasks=tasks.filter(el=>!el.isDone)
        }
     if (filter === "Complited") {
        afterFilterTasks=tasks.filter(el=>el.isDone)
    }


const filteredTasks=(filterValue:string)=>{
    setFilter(filterValue)
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
