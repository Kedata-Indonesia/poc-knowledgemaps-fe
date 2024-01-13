import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Input } from "react-daisyui";
import { HiSearch } from "react-icons/hi";

const openSans = Open_Sans({
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

const Home = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  return (
    <main className="flex w-full pt-20 h-screen">
      <div className="mx-auto max-w-md w-full">
        <form
          className="flex gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/map?q=${keyword}`);
          }}
        >
          <Input
            placeholder="Enter your search term"
            className="w-full"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button type="submit" color="primary" startIcon={<HiSearch />}>
            Search
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Home;
