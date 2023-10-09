import React from "react";
import { experiencesResume } from "../../data/data";

const Experiences: React.FC<experiencesResume> = ({ experiences }) => {
  return (
    <div className="w-full mb-10 font-sans text-gray-700">
      <h2 className="pb-6 mb-6 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-600">
        Experiences
      </h2>
      {experiences.map((el, idx) => {
        return (
          <div className="flex w-full pb-6 mb-6 border-b md:flex-col">
            <div className="w-1/3 mr-2 text-xl font-semibold text-gray-500 md:w-full md:mb-1">
              {el.date}
            </div>
            <div className="w-2/3 md:w-full">
              <h3 className="mb-1 text-xl font-semibold text-blue-600">
                {el.title}
              </h3>
              <div className="mb-2 text-gray-500">{el.description}</div>
              <ul className="pl-8 list-disc">
                {el.detail.map((el, idx) => {
                  return <li>{el}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
