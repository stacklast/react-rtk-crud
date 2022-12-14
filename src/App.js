import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskForm from "./app/components/TaskForm";
import TaskList from "./app/components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
