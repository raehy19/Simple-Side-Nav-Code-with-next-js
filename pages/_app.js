import "@/styles/globals.css";
import LeftNav from "@/components/LeftNav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LeftNav />
      <Component {...pageProps} />
    </>
  );
}
