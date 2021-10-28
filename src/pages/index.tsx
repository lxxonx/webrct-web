import { useReactiveVar } from "@apollo/client";
import { styled } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import { isLoggedInVar } from "../apollo/localstate";
import Login from "../components/Login";
import NormalLayout from "../components/NormalLayout";

const HomeMenu = styled("div")`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
    return (
      <NormalLayout>
        <Head>
          <title>Home</title>
        </Head>
        <HomeMenu>
          <Link href="/chat">chat</Link>
        </HomeMenu>
      </NormalLayout>
    );
  } else {
    return (
      <NormalLayout>
        <Head>
          <title>Login</title>
        </Head>
        <Login />
      </NormalLayout>
    );
  }
}
