import React from "react";
import Profile from "../components/portfolio/Profile";
import Stacks from "../components/portfolio/Stacks";
import { stacksResumeData } from "../data/data";
const PortfolioContainer: React.FC = () => {
  const { front, database, etc } = stacksResumeData;

  return (
    <div className="w-[1100px] pr-[96px] pl-[96px] pb-[176px] sm:px-3 sm:pb-[96px]">
      <Profile />
      <Stacks front={front} database={database} etc={etc} />
    </div>
  );
};

export default PortfolioContainer;
