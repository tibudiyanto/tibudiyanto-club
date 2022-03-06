import { MetaFunction, Outlet } from "remix";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => {
  return { title: "Posts | tibudiyanto.club" };
};

export default function Posts() {
  return (
    <div className="px-8 py-4 lg:px-0 container mx-auto h-screen w-screen">
      <div className="lg:w-1/2 lg:mx-auto">
        <Header />

        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
