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
import { getCookie } from "../utils/utils";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

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
