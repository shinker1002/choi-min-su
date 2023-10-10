import React from "react";
import { introduceResume } from "../../data/data";
const Introduce: React.FC<introduceResume> = ({ introduceResume }) => {
  return (
    <div className="w-full pb-6 mb-10 font-sans text-gray-700 border-b">
      <h2 className="pb-6 mb-6 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-600">
        Introduce
      </h2>
      {introduceResume.map((el: string, idx: number) => {
        if (el === "") {
          return <div className="mt-6" />;
        } else {
          return <span className="inline-block">{el}</span>;
        }
      })}
    </div>
  );
};

export default Introduce;
