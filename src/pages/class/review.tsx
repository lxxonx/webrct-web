import React, { ReactElement } from "react";
import withAuth from "../../utils/withAuth";

interface Props {}

function review({}: Props): ReactElement {
  return <>review</>;
}

export default withAuth(review);
