import { t } from "i18next";
import CancelIcon from "../../../CancelIcon";
import MinusIcon from "../../../MinusIcon";
import PlusIcon from "../../../PlusIcon";

const Menu = ({
  menu,
  menuInfo,
  addChoiceMenu,
  removeChoiceMenu,
  deleteChoiceMenu,
}) => {
  return (
    <div className="w-full py-[1.2vw] border-b border-[#E2E2E2] border-solid">
      <div className="p-[1vw] ml-[0.55vw] flex flex-col gap-[1.7vw]">
        <div className="font-bold text-[1.8vw]">{menuInfo.name}</div>
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <div
              className="border-[#E2E2E2] rounded-3xl border hover: cursor-pointer"
              onClick={() => removeChoiceMenu(menu.categoryId, menu.menuId)}
            >
              <MinusIcon />
            </div>
            <p className="text-[1.8vw] font-medium">{menu.amount}</p>
            <div
              className="border-[#E2E2E2] rounded-3xl border hover: cursor-pointer"
              onClick={() => addChoiceMenu(menu.categoryId, menu.menuId)}
            >
              <PlusIcon />
            </div>
          </div>
          <div className="flex gap-7 items-end">
            <p className="text-[2vw] text-[#6D6D6D] ">
              {(menuInfo.price * menu.amount).toLocaleString()}
              {t("원")}
            </p>
            <div
              className="w-[2.7vw] h-[2.7vw] bg-[#D9D9D9] rounded-3xl hover: cursor-pointer mr-[0.3vw] mb-[0.3vw]"
              onClick={() => deleteChoiceMenu(menu.categoryId, menu.menuId)}
            >
              <CancelIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
