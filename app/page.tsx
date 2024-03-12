// "use client";

import ReviewSet from "@/components/reviews/ReviewSet";
import Hero from "@/components/hero/Hero";
import Promotional from "@/components/promotional/Promotional";
import Banner from "@/components/Banner";
import ProductCollection from "@/components/promotional/sliders/ProductCollection";
import SecondProductCollection from "@/components/promotional/sliders/SecondProductCollection";
import { setCookie } from "cookies-next";

export default function App() {
  setCookie("isAuth", String(false));
  return (
    <section className=" bg-cover md:bg-top bg-center">
      
      <div className="bg-white dark:bg-gray-800">
        <Hero />
        <Promotional />
        <ProductCollection />
        <SecondProductCollection />
        <ReviewSet />
      </div>
    </section>
  );
}
