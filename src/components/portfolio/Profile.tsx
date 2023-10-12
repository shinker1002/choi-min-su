import React from "react";
import { NavLink } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <div className="w-full pb-6 mb-10 font-sans text-gray-700 border-b">
      <img
        className="rounded-full h-36 w-36 mt-28"
        src={`${process.env.REACT_APP_URL}images/myImage1.jpg`}
        alt="profileImage"
      />
      <div className="flex mt-6">
        <h1 className="pr-4 mr-4 text-4xl font-bold border-r-2 border-gray-700">
          최민수
        </h1>
        <h2 className="text-3xl font-semibold">Portfolio</h2>
      </div>
      <div className="mt-8 text-3xl font-bold">
        안녕하세요, 프론트엔드 개발자 최민수입니다.
      </div>
      <div className="mt-6">
        <div>
          웹 서비스 프론트엔드 개발자로서 다양한 프로젝트와 협업 경험을 가지고
          있습니다.
        </div>
        <div>
          React, JavaScript, TypeScript, Redux, React-query, AWS, Git 등을
          사용하여 프로젝트를 설계하고 개발했습니다.
        </div>
        <div>
          프론트엔드 개발이 사용자와 가까운 특징을 가진다는 것을 항상 염두에
          두며, 확장성과 유지 보수성을 높이기 위해 노력하고 고민하고 있습니다.
        </div>
        <div className="mt-6" />
        <div className="font-bold">
          개발에서 커뮤니케이션이 가장 중요하다고 생각합니다.
        </div>
        <div>
          이를 위해 페어 프로그래밍과 코드 리뷰에 적극적으로 참여한 적이 있으며
          내가 가진 지식을 다른 사람과 공유하고 설명하는 것에 흥미를 가지고
          있습니다.
        </div>
        <div className="mt-6" />
        <div>
          현재 TypeScript로 작성된 많은 코드를 이해하고 사용하기 위해
          TypeScript에 관심을 가지고 공부하고 있습니다.
        </div>
      </div>

      <div className="h-[240px] mt-10">
        <div className="h-1/2">
          <h4 className="text-2xl text-yellow-600">Contact.·.·</h4>
          <div className="mt-1">
            <span className="font-bold">Email: </span>
            <span>shinker98@naver.com</span>
          </div>
          <div className="mt-1">
            <span className="font-bold">Phone: </span>
            <span>010-7533-2401</span>
          </div>
          <span></span>
        </div>
        <div className="h-1/2">
          <h4 className="text-2xl text-yellow-600">Channel.·.·</h4>
          <div className="mt-1">
            <span className="font-bold">Blog: </span>
            <a
              className="text-gray-400 underline"
              href={`https://fine-reply-6a8.notion.site/f2096d686014483b9980628525ec4dc1?pvs=4`}
              target="_blank"
              rel="noopener noreferrer"
            >
              bit.ly/46FcZNn
            </a>
          </div>
          <div className="mt-1">
            <span className="font-bold">Github: </span>
            <a
              className="text-gray-400 underline"
              href={`https://github.com/shinker1002`}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/shinker1002
            </a>
          </div>
          <div className="mt-1">
            <span className="font-bold">Resume: </span>
            <NavLink className="text-gray-400 underline" to={`/Resume`}>
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
