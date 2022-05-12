import React from "react";
import TopicStats from "./TopicStats";

const TopicStatsBox = ({ sections }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:overflow-y-auto gap-8 justify-center w-full md:justify-start p-2 pb-0">
      {sections.map((section, index) => {
        return (
          <TopicStats
            questions={section.questions}
            title={section.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TopicStatsBox;
