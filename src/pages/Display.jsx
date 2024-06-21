import { useState } from "react";
import table from "../assets/images/table.png";
import stand from "../assets/images/Stand.png";
import wall from "../assets/images/wall.jpg";

import porkbelly from "../assets/images/Porkbelly.png";
import italy from "../assets/images/Italy.png";
import china from "../assets/images/China.png";
const Display = () => {
  const [nowType, setNowType] = useState(1);

  return (
    <div className="w-screen h-screen bg-[#eff0f5] overflow-hidden">
      <div className="w-full h-[5vw] bg-[#ffffff] flex items-center pl-[1vw] text-[3vw] font-bold">
        GBSW
      </div>
      <div className="w-full flex py-[1vw]">
        <div className="w-[75vw] h-[40vw] flex justify-center">
          <div className="w-[90%] bg-[#ffffff] rounded-2xl flex justify-center items-center shadow-xl">
            <div className="w-[95%] h-[95%] bg-[#000000] rounded-2xl flex justify-center items-center p-[2vw]">
              <iframe
                src={`/?type=${nowType}`}
                frameborder="0"
                className="w-full h-full bg-white"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[21vw] flex justify-center fixed top-[2vw] right-[2vw]">
          <div className="bg-[#ffffff] rounded-2xl shadow-2xl border-[#f4f4f4] border-[0.1vw]">
            <div className="w-full">
              <div className="w-full my-[1vw] pl-[1vw] text-[1vw] font-bold">
                업종 변경하기
              </div>
              <div className="border-[#27CACA] border-[0.15vw]"></div>
              <div className="p-[1vw] flex flex-col gap-[1vw]">
                <div className="relative" onClick={() => setNowType(1)}>
                  <img
                    src={china}
                    alt="china"
                    className="w-full filter brightness-50"
                  />
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1vw] m-2">
                    중식당
                  </div>
                </div>
                <div className="relative" onClick={() => setNowType(2)}>
                  <img
                    src={italy}
                    alt="italy"
                    className="w-full filter brightness-50"
                  />
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1vw] m-2">
                    이탈리아 레스토랑
                  </div>
                </div>
                <div className="relative" onClick={() => setNowType(3)}>
                  <img
                    src={porkbelly}
                    alt="porkbelly"
                    className="w-full filter brightness-50"
                  />
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1vw] m-2">
                    삼겹살집
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full my-[1.5vw] pl-[1vw] text-[1vw] font-bold">
                거치대 구경하기
              </div>
              <div className="border-[#27CACA] border-[0.15vw]"></div>
              <div className="w-full grid grid-cols-2 gap-[2vw] p-[1vw]">
                <div>
                  <img
                    src={stand}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw] text-[1vw]">
                    스탠드형
                  </div>
                </div>
                <div>
                  <img
                    src={table}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw] text-[1vw]">
                    탁상형
                  </div>
                </div>
                <div>
                  <img
                    src={wall}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw] text-[1vw]">
                    벽결이형
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[5vw] flex px-[2vw] items-center text-[0.8vw] text-[#888] fixed bottom-0 left-0">
        Digico KT ADDRESS : 경기도 성남시 분당구 불정로 90(정자동) TEL : 100
        <br />
        Copyright ⓒ Digico KT. All right reserved.
      </div>
    </div>
  );
};

export default Display;
