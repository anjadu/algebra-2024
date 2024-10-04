import './App.css';
import { ColorPicker, Counter, QuizApp, TaskManager } from './Components';



const App = () => {
  return (
    <div style={styles.appContainer}>
      <Counter />
      <hr style={styles.hr} /> {/* Divider between components */}
      <ColorPicker />
       <hr style={styles.hr} /> {/* Divider between components */}
      <TaskManager />
      <hr style={styles.hr} /> {/* Divider between components */}
      <QuizApp />
    </div>
  );
};

// Styling for the App component and the layout
const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  hr: {
    margin: '40px 0',
    border: '1px solid #ccc',
    width: '80%',
  },
};

export default App;