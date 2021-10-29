import { useReactiveVar } from "@apollo/client";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { ReactElement, ReactNode } from "react";
import { isLoggedInVar } from "../apollo/localstate";
import { useLogoutMutation } from "../generated/graphql";
import IconLink from "../styles/IconLink";

const Container = styled("div")``;

const Nav = styled("nav")`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #b71c1c;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled("div")`
  display: flex;
  align-items: center;
  & button:not(:last-child) {
    margin-right: 24px;
  }
`;

const Content = styled("div")``;

interface Props {
  children: ReactNode;
}

function NormalLayout({ children }: Props): ReactElement {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [logoutMutation] = useLogoutMutation();
  const logout = async () => {
    try {
      const { data } = await logoutMutation();
      if (data?.logout) {
        isLoggedInVar(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Nav>
        <LinkWrapper>
          <IconLink href="/">
            <Typography variant="h3" color="white">
              범
            </Typography>
          </IconLink>
          <IconLink href="/feed">
            <Typography variant="button" color="white">
              contents
            </Typography>
          </IconLink>
        </LinkWrapper>
        <LinkWrapper>
          {isLoggedIn ? (
            <>
              <IconLink href="/schedule">
                <Typography variant="button" color="white">
                  schedule
                </Typography>
              </IconLink>
              <IconLink href="/class">
                <Typography variant="button" color="white">
                  class
                </Typography>
              </IconLink>
              <Typography
                onClick={() => logout()}
                variant="button"
                color="white"
                style={{ cursor: "pointer" }}
              >
                logout
              </Typography>
            </>
          ) : (
            <>
              <IconLink href="/login">
                <Typography variant="button" color="white">
                  login
                </Typography>
              </IconLink>
              <IconLink href="/student/create">
                <Typography variant="button" color="white">
                  create user
                </Typography>
              </IconLink>
            </>
          )}
        </LinkWrapper>
      </Nav>
      <Content>{children}</Content>
    </Container>
  );
}

export default NormalLayout;
