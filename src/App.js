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

const chatrooms = [
  {
    id: 1,
    name: "중식당",
  },
  {
    id: 2,
    name: "중식당",
  },
  {
    id: 3,
    name: "중식당",
  },
  {
    id: 4,
    name: "중식당",
  },
  {
    id: 5,
    name: "중식당",
  },
  {
    id: 6,
    name: "중식당",
  },
  {
    id: 7,
    name: "중식당",
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
        <Route path="/" element={<OrderBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
