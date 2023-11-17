import React, { useEffect } from "react";
import NavBar from "../Components/MyPortfolio/NavBar";
import Hero from "../Components/MyPortfolio/Hero";
import Parallax from "../Components/MyPortfolio/Parallax";
import TechStack from "../Components/MyPortfolio/TechStack";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const MyPortfolio_1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  useEffect(() => {
    console.log(scrollYProgress);

    console.log("first");
  }, [scrollYProgress]);
  return (
    <div
      ref={ref}
      className="font-serif overflow-y-scroll w-100% h-screen bg-[#0c0c1d] text-gray-300"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <section className="h-[100vh] snap-center" id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section className="h-[100vh] snap-center">
        <Parallax scrollYProgress={scrollYProgress} />
      </section>
      <section className="h-[100vh] snap-center" id="Services">
        <TechStack />
      </section>
      <section className="h-[100vh] snap-center">Parallax</section>
      <section className="h-[100vh] snap-center" id="Portfolio">
        Portfolio 1
      </section>
      <section className="h-[100vh] snap-center">Portfolio 2</section>
      <section className="h-[100vh] snap-center">Portfolio 3</section>
      <section className="h-[100vh] snap-center" id="Contact">
        Contact
      </section>
    </div>
  );
};

export default MyPortfolio_1;
