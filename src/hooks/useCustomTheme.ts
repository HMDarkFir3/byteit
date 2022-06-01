import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const useCustomTheme = () => {
  const content = useContext(ThemeContext);

  return content;
};

export { useCustomTheme };
