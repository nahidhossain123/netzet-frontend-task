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
        pt-4
        md:pt-[30px] 
        bg-[url('/Influe_mobile-small.png')] 
        sm:bg-[url('/Influe_mobile-large.png')] 
        bg-no-repeat bg-top md:bg-bottom-right
      ">
        {/* Navbar Section */}
        <div className="mx-5 md:mx-10 lg:mx-[60px] xl:mx-[110px]">
          <Navbar navs={navs} />
        </div>
        {/* Hero Section */}
        <section className="mx-5 md:ml-10 lg:ml-[64px] xl:ml-[114px]">
          <HeroSection />
        </section>
      </div>
    </main>
  );
}
