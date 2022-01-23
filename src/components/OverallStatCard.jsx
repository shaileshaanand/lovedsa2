import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";

const OverallStatCard = ({ title, total, completed, faded }) => {
  const value = completed / total;
  return (
    <div
      className={`hover:shadow-primary border-2 border-primary-200 rounded-xl h-22 p-3 ${
        faded ? "opacity-40" : "shadow-primary"
      }`}
    >
      <div className="flex h-full gap-6 items-center">
        <div className=" w-20 flex items-center justify-center h-full">
          <ProgressProvider valueStart={0} valueEnd={value}>
            {(value) => (
              <CircularProgressbar
                value={value}
                maxValue={1}
                text={`${(value * 100).toFixed(2)}%`}
                styles={buildStyles({
                  textColor: "#14213D",
                  pathColor: "#14213D",
                  trailColor: "#D1DBF0",
                })}
              />
            )}
          </ProgressProvider>
        </div>
        <div>
          <p className="font font-semibold text-lg mb-1">{title}</p>
          <p>{`${completed} of ${total} Questions Solved`}</p>
        </div>
      </div>
    </div>
  );
};

export default OverallStatCard;
