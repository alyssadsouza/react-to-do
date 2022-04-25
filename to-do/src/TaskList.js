import { useContext, useState } from 'react';
import './App.css';
import { TaskContext } from './TaskContext';
import Task from './Task';

function TaskList() {

    const [tasks, setTasks] = useContext(TaskContext);
    const [task, setTask] = useState("");

    const updateTask = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.length > 0) {
            setTasks(prevTasks => [...prevTasks, {"task": task, "done": false}]);
            setTask("");
        }
    }

    const deleteTask = (task) => {
        let index = tasks.findIndex((curTask) => {
            return curTask.task === task;
        })
        const newTasks = tasks.slice(0);
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
    <div className="taskList">
        {tasks.map(task => (
            <div className='taskContainer'>
                <Task done={task.done} task={task.task} />
                <button className="deleteTask" onClick={() => deleteTask(task.task)}>𐄂</button>
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
