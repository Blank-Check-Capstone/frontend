import React from 'react';

const PaymentOption = ({ src, label }) => {
  return (
    <div className="w-[25vw] h-[32vw] border-t-[0.1vw] border-l-[0.1vw] border-r-[0.2vw] border-b-[0.2vw] border-[#898883] rounded-lg hover:cursor-pointer">
      <div className="flex justify-center items-center w-[25vw] h-[32vw] flex-col">
        <img src={src} className="w-[10vw] h-[10vw] rounded-[50%]" />
        <p className="text-[2.5vw] font-bold mt-[1vw]">{label}</p>
      </div>
    </div>
  );
};

export default PaymentOption;
