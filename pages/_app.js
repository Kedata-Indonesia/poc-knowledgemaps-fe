import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo titleTemplate="%s | PT Kedata Indonesia Digital" />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
