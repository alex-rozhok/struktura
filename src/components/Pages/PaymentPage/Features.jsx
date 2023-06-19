import styled from "styled-components";
import { FeaturesItem } from "./FeaturesItem";
import { featureItems } from "../../../mockData";
export const Features = () => {
  return (
    <SC.List>
      {featureItems.map((item, i) => (
        <SC.Item key={i} title={item.title} />
      ))}
    </SC.List>
  );
};

const SC = {
  List: styled.ul``,
  Item: styled(FeaturesItem)`
    position: relative;
    white-space: nowrap;
    button {
      height: 24px;
      padding-left: 40px;
    }
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      top: 0;
      left: 0;
      background: url("./assets/img/icons_sprite.png") -186px -142px no-repeat;
    }
    &:nth-child(2) {
      &::before {
        background-position: -54px -10px;
      }
    }
    &:nth-child(3) {
      &::before {
        background-position: -54px -54px;
      }
    }
    &:nth-child(4) {
      &::before {
        background-position: -186px -10px;
      }
    }
    &:nth-child(5) {
      &::before {
        background-position: -54px -142px;
      }
    }
    &:nth-child(6) {
      &::before {
        background-position: -54px -98px;
      }
    }
    &:nth-child(7) {
      &::before {
        background-position: -10px -142px;
      }
    }
    &:nth-child(8) {
      &::before {
        background-position: -10px -10px;
      }
    }
    &:nth-child(9) {
      &::before {
        background-position: -10px -54px;
      }
    }
    &:nth-child(10) {
      &::before {
        background-position: -98px -10px;
      }
    }
    &:nth-child(11) {
      &::before {
        background-position: -230px -54px;
      }
    }
  `,
};
