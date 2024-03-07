import { useRef, useState } from "react";
import Modal from "./Modal";

export default function EditProject({ ele, projects, onCancel }) {
  const taskValue = useRef();
  const [addTasks, setAddTasks] = useState([]);
  const dialog = useRef();
  const [changeMsg, setChangeMsg] = useState(false);

  function handleAddTask() {
    if (taskValue.current.value !== "") {
      if (addTasks.includes(taskValue.current.value) == false) {
        setAddTasks((prevTask) => {
          return [...prevTask, taskValue.current.value];
        });
      } else {
        setChangeMsg((prevState) => (prevState = false));
        dialog.current.open();
      }
    } else {
      setChangeMsg((prevState) => (prevState = true));
      dialog.current.open();
    }
  }

  function handleReset() {
    dialog.current.close();
  }

  function handleRemoveProject() {
    onCancel();
    projects.projects.splice(ele, 1);
  }

  return (
    <section className="w-full px-5 relative h-screen flex flex-col justify-center ">
      <div
        className="border-2 absolute top-5 right-5 p-2 rounded-full cursor-pointer hover:bg-red-700 hover:text-white hover:border-red-700 transition ease-out"
        onClick={onCancel}
      >
        X
      </div>

      <div className="header pb-7 flex flex-col gap-2 border-b-2">
        <h1 className="text-3xl font-semibold w-full flex justify-between items-center">
          {projects.projects[ele].title}
          <button className="text-lg" onClick={handleRemoveProject}>
            Delete
          </button>
        </h1>
        <span className="date text-gray-400">
          {projects.projects[ele].date}
        </span>
        <p className="description w-1/2">
          {projects.projects[ele].description}.
        </p>
      </div>

      <div className="tasks flex flex-col gap-5">
        <h1 className="text-3xl font-semibold my-1">Tasks</h1>
        <label>
          <input
            ref={taskValue}
            type="text"
            className="mb-4 mr-2 ease-out transition rounded-sm w-2/5 p-2 border-b-2 bg-gray-200 border-gray-200 focus:border-black"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </label>
      </div>

      {addTasks.map((task, index) => {
        return (
          <div
            key={index}
            className="task mb-4 ease-out transition rounded-sm w-full py-3 px-2 border-b-2 flex justify-between items-center bg-gray-200 border-gray-200 hover:border-black"
          >
            <h1 className="text-3xl font-semibold capitalize">{task}</h1>
          </div>
        );
      })}

      <Modal ref={dialog} onClose={handleReset} changeMsg={changeMsg}/>
    </section>
  );
};