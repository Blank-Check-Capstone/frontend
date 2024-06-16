import "./assets/fonts/NotoSansKR.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";
import Chatting from "./components/OrderBoard/Chatting";
import ChatSelection from "./components/OrderBoard/ChatSelection";
import OrderLog from "./components/OrderBoard/OrderLog";
import Gifticon from "./components/OrderBoard/Gifticon";
import AdminLogin from "./components/OrderBoard/AdminLogin";
import KoreanFlag from "./assets/images/KoreanFlag.png";
import USAFlag from "./assets/images/USAFlag.svg";
import JPNFlag from "./assets/images/JPNFlag.svg";
import CHNFlag from "./assets/images/CHNFlag.svg";
import RUSFlag from "./assets/images/RUSFlag.svg";
import DEUFlag from "./assets/images/DEUFlag.svg";
import VIRFlag from "./assets/images/VIRFlag.svg";
import SLVFlag from "./assets/images/SLVFlag.svg";
import ESPFlag from "./assets/images/ESPFlag.svg";
import ITAFlag from "./assets/images/ITAFlag.png";
import TURFlag from "./assets/images/TURFlag.svg";
import FRAFlag from "./assets/images/FRAFlag.webp";
import NLDFlag from "./assets/images/NLDFlag.svg";
import blackNoodles from "./assets/images/blackNooles.jpg";
import ganblackNoodles from "./assets/images/ganBlackNoodles.jpg";
import jambong from "./assets/images/jambong.jpg";
import friedRice from "./assets/images/friedRice.png";
import jajangRice from "./assets/images/jajangRice.jpg";
import jambongRice from "./assets/images/jambongRice.webp";
import coke from "./assets/images/coke.png";
import cider from "./assets/images/cider.png";
import fanta from "./assets/images/fanta.png";
import { useState } from "react";
import { t } from "i18next";
import Display from "./pages/Display";
import ChoiceGame from "./pages/ChoiceGame";

const chatrooms = [
  {
    id: 1,
    name: "1번",
  },
  {
    id: 2,
    name: "2번",
  },
  {
    id: 3,
    name: "3번",
  },
  {
    id: 4,
    name: "4번",
  },
  {
    id: 5,
    name: "5번",
  },
  {
    id: 6,
    name: "6번",
  },
  {
    id: 7,
    name: "7번",
  },
];

const langList = [
  {
    id: 1,
    name: "KOR",
    icon: KoreanFlag,
  },
  {
    id: 2,
    name: "USA",
    icon: USAFlag,
  },
  {
    id: 3,
    name: "JPN",
    icon: JPNFlag,
  },
  {
    id: 4,
    name: "CHN",
    icon: CHNFlag,
  },
  {
    id: 5,
    name: "RUS",
    icon: RUSFlag,
  },
  {
    id: 6,
    name: "DEU",
    icon: DEUFlag,
  },
  {
    id: 7,
    name: "VIR",
    icon: VIRFlag,
  },
  {
    id: 8,
    name: "SLV",
    icon: SLVFlag,
  },
  {
    id: 9,
    name: "ESP",
    icon: ESPFlag,
  },
  {
    id: 10,
    name: "ITA",
    icon: ITAFlag,
  },
  {
    id: 11,
    name: "TUR",
    icon: TURFlag,
  },
  {
    id: 12,
    name: "FRA",
    icon: FRAFlag,
  },
  {
    id: 13,
    name: "NLD",
    icon: NLDFlag,
  },
];

