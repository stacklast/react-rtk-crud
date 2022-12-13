import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const taskState = useSelector(state => state.tasks);
  console.log(taskState);
  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
