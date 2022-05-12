import React, { useMemo } from "react";
import OverallStatCard from "../components/OverallStatCard";
import TopicStatsBox from "../components/TopicStatsBox";
import { useStats } from "../hooks/useStats";
import full_sections from "../../scraper/all.json";
import subset_sections from "../../scraper/subset.json";
import { Link, navigate } from "raviger";
import Button from "../components/Button";

const Stats = ({ username, essential }) => {
  const { data, isLoading, error, refetch, isFetching } = useStats(username, {
    enabled: true,
    refetchInterval: 10000,
  });

  const completedQuestionIds = useMemo(
    () =>
      data?.info
        ? [
            ...data.solvedStats.school.questions,
            ...data.solvedStats.basic.questions,
            ...data.solvedStats.easy.questions,
            ...data.solvedStats.medium.questions,
            ...data.solvedStats.hard.questions,
          ].map((q) => {
            try {
              return /https?:\/\/practice.geeksforgeeks.org\/problems\/([^\/]+)\/?(?:\/\d+)?\/?/
                .exec(q.link)[1]
                .toLowerCase();
            } catch (e) {
              console.log("Solved parse Error: ", q.link, e);
              return null;
            }
          })
        : [],
    [data]
  );

  const full_total = useMemo(
    () =>
      full_sections
        .map((section) => {
          return section.questions.length;
        })
        .reduce((a, b) => a + b, 0),
    [full_sections]
  );

  const subset_total = useMemo(
    () =>
      subset_sections
        .map((section) => {
          return section.questions.length;
        })
        .reduce((a, b) => a + b, 0),
    [subset_sections]
  );
  const mark_completed = (sections, completedQuestionIds) =>
    sections.map((section) => {
      return {
        ...section,
        questions: section.questions
          .map((question) => {
            const questionId =
              /https?:\/\/practice.geeksforgeeks.org\/problems\/([^\/]+)\/?(?:\/\d+)?\/?/
                .exec(question.url)[1]
                .toLowerCase();

            return {
              ...question,
              completed:
                completedQuestionIds.filter(
                  (id) => id?.includes(questionId) || questionId?.includes(id)
                ).length > 0,
            };
          })
          .sort((question1, question2) => {
            return (
              question1.difficulty - question2.difficulty ||
              question2.accuracy - question1.accuracy
            );
          }),
      };
    });

  const full_sections_data = useMemo(
    () => mark_completed(full_sections, completedQuestionIds),
    [completedQuestionIds, full_sections]
  );
  const subset_sections_data = useMemo(
    () => mark_completed(subset_sections, completedQuestionIds),
    [completedQuestionIds, subset_sections]
  );

  const count_total = (sections) =>
    sections
      .map((section) => {
        return section.questions.filter((q) => q.completed).length;
      })
      .reduce((a, b) => a + b, 0);

  const full_completed = useMemo(
    () => count_total(full_sections_data),
    [full_sections_data]
  );

  const subset_completed = useMemo(
    () => count_total(subset_sections_data),
    [subset_sections_data]
  );
  const current_sections = essential
    ? subset_sections_data
    : full_sections_data;

  return (
    <div className="px-5 pt-2 pb-0">
      <p className="mb-1 text-lg md:text-2xl text-right flex flex-shrink-0 flex-grow-0 justify-end gap-3 items-center">
        Hi {data?.info?.name ? data.info.name : username}
        <Button onClick={refetch} className="w-28">
          {isFetching || isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-spinreverse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            "Refresh"
          )}
        </Button>
      </p>
      <div className="flex flex-col gap-2 md:gap-8 items-stretch md:flex-row mb-5 mt-5 md:mt-0 md:mb-10">
        <Link href={`/${username}/full`} className="block">
          <OverallStatCard
            title="Full GFG DSA Set"
            total={full_total}
            completed={full_completed}
            faded={essential}
            isLoading={isLoading}
          />
        </Link>
        <Link href={`/${username}/essential`} className="block">
          <OverallStatCard
            title="Essential GFG DSA Set"
            total={subset_total}
            completed={subset_completed}
            faded={!essential}
            isLoading={isLoading}
          />
        </Link>
      </div>
      <TopicStatsBox sections={current_sections} isLoading={isLoading} />
    </div>
  );
};

export default Stats;
