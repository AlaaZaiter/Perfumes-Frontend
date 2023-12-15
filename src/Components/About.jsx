import React from "react";
import "../ComponentCSS/About.css";
import Headercontainer from "./HeaderContainer";

function About() {
  return (
    <div>
      <Headercontainer />
      <div className="flex items-center justify-center">
        <div className="AboutelementA">
          <h1 className="AboutjustA">OUR MISSION!</h1>
          <p className="AbouttextareaA">
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
    </div>
  );
}

export default About;
