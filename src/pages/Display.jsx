import { useState } from "react";

const Display = () => {
  const [nowType, setNowType] = useState(1);

  return (
    <div>
      <iframe
        src={`/?type=${nowType}`}
        frameborder="0"
        className="w-[50vw] h-[30vw]"
      ></iframe>
      <button onClick={() => setNowType(1)}>1번</button>
      <button onClick={() => setNowType(2)}>2번</button>
    </div>
  );
};

export default Display;
