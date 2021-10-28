// HOC/withAuth.jsx
import { useReactiveVar } from "@apollo/client";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { isLoggedInVar } from "../apollo/localstate";
const withNotAuth = (WrappedComponent: NextComponentType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const isLoggedIn = useReactiveVar(isLoggedInVar);
      if (isLoggedIn) {
        router.replace(`/`);
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withNotAuth;
