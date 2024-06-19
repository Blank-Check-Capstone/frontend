import Main from "../components/OrderBoard/Main";
import Menu from "../components/OrderBoard/Side/Menu";
import KoreanFlag from "../assets/images/KoreanFlag.png";
import MenuOrderIcon from "../assets/images/menuOrder.svg";
import Shopping from "../components/OrderBoard/Modal/Shopping";
import { useEffect, useRef, useState } from "react";
import Call from "../components/OrderBoard/Modal/Call";
import FunList from "../components/OrderBoard/Side/FunList";
import FunIcon from "../assets/images/FunIcon.svg";
import Lang from "../components/OrderBoard/Modal/Lang";
import { t } from "i18next";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Payment from "../components/OrderBoard/Modal/Payment";
import MessageBox from "../components/OrderBoard/Modal/MessageBox";

const sideMenuList = [
  { id: 1, title: "메뉴주문", icon: MenuOrderIcon },
  { id: 2, title: "FUN", icon: FunIcon },
  { id: 3, title: "LANG", icon: KoreanFlag },
];

const OrderBoard = ({
  langList,
  setPurchasedMenus,
  getMenuByCategoryIdAndMenuId,
  changeType,
  categoryList,
  nowLang,
  changeLang,
}) => {
  const [nowShowModal, setNowShowModal] = useState(null);
  const [selectedSideMenu, setSelectedSideMenu] = useState(1);
  const [choiceMenus, setChoiceMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  const [isShowNoChoiceMessageBox, setIsShowNoChoiceMessageBox] =
    useState(false);
  const categoryRefs = useRef([]);
  const [searchParams, setSeratchParams] = useSearchParams();
  const navigate = useNavigate();

  const addChoiceMenu = (categoryId, menuId) => {
    const hasMenu = choiceMenus.findIndex(
      (menu) => menu.categoryId == categoryId && menu.menuId == menuId
    );

    if (hasMenu < 0) {
      setChoiceMenus([...choiceMenus, { categoryId, menuId, amount: 1 }]);

      return;
    }

    const _choiceMenus = [...choiceMenus];

    _choiceMenus[hasMenu].amount++;

    setChoiceMenus(_choiceMenus);
  };

  const removeChoiceMenu = (categoryId, menuId) => {
    const hasMenu = choiceMenus.findIndex(
      (menu) => menu.categoryId == categoryId && menu.menuId == menuId
    );

    if (hasMenu < 0) {
      return;
    }

    const _choiceMenus = [...choiceMenus];

    if (_choiceMenus[hasMenu].amount <= 1) return;

    _choiceMenus[hasMenu].amount--;

    setChoiceMenus(_choiceMenus);
  };

  const purchase = () => {
    setPurchasedMenus(choiceMenus);
    navigate("/log", { replace: true });
  };

  const purchaseDutchPay = () => {
    navigate("/dutchpay", {replace: true})
  }

  const openCallModal = () => {
    setNowShowModal(1);
  };

  const openShoppingModal = () => {
    setNowShowModal(2);
  };

  const openNoChoiceMessageBox = () => {
    setIsShowNoChoiceMessageBox(true);
  };

  const closeNoChoiceMessageBox = () => {
    setIsShowNoChoiceMessageBox(false);
  };

  const openFunModal = () => {
    setNowShowModal(3);
  };

  const closeSideMenuModal = () => {
    setSelectedSideMenu(1);
    setNowShowModal(null);
  };

  const openLangModal = () => {
    setNowShowModal(4);
  };

  const changeSelectedCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const emptyShopping = () => {
    setChoiceMenus([]);
  };

  const scrollSelectCategory = (categoryId) => {
    categoryRefs.current[categoryId].scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeModal = () => {
    setNowShowModal(null);
  };

  useEffect(() => {
    changeType(
      searchParams.get("type") ? parseInt(searchParams.get("type")) : 1
    );
  }, []);

  useEffect(() => {
    changeLang(searchParams.get("lang"));
  }, [searchParams.get("lang")]);

  useEffect(() => {
    if (selectedSideMenu == 2) {
      openFunModal();

      return;
    }

    if (selectedSideMenu == 3) {
      openLangModal();

      return;
    }

    setNowShowModal(null);
  }, [selectedSideMenu]);

  const openPaymentModal = () => {
    if (choiceMenus.length == 0) {
      openNoChoiceMessageBox();

      return;
    }

    setIsOpenPaymentModal(true);
  };

  const closePaymentModal = () => {
    setIsOpenPaymentModal(false);
  };

  const modalList = [
    {
      id: 1,
      modal: <Call closeModal={closeModal} />,
    },
    {
      id: 2,
      modal: (
        <Shopping
          closeModal={closeModal}
          choiceMenus={choiceMenus}
          getMenuByCategoryIdAndMenuId={getMenuByCategoryIdAndMenuId}
          emptyShopping={emptyShopping}
          addChoiceMenu={addChoiceMenu}
          removeChoiceMenu={removeChoiceMenu}
          openPaymentModal={openPaymentModal}
        />
      ),
    },
    {
      id: 3,
      modal: <FunList closeModal={closeSideMenuModal} />,
    },
    {
      id: 4,
      modal: <Lang closeModal={closeSideMenuModal} langList={langList} />,
    },
  ];

  return (
    <div className="flex w-full h-screen">
      {isShowNoChoiceMessageBox && (
        <MessageBox
          title="장바구니에 상품이 없습니다."
          content="상품을 추가해 주세요."
          closeModal={closeNoChoiceMessageBox}
        />
      )}
      {isOpenPaymentModal && (
        <Payment closePaymentModal={closePaymentModal} purchase={purchase} purchaseDutchPay={purchaseDutchPay} />
      )}
      {modalList.find((modal) => modal.id == nowShowModal)?.modal}
      <div className="fixed flex flex-col top-0 w-[15vw] h-full bg-[#222222] z-0">
        <div className="w-[100%] h-[18vw] bg-[#000] flex flex-col gap-[1.2vw] items-center justify-center">
          <div className="w-[9.5vw] h-[9.5vw] max-w-40 max-h-40 rounded-[30%] bg-white"></div>
          <Link to={"/admin"} className="text-white text-[2.5vw] font-semibold">
            1번
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto">
            {sideMenuList.map((menu) => {
              let icon = menu.icon;

              if (menu.id == 3 && nowLang) {
                const findLang = langList.find((lang) => lang.name == nowLang);

                icon = findLang.icon;
              }

              return (
                <Menu
                  key={menu.id}
                  id={menu.id}
                  title={menu.title}
                  icon={icon}
                  selected={selectedSideMenu === menu.id}
                  onClick={() => {
                    setSelectedSideMenu(menu.id);
                  }}
                />
              );
            })}
          </div>
          <div className="flex flex-1 w-[15vw] h-[15vw] items-center justify-center relative">
            <div
              className="bg-[#46B0AE] text-white rounded-[50%] w-[10vw] h-[10vw] flex justify-center items-center absolute bottom-4 cursor-pointer"
              onClick={openCallModal}
            >
              <div className="w-full text-center text-[1.8vw] break-words">
                {t("직원호출")
                  .split("\n")
                  .map((line) => (
                    <div>{line}</div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        scrollSelectCategory={scrollSelectCategory}
        changeSelectedCategory={changeSelectedCategory}
        openShoppingModal={openShoppingModal}
        addChoiceMenu={addChoiceMenu}
        choiceMenus={choiceMenus}
        ref={categoryRefs}
      />
    </div>
  );
};

export default OrderBoard;
