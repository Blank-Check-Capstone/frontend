import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as Hangul from "hangul-js";

const Chatting = ({ type, getChatroom }) => {
  const [chatInfo, setChatInfo] = useState({ id: 0, name: "단체 채팅" });
  const [isLoading, setIsLoading] = useState(false);
  const [inputContent, setInputContent] = useState([]);
  const [beforeInput, setBeforeInput] = useState("");
  const [chats, setChats] = useState([
    {
      time: new Date(),
      content: "hello world!",
    },
  ]);

  const { chatId } = useParams();

  const roomInit = async (id) => {
    const room = await getChatroom(id);

    setChatInfo(room);
  };

  useEffect(() => {
    try {
      if (type == 1) {
        return;
      }

      roomInit(chatId);
    } finally {
      setIsLoading(true);
    }
  }, [chatId]);

  const addChat = () => {
    if (inputContent == "") return;

    setChats([...chats, { time: new Date(), content: inputContent }]);

    setInputContent("");
    setBeforeInput("");
  };

  const changeInputContent = (e) => {
    setBeforeInput("");

    setInputContent(Hangul.disassemble(e.target.value));
  };

  const changeLastInput = (value, isNew) => {
    if (inputContent.length == 0) {
      setInputContent([value]);

      setBeforeInput(value);

      return;
    }

    const tmp = [...inputContent];

    if (isNew) {
      tmp.push(value);
    } else {
      tmp[tmp.length - 1] = value;
    }

    setInputContent(tmp);

    setBeforeInput(value);
  };

  const addInputContent = (value) => {
    if (isNaN(value)) {
      if (inputContent.length == 0) {
        setInputContent([value]);
        setBeforeInput(value);

        return;
      }

      const lastWord = inputContent[inputContent.length - 1];
      let moreLastWord = "-";

      if (inputContent.length >= 2) {
        moreLastWord = inputContent[inputContent.length - 2];
      }

      if (lastWord == " ") {
        setInputContent([...inputContent, value]);
        setBeforeInput(" ");
        return;
      }

      if (
        value == "•" &&
        (lastWord == "ㅣ" || lastWord == "ㅡ" || lastWord == "ㅜ")
      ) {
        let tmp = value;

        switch (lastWord) {
          case "ㅣ":
            tmp = "ㅏ";
            break;
          case "ㅡ":
            tmp = "ㅜ";
            break;
          case "ㅜ":
            tmp = "ㅠ";
            break;
        }

        const tmpContent = [...inputContent];
        tmpContent[tmpContent.length - 1] = tmp;

        setInputContent(tmpContent);

        setBeforeInput(value);

        return;
      }

      if (
        value == "ㅣ" &&
        (lastWord == "ㅏ" || lastWord == "ㅓ" || lastWord == "•")
      ) {
        let tmp = value;

        let isMoreLastWordRemove = false;

        if (lastWord == "•") {
          if (moreLastWord == "•") {
            isMoreLastWordRemove = true;

            tmp = "ㅕ";
          } else {
            tmp = "ㅓ";
          }
        } else if (lastWord == "ㅏ") {
          tmp = "ㅐ";
        } else if (lastWord == "ㅓ") {
          tmp = "ㅔ";
        }

        const tmpContent = [...inputContent];
        if (isMoreLastWordRemove) tmpContent.pop();
        tmpContent[tmpContent.length - 1] = tmp;

        setInputContent(tmpContent);

        setBeforeInput(value);

        return;
      }

      if (value == "ㅡ" && lastWord == "•") {
        let tmp = "ㅗ";

        let isMoreLastWordRemove = false;

        if (moreLastWord == "•") {
          isMoreLastWordRemove = true;

          tmp = "ㅛ";
        }

        const tmpContent = [...inputContent];
        if (isMoreLastWordRemove) tmpContent.pop();
        tmpContent[tmpContent.length - 1] = tmp;

        setInputContent(tmpContent);

        setBeforeInput(value);

        return;
      }

      setInputContent([...inputContent, value]);

      setBeforeInput(value);

      return;
    }

    if (value == 1) {
      if (beforeInput == "ㄱ") {
        changeLastInput("ㅋ", false);

        return;
      }

      if (beforeInput == "ㅋ") {
        changeLastInput("ㄲ", false);

        return;
      }

      changeLastInput("ㄱ", beforeInput != "ㄲ");

      return;
    }

    if (value == 2) {
      if (beforeInput == "ㄴ") {
        changeLastInput("ㄹ", false);

        return;
      }

      changeLastInput("ㄴ", beforeInput != "ㄹ");

      return;
    }

    if (value == 3) {
      if (beforeInput == "ㄷ") {
        changeLastInput("ㅌ", false);

        return;
      }

      if (beforeInput == "ㅌ") {
        changeLastInput("ㄸ", false);

        return;
      }

      changeLastInput("ㄷ", beforeInput != "ㄸ");

      return;
    }

    if (value == 4) {
      if (beforeInput == "ㅂ") {
        changeLastInput("ㅍ", false);

        return;
      }

      if (beforeInput == "ㅍ") {
        changeLastInput("ㅃ", false);

        return;
      }

      changeLastInput("ㅂ", beforeInput != "ㅃ");

      return;
    }

    if (value == 5) {
      if (beforeInput == "ㅅ") {
        changeLastInput("ㅎ", false);

        return;
      }

      if (beforeInput == "ㅎ") {
        changeLastInput("ㅆ", false);

        return;
      }

      changeLastInput("ㅅ", beforeInput != "ㅆ");

      return;
    }

    if (value == 6) {
      if (beforeInput == "ㅈ") {
        changeLastInput("ㅊ", false);

        return;
      }

      if (beforeInput == "ㅊ") {
        changeLastInput("ㅉ", false);

        return;
      }

      changeLastInput("ㅈ", beforeInput != "ㅉ");

      return;
    }

    if (value == 7) {
      const tmp = [...inputContent];
      tmp.pop();

      setInputContent(tmp);
    }

    if (value == 8) {
      if (beforeInput == "ㅇ") {
        changeLastInput("ㅁ", false);

        return;
      }

      changeLastInput("ㅇ", beforeInput != "ㅁ");

      return;
    }

    if (value == 9) {
      if (beforeInput != "" && beforeInput != "_") {
        setBeforeInput("_");

        return;
      }

      setInputContent([...inputContent, " "]);
      setBeforeInput(" ");
    }
  };

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-[10%] bg-white">
        <Link
          to={`${type == 1 ? "/" : "/chatSelection"}`}
          className="h-full w-[10%] flex text-2xl items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2vw] h-[2vw] fill-[#D9D9D9] mr-2"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M16.041,24,6.534,14.48a3.507,3.507,0,0,1,0-4.948L16.052,0,18.17,2.121,8.652,11.652a.5.5,0,0,0,0,.707l9.506,9.52Z" />
          </svg>
          이전
        </Link>
        <div className="h-full w-[80%] text-2xl font-bold flex items-center justify-center">
          {chatInfo.name}
        </div>
      </div>
      <div className="w-full h-[90%] flex">
        <div className="h-full w-[75%]">
          <div className="h-[85%] w-full bg-[#FFE4E4] overflow-auto">
            <div className="h-[13%] w-full bg-white bg-opacity-90 flex items-center text-sm pl-3 text-[#7F7F7F] my-5 leading-[2]">
              1. 카카오톡ID 또는 개인 연락처를 물어보거나 알려주지 마세요.
              <br />
              2. 앱을 통해서 충분히 대화를 나누고 난뒤 연락처 주고 받으시기
              바랍니다.
            </div>
            <div className="w-full h-full flex flex-col gap-[1vw]">
              {chats.map((chat) => {
                const isAmPm = chat.time.getHours() < 12 ? "AM" : "PM";
                const hour =
                  chat.time.getHours() > 12
                    ? chat.time.getHours() - 12
                    : chat.time.getHours();

                return (
                  <div className="flex h-[10%] w-full justify-end pr-2">
                    <div className="flex-shrink-0 mt-auto mr-2 flex">
                      {`${isAmPm} ${hour}:${chat.time.getMinutes()}`}
                    </div>
                    <div className="bg-[#FFF500] flex items-center justify-center px-3 rounded-xl text-2xl">
                      {Hangul.assemble(chat.content)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-[15%] w-full bg-white flex items-center justify-between">
            <div className="h-[70%] w-[20%] bg-[#FFF500] border-[#7B7B7B] border mx-3 flex items-center justify-center rounded-xl text-2xl font-bold">
              <svg
                className="w-[2vw] h-[2vw] mx-2"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path d="M10,12a1,1,0,0,1-1-1c0-1.054-.68-2-1-2s-1,.946-1,2a1,1,0,0,1-2,0C5,9.108,6.232,7,8,7s3,2.108,3,4A1,1,0,0,1,10,12Zm9-1c0-1.892-1.232-4-3-4s-3,2.108-3,4a1,1,0,0,0,2,0c0-1.054.68-2,1-2s1,.946,1,2a1,1,0,0,0,2,0Zm5,1A12.013,12.013,0,0,0,12,0C-3.9.6-3.893,23.4,12,24A12.013,12.013,0,0,0,24,12Zm-2,0A10.011,10.011,0,0,1,12,22C-1.249,21.5-1.244,2.5,12,2A10.011,10.011,0,0,1,22,12Zm-4.334,3.746a1,1,0,0,0-1.33-1.493,6.36,6.36,0,0,1-8.67,0,1,1,0,0,0-1.332,1.492A9.454,9.454,0,0,0,12,18,9.454,9.454,0,0,0,17.666,15.746Z" />
              </svg>
              이모티콘
            </div>
            <div className="h-[70%] w-[60%] border-[#7B7B7B] border rounded-xl pl-[1vw] py-[1vw]">
              <input
                type="text"
                className="w-full h-full outline-none text-[1.5vw]"
                value={Hangul.assemble(inputContent)}
                onChange={changeInputContent}
              />
            </div>
            <div
              className="h-[70%] w-[15%] bg-[#E6E6E6] border-[#7B7B7B] border mx-3 flex items-center justify-center rounded-xl text-2xl font-bold"
              onClick={addChat}
            >
              전송
            </div>
          </div>
        </div>
        <div className="h-full w-[25%] bg-white border-[#7B7B7B] border">
          <div className="w-full h-[15%] border-[#7B7B7B] border flex items-center justify-center gap-3">
            <div className="w-[65%] h-[80%] border-[#7B7B7B] border pl-[1vw] py-[1vw]">
              <input
                type="text"
                className="w-full h-full outline-none text-[1.5vw]"
                value={Hangul.assemble(inputContent)}
                onChange={changeInputContent}
                disabled
              />
            </div>
            <div
              className="w-[25%] h-[80%] border-[#7B7B7B] border flex items-center justify-center text-[#7B7B7B] bg-[#C9CDD0] rounded-xl"
              onClick={addChat}
            >
              전송
            </div>
          </div>
          <div className="w-full h-[85%] grid grid-cols-3 font-bold">
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent("ㅣ")}
            >
              ㅣ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent("•")}
            >
              •
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent("ㅡ")}
            >
              ㅡ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(1)}
            >
              ㄱ ㅋ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(2)}
            >
              ㄴ ㄹ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(3)}
            >
              ㄷ ㅌ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(4)}
            >
              ㅂ ㅍ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(5)}
            >
              ㅅ ㅎ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(6)}
            >
              ㅈ ㅊ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(7)}
            >
              <svg
                className="w-[2vw] h-[2vw]"
                width="246"
                height="150"
                viewBox="0 0 246 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74.9999 4.9997H246M77.9336 3.82812L3.9336 77.8281M241 141L241 8.9997M246 145L74.9999 145M3.93359 72.1713L77.9336 146.171M120.828 40.1713L189.828 109.171M189.828 40.8281L120.828 109.828"
                  stroke="black"
                  stroke-width="10"
                />
              </svg>
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(8)}
            >
              ㅇ ㅁ
            </div>
            <div
              className="w-full h-full border-[#7B7B7B] border flex items-center justify-center"
              onClick={() => addInputContent(9)}
            >
              <svg
                className="w-[2vw] h-[2vw]"
                width="242"
                height="56"
                viewBox="0 0 242 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 51H242M5 56L5 4.37114e-07M237 0V56"
                  stroke="black"
                  stroke-width="10"
                />
              </svg>
            </div>
            <div className="w-full h-full border-[#7B7B7B] border flex items-center justify-center">
              !@#
            </div>
            <div className="w-full h-full border-[#7B7B7B] border flex items-center justify-center">
              123
            </div>
            <div className="w-full h-full border-[#7B7B7B] border flex items-center justify-center">
              한/영
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
