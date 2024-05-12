import { Link } from "react-router-dom";

const FunElement = ({ icon, title, uri }) => {
  return (
    <div className="w-full h-[6vw] border-b-2 bg-yellow-50 ">
      <Link
        to={uri}
        className="w-full h-full flex items-center justify-between px-[1vw]"
      >
        <div className="flex items-center gap-[0.5vw]">
          <div className="w-[2.5vw] h-[2.5vw] bg-red-200"></div>
          <div>{title}</div>
        </div>
        <div className="w-[2.5vw] h-[2.5vw] bg-[#f1f1f1] flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.5vw] h-[1.5vw] fill-[#bbbbbb]"
            viewBox="0 0 24 24"
          >
            <path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default FunElement;
