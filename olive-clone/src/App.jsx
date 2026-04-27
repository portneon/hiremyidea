import "./App.css";
import Hero from "./components/Hero";
import ProductCarouselHero from "./components/ScannerCarousel";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import HealthBenefits from "./components/HealthBenefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ComparisonCard from "./components/Comp";
import ShieldHeroSlider from "./components/SheildHeroSlider";
import IndependenceSection from "./components/IndependenceSection";

function App() {
  return (
    <div className="w-full relative flex flex-col mb-16 font-sans">

      <div className="mx-4 md:mx-6 mt-4 md:mt-6 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-[#F5FAF6] shadow-sm mb-16 relative">
        <Navbar />
        <div className="pt-2 md:pt-4 pb-8 relative z-10">
          <Hero />
          <ProductCarouselHero />
        </div>
      </div>

      <HowItWorks />

      <HealthBenefits />
      <div>

        <ShieldHeroSlider />
      </div>

      <Testimonials />
      <ComparisonCard />

      <Pricing />

      <IndependenceSection />
      <Footer />
    </div>
  );
}

export default App;
