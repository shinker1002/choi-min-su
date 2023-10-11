export interface profile {
  name: string;
  myImage: string;
  profileImage: string;
  introduce: string[];
}
export const profileData: profile = {
  name: "최민수",
  myImage: `${process.env.REACT_APP_URL}images/myImage1.jpg`,
  profileImage: `${process.env.REACT_APP_URL}images/1920x810.png`,
  introduce: [
    "안녕하세요. 웹 프론트엔드 개발자 최민수입니다.",
    "항상 더 좋은 개발자로서 성장하기 위해 노력하고 있습니다.",
  ],
};

export interface readMe {
  readMeImage: string[];
}

export const readmeData: readMe = {
  readMeImage: [
    `${process.env.REACT_APP_URL}images/career-3449422_1920.png`,
    `${process.env.REACT_APP_URL}images/resume-6627200_1920.jpg`,
  ],
};

export interface profileResume {
  name: string;
  profileImage: string;
  email: string;
  phone: string;
  blog: string;
  github: string;
  portfolio: string;
}

export const profileResumeData: profileResume = {
  name: "최민수",
  profileImage: `${process.env.REACT_APP_URL}images/myImage1.jpg`,
  email: "shinker98@naver.com",
  phone: "010-7533-2401",
  blog: "https://fine-reply-6a8.notion.site/f2096d686014483b9980628525ec4dc1?pvs=4",
  github: "https://github.com/shinker1002",
  portfolio: `/portfolio`,
};

export interface introduceResume {
  introduceResume: string[];
}

export const introduceResumeData: introduceResume = {
  introduceResume: [
    "웹 서비스 프론트엔드 개발자로서 다양한 프로젝트와 협업 경험을 가지고 있습니다.",
    "React, JavaScript, TypeScript, Redux, React-query, AWS, Git 등을 사용하여 프로젝트를 설계하고 개발했습니다.",
    "프론트엔드 개발이 사용자와 가까운 특징을 가진다는 것을 항상 염두에 두며, 확장성과 유지 보수성을 높이기 위해 노력하고 고민하고 있습니다.",
    "",
    "개발에서 커뮤니케이션이 가장 중요하다고 생각합니다.",
    "이를 위해 페어 프로그래밍과 코드 리뷰에 적극적으로 참여한 적이 있으며 내가 가진 지식을 다른 사람과 공유하고 설명하는 것에 흥미를 가지고 있습니다.",
    "",
    "현재 TypeScript로 작성된 많은 코드를 이해하고 사용하기 위해 TypeScript에 관심을 가지고 공부하고 있습니다.",
  ],
};
export interface stacksResume {
  front: string[];
  database: string[];
  etc: string[];
}

export const stacksResumeData: stacksResume = {
  front: [
    "React.js",
    "JavasSript",
    "TypeScript",
    "HTML/CSS",
    "Redux",
    "React-Query",
    "Tailwind CSS",
    "Styled-Components",
  ],
  database: ["MySQL"],
  etc: ["Git / GithubL", "AWS", "VS Code", "Python", "Prettier", "Eslint"],
};

export type projectsResumeType = {
  date: string;
  title: string;
  description: string;
  stacks: string[];
  detail: string[];
};

export interface projectsResume {
  projects: projectsResumeType[];
}

export const projectsResumeData: projectsResume = {
  projects: [
    {
      date: "2023.09 ~ 2023.10",
      title: "이력서, 포트폴리오 웹사이트",
      description: "이력서 - 포트폴리오 페이지",
      stacks: ["React", "TypeScript", "Tailwind CSS"],
      detail: [
        "React, Typescript, Tailwind CSS 로 개발.",
        "Resume 페이지 구현.",
        "Portfolio 페이지 구현.",
        "Desktop - Mobile 반응형 UI 구현.",
      ],
    },
    {
      date: "2023.01 ~ 2023.02",
      title: "OMC",
      description: "차박 예약 플랫폼",
      stacks: [
        "React",
        "Redux",
        "React-Query",
        "Styled-Components",
        "JavaScript",
      ],
      detail: [
        "JWT를 사용한 회원 가입, 로그인 구현.",
        "로딩을 위한 Skeleton-Components 구현.",
        "React-Query를 사용하여 사용자, 판매자, 관리자 페이지 구현.",
        "Desktop - Mobile 반응형 UI 구현.",
      ],
    },
    {
      date: "2022.11 ~ 2022.12",
      title: "LUXMEAL",
      description: "반려동물 사료 판매 쇼핑몰",
      stacks: ["React", "Redux", "Sass", "JavaScript", "React-Cookie"],
      detail: [
        "JWT를 사용한 회원 가입, 로그인 구현.",
        "체험하기 기능 구현(회원 가입, 로그인 과정 간편화).",
        "로컬 스토리지를 사용한 장바구니 기능 구현.",
        "토스페이먼츠를 사용한 결제 기능 구현.",
        "S3, Route53, CloudFront를 사용한 클라이언트 배포.",
      ],
    },
    {
      date: "2022.10 ~ 2022.11",
      title: "Stack Overflow Clone Coding",
      description: "Stack Overflow 사이트 클론 코딩",
      stacks: ["React", "Redux", "JavaScript", "Sass"],
      detail: [
        "JWT를 사용한 회원 가입, 로그인 구현.",
        "질문 검색 기능 구현.",
        "질문 CRUD 기능 구현.",
        "S3를 사용한 클라이언트 배포.",
      ],
    },
    {
      date: "2022.03 ~ 2022.06",
      title: "How Many",
      description: "OpenCV를 활용한 유동 인구 자동 측정 시스템",
      stacks: ["React", "Styled-Components", "JavaScript", "Python", "YOLO"],
      detail: [
        "회원가입, 로그인 구현.",
        "Rechart 라이브러리를 사용한 유동 인구 측정 데이터 시각화.",
        "이미지 렌더링을 사용한 스트리밍 구현.",
        "YOLO와 Centroid tracking을 사용한 유동 인구 인식 및 추적.",
      ],
    },
  ],
};

