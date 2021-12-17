import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, useSession] = useState({
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  });

  const router = useRouter();

  const logout = async () => {
    axios
      .post(process.env.NEXT_PUBLIC_SERVER_HOST + "/user/logout")
      .then((info) => {
        console.log(info.data);
        localStorage.removeItem("JWT");
        setIsLoggedIn(false);
        alert("User has been logged out");
        router.push("/");
      });
  };

  // zrobić to na cookies

  const jwtAuthListener = () => {
    var jwt = localStorage.getItem("JWT");

    axios
      .post(process.env.NEXT_PUBLIC_SERVER_HOST + "/user/auth", {
        token: jwt,
      })
      .then((authInfo) => {
        console.log(authInfo.data);
        if (!authInfo.data.error) {
          setIsLoggedIn(true);
          useSession((prevState) => {
            return {
              ...prevState,
              uid: authInfo.data.uid,
              email: authInfo.data.email,
              displayName: authInfo.data.name,
              photoURL: authInfo.data.photoURL,
            };
          });
          console.log("JWT checked");
        } else {
          console.log("No jwt");
          setIsLoggedIn(false);
        }
      });
  };

  useEffect(() => {
      jwtAuthListener();
  }, [])


  return { session, logout };
};

export { useUser };
