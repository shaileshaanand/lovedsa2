import React from "react";
import ProgressProvider from "./ProgressProvider";

const TopicStats = ({ questions, title }) => {
  const total = questions.length;
  const completed = questions.filter((question) => question.completed).length;
  const progress_value = completed / total;
  return (
    <div className="rounded-xl shadow-primary mb-5 w-80 flex-1 min-w-[280px] max-w-[min(370px,100vh)] max-h-[480px] md:max-h-[650px] overflow-hidden flex flex-col">
      <div className="sticky p-5">
        <p className="text-2xl text-center mb-3">{title}</p>
        <div className="">
          <div className="flex justify-between mb-1 items-center">
            <p>Progress</p>
            <span className="text-sm opacity-40">
              {completed}/{total}
            </span>{" "}
            <p>{(progress_value * 100).toFixed(2)}%</p>
          </div>
          <ProgressProvider valueStart={0} valueEnd={progress_value}>
            {(value) => (
              <div className="w-full h-3 bg-primary-100 rounded-full">
                <div
                  className="h-full bg-primary-300 rounded-full transition-all ease-out duration-[600ms]"
                  style={{ width: `${value * 100}%` }}
                ></div>
              </div>
            )}
          </ProgressProvider>
        </div>
        <p className="text-center mt-3 text-xl">Questions</p>
      </div>
      <div className="space-y-3 overflow-y-auto p-5 scroll">
        {questions.map((question) => {
          return (
            <a
              href={question.url}
              key={question.url}
              target="_blank"
              className="flex cursor-pointer hover:shadow-centered transition-shadow flex-shrink-0 flex-grow-0 items-center gap-8 rounded-lg border border-primary-300 px-5 py-3"
            >
              {question.completed ? (
                <svg
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-[38px] min-h-[38px] max-w-[38px] max-h-[38px]"
                >
                  <circle cx="19" cy="19" r="19" fill="#14213D" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.0605 11.9395C29.3417 12.2208 29.4997 12.6023 29.4997 13C29.4997 13.3978 29.3417 13.7793 29.0605 14.0605L17.0605 26.0605C16.7792 26.3418 16.3977 26.4997 16 26.4997C15.6023 26.4997 15.2208 26.3418 14.9395 26.0605L8.9395 20.0605C8.66626 19.7776 8.51507 19.3987 8.51849 19.0054C8.52191 18.6122 8.67966 18.2359 8.95777 17.9578C9.23588 17.6797 9.6121 17.522 10.0054 17.5185C10.3987 17.5151 10.7776 17.6663 11.0605 17.9395L16 22.879L26.9395 11.9395C27.2208 11.6583 27.6023 11.5004 28 11.5004C28.3977 11.5004 28.7792 11.6583 29.0605 11.9395Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <div className="min-w-[38px] min-h-[38px] bg-primary-100 rounded-full"></div>
              )}
              <p className="grow">{question.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TopicStats;
