// Styles for this component (local CSS file)
import "./StudentName.css";
// React hook used for component state
import { useState } from "react";

// StudentName: a small controlled-component example
// - Demonstrates using `useState` to keep form input in component state
// - Shows how the input's `onChange` handler updates state, and
//   how state is rendered elsewhere in the component
function StudentName() {
  // `name` holds the current value of the text input
  // `setName` updates that value when the user types
  let [name, setName] = useState("");
  // Example of another state variable (unused) that illustrates
  // how to declare multiple pieces of state:
  // let [price, setPrice] = useState(0);

  return (
    <div
      className="mx-auto bg-primary-subtle shadow rounded p-5"
      id="studentForm"
    >
      {/* Form title */}
      <h1 className="text-center text-danger mb-4">Student Form</h1>

      {/*
        The label and input make a simple controlled input:
        - `value` could be added to bind the input to `name` strictly
        - `onChange` receives the event and stores `e.target.value` in state
      */}
      <label htmlFor="nameTextBox form-label">Name: </label>
      <input
        type="text"
        name="nameTextBox"
        id="nameTextBox"
        placeholder="Enter your full name"
        onChange={(e) => setName(e.target.value)}
        className="mb-3 form-control"
      />

      {/* Display a greeting that updates as `name` changes */}
      <h4>
        Hello <span className="text-secondary">{name}</span>
      </h4>
    </div>
  );
}

export default StudentName;
