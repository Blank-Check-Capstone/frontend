import CancelIcon from "../../CancelIcon";
import NotCircleCheckIcon from "../../../assets/images/NotCircleCheckIcon.svg";
import { t } from "i18next";

const YesNoModal = ({ title, content, onYesClick, closeModal }) => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center z-10">
      <div className="w-[45vw] h-[25vw] flex flex-col rounded-lg bg-white relative z-[2] justify-center items-center">
        <div className="h-[15vw] flex justify-center items-center flex-col">
          <div className="font-bold text-[2vw] pl-[1vw]">{title}</div>
          <div className="text-gray-500 font-light text-[1.5vw] pl-[1vw]">
            {content}
          </div>
        </div>
        <div className="flex gap-[1vw] h-[5vw] w-[40vw] text-[2vw] font-bold">
          <div
            className="bg-[#46B0AE] text-white w-[40vw] h-full hover:cursor-pointer flex justify-center items-center rounded-lg"
            onClick={onYesClick}
          >
            <div className="flex justify-center items-center gap-3 mr-[1vw]">
              <div className="w-[2vw] h-[2vw] ">
                <img src={NotCircleCheckIcon} height="33vw" width="33vw" />
              </div>
              {t("예")}
            </div>
          </div>
          <div
            className="bg-gray-400 text-white w-[40vw] h-full hover:cursor-pointer flex justify-center items-center rounded-lg"
            onClick={closeModal}
          >
            <div className="flex justify-center items-center">
              <div className="w-[3vw]">
                <CancelIcon />
              </div>
              {t("아니오")}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default YesNoModal;
