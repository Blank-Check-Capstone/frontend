import "./assets/fonts/NotoSansKR.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";
import OrderLog from "./components/OrderBoard/OrderLog";
import Chatting from "./components/OrderBoard/Chatting";
import ChatSelection from "./components/OrderBoard/ChatSelection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard />} />
        <Route path="/log " element={<OrderLog />} />
        <Route path="/" element={<OrderBoard />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/chatSelection" element={<ChatSelection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
