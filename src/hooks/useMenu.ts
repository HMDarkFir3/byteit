import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";

const useMenu = () => {
  const content = useContext(MenuContext);

  return content;
};

export { useMenu };
