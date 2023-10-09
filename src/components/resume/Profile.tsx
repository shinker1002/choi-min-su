import React from "react";
import { NavLink } from "react-router-dom";
import { profileResume } from "../../data/data";
const Profile: React.FC<profileResume> = ({
  name,
  profileImage,
  email,
  phone,
  blog,
  github,
  portfolio,
}) => {
  return (
    <div className="w-full pb-6 mb-10 font-sans text-gray-700 border-b">
      <div className="flex mt-28">
        <h1 className="pr-4 mr-4 text-4xl font-bold border-r-2 border-gray-700">
          {name}
        </h1>
        <h2 className="text-3xl font-semibold">Resume</h2>
      </div>
      <div className="flex mt-6 sm:flex-col">
        <img
          className="max-w-[250px] w-1/3 h-1/3  rounded-full sm:w-full sm:max-w-none"
          src={`${process.env.REACT_APP_URL}images/myImage1.jpg`}
          alt={profileImage}
        />
        <div className="w-[40px]"></div>
        <div className="flex-auto  h-[240px] sm:mt-12">
          <div className="h-1/2">
            <h4 className="text-xl text-yellow-600">Contact.·.·</h4>
            <div className="mt-1">
              <span className="font-bold">Email: </span>
              <span>{email}</span>
            </div>
            <div className="mt-1">
              <span className="font-bold">Phone: </span>
              <span>{phone}</span>
            </div>
            <span></span>
          </div>
          <div className="h-1/2">
            <h4 className="text-xl text-yellow-600">Channel.·.·</h4>
            <div className="mt-1">
              <span className="font-bold">Blog: </span>
              <a className="text-gray-400 underline" href={blog}>
                bit.ly/46FcZNn
              </a>
            </div>
            <div className="mt-1">
              <span className="font-bold">Github: </span>
              <a className="text-gray-400 underline" href={github}>
                {github}
              </a>
            </div>
            <div className="mt-1">
              <span className="font-bold">Portfolio: </span>
              <NavLink className="text-gray-400 underline" to={portfolio}>
                {portfolio}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
