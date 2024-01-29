import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../project-assets/hero1.webp";
import hero2 from "../project-assets/hero2.webp";
import hero3 from "../project-assets/hero3.webp";
import hero4 from "../project-assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Schimbam cum lumea face cumparaturi
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro
          incidunt velit quaerat itaque adipisci impedit iure. Delectus fuga sed
          aut nihil nisi commodi alias! Ipsam dolore unde enim fugit?
        </p>
        <Link to="/products" className="btn btn-primary mt-4">
          Produsele noastre
        </Link>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center -4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((item) => {
          return (
            <div key={item} className="carousel-item">
              <img
                src={item}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
