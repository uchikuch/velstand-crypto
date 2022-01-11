import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Community from "./Community";
import Team from "./Team";

function index() {
  console.log("hello");
  return (
    <div className="relative bg-dark-green-bg">
      <div className="bg-black origin-right-bottom pt-10 -mt-44 -skew-y-6 overflow-hidden">
        <div className="bg-hero-gradient bg-no-repeat mt-32 bg-black skew-y-6">
          <div className="lg:bg-spiral bg-no-repeat bg-right-top bg-contain">
            <Header />
            <Hero />
            <About />
          </div>
        </div>
      </div>

      <Features />
      <Community />
      <Team />
    </div>
  );
}

export default index;
