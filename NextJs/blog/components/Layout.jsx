import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, description = "", children }) => {
  return (
    <>
      <Head>
        <title>{title} || Simple Blog NextJS</title>
        <link rel="icon" href="/icons8-pencil-40.png" />
        <meta
          content={description || "простой блок на nextjs"}
          name="description"
        />
        <meta
          content={description || "простой блок на nextjs"}
          property="og:description"
        />
        <meta
          content="https://nextjs.org/static/twitter-cards/documentation.png"
          property="og:image"
        />
      </Head>
      <header>
        <img src="/free-icon-post-5853785.png" alt="" />
        <Link href="/">Главная</Link>
      </header>
      <div className="container">{children}</div>
      <footer>2022 &copy; Simple Blog NextJS</footer>
    </>
  );
};

export default Layout;
