import { useState } from "react";
import styled from "styled-components";
import { Container, PaymentForm } from "../../index";
import { StepList } from "../../StepList";
import { steps } from "../../../mockData";
import { LeftSide } from "./LeftSide";
import { useTranslation } from "react-i18next";

export const PaymentPage = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(4);
  const [isRenewal, setIsRenewal] = useState(true);
  const toggleRenewalHandler = () => setIsRenewal((prev) => !prev);

  const { t } = useTranslation();

  return (
    <SC.Main className={className}>
      <Container>
        <SC.StepList steps={steps} currentStep={currentStep} />
        <SC.Content>
          <SC.LeftSide className="mobile_bg" />
          <SC.MainSide>
            <SC.Title>{t("finish_order_title")}</SC.Title>
            <SC.OrderDetails>
              <SC.OrderDetailsItem>
                <SC.ItemProperty>{t("plan")}</SC.ItemProperty>
                <SC.ItemValue className="plan">{t("full_pack")}</SC.ItemValue>
              </SC.OrderDetailsItem>
              <SC.OrderDetailsItem>
                <SC.ItemProperty>{t("subscription_period")}</SC.ItemProperty>
                <SC.ItemValue>{t("count_months", { months: 3 })}</SC.ItemValue>
              </SC.OrderDetailsItem>
              <SC.OrderDetailsItem>
                <SC.ItemProperty>{t("one_month_price")}</SC.ItemProperty>
                <SC.ItemValue className="price">$ 29.99</SC.ItemValue>
              </SC.OrderDetailsItem>
            </SC.OrderDetails>
            <SC.PaymentForm />
            <SC.Renewal>
              {t("auto_renewal")}:{" "}
              <SC.RenewalButton onClick={toggleRenewalHandler}>
                {isRenewal ? t("on") : t("off")}
              </SC.RenewalButton>
            </SC.Renewal>
            <SC.Agreement data-i18n="[html]content.body">
              {t("by_clicking")}
              <SC.AgreementLink href="#">
                {t("terms_of_service")}
              </SC.AgreementLink>{" "}
              {t("ampersand")}{" "}
              <SC.AgreementLink href="#">
                {t("recurring_policy")}
              </SC.AgreementLink>{" "}
              as {t("as_well_as")}
              <SC.AgreementLink href="#">
                {t("refund_policy")}
              </SC.AgreementLink>{" "}
              {t("ampersand")}{" "}
              <SC.AgreementLink href="#">
                {t("legal_disclaimer")}
              </SC.AgreementLink>
              .
            </SC.Agreement>
            <SC.Icons>
              <SC.IconItem>
                <img src="./assets/img/visa_secure.png" alt="visa secure" />
              </SC.IconItem>
              <SC.IconItem>
                <img
                  src="./assets/img/mastercard_secure.png"
                  alt="mastercard secure"
                />
              </SC.IconItem>
              <SC.IconItem>
                <img src="./assets/img/ssl_secure.png" alt="ssl secure" />
              </SC.IconItem>
              <SC.IconItem>
                <img src="./assets/img/mcafee_secure.png" alt="mcafee secure" />
              </SC.IconItem>
              <SC.IconItem>
                <img src="./assets/img/norton_secure.png" alt="norton secure" />
              </SC.IconItem>
            </SC.Icons>
          </SC.MainSide>
          <SC.RightSide className="mobile_bg">
            {t("right_side_text")}
          </SC.RightSide>
        </SC.Content>
      </Container>
    </SC.Main>
  );
};

const SC = {
  Main: styled.main`
    padding: 16px 0 40px;
    background-color: #f8fafd;

    .mobile_bg {
      @media (max-width: 767px) {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #c0d4f3;
        padding: 24px 16px;
      }
    }
  `,
  StepList: styled(StepList)`
    margin-bottom: 30px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `,
  LeftSide: styled(LeftSide)`
    margin-top: 24px;
    @media (min-width: 768px) {
      width: 25%;
      margin: 0;
    }
  `,
  RightSide: styled.div`
    margin-top: 16px;
    @media (min-width: 768px) {
      margin-top: 45px;
      width: 22%;
    }
  `,
  MainSide: styled.div`
    order: -1;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      order: 0;
      flex-grow: 1;
      padding: 0 20px;
    }
    @media (min-width: 1024px) {
      padding: 0 24px 0 10%;
    }
  `,
  PaymentForm: styled(PaymentForm)``,
  Title: styled.h2`
    margin-bottom: 25px;
    text-align: center;
    color: #081d31;
    font-size: 20px;
    font-weight: 600;
  `,
  OrderDetails: styled.ul``,
  OrderDetailsItem: styled.li`
    display: flex;
    justify-content: space-between;
    margin-block-end: 15px;
  `,
  ItemProperty: styled.span`
    font-size: 13px;
    font-weight: 300;
    color: #37465d;
  `,
  ItemValue: styled.span`
    font-size: 15px;
    color: #081d31;

    &.plan {
      font-weight: 600;
    }
    &.price {
      color: #00c4c4;
      font-weight: 500;
    }
  `,
  Renewal: styled.p`
    margin: 24px 0 16px;
    text-align: center;
  `,
  RenewalButton: styled.button`
    color: #2f80ed;
    &:hover {
      text-decoration: underline;
    }
  `,
  Agreement: styled.p`
    color: #708098;
    font-size: 12px;
    @media (max-width: 768px) {
      text-align: center;
      order: 1;
      margin-top: 16px;
      font-size: 13px;
    }
    a {
      color: #37465d;
      text-decoration: underline;

      &:hover {
        color: #2f80ed;
      }
    }
  `,
  AgreementLink: styled.a`
    color: #37465d;
    text-decoration: underline;

    &:hover {
      color: #2f80ed;
    }
  `,
  Icons: styled.ul`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  `,
  IconItem: styled.li``,
};
