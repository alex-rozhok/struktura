import styled from "styled-components";
import { Icon } from "../../index";
import { Features } from "./Features";
import { useTranslation } from "react-i18next";

export const LeftSide = ({ className }) => {
  const { t } = useTranslation();
  return (
    <SC.LeftSide className={className}>
      <SC.IconWrapper>
        <Icon name="BigLogo" />
      </SC.IconWrapper>
      <SC.Text>{t("you_get_all_features")}:</SC.Text>
      <Features />
    </SC.LeftSide>
  );
};

const SC = {
  LeftSide: styled.div``,
  IconWrapper: styled.div`
    margin-bottom: 32px;
    text-align: center;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  Text: styled.p`
    margin-bottom: 30px;
    color: #8a98a9;
    font-size: 18px;
  `,
};
