import { useRef } from "react";
import { useInView } from "framer-motion";
import Hero from "../components/hero";
import FloatingNav from "../components/navbar/FloatingNav";
import Works from "../components/works";
import AboutMe from "../components/aboutMe";
import MyServices from "../components/myservices";
import Footer from "../components/footer";

export default function Page() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  return (
    <>
      <div ref={heroRef} id="home">
        <Hero />
      </div>

      {/* FloatingNav appears only when Hero is NOT in view */}
      <div
        className={`fixed top-6 right-6 z-50 transition-opacity duration-500 w-full ${
          isHeroInView ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <FloatingNav />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <MyServices />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
