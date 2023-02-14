import React, { useState, useReducer } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "DELETE":
      return {
        count: state.count - 1,
        students: state.students.filter((s) => s.id !== action.payload.id),
      };
    case "ISHERE":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const App = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <h2>총 학생 수: {studentsInfo.count} </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((s) => (
        <Student
          key={s.id}
          name={s.name}
          dispatch={dispatch}
          id={s.id}
          isHere={s.isHere}
        ></Student>
      ))}
    </div>
  );
};

export default App;
