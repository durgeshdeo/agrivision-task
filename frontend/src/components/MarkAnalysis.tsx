import React from "react";

interface User {
  userName: string;
  totalScore: number;
  rank: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
  strongAreas: number;
  weakAreas: number;
  timeTaken: string;
  topTime: string;
}

const MarkAnalysis = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full xl:mt-6 bg-white rounded-lg p-4 h-[14.5rem] flex flex-col gap-16">
      <div className="flex items-center">
        <span className="text-xl mr-2">🏆</span>
        <h2 className="text-lg font-semibold text-gray-800">Marks vs Rank</h2>
      </div>

      <div className="relative">
        <div className="absolute top-0 md:left-[50%] lg:left-[67%]  translate-x-[15rem] -translate-y-[130%] bg-purple-900 text-white text-xs font-medium py-1 px-2 rounded-md">
          {users[0]?.totalScore}/100
          <div className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-900 left-1/2 transform -translate-x-1/2 top-full"></div>
        </div>
        <div
          className="h-2 bg-gray-300 rounded-full absolute top-0 left-0"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="relative">
        <div className="absolute top-0  translate-x-[0rem] -translate-y-[130%] bg-purple-900 text-white text-xs font-medium py-1 px-2 rounded-md">
          {users[0]?.rank}
          <div className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-900 left-1/2 transform -translate-x-1/2 top-full"></div>
        </div>
        <div
          className="h-2 bg-gray-300 rounded-full absolute top-0 left-0"
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default MarkAnalysis;
