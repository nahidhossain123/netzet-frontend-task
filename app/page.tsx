import Image from "next/image";
import DiscountBanner from "./components/DiscountBanner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const navs = [
  {
    id: '1',
    title: 'About us',
    to: '#'
  },
  {
    id: '2',
    title: 'Contact',
    to: '#'
  },

]

export default function Home() {
  return (
    <main className="">
      {/* Discount Banner */}
      <DiscountBanner />
      <div className="bg-black py-5">
        {/* Navbar Section */}
        <section className="max-w-[1018px] mx-auto">
          <Navbar navs={navs} />

        </section>
        <section className="max-w-[1124px] mx-auto">
          <HeroSection />
        </section>
      </div>
    </main>
  );
}
