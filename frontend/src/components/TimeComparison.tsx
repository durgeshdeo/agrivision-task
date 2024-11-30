import React from "react";
import { GoStopwatch } from "react-icons/go";

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
  timeTakenPerQuestion: string;
  topTimeTakenPerQuestion: string;
}

const TimeComparison = ({
  users,
  subheading,
  headingPart,
}: {
  users: User[];
  subheading: string;
  headingPart: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl ">
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-900">
            <GoStopwatch />
          </span>
          <h2 className="text-md font-bold text-gray-900">
            {headingPart
              ? `Total time taken comparison (${headingPart})`
              : "Total time taken comparison"}
          </h2>
        </div>
        <h3 className="text-sm font-normal text-gray-500 mb-4">{subheading}</h3>
      </div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Your Time</span>
          <span className="text-sm text-gray-500">
            {" "}
            {headingPart ? `00:36 sec` : `60:00 min`}
          </span>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-[67%]  -translate-x-1/2 -translate-y-[160%] bg-purple-900 text-white text-xs font-medium py-1 px-2 rounded-md">
            {!headingPart
              ? `${Math.floor(
                  Number(users[0]?.timeTaken.split(":")[0])
                )} min ${Number(users[0]?.timeTaken.split(":")[1])} sec`
              : `${Math.floor(
                  Number(users[0]?.timeTakenPerQuestion.split(":")[0])
                )} min ${Number(
                  users[0]?.timeTakenPerQuestion.split(":")[1]
                )} sec`}
            <div className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-900 left-1/2 transform -translate-x-1/2 top-full"></div>
          </div>
          <div
            className="h-2 bg-purple-700 rounded-full absolute top-0 left-0"
            style={{ width: "67%" }}
          ></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Toppers Time
          </span>
          <span className="text-sm text-gray-500">
            {headingPart ? `00:36 sec` : `60:00 min`}
          </span>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-[55%] -translate-x-[90%] -translate-y-[160%] bg-purple-900 text-white text-xs font-medium py-1 px-2 rounded-md">
            {!headingPart
              ? `${Math.floor(
                  Number(users[0]?.topTime.split(":")[0])
                )} min ${Number(users[0]?.topTime.split(":")[1])} sec`
              : `${Math.floor(
                  Number(users[0]?.topTimeTakenPerQuestion.split(":")[0])
                )} min ${Number(
                  users[0]?.topTimeTakenPerQuestion.split(":")[1]
                )} sec`}
            <div className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-900 left-1/2 transform -translate-x-1/2 top-full"></div>
          </div>
          <div
            className="h-2 bg-purple-700 rounded-full absolute top-0 left-0"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TimeComparison;
