"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "We Plan, You Shine",
    img: "/icons/image 17.png", // replace with actual image
    features: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 2,
    title: "Flowpilot",
    img: "/icons/image 5.png",
    features: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 3,
    title: "GrowthSummit",
    img: "/icons/Size=Default.png",
    features: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
];

export default function CaseStudiesCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <p className="text-gray-400">
          See the designs that delivered results
        </p>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex items-center justify-center gap-6 relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        >
          <ChevronLeft />
        </button>

        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={`w-1/3 transition-all duration-500 ${
              index === current ? "opacity-100 scale-100" : "opacity-50 scale-95"
            }`}
          >
            <div className="bg-[#111] rounded-xl p-4 border border-gray-700 shadow-lg">
              <img
                src={study.img}
                alt={study.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-green-400">
                {study.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden flex flex-col gap-6 px-4">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-[#111] rounded-xl p-4 border border-gray-700 shadow-lg"
          >
            <img
              src={study.img}
              alt={study.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{study.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-green-400">
              {study.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition-all">
          I want similar results →
        </button>
      </div>
    </section>
  );
}
