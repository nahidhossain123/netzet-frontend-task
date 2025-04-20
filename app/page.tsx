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
        container
        bg-black 
        pt-4
        md:pt-[30px] 
        bg-[url('/images/influe_mobile-small.png')] 
        sm:bg-[url('/images/influe_mobile-large.png')] 
        bg-no-repeat bg-top md:bg-bottom-right">
        {/* navbar section */}
        <Navbar navs={NAV_LINKS} />

        {/* hero section */}
        <section className="md:mx-1">
          <HeroSection />
        </section>
      </div>
    </main>
  );
}
