import { forwardRef, useRef } from "react";

const Inputs = forwardRef(function ({ textArea, label, ...props }, ref) {
  return (
    <>
      <label className="uppercase text-gray-600 w-2/5">{label}</label>
      {textArea ? (
        <textArea ref={ref} {...props} required/>
      ) : (
        <input {...props} ref={ref} required/>
      )}
    </>
  );
});

export default Inputs;