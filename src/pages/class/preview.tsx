import React, { ReactElement } from "react";
import withAuth from "../../utils/withAuth";

interface Props {}

function preview({}: Props): ReactElement {
  return <>preview</>;
}

export default withAuth(preview);
