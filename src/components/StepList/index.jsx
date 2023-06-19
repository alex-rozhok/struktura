import styled from "styled-components";
import { Icon } from "../index";

export const StepList = ({ steps, currentStep, className }) => {
  return (
    <SC.List className={className}>
      {steps.map((step) => (
        <SC.Item key={step.number} count={steps.length}>
          <SC.Round isActive={currentStep === step.number}>
            {step.number < currentStep ? <Icon name="Check" /> : step.number}
          </SC.Round>
        </SC.Item>
      ))}
    </SC.List>
  );
};

const SC = {
  List: styled.ul`
    display: flex;
    align-items: center;
  `,
  Item: styled.li`
    &:not(:last-child) {
      width: ${({ count }) => `calc(100% / ${count - 1})`};
      position: relative;
      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 48px);
        top: 50%;
        left: 36px;
        transform: translateY(-50%);
        background-color: #abc7ec;
      }
    }
  `,
  Round: styled.span`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1;
    color: ${({ isActive }) => (isActive ? "#fff" : "#2f80ed")};
    background-color: ${({ isActive }) =>
      isActive ? "#2f80ed" : "transparent"};
    border: 1px solid #2f80ed;
    border-radius: 50%;
  `,
};
