import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo titleTemplate="%s | PT Kedata Indonesia Digital" />
      <Component {...pageProps} />
    </>
  );
}
