// app/components/ProcessSection.tsx
"use client";

import { Rocket, Pencil, Clipboard } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      day: "Day 1",
      title: "Book Your Project",
      description: "Fill out a short form and we’ll get started immediately.",
      icon: <Clipboard className="w-8 h-8 text-green-400" />,
    },
    {
      day: "Day 2 - 4",
      title: "Design & Development",
      description:
        "Unlimited revisions until perfect. You’re involved every step.",
      icon: <Pencil className="w-8 h-8 text-green-400" />,
    },
    {
      day: "Day 5",
      title: "Launch",
      description:
        "Fully deployed on your hosting and ready to convert visitors.",
      icon: <Rocket className="w-8 h-8 text-green-400" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-16 md:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          From Idea to Live Landing Page in{" "}
          <span className="text-green-400">Just 5 Days</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-green-400 transition"
          >
            <span className="inline-block text-xs text-black bg-green-400 px-3 py-1 rounded-full font-medium">
              {step.day}
            </span>
            <div className="mt-6 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
