import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";

const ChatSelection = ({ chatrooms }) => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full bg-white min-h-[100vh]">
      <div className="w-full h-[7vw] flex border-[#7B7B7B] border px-[1vw]">
        <div
          className="h-full flex text-2xl items-center justify-center gap-[0.5vw]"
          onClick={moveBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2vw] h-[2vw] fill-[#D9D9D9]"
            viewBox="0 0 24 24"
          >
            <path d="M16.041,24,6.534,14.48a3.507,3.507,0,0,1,0-4.948L16.052,0,18.17,2.121,8.652,11.652a.5.5,0,0,0,0,.707l9.506,9.52Z" />
          </svg>
          <div className="text-[1.8vw]">{t("이전")}</div>
        </div>
        <div className="flex-1 text-[1.8vw] font-bold flex items-center justify-center">
          {t("1대1채팅")}
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-4 auto-rows-[minmax(12vw,_auto)]">
        {chatrooms.map((chatroom) => (
          <div className="border-[#7B7B7B] border flex flex-col justify-between p-[1vw]">
            <div className="text-[#b1b1b1] text-[3.5vw] leading-[3.5vw] font-medium">
              {chatroom.name}
            </div>
            <div className="flex gap-[1vw] justify-end">
              <div className="w-[4vw] h-[4vw] bg-[#b1b1b1] flex items-center justify-center rounded-full"></div>
              <Link to={`/chatting/${chatroom.id}`}>
                <div className="w-[4vw] h-[4vw] bg-[#b1b1b1] flex items-center justify-center rounded-full">
                  <svg
                    className="w-[60%] h-[60%]"
                    width="346"
                    height="302"
                    viewBox="0 0 346 302"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M292.769 119.912C205.633 93.3514 129.115 135.296 146.385 239.824C65.5386 239.824 0 186.137 0 119.912C0 53.6863 65.5386 0 146.385 0C227.231 0 292.769 53.6863 292.769 119.912Z"
                      fill="white"
                    />
                    <path
                      d="M131.173 173.804C142.562 183.109 144.342 219.56 124.205 244.264C104.069 268.968 53.2308 270.912 33.1966 272.431C48.7949 257.588 62.1026 239.824 66.539 213.177C75.4103 186.529 119.785 164.5 131.173 173.804Z"
                      fill="white"
                    />
                    <path
                      d="M159.692 202.545C159.692 245.729 201.399 280.737 252.846 280.737C304.294 280.737 346 245.729 346 202.545C346 159.361 304.294 124.353 252.846 124.353C201.399 124.353 159.692 159.361 159.692 202.545Z"
                      fill="white"
                    />
                    <path
                      d="M262.526 237.688C255.279 243.755 254.146 267.524 266.96 283.633C279.775 299.742 312.126 301.009 324.875 302C314.949 292.321 306.48 280.737 303.657 263.362C298.012 245.985 269.773 231.62 262.526 237.688Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSelection;
