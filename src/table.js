

import React, { useState } from 'react';

function Table() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      // editing an existing task
      const newTasks = [...tasks];
      newTasks[editIndex] = inputValue;
      setTasks(newTasks);
      setEditIndex(null);
    } else {
      // adding a new task
      setTasks([...tasks, inputValue]);
    }
    setInputValue('');
  };
 
  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(tasks[index]);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="table">
        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">{editIndex !== null ? 'Save' : 'Add'}</button>
      </form>
      <div className='task_container'>
        {tasks.map((task, index) => (
          <div key={index} className="individual_task">
            {editIndex === index ? (
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
            ) : (
              <span>{task}</span>
              
            )}
            <div><span>{task}</span></div>
            <div className='action_button'>
                <button onClick={() => handleEdit(index)}>
              {editIndex === index ? 'Edit' : 'Edit'}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
