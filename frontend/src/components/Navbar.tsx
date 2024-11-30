import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-purple-800 h-16 items-center gap-2 pl-16">
      <div>
        <IoMdArrowBack className="w-5 h-5" color="white" />
      </div>
      <span className="text-white text-lg">Test Result</span>
    </div>
  );
};

export default Navbar;
