import React, { ReactElement, ReactNode, useState } from "react";
import { styled } from "@mui/system";
import withAuth from "../utils/withAuth";

const Container = styled("div")`
  display: flex;
`;
const TutorList = styled("div")`
  flex: 2;
`;
const ScheduleContainer = styled("div")`
  width: 100%;
  background-color: #ffebee;
  flex: 8;
`;
const ScheduleHeader = styled("div")`
  display: flex;
  width: 100%;
  height: 60px;
`;
const HeaderCell = styled("div")`
  flex: 1;
  text-align: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom: 4px solid brown;
  background-color: grey;
  color: white;
  border-right: 2px solid brown;
  border-left: 2px solid brown;

  &:last-child {
    border-right: 4px solid brown;
  }
  &:first-child {
    border-left: 4px solid brown;
  }
`;
const BodyContainer = styled("div")`
  display: flex;
  height: calc(100vh - 114px);
  overflow-y: scroll;
`;
const ScheduleBody = styled("table")`
  flex: 7;
  height: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;
const BodyRow = styled("tr")``;
const BodyCell = styled("td")`
  border: 1px solid white;
  min-width: 12px;
  width: 1/7;
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
const IndexColumn = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 3;
`;

interface BodyProps {}

const Body = ({}: BodyProps) => {
  return (
    <BodyRow>
      <BodyCell className="mon" />
      <BodyCell className="tue" />
      <BodyCell className="wed" />
      <BodyCell className="thu" />
      <BodyCell className="fri" />
      <BodyCell className="sat" />
      <BodyCell className="sun" />
    </BodyRow>
  );
};

interface Props {}

function Schedule({}: Props): ReactElement {
  const [halfMin] = useState(new Array(48).fill(0));
  const [initTime] = useState(new Date());
  initTime.setHours(0, 0, 0, 0);

  const add30Mins = () => {
    if (initTime.getMinutes() === 0) {
      initTime.setHours(initTime.getHours(), 30, 0, 0);
    } else {
      // getMinutes() === 30 min?
      initTime.setHours(initTime.getHours() + 1, 0, 0, 0);
    }
  };
  const getTime = () => {
    add30Mins();
    const time =
      initTime.getHours() + ":" + (initTime.getMinutes() === 0 ? "00" : "30");
    return time;
  };
  return (
    <Container>
      <TutorList>div</TutorList>
      <ScheduleContainer>
        <ScheduleHeader>
          <div style={{ flex: "1", position: "relative", zIndex: 1 }}>
            index
          </div>
          <HeaderCell>mon</HeaderCell>
          <HeaderCell>tue</HeaderCell>
          <HeaderCell>wed</HeaderCell>
          <HeaderCell>thu</HeaderCell>
          <HeaderCell>fri</HeaderCell>
          <HeaderCell>sat</HeaderCell>
          <HeaderCell>sun</HeaderCell>
        </ScheduleHeader>
        <BodyContainer>
          <IndexColumn className="index">
            <div
              style={{
                width: "100%",
                height: "100%",
                flex: "8",
                marginTop: "25px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {halfMin.map((index) => {
                return (
                  <div
                    style={{
                      height: "50px",
                      lineHeight: "50px",
                      textAlign: "center",
                    }}
                    key={index}
                  >
                    {getTime()}
                  </div>
                );
              })}
            </div>
            <table
              style={{
                borderCollapse: "collapse",
                flex: "2",
                height: "100%",
              }}
            >
              {halfMin.map((index) => {
                return (
                  <BodyRow key={index}>
                    <td
                      style={{
                        border: "1px solid white",
                        borderLeft: "none",
                        borderRight: "none",
                        height: "50px",
                        width: "100%",
                      }}
                    ></td>
                  </BodyRow>
                );
              })}
            </table>
          </IndexColumn>
          <ScheduleBody>
            {halfMin.map((index) => {
              return <Body key={index} />;
            })}
          </ScheduleBody>
        </BodyContainer>
      </ScheduleContainer>
    </Container>
  );
}

export default withAuth(Schedule);
