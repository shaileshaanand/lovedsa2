import React from "react";
import TopicStats from "./TopicStats";

const TopicStatsBox = ({ sections, isLoading }) => {
  const questions = [
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: true,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
    {
      title: "Merge two sorted linked lists",
      url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
      completed: false,
    },
  ];
  return (
    <div className="flex flex-wrap md:flex-nowrap md:overflow-y-auto gap-8 justify-center w-full md:justify-start p-2 pb-0">
      {/* <TopicStats questions={questions} title={"LinkedList"} /> */}
      {sections.map((section, index) => {
        return (
          <TopicStats
            questions={section.questions}
            title={section.title}
            key={index}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
};

export default TopicStatsBox;
