import '../styles/globals.css'

import Router from "next/router";
import { useState } from "react";
import Loader from "./component/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  },1500);
  Router.events.on("routeChangeComplete", (url) => {
    setInterval(function () {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;


