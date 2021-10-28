import { styled } from "@mui/system";
import React, { ReactElement } from "react";
import { useStream } from "../../context/StreamProvider";

interface Props {}

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 30vh;
  width: 100%;
`;
const VideoWrapper = styled("div")`
  display: flex;
  height: 100%;
`;
function Video({}: Props): ReactElement {
  const {
    userVideo,
    peerVideo,
    callUser,
    answerCall,
    callAccepted,
    callEnded,
    callReceived,
    leaveCall,
    toggleAudio,
  } = useStream();
  return (
    <Container>
      <VideoWrapper>
        {userVideo && (
          <video
            playsInline
            autoPlay
            style={{ width: "100%", height: "100%" }}
            ref={userVideo}
            className="myvid"
          ></video>
        )}
        {peerVideo && (
          <video
            playsInline
            autoPlay
            style={{ width: "100%", height: "100%" }}
            className="peervid"
            ref={peerVideo}
          ></video>
        )}
      </VideoWrapper>
      <div>
        {callAccepted && !callEnded ? (
          <button
            onClick={() => {
              leaveCall();
            }}
          >
            Hang Up
          </button>
        ) : (
          <button
            onClick={() => {
              callUser();
            }}
          >
            Call
          </button>
        )}
        <button
          onClick={() => {
            toggleAudio();
          }}
        >
          mute
        </button>
        {callReceived && (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              onClick={() => {
                answerCall();
              }}
            >
              Answer
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Video;
