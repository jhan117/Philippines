import HomeHeader from "./_components/homePage/HomeHeader";
import HomeFooter from "./_components/homePage/HomeFooter";

import "./layout.css";

export const metadata = {
  title: "Philippines Insight | 대구대 파란사다리 2조",
  description: "역사, 문화, 경제, 환경 등 필리핀의 모든 것을 한눈에 알아보세요.",
  openGraph: {
    title: "Philippines Insight | 대구대 파란사다리 2조",
    description: "역사, 문화, 경제, 환경 등 필리핀의 모든 것을 한눈에 알아보세요.",
    type: "website",
    locale: "ko_KR",
  },
  icons: {
    icon: "/philippines.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="w-full flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased overflow-x-hidden">
        <HomeHeader />
        <main className="flex-grow w-full max-w-[1920px] mx-auto flex flex-col items-center">
          {children}
        </main>
        <HomeFooter />
      </body>
    </html>
  );
};

export default RootLayout;
