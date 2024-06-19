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
    <div className="w-full bg-[#eff0f5]">
      <div className="w-full h-[5vw] bg-[#ffffff] flex items-center pl-[1vw] text-[3vw] font-bold">
        GBSW
      </div>
      <div className="w-full h-[70vw] flex py-[2vw]">
        <div className="w-[70%] h-[70%] flex justify-center">
          <div className="w-[90%] h-[90%] bg-[#ffffff] rounded-2xl flex justify-center items-center shadow-xl">
            <div className="w-[95%] h-[95%] bg-[#000000] rounded-2xl flex justify-center items-center">
              <iframe
                src={`/?type=${nowType}`}
                frameborder="0"
                className="w-[55vw] h-[35vw] bg-white"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex justify-center">
          <div className="w-[90%] bg-[#ffffff] rounded-2xl shadow-xl">
            <div className="w-full">
              <div className="w-full my-[1.5vw] pl-[1vw] text-[1.5vw] font-bold">
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
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1.5vw] m-2">
                    중식당
                  </div>
                </div>
                <div className="relative" onClick={() => setNowType(2)}>
                  <img
                    src={italy}
                    alt="italy"
                    className="w-full filter brightness-50"
                  />
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1.5vw] m-2">
                    이탈리아 레스토랑
                  </div>
                </div>
                <div className="relative" onClick={() => setNowType(3)}>
                  <img
                    src={porkbelly}
                    alt="porkbelly"
                    className="w-full filter brightness-50"
                  />
                  <div className="absolute inset-0 text-[#ffffff] font-bold text-[1.5vw] m-2">
                    삼겹살집
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full my-[1.5vw] pl-[1vw] text-[1.5vw] font-bold">
                거치대 변경하기
              </div>
              <div className="border-[#27CACA] border-[0.15vw]"></div>
              <div className="w-full grid grid-cols-2 gap-[2vw] p-[2vw]">
                <div>
                  <img
                    src={stand}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw]">
                    스탠드형
                  </div>
                </div>
                <div>
                  <img
                    src={wall}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw]">
                    벽결이형
                  </div>
                </div>
                <div>
                  <img
                    src={table}
                    className="object-cover w-full aspect-square"
                  />
                  <div className="w-full flex justify-center mt-[1vw]">
                    탁상형
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[5vw] bg-[#ffffff] mb-0 flex justify-center items-center text-[2vw] font-semibold">
        © Kraft
      </div>
    </div>
  );
};

export default Display;
