import React from "react";
import dummy from "../../assets/images/1920x810.png";
import { NavLink } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-700">
      <h1 className="text-4xl font-bold mt-28">최민수</h1>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold">Web Frontend Developer</h2>
      </div>
      <img className="w-full mt-3 max-h-80" src={dummy} alt="myImage" />
      <div className="w-full p-4 mt-4 border rounded-sm">
        <p>안녕하세요. 웹 프론트엔드 개발자 최민수입니다.</p>
        <p className="mt-6">
          항상 더 좋은 개발자로서 성장하기 위해 노력하고 있습니다.
        </p>
      </div>
      {/* <div className="flex justify-center w-full mt-4 md:flex-col">
        <div className="flex justify-center w-1/2 md:w-full">
          <img className="rounded-2xl" src={dummy1} alt="resume" />
        </div>
        <div className="w-2"></div>
        <div className="flex justify-center w-1/2 md:w-full md:mt-3">
          <img className="rounded-2xl" src={dummy1} alt="portfolio" />
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
