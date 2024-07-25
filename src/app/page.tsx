import Header from "@/components/Header";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import FloatingBtn from "../components/FloatingBtn";
import Nav from "../components/Nav";
import Bar from "@/components/Bar";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen">
        <Header />
        <Carousel />
        <Bar />
        <FloatingBtn />
        <Nav />
      </div>
    </main>
  );
}
