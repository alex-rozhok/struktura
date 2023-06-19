import styled from "styled-components";
import cn from "classnames";
import { Icon } from "../index";
export const Button = ({
  view = "main",
  children,
  onClick = () => {},
  className,
  type = "button",
  isToggled,
  ...props
}) => {
  return (
    <SC.Button
      className={cn(view, className)}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
      {view === "shevron" && (
        <SC.Shevron className={cn({ toggled: isToggled })} name="Shevron" />
      )}
    </SC.Button>
  );
};

const SC = {
  Button: styled.button`
    position: relative;
    width: 100%;
    padding: 14px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    &:disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    &.main {
      background-color: #2f80ed;
      &:hover {
        background-color: #1968d2;
      }
      &:active {
        background-color: #1658b1;
      }
    }
    &.light {
      background-color: #fff;
      border: 1px solid #e8effa;
      &:hover {
        border-color: #cde4f9;
      }
      &:active {
        background-color: #f8fafd;
        border-color: #cde4f9;
      }
    }
    &.dark {
      background-color: #081d31;
      &:hover {
        background-color: #17324d;
      }
      &:active {
        background-color: #041524;
      }
    }
  `,
  Shevron: styled(Icon)`
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);

    &.toggled {
      transform: translateY(-50%) rotate(180deg);
    }
  `,
};
