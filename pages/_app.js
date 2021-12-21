import "../styles/global.scss";
import { useUser } from "../firebase/useUserNode";
import { useState, useEffect } from "react";
import { AuthProvider } from "../firebase/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
