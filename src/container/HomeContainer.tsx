import React from "react";
import Profile from "../components/home/Profile";
import ReadMe from "../components/home/ReadMe";
import { profileData, readmeData } from "../data/data";
const HomeContainer: React.FC = () => {
  const { name, myImage, profileImage, introduce } = profileData;
  const { readMeImage } = readmeData;

  return (
    <div className="w-[900px] pr-[96px] pl-[96px] pb-[176px] sm:px-3 sm:pb-[96px]">
      <Profile
        name={name}
        myImage={myImage}
        profileImage={profileImage}
        introduce={introduce}
      />
      <ReadMe readMeImage={readMeImage} />
    </div>
  );
};

export default HomeContainer;
