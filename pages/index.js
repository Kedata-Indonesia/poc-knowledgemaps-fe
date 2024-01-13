import { Open_Sans } from "next/font/google";
import { Button } from "react-daisyui";

const openSans = Open_Sans({
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

const Home = () => {
  return (
    <main className={openSans.className}>
      <Button color="primary">Open</Button>
    </main>
  );
};

export default Home;
