import cardPayment from "../../../assets/images/cardPayment.jpg";
import MoneyIcon from "../../../assets/images/moneyPaymentIcon.png";
import DutchPayIcon from "../../../assets/images/DutchPayIcon.png";
import PaymentOption from "./PaymentOption";
import CancelIcon from "../../CancelIcon";
import YesNoModal from "./YesNoModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Payment = ({ closePaymentModal, purchase, purchaseDutchPay }) => {
  const [isCardConfirmModalShow, setIsCardConfirmModalShow] = useState(false);
  const [isCashConfirmModalShow, setIsCashConfirmModalShow] = useState(false);

  const navigate = useNavigate();

  const showCardConfirmModal = () => {
    setIsCardConfirmModalShow(true);
  };

  const closeCardConfirmModal = () => {
    setIsCardConfirmModalShow(false);
  };

  const showCashConfirmModal = () => {
    setIsCashConfirmModalShow(true);
  };

  const closeCashConfirmModal = () => {
    setIsCashConfirmModalShow(false);
  };

  const moveDutchPay = () => {
    navigate("/dutchpay");
  };

  const paymentList = [
    {
      image: cardPayment,
      label: t("카드결제"),
      onClick: showCardConfirmModal,
    },
    {
      image: MoneyIcon,
      label: t("현금결제"),
      onClick: showCashConfirmModal,
    },
    {
      image: DutchPayIcon,
      label: t("더치페이"),
      onClick: moveDutchPay,
    },
  ];

  return (
    <div className="w-full h-full fixed flex justify-center items-center z-20">
      {isCardConfirmModalShow && (
        <YesNoModal
          title={t("카드결제 후 주문변경 및 카드변경/취소 불가합니다.")}
          content={t("계속 진행하시겠습니까?")}
          onYesClick={() => {
            purchase(true);
          }}
          closeModal={closeCardConfirmModal}
        />
      )}
      {isCashConfirmModalShow && (
        <YesNoModal
          title={t("주문 하시겠습니까?")}
          content={t("직원이 직접 결제 받으러 옵니다. 결제 준비 해주세요.")}
          onYesClick={() => {
            purchase(false);
          }}
          closeModal={closeCashConfirmModal}
        />
      )}
      <div className="w-[80%] h-[75%] flex flex-col justify-center gap-[2vw] rounded-lg bg-white relative z-[2] p-[4vw]">
        {/* 제목 (헤더라인) */}
        <div className="flex justify-center items-center relative">
          <div className="flex gap-[1.5vw] items-center">
            <div className="text-[2vw] font-bold">{t("주문")}</div>
            <div className="border-[0.11vw] border-black h-[2vw]"></div>
            <div className="text-[1.5vw] font-light text-[#5F5F5F]">
              {t("결제방법을 선택하세요")}
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
        <div className="flex h-full justify-center items-center gap-[2vw]">
          {paymentList.map((payment, index) => (
            <PaymentOption
              key={index}
              src={payment.image}
              label={payment.label}
              onClick={payment.onClick}
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
