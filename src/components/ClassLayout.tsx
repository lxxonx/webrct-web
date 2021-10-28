import React, { ReactChild, ReactElement, ReactNode, useState } from "react";
import NextLink from "next/link";
import { styled } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import PreviewIcon from "@mui/icons-material/Preview";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DuoIcon from "@mui/icons-material/Duo";
import { Typography } from "@mui/material";
import { useLogoutMutation } from "../generated/graphql";
import { isLoggedInVar } from "../apollo/localstate";

const Wrapper = styled("div")`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #e0f2f1;
`;
const SideBar = styled("aside")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #003d33;
  position: fixed;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  animation: ease 2s linear infinite;
`;

const RouteContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
const SettingContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainPage = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-left: 72px;
`;
const IconButton = styled("button")`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;
interface IconLinkProps {
  children: ReactChild;
  href: string;
  open: boolean;
  name: string;
}
const IconLink = ({
  children,
  href,
  open,
  name,
}: IconLinkProps): ReactElement => {
  return (
    <NextLink href={href}>
      <IconButton style={{ height: "50px" }}>
        {children}
        {open && (
          <Typography
            style={{ color: "white", marginLeft: "8px", fontSize: "16px" }}
          >
            {name}
          </Typography>
        )}
      </IconButton>
    </NextLink>
  );
};

interface Props {
  children: ReactNode;
}
function ClassLayout({ children }: Props): ReactElement {
  const [open, setOpen] = useState(false);
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
    <Wrapper>
      <SideBar
        style={
          open
            ? { animation: " ease 2s linear infinite" }
            : { animation: " ease 2s linear infinite" }
        }
      >
        <RouteContainer>
          <IconLink href="/class/" open={open} name="home">
            <HomeIcon style={{ color: "white" }} />
          </IconLink>
          <IconLink href="/class/preview" open={open} name="preview">
            <PreviewIcon style={{ color: "white" }} />
          </IconLink>
          <IconLink href="/class/chat" open={open} name="chat">
            <DuoIcon style={{ color: "white" }} />
          </IconLink>
          <IconLink href="/class/review" open={open} name="review">
            <RateReviewIcon style={{ color: "white" }} />
          </IconLink>
        </RouteContainer>
        <SettingContainer>
          {open && (
            <IconButton onClick={() => logout()}>
              <Typography
                style={{
                  color: "white",
                  marginRight: "12px",
                  fontSize: "16px",
                }}
              >
                logout
              </Typography>
            </IconButton>
          )}
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <ArrowBackIosNewIcon style={{ color: "white" }} />
            ) : (
              <ArrowForwardIosIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </SettingContainer>
      </SideBar>
      <MainPage>{children}</MainPage>
    </Wrapper>
  );
}

export default ClassLayout;
