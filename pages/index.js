import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { Products } from "../components/Products";
import { Slide } from "../components/Slide";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David & Ashleigh</title>
        <link rel="icon" href="/heart.png" />
      </Head>
      <Layout>
        <div>
          <Slide />
        </div>
        <div className="bg-gray-100">
          <Products />
        </div>
      </Layout>
    </div>
  );
}
