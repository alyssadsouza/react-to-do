import './App.css';

function Task({done, task}) {
    return (
    <div className="task">
        {done ? (
            <input type="checkbox" checked />
        ) : (
            <input type="checkbox" />
        )}
        <p>{task}</p>
    </div>
  );
}

export default Task;
