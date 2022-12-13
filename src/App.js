import './App.css';
import { useSelector } from 'react-redux';
import TaskForm from './app/components/TaskForm';
import TaskList from './app/components/TaskList';

function App() {
  const taskState = useSelector(state => state.tasks);
  console.log(taskState);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
