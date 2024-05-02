import "./assets/fonts/NotoSansKR.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";
import Chatting from "./components/OrderBoard/Chatting";
import ChatSelection from "./components/OrderBoard/ChatSelection";
import OrderLog from "./components/OrderBoard/OrderLog";
import Gifticon from "./components/OrderBoard/Gifticon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard />} />
        <Route path="/log" element={<OrderLog />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/chatSelection" element={<ChatSelection />} />
        <Route path="/gifticon" element={<Gifticon />} />
        <Route path="/" element={<OrderBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
