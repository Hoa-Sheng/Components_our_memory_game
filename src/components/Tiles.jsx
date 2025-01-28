import React from "react";
import Flower from "../assets/bunch-flowers-256 3.svg";

const Tiles = () => {
    return (
        <div className="w-[121px] h-[121px] relative ">
            <div className="w-[121px] h-[121px] bg-gradient-to-b from-[#b1c4e4] to-[#9869ac] rounded-[28px] shadow-[0px_10px_10px_10px_rgba(0,0,0,0.50)] border-2 border-white"></div>
            <img src={Flower} alt="Flower" className="left-[16px] top-[16px] absolute"/>
        </div>
    );
};

export default Tiles;
