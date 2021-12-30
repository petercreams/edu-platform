import "../styles/global.scss";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { getAuth } from "@firebase/auth";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(getAuth());
  const router = useRouter();

  console.log("Loading: ", loading, " | ", "Current user: ", user);

  return <Component {...pageProps} />;
}

export default MyApp;