const App = () => {
  const getChatroom = (id) => {
    return chatrooms.find((room) => room.id === id);
  };

  const [purchasedMenus, setPurchasedMenus] = useState([]);
  const [nowType, setNowType] = useState(1);
  const [nowLang, setNowLang] = useState("KOR");

  const changeType = (type) => {
    setNowType(type);
  };

  const changeLang = (lang) => {
    setNowLang(lang);
  };

  const _categoryList = [
    {
      id: 1,
      categorys: [
        {
          id: 1,
          title: t("noodles"),
          menus: [
            {
              id: 1,
              name: t("blackNoodles"),
              price: 7000,
              image: blackNoodles,
            },
            {
              id: 2,
              name: t("spicySeafoodNoodles"),
              price: 8000,
              image: jambong,
            },
            {
              id: 3,
              name: t("spicyBlackNoodles"),
              price: 8000,
              image: ganblackNoodles,
            },
          ],
        },
        {
          id: 2,
          title: t("rice"),
          menus: [
            {
              id: 1,
              name: t("friedRice"),
              price: 7000,
              image: friedRice,
            },
            {
              id: 2,
              name: t("blackRice"),
              price: 7000,
              image: jajangRice,
            },
            {
              id: 3,
              name: t("spicySeafoodRice"),
              price: 7000,
              image: jambongRice,
            },
          ],
        },
        {
          id: 3,
          title: t("beverage"),
          menus: [
            {
              id: 1,
              name: t("cola"),
              price: 1000,
              image: coke,
            },
            {
              id: 2,
              name: t("cider"),
              price: 1000,
              image: cider,
            },
            {
              id: 3,
              name: t("fanta"),
              price: 1000,
              image: fanta,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      categorys: [
        {
          id: 1,
          title: t("noodles"),
          menus: [
            {
              id: 1,
              name: "헤헤헤",
              price: 7000,
              image: blackNoodles,
            },
            {
              id: 2,
              name: t("spicySeafoodNoodles"),
              price: 8000,
              image: jambong,
            },
            {
              id: 3,
              name: t("spicyBlackNoodles"),
              price: 8000,
              image: ganblackNoodles,
            },
          ],
        },
        {
          id: 2,
          title: t("rice"),
          menus: [
            {
              id: 1,
              name: t("friedRice"),
              price: 7000,
              image: friedRice,
            },
            {
              id: 2,
              name: t("blackRice"),
              price: 7000,
              image: jajangRice,
            },
            {
              id: 3,
              name: t("spicySeafoodRice"),
              price: 7000,
              image: jambongRice,
            },
          ],
        },
        {
          id: 3,
          title: t("beverage"),
          menus: [
            {
              id: 1,
              name: t("cola"),
              price: 1000,
              image: coke,
            },
            {
              id: 2,
              name: t("cider"),
              price: 1000,
              image: cider,
            },
            {
              id: 3,
              name: t("fanta"),
              price: 1000,
              image: fanta,
            },
          ],
        },
      ],
    },
  ];

  const categoryList = _categoryList.find(
    (_category) => _category.id === nowType
  ).categorys;

  const getMenuByCategoryIdAndMenuId = (categoryId, menuId) => {
    const { menus } = categoryList.find(
      (category) => category.id === categoryId
    );

    const menu = menus.find((_menus) => _menus.id === menuId);

    return menu;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard />} />
        <Route
          path="log"
          element={
            <OrderLog
              purchasedMenus={purchasedMenus}
              getMenuByCategoryIdAndMenuId={getMenuByCategoryIdAndMenuId}
            />
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/game" element={<ChoiceGame />} />
        <Route path="/chatting" element={<Chatting type={1} />} />
        <Route
          path="/chatting/:chatId"
          element={<Chatting type={2} getChatroom={getChatroom} />}
        />
        <Route
          path="/chatselection"
          element={<ChatSelection chatrooms={chatrooms} />}
        />
        <Route path="/gifticon" element={<Gifticon />} />
        <Route path="/display" element={<Display />} />
        <Route
          path="/"
          element={
            <OrderBoard
              langList={langList}
              changeType={changeType}
              purchasedMenus={purchasedMenus}
              setPurchasedMenus={setPurchasedMenus}
              getMenuByCategoryIdAndMenuId={getMenuByCategoryIdAndMenuId}
              categoryList={categoryList}
              nowLang={nowLang}
              changeLang={changeLang}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
