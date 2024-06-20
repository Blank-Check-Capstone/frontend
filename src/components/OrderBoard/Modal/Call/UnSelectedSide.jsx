import { t } from "i18next";

const UnSelectedSide = () => {
  return (
    <div className="bg-white w-[30%] h-full flex justify-center items-center">
      <div className="text-center text-2xl font-bold">
        <span className="text-black">{t("왼쪽에서")}</span>
        <br />
        <span className="text-[#FF8F0C]">{t("요청하실 항목을")}</span>
        <br />
        <span className="text-[#FF8F0C]">{t("선택")}</span>
        <span className="text-black">{t("해주세요.")}</span>
      </div>
    </div>
  );
};

export default UnSelectedSide;
