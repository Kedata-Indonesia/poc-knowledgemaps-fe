import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { Button, Input } from "react-daisyui";
import { HiSearch } from "react-icons/hi";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <main className="flex w-full pt-20 h-screen">
      <div className="mx-auto flex gap-4 max-w-lg w-full">
        <Input
          placeholder="Enter your search term"
          className="w-full"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button color="primary" startIcon={<HiSearch />}>
          Search
        </Button>
      </div>
    </main>
  );
};

export default Home;
