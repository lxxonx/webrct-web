import React, { ReactChild, ReactElement } from "react";
import NextLink from "next/link";
import { styled } from "@mui/system";

const IconButton = styled("button")`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  height: 30px;
`;
interface IconLinkProps {
  children: ReactChild;
  href: string;
}
const IconLink = ({ children, href }: IconLinkProps): ReactElement => {
  return (
    <NextLink href={href}>
      <IconButton>{children}</IconButton>
    </NextLink>
  );
};
export default IconLink;