export type educationResumeType = {
  date: string;
  title: string;
  description: string;
  detail: string[];
};

export interface educationResume {
  education: educationResumeType[];
}

export const educationResumeData: educationResume = {
  education: [
    {
      date: "2017. 03 ~ 2023. 02",
      title: "청주대학교",
      description: "인공지능 소프트웨어 전공",
      detail: [
        "2021 ~ 2022 성적 우수 장학금 3회 수령",
        "C, Java, Python, JavaScript 프로그래밍 언어 수강.",
        "머신 러닝, 인공신경망, 영상처리(OpenCV)수강.",
        "데이터베이스 강의 수강.",
        "JSP, Django 강의 수강.",
      ],
    },
    {
      date: "2014. 03 ~ 2017. 02",
      title: "평택 신한고등학교",
      description: "자연계",
      detail: ["자연계 졸업 (경기도 평택시)"],
    },
  ],
};

export type experiencesResumeType = {
  date: string;
  title: string;
  description: string;
  detail: string[];
};

export interface experiencesResume {
  experiences: experiencesResumeType[];
}

export const experiencesResumeData: experiencesResume = {
  experiences: [
    {
      date: "2022. 06 ~ 2022. 12",
      title: "코드스테이츠",
      description: "코드스테이츠 40기 Front-End 과정",
      detail: [
        "React를 기반으로 진행하는 프론트엔드 과정.",
        "팀 프로젝트를 통한 협업 경험.",
        "20주 동안 매일 알고리즘 문제 풀이.",
        "20주 동안 페어 프로그래밍과 코드 리뷰 경험.",
        "협업 프로젝트 2회 진행.",
      ],
    },
    {
      date: "2022. 04 ~ 2022. 06",
      title: "청주대학교 자람학기제",
      description: "자율 팀 프로젝트 ",
      detail: [
        "팀 프로젝트를 진행하며 리액트 이해 및 기술 습득.",
        "팀 프로젝트를 통한 협업 경험.",
      ],
    },
    {
      date: "2021. 12 ~ 2022. 02",
      title: "Stop Covid-19 아이디어 해커톤",
      description: "SW기반 코로나 시대를 변화시킬 아이디어 해커톤",
      detail: ["COVID-19로 인한 비 접촉 여행, 차박 예약 서비스 제출."],
    },
  ],
};

export interface stacksPortfolio extends stacksResume {
  frontDetail: string[];
  databaseDetail: string[];
  etcDetail: string[];
}

export const stacksPortfolioData: stacksPortfolio = {
  front: [
    "React.js",
    "JavasSript",
    "TypeScript",
    "HTML/CSS",
    "Redux",
    "React-Query",
    "Tailwind CSS",
    "Styled-Components",
  ],
  frontDetail: [
    "주로 React를 사용하여 앱을 만듭니다. 여러가지 React Hooks을 사용하거나 재사용할 수 있는 로직을 분리하는 데에 익숙합니다. Redux, React-Query와 같은 여러가지 상태 관리 라이브러리를 사용하는 데 능숙합니다.",
    "TypeScript를 활용하여 프로젝트를 구현할 수 있습니다.",
    "Tailwind CSS, Styled-Components, Sass를 사용하여 웹 페이지를 디자인할 수 있습니다.",
    "JavaScript의 최신 문법을 공부하고 적용하기 위해 수시로 찾아보고 학습하고 있습니다.",
    "웹 접근성과 웹 표준을 고려하여 상황에 맞는 시맨틱 요소를 사용할 수 있습니다.",
  ],
  database: ["MySQL"],
  databaseDetail: ["쿼리문을 작성하여 원하는 결과값을 출력할 수 있습니다."],
  etc: ["Git / GithubL", "AWS", "VS Code", "Python", "Prettier", "Eslint"],
  etcDetail: [
    "S3, Route53, CloudFront를 사용하여 정적 웹 사이트를 호스팅할 수 있습니다.",
    "Eslint, Prettier을 사용하여 코드의 퀄리티와 스타일을 유지할 수 있습니다.",
    "Git을 사용한 워크플로우에 익숙하며 Github Kanban Board를 사용하여 Issues를 관리할 수 있습니다.",
  ],
};
