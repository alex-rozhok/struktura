import { useState } from "react";
import styled from "styled-components";

export const FeaturesItem = ({ title, className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SC.Item className={className}>
      <SC.Button onClick={() => setIsActive((prev) => !prev)}>
        {title}
      </SC.Button>
      <SC.InnerList className={isActive ? "active" : ""} isActive={isActive}>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
        <SC.InnerItem>
          <SC.Link target="_blank" href="#"></SC.Link>
        </SC.InnerItem>
      </SC.InnerList>
    </SC.Item>
  );
};

const SC = {
  Item: styled.li`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 16px;
    color: #2e3c49;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  `,
  InnerList: styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    gap: 10px 20px;
    overflow: hidden;

    &:not(.active) {
      display: none;
    }
  `,
  Button: styled.button`
    position: relative;
  `,
  Link: styled.a`
    display: inline-block;
    width: 100%;
    height: 100%;
  `,
  InnerItem: styled.li`
    width: 24px;
    height: 24px;
    background: url("./assets/img/icons_sprite.png") -186px -186px no-repeat;
    &:nth-child(2) {
      background-position: -186px -98px;
    }
    &:nth-child(3) {
      background-position: -186px -54px;
    }
    &:nth-child(4) {
      background-position: -142px -186px;
    }
    &:nth-child(5) {
      background-position: -230px -142px;
    }
    &:nth-child(6) {
      background-position: -10px -98px;
    }
    &:nth-child(7) {
      background-position: -98px -186px;
    }
    &:nth-child(8) {
      background-position: -10px -186px;
    }
    &:nth-child(9) {
      background-position: -54px -186px;
    }
    &:nth-child(10) {
      background-position: -230px -98px;
    }
    &:nth-child(11) {
      background-position: -142px -98px;
    }
    &:nth-child(12) {
      background-position: -98px -142px;
    }
    &:nth-child(13) {
      background-position: -142px -54px;
    }
    &:nth-child(14) {
      background-position: -98px -98px;
    }
    &:nth-child(15) {
      background-position: -142px -10px;
    }
    &:nth-child(16) {
      background-position: -142px -142px;
    }
    &:nth-child(17) {
      background-position: -230px -10px;
    }
    &:nth-child(18) {
      background-position: -98px -54px;
    }
  `,
};
