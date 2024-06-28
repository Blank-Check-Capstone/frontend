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
import blackNoodles from "../assets/images/blackNooles.jpg";
import OrderedMenu from "../components/OrderedMenu";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [isShowSelectedMenuInfo, setIsShowSelectedMenuInfo] = useState({
    show: false,
    x: null,
    y: null,
    image: null,
  });
  const navigate = useNavigate();

  let selectedMenuTimeOut = null;

  const addChoiceMenu = (e, categoryId, menuId, isClick = false) => {
    if (isClick) {
      clearTimeout(selectedMenuTimeOut);

      setIsShowSelectedMenuInfo({
        show: true,
        x:
          window.innerWidth -
          e.currentTarget.offsetWidth * 0.8 -
          e.currentTarget.offsetLeft,
        y:
          window.innerHeight -
          e.currentTarget.offsetHeight * 0.8 -
          e.currentTarget.offsetTop,
        image: e.currentTarget.children[0].children[0].src,
      });

      selectedMenuTimeOut = setTimeout(() => {
        setIsShowSelectedMenuInfo({
          show: false,
          x: null,
          y: null,
          image: null,
        });
      }, 500);
    }

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

  const deleteChoiceMenu = (categoryId, menuId) => {
    const hasMenu = choiceMenus.findIndex(
      (menu) => menu.categoryId == categoryId && menu.menuId == menuId
    );

    if (hasMenu < 0) {
      return;
    }

    const _choiceMenus = [...choiceMenus];

    _choiceMenus.splice(hasMenu, 1);

    setChoiceMenus(_choiceMenus);
  };

  const purchase = (isPay) => {
    setPurchasedMenus({ menus: choiceMenus, isPay });
    navigate("/log");
  };

  const purchaseDutchPay = () => {
    navigate("/dutchpay");
  };

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

  const openCallConfirmModal = () => {
    setNowShowModal(5);
  };

  const scrollSelectCategory = (categoryId) => {
    categoryRefs.current[categoryId].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
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
      modal: (
        <Call
          closeModal={closeModal}
          openCallConfirmModal={openCallConfirmModal}
        />
      ),
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
          deleteChoiceMenu={deleteChoiceMenu}
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
    {
      id: 5,
      modal: (
        <MessageBox
          title={t("정상적으로 호출되었습니다.")}
          content=""
          closeModal={closeModal}
        />
      ),
    },
  ];

  return (
    <div className="flex w-full h-screen">
      {isShowSelectedMenuInfo.show && (
        <OrderedMenu
          image={isShowSelectedMenuInfo.image}
          x={isShowSelectedMenuInfo.x}
          y={isShowSelectedMenuInfo.y}
        />
      )}
      {isShowNoChoiceMessageBox && (
        <MessageBox
          title={t("장바구니에 상품이 없습니다.")}
          content={t("상품을 추가해 주세요.")}
          closeModal={closeNoChoiceMessageBox}
        />
      )}
      {isOpenPaymentModal && (
        <Payment
          closePaymentModal={closePaymentModal}
          purchase={purchase}
          purchaseDutchPay={purchaseDutchPay}
        />
      )}
      {modalList.find((modal) => modal.id == nowShowModal)?.modal}
      {/* <MenuDetail /> */}
      <div className="fixed flex flex-col top-0 w-[15vw] h-full bg-[#222222] z-0">
        <div className="w-[100%] h-[18vw] bg-[#000] flex flex-col gap-[1.2vw] items-center justify-center">
          <div className="w-[9.5vw] h-[9.5vw] max-w-40 max-h-40 rounded-[30%] bg-white flex items-center justify-center">
            <p className="text-[3vw] font-bold leading-none">
              하이
              <br />
              오더
            </p>
          </div>
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
                  .map((line, i) => (
                    <div key={i}>{line}</div>
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
