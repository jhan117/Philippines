import HomeHeader from "./_components/homePage/HomeHeader";
import HomeFooter from "./_components/homePage/HomeFooter";

import "./layout.css";

export const metadata = {
  title: "필리핀 2조",
  description: "필리핀2조가 만든 웹사이트",
  icons: {
    icon: "/Philippines/philippines.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        <HomeHeader />
        <main>{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
};

export default RootLayout;
