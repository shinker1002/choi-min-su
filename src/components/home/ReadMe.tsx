import React from "react";
import dummy1 from "../../assets/images/1920x1080.png";
import { useNavigate } from "react-router-dom";
import { readMe } from "../../data/data";

const ReadMe: React.FC<readMe> = ({ readMeImage }) => {
  const navigate = useNavigate();

  function goResume() {
    navigate("/resume");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function goPortfolio() {
    navigate("/portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="w-full font-sans text-gray-700">
      <div className="pt-8 mt-10 mb-8 text-2xl font-bold border-t">README</div>
      <div className="flex justify-center w-full mt-8 md:flex-col">
        <div
          onClick={goResume}
          className="flex items-center justify-center w-1/2 md:w-full"
        >
          <img
            className="cursor-pointer rounded-2xl"
            src={readMeImage[0]}
            alt="resume"
          />
          <p className="absolute text-5xl font-bold text-purple-700 cursor-pointer">
            Resume
          </p>
        </div>
        <div className="w-2"></div>
        <div
          onClick={goPortfolio}
          className="flex items-center justify-center w-1/2 md:w-full md:mt-3"
        >
          <img
            className="cursor-pointer rounded-2xl"
            src={readMeImage[1]}
            alt="portfolio"
          />
          <p className="absolute text-5xl font-bold text-yellow-600 cursor-pointer">
            Portfolio
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="flex flex-col justify-center w-1/2 align-middle">
          <p className="m-auto">이력서를 보려면</p>
          <p className="m-auto">
            <span className="font-bold text-purple-700">Resume</span>를
            클릭해주세요.
          </p>
        </div>
        <div className="w-2"></div>
        <div className="flex flex-col justify-center w-1/2 align-middle">
          <p className="m-auto">포트폴리오를 보려면</p>
          <p className="m-auto">
            <span className="font-bold text-yellow-600">Portfolio</span>를
            클릭해주세요.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full pt-8 mt-12 border-t">
        <div>
          <p className="font-bold text-purple-700">이력서는</p>
          <p className="mt-2">
            프론트엔드 개발과 관련하여{" "}
            <span className="font-bold">핵심적인 내용만 간결하게 </span>
            작성되어있습니다.
          </p>
        </div>
        <div className="mt-8">
          <p className="font-bold text-yellow-600">포트폴리오는</p>
          <p className="mt-2">
            다양한 활동과 프로젝트들이{" "}
            <span className="font-bold">자세하게 </span>작성되어있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
