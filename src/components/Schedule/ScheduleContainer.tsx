import { useReactiveVar } from "@apollo/client";
import { styled } from "@mui/system";
import dayjs from "dayjs";
import React, { ReactElement, useState } from "react";
import { meVar } from "../../apollo/localstate";
import { useGetClassesQuery } from "../../generated/graphql";
import style from "./schedule.module.scss";
import ScheduleRow from "./ScheduleRow";

const Container = styled("div")`
  width: 100%;
  background-color: #ffebee;
  flex: 8;
  position: relative;
`;
const ScheduleHeader = styled("div")`
  display: flex;
  width: 100%;
  height: 60px;
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
  border-collapse: collapse;
`;

const IndexColumn = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
`;

interface Props {
  onChange: Function;
  date: Date;
}

function ScheduleContainer({ date, onChange }: Props): ReactElement {
  const isTutor = useReactiveVar(meVar)?.__typename === "Tutor";
  const [halfMin] = useState(new Array(48).fill(0));
  const [initTime] = useState(new Date());
  initTime.setHours(0, 0, 0, 0);

  const { data } = useGetClassesQuery({
    variables: {
      monday: dayjs(date).startOf("week").add(1, "day").toDate(),
    },
  });

  const add30Mins = () => {
    if (initTime.getMinutes() === 0) {
      initTime.setHours(initTime.getHours(), 30, 0, 0);
    } else {
      initTime.setHours(initTime.getHours() + 1, 0, 0, 0);
    }
  };
  const getTime = () => {
    const time =
      initTime.getHours() + ":" + (initTime.getMinutes() === 0 ? "00" : "30");
    add30Mins();
    return time;
  };

  const getWeek = () => {
    return [
      dayjs(date).startOf("week").add(1, "day"),
      dayjs(date).startOf("week").add(2, "day"),
      dayjs(date).startOf("week").add(3, "day"),
      dayjs(date).startOf("week").add(4, "day"),
      dayjs(date).startOf("week").add(5, "day"),
      dayjs(date).startOf("week").add(6, "day"),
      dayjs(date).startOf("week").add(7, "day"),
    ];
  };

  return (
    <Container>
      <ScheduleHeader>
        <div className={style.header}>index</div>
        <div className={style.header}>mon {getWeek()[0].date()}</div>
        <div className={style.header}>tue {getWeek()[1].date()}</div>
        <div className={style.header}>wed {getWeek()[2].date()}</div>
        <div className={style.header}>thu {getWeek()[3].date()}</div>
        <div className={style.header}>fri {getWeek()[4].date()}</div>
        <div className={style.header}>sat {getWeek()[5].date()}</div>
        <div className={style.header}>sun {getWeek()[6].date()}</div>
      </ScheduleHeader>
      <BodyContainer>
        <IndexColumn className="index">
          <div
            style={{
              flex: "8",
              marginTop: "-25px",
            }}
          >
            {halfMin.map((_, i) =>
              i === 0 ? (
                <div
                  className={style.cell}
                  key={i}
                  style={{ color: "transparent" }}
                >
                  {getTime()}
                </div>
              ) : (
                <div className={style.cell} key={i}>
                  {getTime()}
                </div>
              )
            )}
          </div>
          <table className={[style.wrapper, style.ex].join(" ")}>
            <tbody>
              {halfMin.map((_, i) => (
                <tr className={style.row} key={i}>
                  <td
                    className={[style.cell, style.ex, style.outline].join(" ")}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </IndexColumn>
        <table className={[style.wrapper, style.main].join(" ")}>
          <tbody>
            {halfMin.map((_, i) => {
              return (
                <ScheduleRow
                  key={i}
                  date={date}
                  time={getTime()}
                  onChange={onChange}
                  getWeek={getWeek}
                />
              );
            })}
          </tbody>
        </table>
      </BodyContainer>
    </Container>
  );
}

export default ScheduleContainer;
