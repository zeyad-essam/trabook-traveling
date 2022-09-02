import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Informations from "../components/Informations";
import Deals from "../components/deals/Deals";
import Plans from "../components/plans/Plans";
import Blog from "../components/blog/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trabook traviling</title>
        <meta name="description" content="traviling agence landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Informations />
      <Deals />
      <Plans />
      <Blog />
      <Footer />
    </>
  );
}
