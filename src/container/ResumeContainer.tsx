import React from "react";
import Profile from "../components/resume/Profile";
import Introduce from "../components/resume/Introduce";
import Stacks from "../components/resume/Stacks";
import Education from "../components/resume/Education";
import Experiences from "../components/resume/Experiences";
import Projects from "../components/resume/Projects";
import {
  profileResumeData,
  introduceResumeData,
  stacksResumeData,
  projectsResumeData,
  educationResumeData,
  experiencesResumeData,
} from "../data/data";

const ResumeContainer: React.FC = () => {
  const { name, profileImage, email, phone, blog, github, portfolio } =
    profileResumeData;
  const { introduceResume } = introduceResumeData;
  const { front, database, etc } = stacksResumeData;
  const { projects } = projectsResumeData;
  const { education } = educationResumeData;
  const { experiences } = experiencesResumeData;
  return (
    <div className="w-[900px] pr-[96px] pl-[96px] pb-[176px] sm:px-3 sm:pb-[96px]">
      <Profile
        name={name}
        profileImage={profileImage}
        email={email}
        phone={phone}
        blog={blog}
        github={github}
        portfolio={portfolio}
      />
      <Introduce introduceResume={introduceResume} />
      <Stacks front={front} database={database} etc={etc} />
      <Projects projects={projects} />
      <Education education={education} />
      <Experiences experiences={experiences} />
    </div>
  );
};

export default ResumeContainer;
