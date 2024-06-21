import Catalog from "../../features/Catalog/Catalog";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header changeTheme={changeTheme}></Header>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
