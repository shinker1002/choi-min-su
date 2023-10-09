import React from "react";
import { stacksResume } from "../../data/data";
const Stacks: React.FC<stacksResume> = ({ front, database, etc }) => {
  return (
    <div className="w-full mb-10 font-sans text-gray-700">
      <h2 className="pb-6 mb-6 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-600">
        Stacks
      </h2>
      <div className="flex w-full pb-6 mb-6 border-b md:flex-col">
        <h3 className="w-1/3 text-xl font-semibold text-blue-600 md:mb-4">
          Front-end
        </h3>
        <ul className="flex flex-wrap w-2/3 list-disc md:pl-6 md:w-full">
          {front.map((el, idx) => {
            return <li className="w-1/2 h-10">{el}</li>;
          })}
        </ul>
      </div>
      <div className="flex w-full pb-6 mb-6 border-b md:flex-col">
        <h3 className="w-1/3 text-xl font-semibold text-blue-600 md:mb-4">
          Database
        </h3>
        <ul className="flex flex-wrap flex-auto w-2/3 list-disc md:pl-6 md:w-full">
          {database.map((el, idx) => {
            return <li className="w-1/2 h-10">{el}</li>;
          })}
        </ul>
      </div>
      <div className="flex w-full pb-6 mb-6 border-b md:flex-col">
        <h3 className="w-1/3 text-xl font-semibold text-blue-600 md:mb-4">
          Etc
        </h3>
        <ul className="flex flex-wrap flex-auto w-2/3 list-disc md:pl-6 md:w-full">
          {etc.map((el, idx) => {
            return <li className="w-1/2 h-10">{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stacks;
