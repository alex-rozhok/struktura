import styled from "styled-components";

export const DividerText = ({
  className,
  children,
  color = "#89a6d4",
  lineColor = "#D3E2F9",
}) => {
  return (
    <SC.Container className={className} color={lineColor}>
      <SC.Line></SC.Line>
      <SC.Text color={color}>{children}</SC.Text>
      <SC.Line></SC.Line>
    </SC.Container>
  );
};

const SC = {
  Container: styled.div`
    display: flex;
    align-items: center;
    color: ${({ color }) => color};
  `,
  Line: styled.p`
    flex-grow: 1;
    height: 1px;
    background-color: currentColor;
  `,
  Text: styled.p`
    padding: 0 12px;
    color: ${({ color }) => color};
  `,
};
