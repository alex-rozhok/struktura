import styled from "styled-components";
import { Container, Icon } from "../index";
import { useTranslation } from "react-i18next";
import cn from "classnames";

export const Header = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <SC.Header>
      <Container>
        <SC.Row>
          <Icon name="Logo" />
          <SC.LanguageList>
            <SC.LanguageItem>
              <SC.LanguageButton
                className={cn({ active: language === "en" })}
                onClick={() => changeLanguage("en")}
              >
                En
              </SC.LanguageButton>
            </SC.LanguageItem>
            <SC.LanguageItem>
              <SC.LanguageButton
                className={cn({ active: language === "ua" })}
                onClick={() => changeLanguage("ua")}
              >
                Ua
              </SC.LanguageButton>
            </SC.LanguageItem>
          </SC.LanguageList>
        </SC.Row>
      </Container>
    </SC.Header>
  );
};

const SC = {
  Header: styled.header`
    position: relative;
    padding: 22px 0;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(131, 144, 193, 0.25);
  `,
  Row: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  LanguageList: styled.ul`
    display: flex;
    align-items: center;
  `,
  LanguageItem: styled.li`
    padding: 0 5px;
  `,
  LanguageButton: styled.button`
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #00c4c4;
      text-decoration: none;
    }
  `,
};
