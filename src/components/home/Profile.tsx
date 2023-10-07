import React from "react";
import { profile } from "../../data/data";

const Profile: React.FC<profile> = ({ name, profileImage, introduce }) => {
  return (
    <div className="w-full font-sans text-gray-700">
      <h1 className="text-4xl font-bold mt-28">{name}</h1>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold">Web Frontend Developer</h2>
      </div>
      <img className="w-full mt-3 max-h-80" src={profileImage} alt="myImage" />
      <div className="w-full p-4 mt-4 border rounded-sm">
        {introduce.slice().map((data, idx: number) => {
          if (idx === 0) {
            return <p>{introduce[idx]}</p>;
          } else {
            return <p className="mt-6">{introduce[idx]}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default Profile;
