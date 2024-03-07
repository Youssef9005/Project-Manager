import { useRef } from "react";
import Input from "./Inputs";
import Modal from "./Modal";

export default function AddProject({ onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  function handleAddProject() {
    if(title.current.value !== "" && description.current.value !== "" && date.current.value == "") {
      const newProject = {
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
      };
  
      onAdd(newProject);
    } else {
      dialog.current.open();
    }

    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }


  function handleReset() {
    dialog.current.close();
  }

  return (
    <section className="flex flex-col gap-1 justify-center items-center w-full">
      <div className="header w-2/5 flex gap-2 items-center justify-end">
        <button
          className="  py-1 px-3 rounded-sm transition ease-out bg-red-700 text-white hover:bg-red-600"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className=" py-1 px-3 rounded-sm transition ease-out bg-gray-900 text-white  hover:bg-gray-700"
          onClick={handleAddProject}
        >
          Save
        </button>
      </div>
      <Input
        textArea={false}
        ref={title}
        type="text"
        className="p-2 mb-4 ease-out transition rounded-sm w-2/5 py-2 border-b-2 bg-gray-200 border-gray-200 focus:border-black"
        label={"title"}
      />
      <Input
        textArea={true}
        ref={description}
        type="text"
        className="p-2 mb-4 ease-out transition rounded-sm w-2/5 py-2 border-b-2 bg-gray-200 border-gray-200 focus:border-black"
        label={"Description"}
        cols="20"
        rows="6"
      />
      <Input
        textArea={false}
        ref={date}
        type="date"
        className="p-2 mb-4 ease-out transition rounded-sm w-2/5 py-2 border-b-2 bg-gray-200 border-gray-200 focus:border-black"
        label={"due date"}
      />


    <Modal ref={dialog} changeMsg={true} onClose={handleReset}/>
    </section>
  );
};