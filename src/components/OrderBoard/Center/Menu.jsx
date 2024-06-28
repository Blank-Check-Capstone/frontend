import { t } from "i18next";

const Menu = ({ name, price, image, addChoiceMenu }) => {
  return (
    <div
      className="bg-white p-[1vw] border border-gray-300 rounded-l"
      onClick={addChoiceMenu}
    >
      <div className="w-full h-[12vw] overflow-hidden flex justify-center items-center">
        <img src={image} alt={name} className="object-contain w-full h-full" />
      </div>
      <div className="px-[0.5vw]">
        <div className="text-[2.2vw] font-normal overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </div>
        <div className="text-[2vw] font-bold tracking-tighter">
          {price.toLocaleString()}
          {t("원")}
        </div>
      </div>
      <div className="w-[5vw] h-[3vw] bg-[#000] flex items-center justify-center rounded-lg text-white text-[1.5vw] float-right">
        {t("담기")}
      </div>
    </div>
  );
};

export default Menu;
