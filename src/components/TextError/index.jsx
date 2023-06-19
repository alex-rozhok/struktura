import React from "react";
import styled from "styled-components";

export const TextError = ({ children, className }) => (
  <SC.Error className={className}>{children}</SC.Error>
);

const SC = {
  Error: styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    color: #eb5757;
    &.success {
      color: #00ae71;
    }
  `,
};
