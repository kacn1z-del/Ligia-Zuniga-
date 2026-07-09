import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Story from "./components/Story";
import Products from "./components/Products";
import Process from "./components/Process";
import BeeSpecies from "./components/BeeSpecies";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      {/* Fondo fijo de panal con abejas */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/honeycomb-bg.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-honey-50/92" />

      <Header />
      <Hero />
      <TrustStrip />
      <Story />
      <Products />
      <Process />
      <BeeSpecies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
