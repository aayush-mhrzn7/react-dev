import React, { useId } from "react";

function Input(
  { type, placeholder = "", className = ``, label, labelClass, ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`border-2 rounded-md p-2 ${className}`}
        {...props}
        id={id}
      ></input>
    </div>
  );
}

export default React.forwardRef(Input);
