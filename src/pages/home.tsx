import { useThemeContext } from "providers/theme";
import React from "react";

const Pages: React.FC = () => {
  const { themeName } = useThemeContext();
  return <>{themeName}</>;
};

export default Pages;
