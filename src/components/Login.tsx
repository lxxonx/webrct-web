import { styled } from "@mui/system";
import React, { ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo/localstate";
import {
  useStudentLoginMutation,
  useTutorLoginMutation,
} from "../generated/graphql";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: 600px;
  margin: auto auto;
`;

type FormInputs = {
  username: string;
  password: string;
};

interface Props {}

function Login({}: Props): ReactElement {
  const router = useRouter();
  const [studentLoginMutation] = useStudentLoginMutation();
  const [tutorLoginMutation] = useTutorLoginMutation();

  const [isStudent, setStudent] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { username, password } = data;
    if (isStudent) {
      await studentLoginMutation({
        variables: {
          username,
          password,
        },
        update: (_, { data, errors }) => {
          console.log(errors);
          if (data?.loginStudent) {
            isLoggedInVar(true);
          }
        },
      });
    } else {
      await tutorLoginMutation({
        variables: {
          username,
          password,
        },
        update: (_, { data, errors }) => {
          console.log(errors);
          if (data?.loginTutor) {
            isLoggedInVar(true);
          }
        },
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6">
          {isStudent ? "Student Login" : "Tutor Login"}
        </Typography>
        <input
          {...register("username", { required: true })}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="username"
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          {...register("password", { required: true })}
          type="password"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="button" onClick={() => setStudent(!isStudent)}>
          {isStudent ? "are you tutor?" : "are you student?"}
        </button>
        {isStudent && (
          <button type="button" onClick={() => router.push("/student/create")}>
            create user
          </button>
        )}
        <button type="submit">login</button>
      </Form>
    </>
  );
}

export default Login;
