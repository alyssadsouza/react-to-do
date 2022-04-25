import './App.css';

function Task({done, task, check}) {
    return (
    <div className="task">
        {done ? (
            <input type="checkbox" checked onChange={check}/>
        ) : (
            <input type="checkbox" onChange={check}/>
        )}
        <p>{task}</p>
    </div>
  );
}

export default Task;
