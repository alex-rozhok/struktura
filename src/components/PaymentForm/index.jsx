import { Button, Icon, DividerText, TextError } from "../index";
import styled from "styled-components";
import { Formik, Form, ErrorMessage, Field } from "formik";
import InputMask from "react-input-mask";
import { useState } from "react";
import * as Yup from "yup";
import cn from "classnames";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const PaymentForm = ({ className }) => {
  const [isAlternative, setIsAlternative] = useState(false);
  const [isCoupon, setIsCoupon] = useState(false);
  const [isPromoCheked, setIsPromoCheked] = useState(null);
  const couponToggleHandler = () => setIsCoupon((prev) => !prev);

  const { t } = useTranslation();

  const handleUseOtherPaymentMethod = (payment) => {
    console.log(`Use ${payment} method`);
  };

  const dateValidation = (values) => {
    const currentDate = new Date();
    const getMonth = (currentDate.getMonth() + 1).toString();
    const currentMonth = getMonth.padStart(2, "0");
    const currentYear = currentDate.getFullYear().toString();

    const [month, year] = values.split("/");

    if (year < currentYear) return false;
    if (month < currentMonth && year === currentYear) return false;

    return true;
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        t("email_invalid")
      )
      .required(t("required")),
    card_number: Yup.string()
      .required(t("required"))
      .nullable()
      .min(19, t("card_number_invalid")),
    card_date: Yup.string()
      .required(t("required"))
      .min(7, t("card_date_incomplete"))
      .test("date-validation", t("card_date_past"), dateValidation),
    card_cvv: Yup.string()
      .required(t("required"))
      .min(3, t("card_cvv_incomplete")),
    card_name: Yup.string().required(t("required")),
  });

  const submitFormHandler = (values) => {
    const body = {
      ...values,
      coupon: isPromoCheked === "success" ? values.coupon : "",
    };

    fetch("/mockFormSubmit", {
      method: "POST",
      body,
    })
      .then(() => {
        if (Math.round(Math.random())) {
          toast.success(t("payment_successfully"), {
            position: "bottom-right",
            autoClose: true,
            closeButton: false,
            closeOnClick: true,
          });
        } else {
          throw new Error(t("something_wrong"));
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: true,
          closeButton: false,
          closeOnClick: true,
        });
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        card_number: "",
        card_date: "",
        card_cvv: "",
        card_name: "",
        coupon: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submitFormHandler}
    >
      {({ values, setFieldValue, errors, touched }) => {
        const couponCheckHandler = () => {
          fetch("/mockCheckCouponAPI", {
            method: "POST",
            body: values.coupon,
          }).then((response) => {
            if (Math.round(Math.random())) {
              setIsPromoCheked("success");
              t("coupon_applied");
              errors.coupon = t("coupon_applied");
            } else {
              setIsPromoCheked("error");
              errors.coupon = t("coupon_invalid");
            }
          });
        };

        const resetPromoHandler = () => {
          setIsPromoCheked(null);
          errors.coupon = "";
          values.coupon = "";
        };

        return (
          <SC.Container className={className}>
            <Button
              view="dark"
              onClick={() => handleUseOtherPaymentMethod("ApplePay")}
            >
              <Icon name="ApplePay" />
            </Button>
            <SC.DividerText>{t("pay_with_card")}</SC.DividerText>
            <SC.Form>
              <SC.Label>
                <SC.LabelText>{t("email_label")}</SC.LabelText>
                <SC.FieldWrapper
                  className={cn("email", {
                    error: !!errors.email && !!touched.email,
                  })}
                >
                  <SC.Field
                    placeholder="examplemail@mail.com"
                    name="email"
                    id="email"
                  />
                </SC.FieldWrapper>
                {errors.email === t("required") ? (
                  <ErrorMessage name="email">
                    {(msg) => <SC.ErrorTop>{msg}</SC.ErrorTop>}
                  </ErrorMessage>
                ) : (
                  <ErrorMessage name="email" component={TextError} />
                )}
              </SC.Label>
              <SC.Label>
                <SC.LabelText>{t("card_information_label")}</SC.LabelText>
                <SC.CardInfo>
                  <SC.FieldWrapper
                    className={cn("card__field", "card__field_number", {
                      error: !!errors.card_number && !!touched.card_number,
                    })}
                  >
                    <InputMask
                      mask="9999 9999 9999 9999"
                      placeholder="0000 0000 0000 0000"
                      maskChar=""
                      name="card_number"
                      onChange={(e) => {
                        setFieldValue("card_number", e.target.value);
                      }}
                    >
                      {(props) => <SC.Field {...props} />}
                    </InputMask>
                    <SC.Icons>
                      <SC.Icon>
                        <img
                          src="./assets/img/mastercard.svg"
                          alt="mastercard"
                        />
                      </SC.Icon>
                      <SC.Icon>
                        <img src="./assets/img/visa.svg" alt="visa" />
                      </SC.Icon>
                      <SC.Icon>
                        <img
                          src="./assets/img/american-express.svg"
                          alt="american express"
                        />
                      </SC.Icon>
                      <SC.Icon>
                        <img src="./assets/img/discover.svg" alt="discover" />
                      </SC.Icon>
                    </SC.Icons>
                  </SC.FieldWrapper>
                  <SC.FieldWrapper
                    className={cn("card__field", "card__field_date", {
                      error: !!errors.card_date && !!touched.card_date,
                    })}
                  >
                    <InputMask
                      mask="99/9999"
                      maskChar=""
                      placeholder="MM/YYYY"
                      name="card_date"
                      value={values.card_date}
                      className={cn({
                        error: !!errors.card_date && !!touched.card_date,
                      })}
                      onChange={(e) => {
                        let value = e.target.value;
                        const [first, second, ...other] = value;
                        if (+first > 1) {
                          value = `0${first}${other}`;
                          setTimeout(() => {
                            e.target.selectionStart = value.length;
                          });
                        }

                        if (+first === 1 && +second > 2) {
                          value = `12${other}`;
                        }
                        setFieldValue("card_date", value);
                      }}
                    >
                      {(props) => <SC.Field {...props} />}
                    </InputMask>
                  </SC.FieldWrapper>
                  <SC.FieldWrapper
                    className={cn("card__field", "card__field_cvv", {
                      error: !!errors.card_cvv && !!touched.card_cvv,
                    })}
                  >
                    <InputMask
                      mask="999"
                      maskChar=""
                      placeholder="CVV"
                      name="card_cvv"
                      onChange={(e) => {
                        setFieldValue("card_cvv", e.target.value);
                      }}
                    >
                      {(props) => <SC.Field {...props} />}
                    </InputMask>
                  </SC.FieldWrapper>
                  <SC.ErrorsWrapper>
                    {errors.card_number === t("required") ? (
                      <ErrorMessage name="card_number">
                        {(msg) => (
                          <SC.ErrorTop className="card-field__error">
                            {msg}
                          </SC.ErrorTop>
                        )}
                      </ErrorMessage>
                    ) : (
                      <ErrorMessage
                        className="card-field__error"
                        name="card_number"
                        component={TextError}
                      />
                    )}
                    {errors.card_date === t("required") ? (
                      <ErrorMessage name="card_date">
                        {(msg) => (
                          <SC.ErrorTop className="card-field__error">
                            {msg}
                          </SC.ErrorTop>
                        )}
                      </ErrorMessage>
                    ) : (
                      <ErrorMessage
                        className="card-field__error"
                        name="card_date"
                        component={TextError}
                      />
                    )}
                    {errors.card_cvv === t("required") ? (
                      <ErrorMessage name="card_cvv">
                        {(msg) => (
                          <SC.ErrorTop className="card-field__error">
                            {msg}
                          </SC.ErrorTop>
                        )}
                      </ErrorMessage>
                    ) : (
                      <ErrorMessage
                        className="card-field__error"
                        name="card_cvv"
                        component={TextError}
                      />
                    )}
                  </SC.ErrorsWrapper>
                </SC.CardInfo>
              </SC.Label>
              <SC.Label>
                <SC.LabelText>{t("card_name_label")}</SC.LabelText>
                <SC.FieldWrapper
                  className={cn("card__field", "card__field_name", {
                    error: !!errors.card_name && !!touched.card_name,
                  })}
                >
                  <SC.Field
                    placeholder={t("card_name_placeholder")}
                    name="card_name"
                  />
                </SC.FieldWrapper>
                <ErrorMessage name="card_name">
                  {(msg) => (
                    <SC.ErrorTop className="card-field__error">
                      {msg}
                    </SC.ErrorTop>
                  )}
                </ErrorMessage>
              </SC.Label>
              <SC.PromoButton onClick={couponToggleHandler} type="button">
                {isCoupon ? t("have_no_coupon") : t("have_coupon")}
              </SC.PromoButton>
              {isCoupon && (
                <SC.PromoFieldWrapper>
                  <SC.Field
                    className="promo__field"
                    placeholder={t("promo_placeholder")}
                    name="coupon"
                    readOnly={isPromoCheked}
                  />
                  <SC.PromoControl>
                    {!isPromoCheked ? (
                      <SC.PromoApply
                        disabled={!values.coupon}
                        type="button"
                        onClick={couponCheckHandler}
                      >
                        {t("apply")}
                      </SC.PromoApply>
                    ) : isPromoCheked === "error" ? (
                      <SC.IconTrash name="Trash" onClick={resetPromoHandler} />
                    ) : (
                      <Icon name="RoundCheck" />
                    )}
                  </SC.PromoControl>

                  <SC.PromoTextError
                    className={cn({ success: isPromoCheked === "success" })}
                  >
                    {errors.coupon}
                  </SC.PromoTextError>
                </SC.PromoFieldWrapper>
              )}
              <Button type="submit">{t("submit_order")}</Button>
              <SC.DividerText>{t("or_alternative_methods")}</SC.DividerText>
              <Button
                onClick={() => setIsAlternative((prev) => !prev)}
                view="shevron"
                isToggled={isAlternative}
              >
                <SC.AlternativeIcons>
                  <Icon color={isAlternative ? "#E2ECFB" : ""} name="PayPal" />
                  <Icon color={isAlternative ? "#E2ECFB" : ""} name="Bitcoin" />
                </SC.AlternativeIcons>
              </Button>

              {isAlternative && (
                <>
                  <SC.PayPalButton
                    view="light"
                    onClick={() => handleUseOtherPaymentMethod("PayPal")}
                  >
                    <Icon name="PayPal" />
                  </SC.PayPalButton>
                  <Button
                    view="light"
                    onClick={() => handleUseOtherPaymentMethod("Bitcoin")}
                  >
                    <Icon name="Bitcoin" />
                  </Button>
                </>
              )}
            </SC.Form>
          </SC.Container>
        );
      }}
    </Formik>
  );
};

