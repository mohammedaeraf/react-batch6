import { useState } from "react";

function Counter() {
  // use State
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <h2 className="mt-4">Count: {count}</h2>

      <div className="mt-5">
        <button
          className="btn btn-success me-3"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-danger me-3"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
export default Counter;
