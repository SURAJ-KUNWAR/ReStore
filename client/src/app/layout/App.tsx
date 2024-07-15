import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../utils/utils";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

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
  if (loading)
    return <LoadingComponent message="Intialising App ..."></LoadingComponent>;
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
