import React from "react";
import "../ComponentCSS/About.css";
import Headercontainer from "./HeaderContainer";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Headercontainer />
      <div className="flex items-center justify-center gap">
        <div className=" ">
          <h1 className="about_title">OUR MISSION!</h1>
          <p className="about_subtitle">
            To weave an aromatic tapestry that transcends the screen, inviting
            you to immerse yourself in a symphony of scents. Guided by passion
            and expertise, we curate an olfactory journey where each fragrance
            tells a unique story. From rare essences to timeless classics, our
            virtual shelves offer more than products; they house experiences.
            Join us in discovering the invisible yet unforgettable artistry of
            perfumes, where every click unveils a new chapter in your scented
            narrative.
          </p>
        </div>
        <div className="AboutelementB">
          <img
            src="/images/Rectangle 62.png"
            alt="Image"
            className="AboutimgA9"
          />
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default About;
