const sequenceList = [
  "필리핀",
  1000,
  "필리핀 2조",
  1000,
  "필리핀 바콜로드",
  1000,
  "필리핀 보라카이",
  1000,
  "PHILIPPINES",
  1000,
  "PHILIPPINES TEAM 2",
  1000,
  "PHILIPPINES BACOLOD",
  1000,
  "PHILIPPINES BORACAY",
  1000,
];

const memberList = [
  {
    id: "m1",
    src: "/avatars/m1.jpg",
    name: "신나연",
    major: "수학교육과",
    role: "조장",
    univ: "대구대학교",
    insId: "la_ssan_0510",
  },
  {
    id: "m2",
    src: "/avatars/m2.jpg",
    name: "김선우",
    major: "전자전기공학부\n전기공학과",
    role: "조원",
    univ: "대구대학교",
    insId: "s__ww__o",
  },
  {
    id: "m3",
    src: "/avatars/m3.jpg",
    name: "윤예경",
    major: "생명공학과",
    role: "조원",
    univ: "대구대학교",
    insId: "y.ye.g",
  },
  {
    id: "m4",
    src: "/avatars/m4.jpg",
    name: "권기영",
    major: "컴퓨터공학과",
    role: "조원",
    univ: "금오공과대학교",
    insId: "kay_e0118",
  },
  {
    id: "m5",
    src: "/avatars/m5.jpg",
    name: "김한나",
    major: "언어치료학과",
    role: "조원",
    univ: "대구대학교",
    insId: "na.hannah_k",
  },
  {
    id: "m6",
    src: "/avatars/m6.jpg",
    name: "김혜민",
    major: "시각디자인융합학부\n서비스마케팅디자인과",
    role: "조원",
    univ: "대구대학교",
    insId: "rulluhyeminow",
  },
  {
    id: "m7",
    src: "/avatars/m7.jpg",
    name: "신창대",
    major: "체육학부\n체육학과",
    role: "조원",
    univ: "영남대학교",
    insId: "dae_0124",
  },
];

const envList = [
  {
    id: "i1",
    koName: "교통",
    enName: "traffic",
  },
  {
    id: "i2",
    koName: "날씨",
    enName: "weather",
  },
  {
    id: "last",
    koName: "수질",
    enName: "water_quality",
  },
];

const ecoList = [
  {
    id: "e1",
    koName: "빈부격차",
    enName: "wealth_gap",
  },
  {
    id: "last",
    koName: "교육",
    enName: "education",
  },
];

const navList = [
  {
    id: "a1",
    koName: "홈",
    enName: "",
    url: "/",
  },
  {
    id: "a2",
    koName: "역사",
    enName: "history",
    url: "/history",
    thumbnail: "/images/category/history.jpg",
  },
  {
    id: "a3",
    koName: "환경",
    enName: "environment",
    url: "/environment/traffic",
    thumbnail: "/images/category/environment.jpg",
    subItems: envList,
  },
  {
    id: "a4",
    koName: "문화",
    enName: "culture",
    url: "/culture",
    thumbnail: "/images/category/culture.jpg",
  },
  {
    id: "a5",
    koName: "경제",
    enName: "economy",
    url: "/economy/wealth_gap",
    thumbnail: "/images/category/economy.jpg",
    subItems: ecoList,
  },
  {
    id: "a6",
    koName: "인터뷰",
    enName: "interview",
    url: "/interview",
    thumbnail: "/images/category/interview.jpg",
  },
  {
    id: "a7",
    koName: "취업",
    enName: "job",
    url: "/job",
    thumbnail: "/images/category/job.jpg",
  },
];

const category = [
  { id: "history", tag: "역사", name: "김한나" },
  { id: "traffic", tag: "교통", name: "김선우" },
  { id: "weather", tag: "날씨", name: "김혜민" },
  { id: "water_quality", tag: "수질", name: "윤예경" },
  { id: "wealth_gap", tag: "빈부격차", name: "권기영" },
  { id: "education", tag: "교육", name: "신나연" },
];

export {
  sequenceList,
  memberList,
  navList,
  envList,
  ecoList,
  category,
};
