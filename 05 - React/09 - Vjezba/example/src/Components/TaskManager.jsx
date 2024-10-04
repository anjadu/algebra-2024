import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [inputValue, setInputValue] = useState(''); // State for the input field

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim()) { // Check for non-empty input
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(''); // Clear input after adding
    }
  };

  // Function to toggle the task's completion status
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2>Task Manager</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                style={styles.checkbox}
              />
              <span
                style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#888' : '#000',
                }}
              >
                {task.text}
              </span>
            </label>
            <button onClick={() => removeTask(index)} style={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '300px',
    textAlign: 'center',
    marginTop: '20px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    flexGrow: 1,
  },
  addButton: {
    padding: '10px',
    fontSize: '14px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  taskText: {
    marginLeft: '10px',
  },
  checkbox: {
    cursor: 'pointer',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskManager;