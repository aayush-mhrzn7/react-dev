import React from "react";

function Button({ className = " ", type, value, ...props }) {
  return (
    <button
      className={` p-3 bg-black text-white px-10 rounded-md ${className}`}
      type={type}
      {...props}
    ></button>
  );
}

export default Button;
