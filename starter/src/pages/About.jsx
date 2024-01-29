import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
          <span className="ml-5 bg-primary p-1 rounded-3xl shadow-md">
            COMFY
          </span>
        </h1>
        <h4 className="mt-14 text-center text-lg font-semibold tracking-wider">
          În lumea agitată de astăzi, unde stilul se întâlnește cu confortul,
          <span className="bg-primary p-1 rounded-xl shadow-md">
            Comfy
          </span>{" "}
          Store este răspunsul la căutarea ta pentru produse de calitate,
          concepute pentru a-ți aduce nu doar satisfacție, ci și o experiență
          extraordinară. Cu o gamă diversificată de articole, de la îmbrăcăminte
          și încălțăminte la accesorii și produse pentru casă, suntem aici
          pentru a-ți oferi tot ceea ce ai nevoie pentru a adăuga un strop de
          confort și eleganță în viața ta.
        </h4>
      </div>
    </>
  );
}

export default About;
