import "./assets/fonts/NotoSansKR.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoticeBoard from "./pages/NoticeBoard";
import OrderBoard from "./pages/OrderBoard";
import OrderLog from "./components/OrderBoard/OrderLog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alert" element={<NoticeBoard />} />
        <Route path="/" element={<OrderBoard />} />
        <Route path="/ordelog" element={<OrderLog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
