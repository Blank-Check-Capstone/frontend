import cardPayment from "../../../assets/images/cardPayment.jpg";
import MoneyIcon from "../../../assets/images/moneyPaymentIcon.png";
import DutchPayIcon from "../../../assets/images/DutchPayIcon.png";
import PaymentOption from "./PaymentOption";
import CancelIcon from "../../CancelIcon";

const paymentList = [
  { image: cardPayment, label: "카드결제" },
  { image: MoneyIcon, label: "현금결제" },
  { image: DutchPayIcon, label: "더치페이" },
];

const Payment = ({ closePaymentModal }) => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center z-20">
      <div className="w-[80%] h-[75%] flex flex-col rounded-lg bg-white relative z-[2]">
        {/* 제목 (헤더라인) */}
        <div className="flex justify-center items-center mt-[2.2vw] relative">
          <div className="flex gap-[1.5vw] items-center">
            <div className="text-[2vw] font-bold">주문</div>
            <div className="border-[0.11vw] border-black h-[2vw]"></div>
            <div className="text-[1.5vw] font-light text-[#5F5F5F]">
              결제방법을 선택하세요
            </div>
          </div>
          <div
            className="absolute right-[2vw] w-[3.5vw] h-[3.5vw] hover:cursor-pointer"
            onClick={closePaymentModal}
          >
            <CancelIcon />
          </div>
        </div>

        {/* 결제류 */}
        <div className="flex justify-center items-center gap-[2vw] mt-[4vw]">
          {paymentList.map((payment, index) => (
            <PaymentOption
              key={index}
              src={payment.image}
              label={payment.label}
            />
          ))}
        </div>

      </div>
      <div
        className="w-full h-full bg-black opacity-40 absolute top-0 left-0 z-[1]"
        onClick={closePaymentModal}
      ></div>
    </div>
  );
};

export default Payment;
