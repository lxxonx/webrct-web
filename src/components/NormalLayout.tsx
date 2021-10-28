import { styled } from "@mui/system";
import React, { ReactElement, ReactNode } from "react";

const Container = styled("div")``;

const Nav = styled("nav")`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #b71c1c;
  width: 100%;
  padding: 12px;
`;
const Content = styled("div")`
  height: 200vh;
`;
interface Props {
  children: ReactNode;
}

function NormalLayout({ children }: Props): ReactElement {
  return (
    <Container>
      <Nav>div div</Nav>
      <Content>{children}</Content>
    </Container>
  );
}

export default NormalLayout;
