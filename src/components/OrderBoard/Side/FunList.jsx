import { t } from "i18next";
import FunElement from "./FunElement";
import FunIcon from "../../../assets/images/mint-FunIcon.svg";
import ChatsIcon from "../../../assets/images/mint-messages-square.svg";
import ChatIcon from "../../../assets/images/mint-message-circle.svg";

const FunList = ({ closeModal }) => {
  const FunElements = [
    { id: 1, title: t("게임"), uri: "/game", icon: FunIcon },
    { id: 2, title: t("1대1채팅"), uri: "/chatselection", icon: ChatsIcon },
    { id: 3, title: t("단체채팅"), uri: "/chatting", icon: ChatIcon },
  ];

  return (
    <div className="w-[85vw] h-full fixed left-[15vw] z-10">
      <div className="w-[20vw] top-[27vw] left-0 absolute z-[2]">
        {FunElements.map((funElement) => (
          <FunElement
            key={funElement.id}
            title={funElement.title}
            uri={funElement.uri}
            icon={funElement.icon}
          />
        ))}
      </div>
      <div
        className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default FunList;
