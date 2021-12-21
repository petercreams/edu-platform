import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, setSession] = useState();

  const router = useRouter();

  const logout = async () => {
    axios
      .post(process.env.NEXT_PUBLIC_SERVER_HOST + "/user/logout")
      .then((info) => {
        console.log(info.data);
        localStorage.removeItem("JWT");
        setSession();
        setIsLoggedIn(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  };

  // zrobić to na cookies

  // const jwt = localStorage.getItem("JWT");

  // jwtAuthListener();
  //   console.log(session, "console");

  const jwtAuthListener = () => {
    const jwt = localStorage.getItem("JWT");
    if (jwt !== null) {
      axios
        .post(process.env.NEXT_PUBLIC_SERVER_HOST + "/user/auth", {
          token: jwt,
        })
        .then((authInfo) => {
          console.log(authInfo.data);
          if (!authInfo.data.error) {
            setIsLoggedIn(true);
            setSession((prevState) => {
              return {
                ...prevState,
                uid: authInfo.data.uid,
                email: authInfo.data.email,
                displayName: authInfo.data.name,
                photoURL: authInfo.data.photoURL,
              };
            });
          } else {
            console.log(authInfo.data.error);
            setIsLoggedIn(false);
          }
        })
        .catch((error) => {
          console.log({ error: error });
        });
    }
    setIsLoggedIn(false);
  };

  useEffect(() => {
    jwtAuthListener();

    console.log(session, "useEffect");
  }, []);

  return { session, logout, setSession };
};

export { useUser };
