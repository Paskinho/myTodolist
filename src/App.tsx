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

    let [tasks, setTasks] =useState( initialState: [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "TS", isDone: false }
    ])


    const removeTasks=(taskID: number)=> {
        setTasks(tasks.filter(el=>el.id!==taskID))

}



    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
            removeTask={removeTasks}
            />
        </div>
    );
}

export default App;
