import React from "react";

function Button({ className = " ", type, value, ...props }) {
  return (
    <button
      className={` p-3 font-semibold my-2 text-white px-10 rounded-md ${className}`}
      type={type}
      {...props}
    ></button>
  );
}

export default Button;
