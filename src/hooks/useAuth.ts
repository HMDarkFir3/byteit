import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const content = useContext(AuthContext);

  return content;
};

export { useAuth };
