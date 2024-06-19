import { useSearchParams } from "react-router-dom";
import LangElement from "./Lang/LangElement";
import i18n from "../../../lang/i18n";

const Lang = ({ langList, closeModal }) => {
  const [searchParams, setSeratchParams] = useSearchParams();
  const nowLang = searchParams.get("lang") ?? "KOR";

  const changeLang = (lang) => {
    const tmpSearchParams = new URLSearchParams(searchParams);
    tmpSearchParams.set("lang", lang);
    setSeratchParams(tmpSearchParams);
    i18n.changeLanguage(lang);
    closeModal();
  };

  return (
    <div className="w-full h-full fixed flex justify-center items-center z-10">
      <div className="grid grid-cols-4 auto-rows-[minmax(5vw,_auto)] relative z-[2] gap-[0.8vw]">
        {langList.map((langE) => (
          <LangElement
            key={langE.id}
            id={langE.icon}
            name={langE.name}
            icon={langE.icon}
            onClick={() => changeLang(langE.name)}
            isSelected={langE.name == nowLang}
          />
        ))}
      </div>
      <div
        className="w-full h-full bg-black opacity-80 absolute top-0 left-0 z-[1]"
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default Lang;
