import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  const { handleChange } = useContext(AuthContext);

  return (
    <div>
      <button
        onClick={() => {
          handleChange(isAuth);
        }}
      >
        {!isAuth ? "Login" : "Logout"}
      </button>
    </div>
  );
};
