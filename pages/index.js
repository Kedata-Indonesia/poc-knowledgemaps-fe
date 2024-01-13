/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button, Input } from "react-daisyui";
import { HiSearch } from "react-icons/hi";
import { NextSeo } from "next-seo";
import { getMainLayout } from "@/components/layouts/main-layout";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <NextSeo title="Home" />
      <div className="mx-auto w-full max-w-3xl flex flex-col">
        <h1 className="text-center text-2xl font-bold mb-4">
          Map a research topic
        </h1>
        <div className="flex gap-4">
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
        <div className="mx-auto mt-2 text-xs flex items-center">
          Powered by{" "}
          <a
            className="inline-block ml-1"
            href="https://kedata.online"
            target="_blank"
          >
            <img
              src="https://kedata.online/images/main-logo.png"
              alt="Kedata Logo"
              className="h-4"
            />
          </a>
        </div>
      </div>
    </>
  );
};

Home.getLayout = getMainLayout();

export default Home;
