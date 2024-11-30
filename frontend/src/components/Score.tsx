"use client";
import React from "react";
import { HiOutlineChartPie } from "react-icons/hi";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

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

const Score = ({ users }: { users: User[] }) => {
  const strongAreas = users[0]?.strongAreas || 0;
  const weakAreas = users[0]?.weakAreas || 0;
  const skippedQuestions = users[0]?.skippedQuestions || 0;

  const chartData = {
    labels: ["Strong", "Weak", "Skipped"],
    datasets: [
      {
        data: [strongAreas, weakAreas, skippedQuestions],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="w-full bg-white flex gap-4 rounded-xl flex-col py-2">
      <div className="p-4 flex gap-2 items-center">
        <HiOutlineChartPie />
        <span className="font-semibold">Overall Score</span>
      </div>
      <div className="flex items-center justify-around ">
        <div className="w-[35%]">
          <Doughnut
            data={chartData}
            width={"30%"}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <div className="rounded-full w-3 h-3 bg-[#FF6384]"></div>
            <div>{strongAreas} -</div>
            <div>Strong</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded-full w-3 h-3 bg-[#36A2EB]"></div>
            <div>{weakAreas} -</div>
            <div>Weak</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded-full w-3 h-3 bg-[#FFCE56]"></div>
            <div>{skippedQuestions} -</div>
            <div>Skipped</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
