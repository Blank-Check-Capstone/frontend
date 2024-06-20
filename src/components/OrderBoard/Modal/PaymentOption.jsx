import React from "react";

const PaymentOption = ({ src, label, onClick }) => {
  return (
    <div
      className="w-[20vw] h-full border-t-[0.1vw] border-l-[0.1vw] border-r-[0.2vw] border-b-[0.2vw] border-[#898883] rounded-lg hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full flex-col">
        <img src={src} className="w-[10vw] h-[10vw] rounded-[50%]" />
        <p className="text-[2.5vw] font-bold mt-[1vw] pl-[1vw]">{label}</p>
      </div>
    </div>
  );
};

export default PaymentOption;
