import { useReactiveVar } from "@apollo/client";
import { Dayjs } from "dayjs";
import React, { MouseEventHandler } from "react";
import { meVar } from "../../apollo/localstate";
import { useCreateClassMutation } from "../../generated/graphql";
import style from "./schedule.module.scss";

interface RowProps {
  date: Date;
  onChange: Function;
  time: String;
  getWeek: Function;
}

const ScheduleRow = ({ date, onChange, time, getWeek }: RowProps) => {
  const isTutor = useReactiveVar(meVar)?.__typename === "Tutor";
  const [createClassMutation] = useCreateClassMutation();
  const onClickSchedule = (day: Dayjs) => {
    if (isTutor) {
      console.log(isTutor);
    } else {
      console.log(day);
    }
  };
  return (
    <tr className={`${style.row}`}>
      {getWeek().map((day: Dayjs, index: number) => (
        <td
          onClick={() =>
            onClickSchedule(
              day.hour(+time.split(":")[0]).minute(+time.split(":")[1])
            )
          }
          key={index}
          className={`${style.cell} ${style.outline} ${style.weekday}`}
        />
      ))}
    </tr>
  );
};
export default ScheduleRow;
