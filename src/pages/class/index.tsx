import { styled } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import withAuth from "../../utils/withAuth";

const HomeMenu = styled("div")`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

function ClassRoom() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeMenu>
        <Link href="/chat">chat</Link>
      </HomeMenu>
    </>
  );
}

export default withAuth(ClassRoom);
