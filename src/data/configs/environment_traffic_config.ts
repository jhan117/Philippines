import { PageConfig } from "../types";

export const environment_traffic_config: PageConfig = {
  header: "필리핀의 대중교통의 이해",
  writer: "김선우",
  blocks: [
    {
      type: "paragraph",
      text: "필리핀에는 택시와 버스 외에도 지프니, 트라이시클, 트라이시카드(페디캅), FX밴, 지상철(MRT와 LRT), PNR기차, 하발하발(Habal Habal), 칼레사(Kalesa. 말마차) 등 다양한 대중교통 수단이 있습니다.",
    },
    {
      type: "hr",
    },
    {
      type: "h3-section",
      title: "필리핀 대중교통의 종류",
      blocks: [
        {
          type: "h4-section",
          title: "택시(Taxi)",
          blocks: [
            {
              type: "image-grid",
              images: [
                "/images/trafficImgs/tk1.jpg",
                "/images/trafficImgs/tk2.jpg",
              ],
            },
            {
              type: "paragraph",
              text: "필리핀의 택시는 크게 일반택시와 공항택시, 그리고 그랩택시(그랩카)로 나뉩니다. 예전에는 필리핀에서 택시를 이용할 경우 호텔을 통해 부른 택시를 이용하거나 차량번호를 확인하여 지인에게 문자로 발송해 두면 좋다는 식의 안내를 드리곤 했습니다만, 그랩(GRAB) 서비스가 등장하면서 굳이 호텔을 통하지 않으셔도 편리하게 택시를 이용하실 수 있게 되었습니다. 그랩 서비스의 장점은 택시 기사가 과도한 바가지요금을 요구하지 않는다는 것인데요, 핸드폰에 그랩 앱을 설치한 뒤 출발지와 목적지를 입력하시면 이용료를 확인하실 수 있습니다.",
            },
          ],
        },
        {
          type: "h4-section",
          title: "지프니(Jeepney)",
          blocks: [
            {
              type: "image-grid",
              images: [
                "/images/trafficImgs/tk3.jpg",
                "/images/trafficImgs/tk4.jpg",
              ],
            },
            {
              type: "paragraph",
              text: "필리핀 사람들의 창의력을 엿볼 수 있는 화려한 디자인과 색감 때문에 필리핀의 대표적인 교통수단으로 유명한 지프니(Jeepney)는 미군이 쓰던 군용 지프를 개조하여 만든 차량입니다. 뒷부분에 좌석을 늘리고 외부를 화려한 색으로 치장한 것이 특징인데요, 지프니 앞 혹은 옆면에 노선(목적지)이 기재되어 있습니다.",
            },
          ],
        },
        {
          type: "h4-section",
          title: "트라이시클과 페디캅",
          blocks: [
            {
              type: "image",
              src: "/images/trafficImgs/tk5.jpg",
            },
            {
              type: "paragraph",
              text: "트라이시클(Tricycle)은 오토바이를 개조해서 승객을 태울 수 있게 만든 것입니다. 보통 일정 구역 내에서 짧은 거리를 이동할 때 이용되며, 목적지까지의 거리 및 운행 지역, 승객 수 등에 따라 이용료가 달라집니다.",
            },
            {
              type: "bullet-list",
              items: [
                "- 오토바이가 아닌 자전거를 개조한 것은 트라이시카드(Tricycad) 또는 페디캅(Pedicap)이라고 부릅니다.",
                "- 택시처럼 목적지 문 앞까지 운행해 주기 때문에 트라이시클이나 페디캅을 이용할 때는 탑승 전 요금을 확인하는 것이 좋습니다.",
                "- 트라이시클이나 페디캅은 따로 노선이 있는 것은 아니지만, 운행 가능 지역이 지정되어 있을 수 있습니다.",
                "- 보라카이 지역 내에서 운행하는 E-트라이크(E-Trike)라는 전기삼륜차는 대기오염 방지를 위해 전기로 운행되도록 만들어진 트라이시클입니다.",
              ],
            },
          ],
        },
        {
          type: "h4-section",
          title: "UV Express(Utility Vehicle Express)",
          blocks: [
            {
              type: "image",
              src: "/images/trafficImgs/tk6.jpg",
            },
            {
              type: "paragraph",
              text: "UV 익스프레스(UV Express)는 SUV이나 밴(Van)과 같은 차량을 개조하여 버스처럼 사용하는 것으로, FX밴으로 부르기도 합니다. 출발지와 목적지가 차량 앞과 뒤에 표시되어 있으며 이용 요금은 거리에 따라 달라집니다. 마닐라 도심으로 출퇴근하는 시민들을 위해 마닐라 근교 도시까지 장거리 노선을 운행하기도 합니다.",
            },
          ],
        },
        {
          type: "h4-section",
          title: "버스",
          blocks: [
            {
              type: "image",
              src: "/images/trafficImgs/tk7.jpg",
            },
            {
              type: "paragraph",
              text: "버스는 시내버스와 시외버스 두 종류가 있으며, 버스 이용료는 지역과 거리, 그리고 버스 시설(에어컨 유무 등)에 따라 달라집니다. 오래된 버스의 경우 에어컨이 나오지 않는 경우도 있지만, 일부 장거리 버스는 화장실 및 침대 시설을 갖추고 있기도 합니다.",
            },
          ],
        },
        {
          type: "h4-section",
          title: "MRT, LRT, PNR",
          blocks: [
            {
              type: "image",
              src: "/images/trafficImgs/tk8.jpg",
            },
            {
              type: "paragraph",
              text: "LRT(Light Rail Transit)와 MRT(Metro Rail Transit)는 메트로 마닐라 지역 내에서 운행되는 지상철입니다. 한국의 지하철과 비슷하지만, 지상에 있다는 것이 특징입니다. 마닐라에는 PNR이라고 불리는 기차도 운행되는데요, Philippine National Railways의 약자입니다. 기차이기는 하지만 내부가 지하철과 같은 구조로 되어 있어서 여행용이라기보다는 출퇴근용에 가깝습니다.",
            },
          ],
        },
      ],
    },
    {
      type: "h3-section",
      title: "현재 지프니에 관련된 문제들",
      blocks: [
        {
          type: "paragraph",
          text: '현재 필리핀에서는 필리핀 대표 교통수단 지프니를 단계적으로 퇴출하려는 정책이 차질을 빚고 있습니다. 필리핀 정부의 공공 유틸리티 차량 현대화 정책(PUVMP)에 따라 올해부터 필리핀 내 모든 공공 유틸리티 차량(PUV) 운영자와 운전자는 리튬 이온 배터리 또는 규정을 준수하는 엔진으로 구동되는 현대식 차량을 보유한 협동조합에 가입해야 합니다. 또 배기가스 배출량을 줄이기 위해서 유럽의 \'유로 4\' 표준을 따라야 합니다. 그뿐만 아니라 개별 PUV 기사는 더는 차량을 소유할 수 없고, 대중교통으로 운행할 수 있는 면허 또한 보유할 수 없습니다. 차량 소유권, 번호판 및 면허는 기사가 아닌 협동조합으로 이전됩니다. 최신 PUV의 가격은 최소 280만 페소(약 6,583만 원)에 달합니다. 전환 신청 기간은 지난달 31일로 끝났으며, 필리핀 정부는 이달 말까지 유예 기간을 뒀습니다. 필리핀 교통 당국은 마닐라 수도권에선 40%, 전국에선 70%의 지프니가 협동조합 가입을 신청한 것으로 추정했습니다. 약 4만 2000대가 이미 사용이 중지된 상태입니다. 정책이 시행 궤도에 올랐으나 지프니 기사들의 반발은 잦아들지 않고 있습니다. 그동안 필리핀 정부는 지프니를 다른 교통수단으로 대체하려고 여러 차례 시도했습니다. 지프니는 대개 수입한 중고 디젤 엔진을 사용하다 보니 대기 오염이 심각했기 때문입니다. 그때마다 지프니 기사들의 파업과 저항으로 번번이 무산됐습니다. 이번에도 수도 마닐라를 비롯한 주요 도시에서 대규모 시위가 벌어졌습니다. 그런데도 페르디난드 마르코스 주니어 대통령이 정책 시행 일자를 변경하지 않겠다고 재차 밝힘에 따라 올해부터 시행에 들어간 것입니다. 지난해 연말 시위를 주도한 지프니 기사 단체의 모디 플로란다 대표는 정책이 "수천 명의 생계를 빼앗고 통근자들에게 더 큰 부담을 준다"고 밝혔습니다. 이어 "하루에 보통 400페소를 버는 기사들로선 새 PUV의 가격은 감당할 수 없는 수준"이라고 지적했습니다. 또 다른 단체의 마르 발부에나 대표 역시 "차량 비용은 내가 내는데 자산 소유권과 통제권은 협동조합이 갖는다는 점이 부당하다. 협동조합의 간단한 결정만으로 나는 조합에서 퇴출당할 수 있고 내가 산 자산은 그들이 가질 것"이라고 SCMP에 밝혔습니다. 그는 "정부가 이러한 소유권 문제를 수정해야 한다"고 덧붙였습니다.',
        },
      ],
    },
    {
      type: "h3-section",
      title: "지프니 타는 법 TIP",
      blocks: [
        {
          type: "paragraph",
          text: "마닐라나 세부에서는 구글 맵을 이용해 경로를 검색하면 지프니 차량 번호와 경로를 알 수 있지만, 바콜로드는 아직 작은 도시이기에 이런 시스템이 없습니다. 따라서 목적지까지 가려면 기사들에게 물어보거나 트라이시클을 사용하거나 걸어가야 합니다. 그래도 지프니의 경로 및 탑승 방법과 하차 방법을 알고 있으면 이동하는 데 큰 도움이 될 것입니다. 주의사항으로, 일반적으로 버스는 정해진 경로가 있지만 지프니 기사들은 상황에 따라 목적지를 바꾸는 경우가 많습니다. 그러므로 지프니나 버스를 타기 전에 반드시 기사에게 내가 가려는 목적지에 가는지 확인해야 합니다.",
        },
        {
          type: "h4-section",
          title: "지프니 차량의 경로",
          blocks: [
            {
              type: "image-grid",
              images: [
                "/images/trafficImgs/tk9.png",
                "/images/trafficImgs/tk10.png",
              ],
            },
            {
              type: "paragraph",
              text: "버스와 지프니의 옆면이나 앞면을 보면 ‘LIBERTAD’ 방향과 ‘NORTHBOUND’ 방향으로 나뉘어 있습니다. 다른 방향도 있지만, 주로 가는 곳인 SM, Ayala, 대박집을 기준으로 설명드리겠습니다. 바콜로드에서는 이 두 가지 노선이 대부분을 차지하고 있습니다.",
            },
            {
              type: "paragraph",
              text: "구글 맵을 예로 들면, 쉽게 말해 LIBERTAD 방향과 NORTHBOUND 방향은 각각 바콜로드의 지역 이름과 터미널 이름을 나타냅니다.",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk11.png",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk12.png",
            },
            {
              type: "paragraph",
              text: "LIBERTAD 지역은 시장과 마켓이 형성된 곳이며, 지프니는 이 지역을 목적지로 운행합니다.",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk13.png",
            },
            {
              type: "paragraph",
              text: "반면, NORTHBOUND는 터미널의 이름입니다.",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk14.png",
            },
            {
              type: "paragraph",
              text: "따라서 LIBERTAD와 NORTHBOUND는 각각 가는 방향을 의미합니다. 만약 어떤 방향으로 가야 할지 모른다면, 지프니에 붙어 있는 방향을 보고 구글에서 검색해 보면 어느 방향으로 가는지 파악할 수 있을 것입니다.",
            },
          ],
        },
        {
          type: "h4-section",
          title: "탑승 및 하차 방법",
          blocks: [
            {
              type: "paragraph",
              text: "지프니 탑승은 크게 어렵지 않습니다. 기사들이 승객을 태우기 위해 클락션을 여러 번 울리는데, 그때 기사와 눈이 마주치면 차량을 세웁니다. 이때 내가 가려는 방향의 큰 건물이나 유명한 건물의 이름을 말하면 됩니다.",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk15.png",
            },
            {
              type: "paragraph",
              text: "예를 들어, 내가 Caf  Bobs Flagship에서 SM 시티 바콜로드까지 가려면, Caf  Bobs Flagship에서 길을 건너 맞은편에서 오는 버스나 지프니 기사들에게 “SM?”이라고만 물어보면 됩니다. SM으로 가는지 묻는 것과 같으므로, 간다고 하면 타면 되고, 아니라면 다른 차를 기다리면 됩니다.",
            },
            {
              type: "image",
              src: "/images/trafficImgs/tk16.png",
            },
            {
              type: "paragraph",
              text: "반대로 SM 시티 바콜로드에서 Stonehill Suites로 가고 싶다면, SM 시티 바콜로드 정류장에서 기사들에게 “16 street?”이라고 물어보세요. 그러면 빨간색 동그라미 앞에 내려줄 것입니다. 그 후 16번가 골목으로 조금만 걸어가면 Stonehill Suites에 도착할 수 있습니다. 참고로 지프니와 버스는 주로 큰 길인 렉슨 스트리트(Lacson Street) 위주로 다니기 때문에, 10번가나 11번가 같은 골목은 걸어서 가야 합니다.",
            },
            {
              type: "paragraph",
              text: "또한, 기사에게 목적지를 말했지만, 기사가 못 듣거나 까먹는 경우, 내가 내리고 싶은 위치를 지나쳤다면 “루갈랑(Lugar Lang)”이라고 기사에게 들리게 말하면 그 자리에 세워줍니다. 유튜브에서는 동전으로 지프니 손잡이 부분을 치거나 천장을 두들기라고 되어있지만, 바콜로드에서는 그냥 “루갈랑”이라고 하면 세워줍니다.",
            },
            {
              type: "paragraph",
              text: "이상으로 현지에서 직접 경험하며 배운 지프니 타는 법이었습니다. 감사합니다.",
            },
          ],
        },
      ],
    },
  ],
};
