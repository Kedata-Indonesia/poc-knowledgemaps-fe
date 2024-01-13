import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

const Home = () => {
  return <main className={openSans.className}>init program</main>;
};

export default Home;
