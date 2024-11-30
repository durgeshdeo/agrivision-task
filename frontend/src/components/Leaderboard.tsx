import React from "react";
import { GoTrophy } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { IoPlaySkipForward } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import ProfilePic from "../assets/profile.jpeg";
import Image from "next/image";

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

const LeaderboardProfile = ({ users }: { users: User[] }) => {
  return (
    <div className="bg-white p-6 rounded-xl w-full xl:w-[30%] flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-semibold text-gray-900">
          <MdOutlineLeaderboard />
        </span>
        <h2 className="text-lg font-bold text-gray-900">Leaderboard</h2>
      </div>

      <div className="flex flex-col items-center mb-6">
        <Image
          src={ProfilePic}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-900">
          {users[0]?.userName}
        </h3>
        <p className="text-sm text-gray-500">GATE XE</p>
      </div>

      <hr className="border-gray-300 mb-6" />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full text-xl">
            <GoTrophy />
          </span>
          <p className="text-sm font-medium text-gray-900">{`Rank: ${users[0]?.rank}`}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-full text-xl">
            <FaRegStar />
          </span>
          <p className="text-sm font-medium text-gray-900">{`Marks: ${users[0]?.totalScore}`}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-full text-xl">
            <TiTick className="w-6 h-6" />
          </span>
          <p className="text-sm font-medium text-gray-900">{`Correct: ${users[0]?.correctAnswers}`}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-700 rounded-full text-xl">
            <ImCross className="w-4 h-4" />
          </span>
          <p className="text-sm font-medium text-gray-900">{`Incorrect: ${users[0]?.wrongAnswers}`}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full text-xl">
            <IoPlaySkipForward className="w-4 h-4" />
          </span>
          <p className="text-sm font-medium text-gray-900">{`Skipped: ${users[0]?.skippedQuestions}`}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardProfile;
