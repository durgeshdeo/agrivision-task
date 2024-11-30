"use client";
import React from "react";
import Score from "./Score";
import TimeComparison from "./TimeComparison";
import LeaderboardProfile from "./Leaderboard";
import Nameboard from "./Nameboard";
import MarkAnalysis from "./MarkAnalysis";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageComponents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://agrivision-task-bakcend-be4ws0gsk-durgeshs-projects-4fe5781a.vercel.app"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-[95%] mx-auto flex xl:flex-row flex-col gap-6  rounded-md mb-8">
      <ToastContainer />
      <div className="w-full xl:w-[30%] flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:max-h-[35rem] gap-6 xl:hidden">
          <LeaderboardProfile users={users} />
          <Nameboard users={users} />
        </div>
        <Score users={users} />
        <TimeComparison users={users} subheading={""} headingPart={""} />
        <TimeComparison
          headingPart={"per question"}
          users={users}
          subheading={"Advised maximun time (per question) is 36sec"}
        />
      </div>
      <div className="w-full xl:w-[70%] flex flex-col">
        <div className="xl:flex flex-col xl:flex-row justify-between xl:max-h-[35rem] gap-6 hidden">
          <LeaderboardProfile users={users} />
          <Nameboard users={users} />
        </div>
        <MarkAnalysis users={users} />
      </div>
    </div>
  );
};

export default PageComponents;
