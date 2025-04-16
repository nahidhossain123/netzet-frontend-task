import Image from "next/image";
import DiscountBanner from "./components/DiscountBanner";
import Navbar from "./components/Navbar";

const navs = [
  {
    title: 'About Us',
    to: '/about'
  },
  {
    title: 'Contact',
    to: '/contact'
  },

]

export default function Home() {
  return (
    <main className="">
      {/* Discount Banner */}
      <DiscountBanner />
      <div className="max-w-[1018px] mx-auto">
        <Navbar navs={navs} />
      </div>
    </main>
  );
}
