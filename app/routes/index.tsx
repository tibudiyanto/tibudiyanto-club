import { MetaFunction } from "remix";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => {
  return { title: "About | tibudiyanto.club" };
};

export default function Index() {
  return (
    <div className="px-8 pt-4 lg:px-0 container mx-auto h-screen w-screen">
      <div className="lg:w-1/2 lg:mx-auto h-full flex flex-col justify-between">
        <Header />

        <Hero className="mb-2">
          <h1 className="border-0 font-normal text-center">
            General Information
          </h1>
        </Hero>

        <div className="mb-4">
          <h2 className=" mb-4">Quick Introduction:</h2>
          <div className="prose">
            <p>
              Greetings! My name is Theo Budiyanto. I grew up in Indonesia,
              before I made my way and graduated from UC Berkeley. Then, I had a
              brief stint working as a Software enginieer in Bay Area before
              finally coming back to where I came from.
            </p>
            <p>
              Reach me on twitter{" "}
              <a href="https://twitter.com/tibudiyanto">@tibudiyanto</a>
              {"."}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-md uppercase font-bold: border-b bornder-solid border-black mb-4">
            Working Experience:
          </h2>
          <div className="flex flex-row justify-between mb-1">
            <div>
              CTO at <a href="https://delman.io">Delman</a>
            </div>
            <div>2018-Current</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              Software Engineer at <a href="https://splunk.com">Splunk</a>
            </div>
            <div>2016-2018</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
