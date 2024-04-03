import Button from "./Button";
import refreshIcon from "../../assets/images/refresh.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen h-[9rem] flex items-center justify-between px-3 bg-[#1D1D1D]">
      <div className="flex gap-2">
        <Button content="완료내역" />
        <Button content="모두OK" />
        <Button
          content={<img src={refreshIcon} alt="새로고침" className="w-9" />}
        />
      </div>
      <div className="flex gap-2">
        <Button content="로그아웃" />
        <Button content="update" />
      </div>
    </header>
  );
};

export default Header;
