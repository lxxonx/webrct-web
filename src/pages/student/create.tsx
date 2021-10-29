import { styled } from "@mui/system";
import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { useStudentCreateMutation } from "../../generated/graphql";
import { isLoggedInVar } from "../../apollo/localstate";
import { useRouter } from "next/dist/client/router";
import withNotAuth from "../../utils/withNotAuth";
import NormalLayout from "../../components/NormalLayout";
const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: 600px;
  margin: auto auto;
`;
interface Props {}
type FormInputs = {
  username: string;
  password: string;
  birthYear: number;
  firstname: string;
  lastname: string;
};
function Create({}: Props): ReactElement {
  const router = useRouter();
  const [studentCreateMutation] = useStudentCreateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    const { username, password, birthYear, firstname, lastname } = data;
    await studentCreateMutation({
      variables: {
        username,
        password,
        birthYear: +birthYear,
        firstname,
        lastname,
      },
      update: (_, { data, errors }) => {
        if (errors) {
          console.log(errors);
        } else if (data?.createStudent.id) {
          isLoggedInVar(true);
          router.push("/");
        }
      },
    });
  };
  return (
    <NormalLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6">create user</Typography>
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

        <input
          {...register("birthYear", { required: true })}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="birthYear"
        />
        {errors.birthYear && <p>{errors.birthYear.message}</p>}

        <input
          {...register("firstname", { required: true })}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="firstname"
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <input
          {...register("lastname", { required: false })}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="lastname"
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
        <button type="submit">create user</button>
      </Form>
    </NormalLayout>
  );
}

export default withNotAuth(Create);
