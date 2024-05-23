import cardPayment from "../../../assets/images/cardPayment.jpg";
import MoneyIcon from "../../../assets/images/moneyPaymentIcon.png";
import DutchPayIcon from "../../../assets/images/DutchPayIcon.png";
import PaymentOption from "./PaymentOption";
import CancelIcon from "../../CancelIcon";
import OrderCheck from "./OrderCheck";

const paymentList = [
    { image: cardPayment,  label: '카드결제' },
    { image: MoneyIcon, label: '현금결제' },
    { image: DutchPayIcon, label: '더치페이' },
];

const Payment = () => {
    return (
        <div className="w-full h-full">
            {/* 제목 (헤더라인) */}
            <div className="flex justify-center items-center mt-[2.2vw] relative">
                <div className="flex gap-[1.5vw] items-center">
                    <div className="text-[2vw] font-bold">
                        주문
                    </div>
                    <div className="border-[0.11vw] border-black h-[2vw]"></div>
                    <div className="text-[1.5vw] font-light text-[#5F5F5F]">
                        결제방법을 선택하세요
                    </div>
                </div>
                <div className="absolute right-[2vw] w-[3.5vw] h-[3.5vw] hover:cursor-pointer">
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

            <OrderCheck />
        </div>
    );
};

export default Payment;