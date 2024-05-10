import Main from "../components/OrderBoard/Main";
import Menu from "../components/OrderBoard/Side/Menu";
import KoreanFlag from "../assets/images/KoreanFlag.png";
import MenuOrderIcon from "../assets/images/menuOrder.svg";
import Shopping from "../components/OrderBoard/Modal/Shopping";
import { useEffect, useRef, useState } from "react";
import Call from "../components/OrderBoard/Modal/Call";
import blackNoodles from "../assets/images/blackNooles.jpg";

const sideMenuList = [
  { id: 1, title: "메뉴주문", icon: MenuOrderIcon, selected: true },
  { id: 2, title: "FUN", icon: KoreanFlag, selected: false },
  { id: 3, title: "LANG", icon: KoreanFlag, selected: false },
];

const categoryList = [
  {
    id: 1,
    title: "면류",
    menus: [
      {
        id: 1,
        name: "짜장면",
        price: 7000,
        image: blackNoodles,
      },
      {
        id: 2,
        name: "짬뽕",
        price: 8000,
        image: blackNoodles,
      },
      {
        id: 3,
        name: "간짜장",
        price: 8000,
        image: blackNoodles,
      },
    ],
  },
  {
    id: 2,
    title: "밥류",
    menus: [
      {
        id: 1,
        name: "볶음밥",
        price: 7000,
        image: blackNoodles,
      },
      {
        id: 2,
        name: "짜장밥",
        price: 7000,
        image: blackNoodles,
      },
      {
        id: 3,
        name: "짬뽕밥",
        price: 7000,
        image: blackNoodles,
      },
    ],
  },
  {
    id: 3,
    title: "음료",
    menus: [
      {
        id: 1,
        name: "콜라",
        price: 1000,
        image: blackNoodles,
      },
      {
        id: 2,
        name: "사이다",
        price: 1000,
        image: blackNoodles,
      },
      {
        id: 3,
        name: "환타",
        price: 1000,
        image: blackNoodles,
      },
    ],
  },
];

const OrderBoard = () => {
  const [isOpenCallModal, setIsOpenCallModal] = useState(false);
  const [isOpenShoppingModal, setIsOpenShoppingModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0].id);
  const [choiceMenus, setChoiceMenus] = useState([]);
  const categoryRefs = useRef([]);

  const getMenuByCategoryIdAndMenuId = (categoryId, menuId) => {
    const { menus } = categoryList.find(
      (category) => category.id === categoryId
    );

    console.log(menus);

    const menu = menus.find((_menus) => _menus.id === menuId);

    return menu;
  };

  const addChoiceMenu = (categoryId, menuId) => {
    setChoiceMenus([...choiceMenus, { categoryId, menuId }]);
  };

  const openCallModal = () => {
    setIsOpenCallModal(true);
  };

  const closeCallModal = () => {
    setIsOpenCallModal(false);
  };

  const openShoppingModal = () => {
    setIsOpenShoppingModal(true);
  };

  const closeShoppingModal = () => {
    setIsOpenShoppingModal(false);
  };

  const changeSelectedCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const scrollSelectCategory = (categoryId) => {
    categoryRefs.current[categoryId].scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full h-screen">
      {isOpenCallModal && <Call closeCallModal={closeCallModal} />}
      {isOpenShoppingModal && (
        <Shopping
          closeShoppingModal={closeShoppingModal}
          choiceMenus={choiceMenus}
          getMenuByCategoryIdAndMenuId={getMenuByCategoryIdAndMenuId}
        />
      )}
      <div className="fixed flex flex-col top-0 w-[15vw] h-full bg-[#222222] z-0">
        <div className="w-[100%] h-[20vw] bg-[#000] flex flex-col gap-[1.2vw] items-center justify-center">
          <div className="w-[9.5vw] h-[9.5vw] max-w-40 max-h-40 rounded-[30%] bg-white"></div>
          <div className="text-white text-[2.5vw] font-semibold">중식당</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto">
            {sideMenuList.map((menu) => (
              <Menu
                key={menu.id}
                id={menu.id}
                title={menu.title}
                icon={menu.icon}
                selected={menu.selected}
              />
            ))}
          </div>
          <div className="flex flex-1 w-[15vw] h-[15vw] items-center justify-center relative">
            <div
              className="bg-[#46B0AE] text-white rounded-[50%] w-[10vw] h-[10vw] flex justify-center items-center absolute bottom-4 cursor-pointer"
              onClick={openCallModal}
            >
              <div className="text-center text-[1.8vw]">
                직원
                <br />
                호출
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
