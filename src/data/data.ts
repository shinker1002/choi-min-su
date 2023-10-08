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
