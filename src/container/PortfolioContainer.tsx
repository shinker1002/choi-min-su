import React from "react";
import Profile from "../components/portfolio/Profile";
import Stacks from "../components/portfolio/Stacks";
import Experiences from "../components/resume/Experiences";
import Projects from "../components/portfolio/Projects";
import { stacksPortfolioData, experiencesResumeData } from "../data/data";
const PortfolioContainer: React.FC = () => {
  const { front, frontDetail, database, databaseDetail, etc, etcDetail } =
    stacksPortfolioData;
  const { experiences } = experiencesResumeData;

  return (
    <div className="w-[1100px] pr-[96px] pl-[96px] pb-[176px] sm:px-3 sm:pb-[96px]">
      <Profile />
      <Stacks
        front={front}
        frontDetail={frontDetail}
        database={database}
        databaseDetail={databaseDetail}
        etc={etc}
        etcDetail={etcDetail}
      />
      <Projects />
      <Experiences experiences={experiences} />
    </div>
  );
};

export default PortfolioContainer;
