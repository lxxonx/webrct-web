import { useReactiveVar } from "@apollo/client";
import { styled } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import { isLoggedInVar } from "../apollo/localstate";
import Layout from "../components/Layout";
import Login from "../components/Login";

const HomeMenu = styled("div")`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <Layout>
          <HomeMenu>
            <Link href="/login">login</Link>
            <Link href="/chat">chat</Link>
          </HomeMenu>
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>
        <Login />
      </>
    );
  }
}
