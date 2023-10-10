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
      <ul className="pb-6 pl-6 mb-6 list-disc border-b">
        <li className="mb-1">
          주로 React를 사용하여 앱을 만듭니다. 여러가지 React Hooks을 사용하거나
          재사용할 수 있는 로직을 분리하는 데에 익숙합니다. Redux, React-Query와
          같은 여러가지 라이브러리를 사용하는 데 능숙합니다.
        </li>
        <li className="mb-1">
          TypeScript를 활용하여 프로젝트를 구현할 수 있습니다.
        </li>
        <li className="mb-1">
          Tailwind CSS, Styled-Components, Sass를 사용하여 웹 페이지를 디자인할
          수 있습니다.
        </li>
        <li className="mb-1">
          JavaScript의 최신 문법을 공부하고 적용하기 위해 수시로 찾아보고
          학습하고 있습니다.
        </li>
        <li className="mb-1">
          웹 접근성과 웹 표준을 고려하여 상황에 맞는 시맨틱 요소를 사용할 수
          있습니다.
        </li>
      </ul>
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
      <ul className="pb-6 pl-6 mb-6 list-disc border-b">
        <li className="mb-1">
          쿼리문을 작성하여 원하는 결과값을 출력할 수 있습니다.
        </li>
      </ul>
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
      <ul className="pb-6 pl-6 mb-6 list-disc border-b">
        <li className="mb-1">
          S3, Route53, CloudFront를 사용하여 정적 웹 사이트를 호스팅할 수
          있습니다.
        </li>
        <li className="mb-1">
          Eslint, Prettier을 사용하여 코드의 퀄리티와 스타일을 유지할 수
          있습니다.
        </li>
        <li className="mb-1">
          Git을 사용한 워크플로우에 익숙하며 Github Kanban Board를 사용하여
          Issues를 관리할 수 있습니다.
        </li>
      </ul>
    </div>
  );
};

export default Stacks;
