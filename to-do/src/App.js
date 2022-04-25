import './App.css';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>To-Do!</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
