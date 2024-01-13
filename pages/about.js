import { getMainLayout } from "@/components/layouts/main-layout";
import { NextSeo } from "next-seo";

const AboutPage = () => {
  return (
    <div className="[&>h2]:my-3 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-500 [&>p]:mb-4 max-w-3xl mx-auto flex-grow">
      <NextSeo title="About SummaSearch" />
      <h1 className="text-4xl font-bold mb-5">About SummaSearch</h1>
      <h2>Welcome to SummaSearch</h2>
      <p>
        Explore the world of information like never before with SummaSearch,
        your gateway to efficient and insightful online searching. Our platform
        is crafted to streamline your search experience, offering depth,
        clarity, and a new perspective on data discovery.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our core mission at SummaSearch is to empower users with a revolutionary
        search tool that transcends traditional search methods. We aim to
        simplify the vast ocean of online information, providing you with
        results that are not only relevant but rich in context and meaning.
      </p>
      <h2>The Evolution of SummaSearch</h2>
      <p>
        Born from a vision to enhance digital information accessibility,
        SummaSearch began as a small project driven by a passionate team of tech
        enthusiasts. It has now evolved into a sophisticated search engine,
        utilizing cutting-edge technology to understand and cater to your
        informational needs.
      </p>
      <h2>What Sets SummaSearch Apart?</h2>
      <p>
        Innovative Knowledge Mapping: SummaSearch goes beyond delivering search
        results by visually mapping related knowledge in an intuitive format.
      </p>
      <p>
        <b>User-Centric Design</b>: Our interface is designed with you in mind -
        clean, straightforward, and focused on making your search experience as
        seamless as possible.
      </p>
      <p>
        <b>AI-Powered Insights</b>: At the heart of SummaSearch is our advanced
        AI technology, providing deep insights and a nuanced understanding of
        your search queries.
      </p>
      <h2>Our Vision for the Future</h2>
      <p>
        The realm of digital information is constantly evolving, and so is
        SummaSearch. We are dedicated to ongoing innovation, enhancing our
        algorithms, and introducing new features to better serve our growing
        community of users.
      </p>
      <h2>Be Part of Our Community</h2>
      <p>
        SummaSearch is more than a search engine - it&apos;s a community of
        explorers, learners, and innovators. We invite you to join us on this
        journey of discovery and help shape the future of information search.
        Your input and feedback are vital in our pursuit of excellence.
      </p>
      <h2>Get in Touch</h2>
      <p>
        Questions, ideas, or feedback? We&apos;re all ears and always eager to
        connect with our users. Reach out to us at{" "}
        <a href="mailto:info@kedata.online" className="text-primary">
          info@kedata.online
        </a>
        .
      </p>
      <div className="h-10"></div>
    </div>
  );
};

AboutPage.getLayout = getMainLayout();

export default AboutPage;
