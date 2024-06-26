import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  function changeTheme(flag: boolean): void {
    setDarkMode(flag);
  }

  const globalStyles = {
    "*": {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    "*::-webkit-scrollbar": {
      display: "none",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <GlobalStyles styles={globalStyles} />
      <CssBaseline></CssBaseline>
      <Header changeTheme={changeTheme}></Header>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
