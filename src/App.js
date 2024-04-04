import "./assets/fonts/Pretendard.css";
import "./assets/fonts/Inter.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard/>} />
        <Route path="/" element={<OrderBoard/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
