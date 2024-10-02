import { useState } from 'react';

export default function Hooks() {
  // Declared a new variable called "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(27);
  const [fruit, setFruit] = useState('apple');

  /* Calling the useState declares a "state variable". We can pass to the useState an argument -> the initial value of the state. */

  return (
    <div>
      <h1>Hooks Example</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <hr />

      <p>The user John is {age} years old.</p>
      <button onClick={() => setAge(30)}>Increase John's Age</button>
      <hr />

      <p>John's favourite fruit is {fruit}.</p>
      <button onClick={() => setFruit('mango')}>Set to mango</button>
    </div>
  );
}
