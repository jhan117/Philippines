import HomeHeader from "@/components/home/HomeHeader";
import HomeFooter from "@/components/home/HomeFooter";
import { Noto_Sans_KR } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Philippines Insight | 대구대 파란사다리 2조",
  description:
    "역사, 문화, 경제, 환경 등 필리핀의 모든 것을 한눈에 알아보세요.",
  openGraph: {
    title: "Philippines Insight | 대구대 파란사다리 2조",
    description:
      "역사, 문화, 경제, 환경 등 필리핀의 모든 것을 한눈에 알아보세요.",
    type: "website",
    locale: "ko_KR",
  },
  icons: {
    icon: "/philippines.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body
        className={`w-full flex flex-col min-h-screen ${notoSansKr.variable} font-sans bg-slate-50 text-slate-800 antialiased overflow-x-hidden`}
      >
        <HomeHeader />
        <main className="grow w-full max-w-[1920px] mx-auto flex flex-col items-center">
          {children}
        </main>
        <HomeFooter />
      </body>
    </html>
  );
};

export default RootLayout;
