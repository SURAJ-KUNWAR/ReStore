import { Navigate, createBrowserRouter } from "react-router-dom";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetail from "../../features/Catalog/ProductDetailPage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetail /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
