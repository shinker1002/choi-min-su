import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="w-full mb-10 font-sans text-gray-700">
      <h2 className="pb-6 mb-10 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-600">
        Projects
      </h2>
      <div className="mb-36">
        <h3 className="mb-2 text-3xl font-bold">이력서, 포트폴리오 웹사이트</h3>
        <div className="w-1/3 mb-6 mr-2 font-bold text-gray-500 md:w-full md:mb-1">
          2023.09 ~ 2023.10
        </div>
        <div className="flex w-full pt-4 border-t border-gray-200 md:flex-col">
          <div className="w-1/2 mr-8 border-gray-600 md:w-full md:mb-8">
            <img
              className="w-full"
              src={`${process.env.REACT_APP_URL}images/img2.png`}
              alt="123"
            />
          </div>
          <div className="w-1/2 border-gray-600 md:w-full">
            <div className="w-full pb-4 mb-4 border-b border-gray-400">
              <span>
                <span className="font-bold">
                  이력서와 포트폴리오 용도로 제작한 웹사이트
                </span>
                입니다.
              </span>
              <span>
                직접 웹사이트로 만들어 꾸준히 기능들을 추가해보자는 의미에서
                제작하게 되었습니다.
              </span>
              <div className="mt-4" />
              <span>
                최근 사용율이 높은{" "}
                <span className="font-bold text-blue-500">Tailwind CSS</span>를
                학습하고 프로젝트에 적용하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                JavaScript를 사용하며 느낀 컴파일 에러의 불편함을 해결하고자{" "}
                <span className="font-bold text-blue-500">TypeSciprt</span>를
                프로젝트에 적용하였고, 강력한 타입시스템을 활용하여 사전에
                에러를 예방하고 손쉬운 디버깅이 가능하도록 하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                데이터를 받아오는 Container 컴포넌트와, UI를 위한 컴포넌트를
                분리하여
                <span className="font-bold">
                  컴포넌트의 재사용성을 높히도록 설계
                </span>
                하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                AWS의 S3, Route53, Cloud Front를 사용하여 배포를 진행하였습니다.
              </span>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  주요기능
                </div>
                <div className="flex-auto">
                  <span className="flex-auto">이력서, 포트폴리오</span>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Github
                </div>
                <div className="flex-auto ">
                  <a
                    className="text-blue-500 underline"
                    href="https://github.com/shinker1002/choi-min-su"
                  >
                    https://github.com/shinker1002/choi-min-su
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  URL
                </div>
                <div className="flex-auto ">
                  <a
                    className="text-blue-500 underline"
                    href="https://github.com/shinker1002/choi-min-su"
                  >
                    https://github.com/shinker1002/choi-min-su
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Frontend
                </div>
                <div className="flex-auto ">
                  React, Tailwind CSS, TypeScript
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Backend
                </div>
                <div className="flex-auto ">-</div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Deployment
                </div>
                <div className="flex-auto ">AWS (S3, Route53, Cloud Front)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-36">
        <h3 className="mb-2 text-3xl font-bold">OMC</h3>
        <div className="w-1/3 mb-6 mr-2 font-bold text-gray-500 md:w-full md:mb-1">
          2023.01 ~ 2023.02
        </div>
        <div className="flex w-full pt-4 border-t border-gray-200 md:flex-col">
          <div className="w-1/2 mr-8 border-gray-600 md:w-full md:mb-8">
            <img
              className="w-full"
              src={`${process.env.REACT_APP_URL}images/OMC_Image_1.png`}
              alt="OMC"
            />
          </div>
          <div className="w-1/2 border-gray-600 md:w-full">
            <div className="w-full pb-4 mb-4 border-b border-gray-400">
              <span>
                Stop Covid-19 SW Challenge 해커톤에 참여할 때 나온 아이디어를
                구현한 웹사이트로{" "}
                <span className="font-bold">
                  언택트 여행인 차박의 활성화를 위해 만든 차박 예약 플랫폼
                </span>
                입니다.
              </span>
              <div className="mt-4" />
              <span>
                클라이언트의 데이터를 관리하는 데에는{" "}
                <span className="font-bold text-blue-500">Redux</span>가
                적합하지만 서버의 데이터를 관리하는 데에는 적합하지 않다고
                생각하여{" "}
                <span className="font-bold text-blue-500">React Query</span>를
                추가적으로 사용하였습니다.
              </span>
              <div className="mt-4" />
              <span className="font-bold">
                예약을 취소하거나 등록된 상품을 삭제할 때 데이터가 완전히
                삭제되는 것이 아니라 해당 기록이 남아있도록 Soft-delete를
                적용하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                서버의 데이터가 로딩되는 동안 Skeleton-Component를 보여주어
                <span className="font-bold">
                  {" "}
                  사용자에게 좋은 경험을 제공하려고 노력하였습니다.
                </span>
              </span>
              <div className="mt-4" />
              <span>
                모바일, 데스크탑 상관 없이 자연스러운 UI를 제공하기 위해
                반응형으로 구현 하였습니다.
              </span>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  주요기능
                </div>
                <div className="flex-auto">
                  <span className="flex-auto">
                    회원가입, 로그인, 로그아웃, 차박지 예약, 차박지 등록, 차박지
                    수정, 차박지 삭제, 결제
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Github
                </div>
                <div className="flex-auto ">
                  <a
                    className="text-blue-500 underline"
                    href="https://github.com/shinker1002/OMC"
                  >
                    https://github.com/shinker1002/OMC
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  URL
                </div>
                <div className="flex-auto ">-</div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Frontend
                </div>
                <div className="flex-auto ">
                  React, Redux, React-Query, Styled-Components, JavaScript
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Backend
                </div>
                <div className="flex-auto ">Java, Spring</div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Deployment
                </div>
                <div className="flex-auto ">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-36">
        <h3 className="mb-2 text-3xl font-bold">LUXMEAL</h3>
        <div className="w-1/3 mb-6 mr-2 font-bold text-gray-500 md:w-full md:mb-1">
          2022.11 ~ 2022.12
        </div>
        <div className="flex w-full pt-4 border-t border-gray-200 md:flex-col">
          <div className="w-1/2 mr-8 border-gray-600 md:w-full md:mb-8">
            <img
              className="w-full"
              src={`${process.env.REACT_APP_URL}images/luxmeal.xyz_products_1.png`}
              alt="OMC"
            />
          </div>
          <div className="w-1/2 border-gray-600 md:w-full">
            <div className="w-full pb-4 mb-4 border-b border-gray-400">
              <span>
                프론트엔드 부트캠프에 참여하고 있을 때 구현한 프로젝트로
                반려동물에게 어울리는 사료를 판매하기 위해 만든{" "}
                <span className="font-bold"> 사료 판매 쇼핑몰입니다.</span>
              </span>
              <div className="mt-4" />
              <span>
                부트캠프의 동기들이 편하게 체험하고 피드백 하도록 버튼 하나로
                로그인이 가능한{" "}
                <span className="font-bold"> 체험하기 기능을 구현</span>
                하였습니다.{" "}
              </span>
              <div className="mt-4" />
              <span>
                토스페이먼츠를 사용하여{" "}
                <span className="font-bold"> 결제 기능을 구현</span>하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                <span className="font-bold">
                  모바일, 데스크탑 상관 없이 자연스러운 UI를 제공하기 위해
                  반응형으로 구현{" "}
                </span>
                하였습니다.
              </span>
              <div className="mt-4" />
              <span>
                AWS의 S3, Route53, Cloud Front를 사용하여 배포를 진행하였습니다.
              </span>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  주요기능
                </div>
                <div className="flex-auto">
                  <span className="flex-auto">
                    회원가입, 로그인, 로그아웃, 간편 체험하기, 장바구니, 결제,
                    마이페이지
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Github
                </div>
                <div className="flex-auto ">
                  <a
                    className="text-blue-500 underline"
                    href="https://github.com/codestates-seb/seb40_main_019"
                  >
                    https://github.com/codestates-seb/seb40_main_019
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  URL
                </div>
                <div className="flex-auto ">
                  <a
                    className="text-blue-500 underline"
                    href="https://luxmeal.xyz/"
                  >
                    https://luxmeal.xyz
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Frontend
                </div>
                <div className="flex-auto ">
                  React, Redux, Sass, React-Cookie, JavaScript
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Backend
                </div>
                <div className="flex-auto ">Java, Spring</div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full mb-3">
                <div className="flex-wrap flex-shrink-0 h-10 text-lg font-bold w-28">
                  Deployment
                </div>
                <div className="flex-auto ">AWS (S3, Route53, Cloud Front)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
