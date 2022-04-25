import { useState } from 'react';
import './App.css';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';

function App() {

  const [filter, setFilter] = useState("all");

  return (
    <TaskProvider>
      <div className="App">
        <h1>To-Do!</h1>
        <div className="filterContainer">
          <select className="filterMethod" defaultValue={"all"} onChange={() => {setFilter(document.querySelector(".filterMethod").value)}}>
            <option value="all">All Tasks</option>
            <option value="incomplete">Incomplete Tasks</option>
            <option value="completed">Completed Tasks</option>
          </select>
        </div>
        <TaskList filter={filter}/>
      </div>
    </TaskProvider>
  );
}

export default App;
