import HomeHeader from "./_components/HomeHeader";
import HomeFooter from "./_components/HomeFooter";

import "./layout.css";

export const metadata = {
  title: "필리핀 2조",
  description: "필리핀2조가 만든 웹사이트",
  icons: {
    icon: "/philippines.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <HomeHeader />
        {children}
        <HomeFooter />
      </body>
    </html>
  );
}
