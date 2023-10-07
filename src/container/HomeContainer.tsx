import React from "react";
import Profile from "../components/home/Profile";
import ReadMe from "../components/home/ReadMe";

const HomeContainer: React.FC = () => {
  return (
    <div className="w-[900px] pr-[96px] pl-[96px] pb-[176px] sm:px-3 sm:pb-[96px]">
      <Profile />
      <ReadMe />
    </div>
  );
};

export default HomeContainer;
