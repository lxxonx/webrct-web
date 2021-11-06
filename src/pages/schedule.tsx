import React, { ReactElement, useState } from "react";
import { styled } from "@mui/system";
import withAuth from "../utils/withAuth";
import ScheduleContainer from "../components/Schedule/ScheduleContainer";
import { useGetManyTutorsQuery } from "../generated/graphql";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useReactiveVar } from "@apollo/client";
import { meVar } from "../apollo/localstate";

const Container = styled("div")`
  display: flex;
`;
const SideBar = styled("div")`
  flex: 2;
`;

const TutorList = () => {
  const { data } = useGetManyTutorsQuery({
    variables: {
      take: 10,
      skip: 0,
      saved: false,
    },
  });
  return (
    <div>
      {data?.getManyTutors.map((tutor) => (
        <div key={tutor.id}>{tutor.firstname}</div>
      ))}
    </div>
  );
};

interface Props {}

function Schedule({}: Props): ReactElement {
  const [date, onChange] = useState(new Date());
  const isTutor = useReactiveVar(meVar)?.__typename === "Tutor";

  return (
    <Container>
      <SideBar>
        <Calendar onChange={onChange} value={date} />
        {!isTutor && <TutorList />}
      </SideBar>
      <ScheduleContainer onChange={onChange} date={date} />
    </Container>
  );
}

export default withAuth(Schedule);
