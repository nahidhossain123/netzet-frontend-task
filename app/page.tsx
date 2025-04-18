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
    <main className="bg-black">
      {/* Discount Banner */}
      <DiscountBanner />
      <div className="
        max-w-[1238px] 
        mx-auto 
        bg-black 
        pt-5 
        bg-[url('/Influe_mobile-small.png')] 
        sm:bg-[url('/Influe_mobile-large.png')] 
        bg-no-repeat bg-top md:bg-bottom-right
      ">
        {/* Navbar Section */}
        <div className="max-w-[1018px] mx-auto">
          <Navbar navs={navs} />
        </div>
        {/* Hero Section */}
        <section className="">
          <HeroSection />
        </section>
      </div>
    </main>
  );
}