const SC = {
  PromoFieldWrapper: styled.div`
    margin-bottom: 30px;
    position: relative;
    .promo__field {
      padding-left: 16px;
      padding-right: 60px;
    }
  `,
  PromoTextError: styled(TextError)`
    bottom: -20px;
  `,
  PromoControl: styled.div`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  `,
  PromoApply: styled.button`
    color: #2f80ed;
    font-size: 14px;
    font-weight: 700;
    &:disabled {
      color: #c4d3eb;
    }
  `,
  Container: styled.div`
    padding: 16px;
    margin: 0 -16px;
    background-color: #fff;
    border: 1px solid #d3e2f9;
    border-radius: 4px;

    @media (min-width: 768px) {
      margin: 0;
      padding: 24px;
    }
  `,
  DividerText: styled(DividerText)`
    margin: 20px 0;
  `,
  Form: styled(Form)``,
  Field: styled(Field)`
    width: 100%;
    padding: 12px 12px 12px 36px;
    border-radius: 4px;
    border: 1px solid #d3e2f9;
    outline: transparent;
    font-size: 14px;
    &:focus {
      border-color: #4376a6;
    }

    @media (min-width: 768px) {
      padding: 12px 12px 12px 52px;
    }
  `,
  FieldWrapper: styled.div`
    position: relative;
    &:focus-within {
      z-index: 10;
    }
    &.error {
      z-index: 10;
      input {
        border-color: #eb5757;
      }
    }
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: url("./assets/img/fields_sprite.png") no-repeat;
      @media (min-width: 768px) {
        left: 17px;
      }
    }
    &.email {
      &::before {
        background-position: -50px -48px;
      }
    }
    &.card__field {
      &_date {
        &::before {
          background-position: -10px -10px;
        }
      }
      &_number {
        input {
          padding-right: 100px;
          @media (min-width: 768px) {
            padding-right: 130px;
          }
        }
        &::before {
          background-position: -50px -10px;
        }
      }
      &_cvv {
        &::before {
          width: 16px;
          height: 16px;
          background-position: -90px -10px;
        }
      }
      &_name {
        &::before {
          background-position: -10px -50px;
        }
      }
    }
  `,
  Label: styled.label`
    display: block;
    position: relative;
    padding-bottom: 20px;
  `,
  LabelText: styled.span`
    display: inline-block;
    margin-bottom: 12px;
    color: #2e3c49;
    font-size: 12px;
    cursor: pointer;
  `,
  CardInfo: styled.div`
    display: flex;
    flex-wrap: wrap;

    .card__field {
      width: 50%;
      &_number {
        width: 100%;
        margin-bottom: -1px;
        input {
          border-radius: 4px 4px 0 0;
        }
      }
      &:nth-child(2) {
        input {
          border-radius: 0 0 0 4px;
        }
      }
      &:nth-child(3) {
        input {
          border-radius: 0 0 4px 0;
        }
      }
    }
  `,
  Icons: styled.ul`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 2px;
    @media (min-width: 768px) {
      right: 25px;
      gap: 8px;
    }
  `,
  Icon: styled.li``,
  PromoButton: styled.button`
    margin-bottom: 16px;
    color: #2e3c49;
    font-size: 12px;
    font-weight: 500;
    text-decoration: underline;
    text-transform: uppercase;
    &:hover {
      color: #2f80ed;
    }
  `,
  AlternativeIcons: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `,
  PayPalButton: styled(Button)`
    margin-bottom: 16px;
  `,
  ErrorsWrapper: styled.div`
    .card-field__error ~ .card-field__error {
      display: none;
    }
  `,
  ErrorTop: styled(TextError)`
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
  `,
  IconTrash: styled(Icon)`
    cursor: pointer;
  `,
};
