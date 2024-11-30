import Loading from "@/app/loading";
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

const Nameboard = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full max-h-[35rem] xl:w-[67%] bg-white rounded-lg overflow-y-scroll container">
      <div className="flex justify-between px-6 py-3 bg-transparent border-b border-gray-200 font-semibold text-black">
        <div className="w-2/3">Name</div>
        <div className="w-[12rem]">Marks (out of 100)</div>
        <div className="w-[8rem]">Rank</div>
      </div>

      <div className="">
        {!users && (
          <div className="w-[10rem] h-[10rem]">
            <Loading />
          </div>
        )}
        {users
          .sort((a, b) => a.rank - b.rank)
          .map((student, index) => (
            <div
              key={index}
              className="flex items-center px-6 py-4 hover:bg-gray-50 border border-solid border-gray-200 rounded-lg m-4"
            >
              <div className="flex items-center w-2/3">
                <div className={`w-8 h-8 rounded-full bg-red-400`}></div>
                <span className="ml-3 text-gray-800 font-medium">
                  {student?.userName}
                </span>
              </div>

              <div className="w-[12rem] px-4 text-gray-700">
                {student?.totalScore}
              </div>

              <div className="w-[8rem]">
                <span
                  className={`text-lg ${
                    student?.rank === 1
                      ? "text-yellow-500"
                      : student?.rank === 2
                      ? "text-gray-400"
                      : student?.rank === 3
                      ? "text-orange-500"
                      : "text-gray-600"
                  }`}
                >
                  {student?.rank}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Nameboard;
