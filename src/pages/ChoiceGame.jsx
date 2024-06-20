import { useNavigate } from "react-router-dom";
import bg from "../../src/assets/images/bgimg.png";
import game from "../../src/assets/images/game.png";
import vs from "../../src/assets/images/VS.jpg";
import { t } from "i18next";

const ChoiceGame = () => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen bg-[#ffffff] relative">
      <img
        src={bg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-full h-[10%] flex justify-end relative ">
        <div className="h-full w-[5%] bg-[#132360] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.021 512.021"
            className="h-[2.5vw] fill-[#e7f0ee]"
          >
            <g>
              <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
            </g>
          </svg>
        </div>
        <div
          className="h-full w-[12%] bg-[#515c7a] flex justify-center items-center text-[3vw] font-black italic text-[#e7f0ee] cursor-pointer"
          onClick={moveBack}
        >
          {t("나가기")}
        </div>
      </div>
      <div className="text-[#ffffff] text-[7vw] italic font-black flex justify-center relative drop-shadow-lg">
        {t("플레이 모드 선택")}
      </div>
      <div className="w-full h-[70%] gap-[2vw] flex justify-center relative">
        <div className="w-[40%] h-[80%]">
          <img src={game} className="w-full h-[70%]" />
          <div className="w-full h-[30%] bg-[#273c79] flex justify-center items-center flex-col">
            <div className="text-white text-[3vw] font-bold">
              {t("싱글 게임")}
            </div>
            <div className="text-[#f1f1f1]">{t("심심할때 우리끼리 놀자")}</div>
          </div>
        </div>
        <div className="w-[40%] h-[80%]">
          <img src={vs} className="w-full h-[70%]" />
          <div className="w-full h-[30%] bg-[#273c79] flex justify-center items-center flex-col">
            <div className="text-white text-[3vw] font-bold">
              {t("대전 게임")}
            </div>
            <div className="text-[#f1f1f1]">{t("안주걸고 진검승부!")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceGame;
