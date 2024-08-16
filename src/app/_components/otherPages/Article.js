import img1 from "../../../../public/img1.png";
import img2 from "../../../../public/img2.png";
import img3 from "../../../../public/img3.png";
import img4 from "../../../../public/img4.png";
import img5 from "../../../../public/img5.png";
import img6 from "../../../../public/img6.png";
import Image from "next/image";

import classes from "./Article.module.css";

const page = () => {
  return (
    <article className={classes.article}>
      <h2>필리핀의 수질 상태</h2>
      <p className={classes.writer}>작성자: 윤예경</p>
      <section className={classes.intro}>
        필리핀은 많은 섬들로 이루어진 국가로 물뿐만 아니라 각종 자연환경이
        풍부한 국가 이나, 금세기 들어 필리핀의 농업활동 및 빠른 도시화로 인한
        도시 및 산업지역으로부터 야기되는 수질오염이 심각해지고 있습니다. 최근
        심각한 수질 오염으로 인해 보라 카이 에서는 방문객을 받지 않고 수질
        개선에 힘을 써 6개월 후 다시 방문객을 받았습니다.
      </section>
      <section className={classes.main}>
        <Image src={img1} alt="통계" />
        <p>
          농업활동 및 빠른 도시화로 수질의 오염물 질을 33개의 매개 변수로 분류할
          수 있으며 농업가축(29%), 공업(27%), 농업(8.14%) 순으 로 수질 오염의
          원인을 나열할 수 있습니다. 이 외 도시하수, 산업폐수, 도시 하수관거의
          불량도 원인입니다.
        </p>
        <Image src={img2} alt="통계" />
        <p>
          수질의 모니터링은 TDS, coliform(E.coli), BOD, DO 등이 중요해 오염도,
          수질 상태를 알아볼 수 있습니다. 필리핀은 많은 섬으로 이루어진
          나라임으로 수질 조사를 하기 위해 서는 지역을 13개로 나누어 이해할 수
          있습니다. 하수 처리 시스템은 생활 하수의 90% 지표수로 배출 되며
          폐기물의 1/3(33%)는 마닐라 지역에서 배출되고 IV지 역에서는 약 15%의
          배출됩니다.
        </p>
        <Image src={img3} alt="통계" />
        <p>
          지역별로 나누어 수질의 TDS와 coliform(E.coli) 측정해보니 TDS 측정에
          통과한 지역은 IX, IV, III, NCR이며 coliform(E.coli) 측정에 통과한
          지역은 I만 통과한 것입니다. TDS를 통 해 염소, 불소, pH 등을 측정할 수
          있으며 너무 높게 나올 시 일상 수돗물로 사용을 하여도 위험성이 너무
          높습니다.
        </p>
        <p>* TDS : 이온 총량 측정기, coliform(E.coli) : 대장균 </p>
        <Image src={img4} alt="통계" />
        <p>
          전체적인 수질을 지역별로 나누어 측정해 본 결과로 지역 XII, XI, IX, V,
          II, I의 지역은 어느 정도로 통과한 것으로 보이지만 가장 정확한 지역은
          V입니다. 이 결과값으로 V 지 역의 물이 가장 안전하다고 볼 수는 있지만
          그렇다고 해서 필리핀에서 샤워기 필터 사용 하지 않거나 일반 수돗물을
          마실 수는 없습니다. 수질 자체가 한국과는 전혀 다르기 때 문에 물은
          생수를 마시는 것으로 권장합니다. 어학 연수로 간 Bacolod 지역은 마닐라,
          세부에 비해 작은 도시이기 때문에 측정 결과가 적습니다.
        </p>
      </section>
      <section className={classes.conclusion}>
        <Image src={img5} alt="통계" />
        <Image src={img6} alt="통계" />
        <p>
          좌의 사진은 실제로 필리핀 기숙사에서 1분 사용 후의 상태이며 우의
          사진은 실제로 한국 귀국 후 1주일 사용 후의 상태입니다. 필리핀의
          주택에서는 지하수를 주로 사용하 지만 기숙사나 아파트는 주로 탱크를
          탱크 밑에서 부산물 및 석회수가 쌓여 사진에서 보 일 만큼 수질 차이가
          확연히 보입니다. 이렇듯 필리핀을 여행하시는 분들은 꼭 샤워기 필터를
          하루 혹은 이틀마다 변경해야한다는 생각으로 여유롭게 챙기시고
          식당에서도 물은 생수를 시키거나 편의점에서 사서 가시는 것을
          권장합니다.
        </p>
      </section>
    </article>
  );
};

export default page;
