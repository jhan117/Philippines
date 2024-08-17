import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import { wealthData, wealthH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="거리의 아이들, 빈부격차의 그림자" writer="권기영">
      <SectionContent data={wealthData[0]} />
      <hr />
      {wealthH3Data.map((d, h3Idx) => (
        <NotHasH4Content data={d} h3Idx={h3Idx} />
      ))}
      <hr />
      <SectionContent data={wealthData[1]} />
      <hr />
      <div>
        <p>- 참고자료:</p>
        <p>
          <a href="https://www.index.go.kr/unify/idx-info.do?idxCd=5056">
            "상대적 빈곤율"
          </a>
          , 지표누리, 2023년 12월 7일, (2024년 8월 14일 검색).
        </p>
        <p>
          <a href="https://neda.gov.ph/ph-makes-significant-progress-in-poverty-reduction-single-digit-poverty-rate-achievable-by-2028-neda/#:~:text=The%202023%20Full%20Year%20Official,from%2018.1%20percent%20in%202021">
            "PH MAKES SIGNIFICANT PROGRESS IN POVERTY REDUCTION, SINGLE-DIGIT
            POVERTY RATE ACHIEVABLE BY 2028—NEDA"
          </a>
          , GOVPH, 2024년 7월 22일, (2024년 8월 14일 검색).
        </p>
        <p>
          <a href="https://www.bbc.com/korean/international-61420595">
            "필리핀 대선: '독재자의 아들' 마르코스 주니어 승리가 남긴 의문"
          </a>
          , BBC News 코리아, 2022년 5월 12일, (2024년 8월 14일 검색).
        </p>
        <p>
          Peter S. Goodman,{" "}
          <a href="https://www.nytimes.com/2023/12/30/business/philippine-economy-colonial-legacy.html">
            "‘There’s No Other Job’: The Colonial Roots of Philippine Poverty"
          </a>
          , The New York Times, 2023년 12월 30일, (2024년 8월 16일 검색).
        </p>
      </div>
    </BlogHeader>
  );
};

export default page;
