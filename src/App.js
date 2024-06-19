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
import porkBelly from "./assets/images/porkBelly.jpg";
import skinonPorkBelly from "./assets/images/skin-onPorkBelly.jfif";
import porkShoulder from "./assets/images/porkShoulder.jpg";
import thinSkirt from "./assets/images/thinSkirt.jfif";
import jowlMeat from "./assets/images/jowlMeat.png";
import coldBuckwheatNoodles from "./assets/images/coldBuckwheatNoodles.jpg";
import soybeanPasteJjigae from "./assets/images/soybeanPasteJjigae.jpg";
import porkRinds from "./assets/images/porkRinds.jpg";
import rice from "./assets/images/rice.jpg";
import beer from "./assets/images/beer.webp";
import cahmiseul from "./assets/images/cahmiseul.webp";
import goodDay from "./assets/images/goodDay.png";
import daesun from "./assets/images/daesun.jpg";
import jinro from "./assets/images/jinro.webp";
import cass from "./assets/images/cass.jpg";
import terra from "./assets/images/terra.jpg";
import riceWine from "./assets/images/riceWine.webp";
import pearDrink from "./assets/images/pearDrink.jfif";
import DutchPay from "./pages/DutchPay";

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

  const [purchasedMenus, setPurchasedMenus] = useState({
    menus: [],
    isPay: false,
  });
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
          title: t("면류"),
          menus: [
            {
              id: 1,
              name: t("짜장면"),
              price: 7000,
              image: blackNoodles,
            },
            {
              id: 2,
              name: t("짬뽕"),
              price: 8000,
              image: jambong,
            },
            {
              id: 3,
              name: t("간짜장"),
              price: 8000,
              image: ganblackNoodles,
            },
          ],
        },
        {
          id: 2,
          title: t("밥류"),
          menus: [
            {
              id: 1,
              name: t("볶음밥"),
              price: 7000,
              image: friedRice,
            },
            {
              id: 2,
              name: t("짜장밥"),
              price: 7000,
              image: jajangRice,
            },
            {
              id: 3,
              name: t("짬뽕밥"),
              price: 7000,
              image: jambongRice,
            },
          ],
        },
        {
          id: 3,
          title: t("음료"),
          menus: [
            {
              id: 1,
              name: t("코카콜라"),
              price: 1000,
              image: coke,
            },
            {
              id: 2,
              name: t("칠성사이다"),
              price: 1000,
              image: cider,
            },
            {
              id: 3,
              name: t("환타"),
              price: 1000,
              image: fanta,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      categorys: [],
    },
    {
      id: 3,
      categorys: [
        {
          id: 1,
          title: t("고기"),
          menus: [
            {
              id: 1,
              name: t("삼겹살"),
              price: 15000,
              image: porkBelly,
            },
            {
              id: 2,
              name: t("오겹살"),
              price: 15000,
              image: skinonPorkBelly,
            },
            {
              id: 3,
              name: t("목살"),
              price: 15000,
              image: porkShoulder,
            },
            {
              id: 4,
              name: t("갈매기살"),
              price: 15000,
              image: thinSkirt,
            },
            {
              id: 5,
              name: t("항정살"),
              price: 15000,
              image: jowlMeat,
            },
          ],
        },
        {
          id: 2,
          title: t("후식"),
          menus: [
            {
              id: 1,
              name: t("물냉면"),
              price: 5000,
              image: coldBuckwheatNoodles,
            },
            {
              id: 2,
              name: t("된장찌개"),
              price: 5000,
              image: soybeanPasteJjigae,
            },
            {
              id: 3,
              name: t("돼지껍데기"),
              price: 5000,
              image: porkRinds,
            },
            {
              id: 4,
              name: t("공기밥 추가"),
              price: 1000,
              image: rice,
            },
          ],
        },
        {
          id: 3,
          title: t("주류"),
          menus: [
            {
              id: 1,
              name: t("살얼음맥주500cc"),
              price: 5000,
              image: beer,
            },
            {
              id: 2,
              name: t("참이슬"),
              price: 5000,
              image: cahmiseul,
            },
            {
              id: 3,
              name: t("좋은데이"),
              price: 5000,
              image: goodDay,
            },
            {
              id: 4,
              name: t("대선"),
              price: 5000,
              image: daesun,
            },
            {
              id: 5,
              name: t("진로"),
              price: 5000,
              image: jinro,
            },
            {
              id: 6,
              name: t("카스"),
              price: 5000,
              image: cass,
            },
            {
              id: 7,
              name: t("테라"),
              price: 5000,
              image: terra,
            },
            {
              id: 8,
              name: t("막걸리"),
              price: 5000,
              image: riceWine,
            },
          ],
        },
        {
          id: 4,
          title: t("음료"),
          menus: [
            {
              id: 1,
              name: t("코카콜라"),
              price: 2000,
              image: coke,
            },
            {
              id: 2,
              name: t("칠성사이다"),
              price: 5000,
              image: cider,
            },
            {
              id: 3,
              name: t("갈아만든배"),
              price: 5000,
              image: pearDrink,
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
        <Route path="/dutchpay" element={<DutchPay />} />
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
