import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Description of task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description of task 2",
    completed: false,
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description of task 3",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
