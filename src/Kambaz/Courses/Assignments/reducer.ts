import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; 
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments,
  };

  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, { payload: assignment }) => {
        const newAssignment = {
          _id: uuidv4(),
          ...assignment,
        };
        state.assignments = [...state.assignments, newAssignment];
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
      },
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a) =>
          a._id === assignment._id ? assignment : a
        );
      },
    },
  });
  
  export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
  } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;