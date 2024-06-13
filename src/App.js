import "./assets/fonts/NotoSansKR.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";
import Chatting from "./components/OrderBoard/Chatting";
import ChatSelection from "./components/OrderBoard/ChatSelection";
import OrderLog from "./components/OrderBoard/OrderLog";
import Gifticon from "./components/OrderBoard/Gifticon";
import DutchPay from "./pages/DutchPay";
import AdminLogin from "./components/OrderBoard/AdminLogin";
import KoreanFlag from "../src/assets/images/KoreanFlag.png";
import USAFlag from "../src/assets/images/USAFlag.svg";
import JPNFlag from "../src/assets/images/JPNFlag.svg";
import CHNFlag from "../src/assets/images/CHNFlag.svg";
import RUSFlag from "../src/assets/images/RUSFlag.svg";
import DEUFlag from "../src/assets/images/DEUFlag.svg";
import VIRFlag from "../src/assets/images/VIRFlag.svg";
import SLVFlag from "../src/assets/images/SLVFlag.svg";
import ESPFlag from "../src/assets/images/ESPFlag.svg";
import ITAFlag from "../src/assets/images/ITAFlag.png";
import TURFlag from "../src/assets/images/TURFlag.svg";
import FRAFlag from "../src/assets/images/FRAFlag.webp";
import NLDFlag from "../src/assets/images/NLDFlag.svg";

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
    return chatrooms.find((room) => room.id == id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard />} />
        <Route path="/log" element={<OrderLog />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/chatting" element={<Chatting type={1} />} />
        <Route
          path="/chatting/:chatId"
          element={<Chatting type={2} getChatroom={getChatroom} />}
        />
        <Route
          path="/chatSelection"
          element={<ChatSelection chatrooms={chatrooms} />}
        />
        <Route path="/gifticon" element={<Gifticon />} />
        <Route path="/dutchpay" element={<DutchPay />} />
        <Route path="/" element={<OrderBoard langList={langList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
