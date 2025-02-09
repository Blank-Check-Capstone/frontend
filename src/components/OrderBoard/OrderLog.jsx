import { t } from "i18next";
import { useNavigate } from "react-router-dom";

const OrderLog = ({ purchasedMenus, getMenuByCategoryIdAndMenuId }) => {
  const navigate = useNavigate();

  const pageBack = () => {
    navigate(-1);
  };

  console.log(purchasedMenus);

  return (
    <div className="w-full pt-[15vw] pb-[8vw] px-[5vw]">
      <div className="flex items-center w-full h-[5vw] bg-black text-white fixed top-0 left-0">
        <div className="flex w-full h-full items-center">
          <div className="w-[15%] h-full bg-[#393939] text-[2vw] font-bold flex items-center justify-center">
            1번
          </div>
          <div className="h-full flex items-center justify-between px-[1vw] text-[2vw] font-bold">
            {purchasedMenus["menus"].length === 0
              ? t("주문내역이 없습니다.")
              : purchasedMenus.isPay
              ? t("결제완료")
              : t("결제 대기중입니다.")}
          </div>
        </div>
        <div onClick={pageBack}>
          <svg
            className="w-[3vw] h-[3vw] fill-[#F1F1F1] mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
      </div>
      <div className="text-black text-[4vw] font-bold w-full h-[10vw] bg-white fixed top-[5vw] left-0">
        <div className="w-full h-full flex items-center justify-center text-[3vw] pl-[1vw]">
          {purchasedMenus["menus"].length === 0
            ? t("주문내역이 없습니다.")
            : purchasedMenus.isPay
            ? t("주문이 완료되었습니다.")
            : t("직원이 직접 결제 받으러 옵니다. 결제 준비 해주세요.")}
        </div>
      </div>
      <div className="flex w-full h-full items-center flex-col py-[1vw]">
        <div className="w-full grid grid-cols-4 font-bold gap-[5vw]">
          {purchasedMenus["menus"].map((menu, i) => {
            const menuInfo = getMenuByCategoryIdAndMenuId(
              menu.categoryId,
              menu.menuId
            );

            return (
              <div key={i}>
                <img
                  src={menuInfo.image}
                  className="w-full aspect-square object-cover rounded-xl mb-2"
                />
                <div className="text-[1.5vw] font-bold">
                  <div>
                    {menuInfo.name} X{menu.amount}
                  </div>
                  <div>
                    {(menuInfo.price * menu.amount).toLocaleString()}
                    {t("원")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[8vw] bg-black bottom-0 flex items-center justify-center text-[2vw] fixed left-0 bottom-0">
        <div className="text-white flex">
          Total
          <div className="text-[#40d7e1]">
            &ensp;
            {purchasedMenus["menus"]
              .reduce((total, purchasedMenu) => {
                const menu = getMenuByCategoryIdAndMenuId(
                  purchasedMenu.categoryId,
                  purchasedMenu.menuId
                );

                return total + purchasedMenu.amount * menu.price;
              }, 0)
              .toLocaleString()}
          </div>
          {t("원")}
        </div>
      </div>
    </div>
  );
};

export default OrderLog;
