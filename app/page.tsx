import DiscountBanner from "./components/DiscountBanner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { NAV_LINKS } from "@/constants";

export default function Home() {
  return (
    <main className="bg-black">
      {/* discount banner */}
      <DiscountBanner />
      {/* main container */}
      <div className="
        max-w-[1238px] 
        mx-auto 
        bg-black 
        pt-4
        md:pt-[30px] 
        bg-[url('/images/influe_mobile-small.png')] 
        sm:bg-[url('/images/influe_mobile-large.png')] 
        bg-no-repeat bg-top md:bg-bottom-right
      ">
        {/* navbar section */}
        <div className="mx-5 md:mx-10 lg:mx-[60px] xl:mx-[110px]">
          <Navbar navs={NAV_LINKS} />
        </div>
        {/* hero section */}
        <section className="mx-5 md:ml-10 lg:ml-16 xl:ml-[114px]">
          <HeroSection />
        </section>
      </div>
    </main>
  );
}
