// HOC/withAuth.jsx
import { useReactiveVar } from "@apollo/client";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { isLoggedInVar } from "../apollo/localstate";
import ClassLayout from "../components/ClassLayout";
import NormalLayout from "../components/NormalLayout";
const withAuth = (WrappedComponent: NextComponentType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const isLoggedIn = useReactiveVar(isLoggedInVar);
      if (!isLoggedIn) {
        router.replace(`/login`);
        return null;
      }
      if (router.pathname.startsWith("/class")) {
        return (
          <ClassLayout>
            <WrappedComponent {...props} />
          </ClassLayout>
        );
      }
      return (
        <NormalLayout>
          <WrappedComponent {...props} />
        </NormalLayout>
      );
    }
    return null;
  };
};

export default withAuth;
