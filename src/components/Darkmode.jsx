import React, { useState } from "react";
import { FiCloud } from "react-icons/fi";
function Darkmode() {
  const [dark, setDark] = useState(false);
  const darkmode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <div
        className="w-10 h-10 rounded-full absolute top-4 left-4 bg-black dark:bg-white flex items-center justify-center"
        onClick={() => {
          darkmode();
        }}
      >
        <FiCloud className="text-white dark:text-black" />
      </div>
    </div>
  );
}

export default Darkmode;
