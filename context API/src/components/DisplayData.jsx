import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const DisplayData = () => {
  const [user, setUser] = useState([]);
  const { isAuth, handleChange } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setUser(result);
          handleChange(!isAuth);
        },
        (error) => {
          //   setIsLoaded(true);
          //   setError(error);
          console.log(error);
        }
      );
  }, []);
  <div
    style={{
      backgroundImage: `url("https://via.placeholder.com/500")`,
    }}
  ></div>;
};
