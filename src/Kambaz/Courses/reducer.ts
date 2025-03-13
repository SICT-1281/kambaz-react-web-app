// src/Kambaz/Courses/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { courses , enrollments} from "../Database"; 
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   courses: courses, 
// };
const initialState = {
  courses,
  enrollments,
  currentCourse: {
    _id: "1234",
    name: "New Course",
    number: "New Number",
    description: "New Description",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  },
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
      };
      state.courses = [...state.courses, newCourse] as any;
    },

    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
    },

    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },

    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },

    enrollInCourse: (state, { payload }) => {

      const alreadyEnrolled = state.enrollments.some(
        (enrollment: any) =>
          enrollment.user === payload.user && enrollment.course === payload.course
      );
      if (!alreadyEnrolled) {
        state.enrollments.push(payload);
      }
    },

    unenrollFromCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(
            enrollment.user === payload.user &&
            enrollment.course === payload.course
          )
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCurrentCourse, enrollInCourse, unenrollFromCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
