import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Willys from "./pages/Willys/Willys";
import Timata from "./pages/Timata/Timata";
import Stimple from "./pages/Stimple/Stimple";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/timata",
    element: <Timata />,
  },
  {
    path: "/willys",
    element: <Willys />,
  },
  {
    path: "/stimple",
    element: <Stimple />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main style={{ position: "relative" }}>
      <Header />
      <div style={{ width: "100%", height: "60px" }}></div>
      <article>
        <RouterProvider router={router} />
      </article>

      <div style={{ width: "100%", height: "100px" }}></div>
      <Footer />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
