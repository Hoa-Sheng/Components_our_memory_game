import React, { useState } from "react";

const Button = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); 
    setTimeout(() => {
      setIsClicked(false); 
    }, 200);
  };

  return (
    <div
      onClick={handleClick} 
      className={`flex rounded-[28px] mx-auto bg-linear-[180deg,#352D68_1%,#999999_99%] p-1 transition-all duration-200 ${
        isClicked ? "transform translate-y-[10px] box-shadow-none" : "[box-shadow:0px_10px_0px_0px_rgba(0,_0,_0,_0.5)]"
      }`}
    >
      <button
        className={`flex-1 font-['jaro'] px-[24px] py-[8px] bg-black rounded-[28px] text-white text-[64px] transition-all duration-200 ${
          isClicked ? "bg-opacity-90" : ""
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
