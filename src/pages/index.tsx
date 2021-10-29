import { styled } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import withAuth from "../utils/withAuth";

const HomeMenu = styled("div")`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeMenu>home</HomeMenu>
    </>
  );
}
export default withAuth(Home);
