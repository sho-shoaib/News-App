import Toolbar from "../components/Toolbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}
