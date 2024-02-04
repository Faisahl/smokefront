// "use client";

import Footer from "@/components/Footer";
import ReviewSet from "@/components/reviews/ReviewSet";
import Hero from "@/components/hero/Hero";
import Promotional from "@/components/promotional/Promotional";
import Banner from "@/components/Banner";
import AuthProvider from "@/components/ctx/AuthProvider";
import ProductCollection from "@/components/promotional/sliders/ProductCollection";
import SecondCollections from "@/components/promotional/sliders/SecondCollections";
import SecondProductCollection from "@/components/promotional/sliders/SecondProductCollection";
import Badges from "@/components/promotional/Badges";


export default function App() {
  // let auth: boolean = true;
  // const [isAuth, dispatch] = useReducer(authReducer, auth);
  
  return (
    <AuthProvider>
      <section className="h-screen bg-cover md:bg-top bg-center">
        <Banner />
        <div className="bg-white dark:bg-gray-800">
          <Hero />
          <Promotional />
          <ProductCollection />
          <Badges />
          <SecondProductCollection/>
          <ReviewSet />
          <Footer />
        </div>
      </section>
    </AuthProvider>
  );
}
