import { t } from "i18next";
import FunElement from "./FunElement";

const FunList = ({ closeModal }) => {
  const FunElements = [
    { id: 1, title: t("game"), uri: "/game" },
    { id: 2, title: t("chatting.p"), uri: "/chatSelection" },
    { id: 3, title: t("chatting.a"), uri: "/chatting" },
  ];

  return (
    <div className="w-[85vw] h-full fixed left-[15vw] z-10">
      <div className="w-[20vw] top-[27vw] left-0 absolute z-[2]">
        {FunElements.map((funElement) => (
          <FunElement
            key={funElement.id}
            title={funElement.title}
            uri={funElement.uri}
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
