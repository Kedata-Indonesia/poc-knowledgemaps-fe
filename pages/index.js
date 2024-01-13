/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button, Input } from "react-daisyui";
import { HiSearch } from "react-icons/hi";
import { NextSeo } from "next-seo";
import { getMainLayout } from "@/components/layouts/main-layout";
import { useRouter } from "next/router";
import BrandLogoSquare from "@/components/shared/brand-logo";

const Home = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <NextSeo title="Home" />
      <div className="mx-auto w-full max-w-3xl flex flex-col h-full justify-center">
        <h1 className="text-center text-4xl font-bold mb-8 flex gap-2 items-center justify-center">
          <BrandLogoSquare className="inline-block w-12 h-12" />
          SummaSearch
        </h1>
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
          <Button color="primary" startIcon={<HiSearch />}>
            Search
          </Button>
        </form>
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
