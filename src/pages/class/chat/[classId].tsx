import React, { ReactElement } from "react";
import StreamProvider from "../../../context/StreamProvider";
import Video from "../../../components/chat/Video";
import Note from "../../../components/chat/Note";
import withAuth from "../../../utils/withAuth";
import { styled } from "@mui/system";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

interface Props {}

function Chat({}: Props): ReactElement {
  return (
    <StreamProvider>
      <Container>
        <Video />
        <Note docId="idd" />
      </Container>
    </StreamProvider>
  );
}

export default withAuth(Chat);
