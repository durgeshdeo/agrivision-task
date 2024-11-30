"use client";
import React, { useState } from "react";

const PageNavigation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Solution", "Strength & Weakness"];

  return (
    <div className="w-[95%] mx-auto bg-white rounded-full h-12 flex items-center gap-4 pl-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-all 
            ${
              activeTab === tab
                ? "bg-purple-800 text-white"
                : "bg-purple-100 text-gray-700 hover:bg-purple-200"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PageNavigation;
