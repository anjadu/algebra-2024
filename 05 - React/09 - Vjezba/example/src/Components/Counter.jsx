import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.counterContainer}>
      <h2 style={styles.title}>Counter</h2>
      <p style={styles.count}>{count}</p>
      <div>
        <button style={styles.button} onClick={decrement}>-</button>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  counterContainer: {
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '150px',
    marginBottom: '20px', // Added margin at the bottom for spacing
  },
  title: {
    margin: 0,
    fontSize: '18px',
    color: '#333',
  },
  count: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Counter;