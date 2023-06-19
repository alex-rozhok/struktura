import styled from "styled-components";

export const Container = ({ children, className }) => (
  <SC.Container className={className}>{children}</SC.Container>
);

const SC = {
  Container: styled.div`
    max-width: 1132px;
    margin: 0 auto;
    padding: 0 16px;
  `,
};
