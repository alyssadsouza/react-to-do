import { useContext, useState } from 'react';
import './App.css';
import { TaskContext } from './TaskContext';
import Task from './Task';

var idNum = 0;

function TaskList({filter}) {

    const [tasks, setTasks] = useContext(TaskContext);
    const [task, setTask] = useState("");

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") {
            return true;
        }
        else if (filter === "incomplete") {
            return !task.done;
        } else {
            return task.done;
        }
    })

    const updateTask = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.length > 0) {
            setTasks(prevTasks => [...prevTasks, {"task": task, "done": false, "id": ++idNum}]);
            setTask("");
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => {return task.id !== id}));
    }

    const checkTask = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, "done": !task.done};
            } else {
                return task;
            }
        }));
    }

    return (
    <div className="taskList">
        {filteredTasks.map(task => (
            <div className='taskContainer'>
                <Task done={task.done} task={task.task} key={task.id} check = {() => checkTask(task.id)} />
                <button className="deleteTask" onClick={() => deleteTask(task.id)}>𐄂</button>
            </div>
        ))}
        <form className='addTask' onSubmit={addTask}>
            <input type="text" value={task} name="task" onChange={updateTask}/>
            <button type="submit">+</button>
        </form>
    </div>
  );
}

export default TaskList;
