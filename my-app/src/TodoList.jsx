

import { useState } from "react";

function Input() {
  const [task, setTask] = useState("");   // input value
  const [tasks, setTasks] = useState([]); // list of tasks

  const addTask = () => {
    if (task.trim() === "") return; // empty value avoid
    setTasks([...tasks, task]);     // add task to list
    setTask("");                    // clear input
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto p-4">
        {/* Input Section */}
        <label htmlFor="input" className="block mb-2 font-semibold">
          Enter Your Task:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border h-10 flex-1 px-2 bg-blue-100 rounded"
            placeholder="Type a task..."
          />
          <button
            onClick={addTask}
            className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Display Section */}
        <ul className="mt-4 list-disc pl-5">
          {tasks.map((t, index) => (
            <li key={index} className="text-lg text-gray-800">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Input;
