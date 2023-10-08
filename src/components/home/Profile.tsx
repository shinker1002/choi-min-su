import React from "react";
import { profile } from "../../data/data";

const Profile: React.FC<profile> = ({
  name,
  myImage,
  profileImage,
  introduce,
}) => {
  return (
    <div className="w-full font-sans text-gray-700">
      <img
        className="w-32 h-32 rounded-full mt-28"
        src={myImage}
        alt="profileImage"
      />
      <div className="flex mt-8 md:flex-col">
        <h1 className="pr-4 mr-4 text-4xl font-bold border-r-2 border-gray-700 md:border-0">
          {name}
        </h1>
        <h2 className="text-3xl font-semibold md:mt-4">
          Web Frontend Developer
        </h2>
      </div>
      {/* <div className="mt-10"></div> */}
      {/* <img className="w-full mt-3 max-h-80" src={profileImage} alt="myImage" /> */}
      <div className="w-full p-4 mt-6 border rounded-sm">
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
