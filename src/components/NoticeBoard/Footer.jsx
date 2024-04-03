import Button from "./Button";
import refreshIcon from "../../assets/images/refresh.svg";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-screen h-[9rem] flex items-center justify-between px-3 bg-[#1D1D1D]">
      <div className="flex gap-2">
        <Button content="테이블" />
        <Button content="영업" />
        <Button content="카드" />
        <Button content="대기" />
      </div>
      <div className="flex gap-2">
        <Button content="칸수" />
        <Button content="크기" />
        <Button content="세로" />
        <Button content="가로" />
      </div>
    </footer>
  );
};

export default Footer;
