import { useContext } from "react";
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";

const LandingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <button onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <>Dark</> : <>Light</>}</button>
    </>
  );
};

export default LandingPage;
