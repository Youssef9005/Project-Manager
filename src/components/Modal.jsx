import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({ onClose , changeMsg}, ref) {

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal (
    <dialog ref={dialog} className="result-modal p-5 rounded">
      <h2 className="w-full text-center text-2xl font-semibold text-slate-950 my-2">
        {!changeMsg
          ? "This task has been added !"
          : "The inputs field is empty !"}
      </h2>
      <p className="text-sm font-semibold">
        {!changeMsg
          ? "You can't enter the same task again."
          : "You must fill in the inputs field."}
      </p>
      <button
        onClick={onClose}
        className="bg-slate-900 text-white py-1 px-3 rounded-sm my-2"
      >
        Close
      </button>
    </dialog>,

    document.getElementById("show-modal"),
  );
});

export default Modal;
