// app/components/PricingSection.tsx
"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$200",
      description: "Perfect for solopreneurs",
      features: [
        "1 Landing Page (Design + Development)",
        "Hosting Deployment",
        "5-Day Delivery",
        "Basic Support",
      ],
      button: "Start my project",
      highlight: false,
    },
    {
      name: "Standard",
      price: "$300",
      description: "Best balance of value & features",
      features: [
        "Everything in Basic",
        "Extra Custom Section",
        "Free Hosting Setup",
        "Free Consultation Call",
        "Priority Support",
      ],
      button: "Start my project",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$500",
      description: "For brands & agencies",
      features: [
        "Everything in Standard",
        "Advanced Animations",
        "Priority Delivery (3 Days)",
        "6 Months Free Support",
        "Performance Optimization",
      ],
      button: "Start my project",
      highlight: false,
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing —{" "}
          <span className="text-green-400">Choose Your Plan</span>
        </h2>
        <p className="text-gray-400 mt-2">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 border ${
              plan.highlight
                ? "border-green-400 shadow-lg shadow-green-500/20"
                : "border-gray-800"
            } bg-gray-900`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              {plan.highlight && (
                <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-1 text-gray-400">{plan.description}</p>
            <p className="mt-4 text-3xl font-bold">{plan.price}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full mt-8 py-3 rounded-xl font-medium transition ${
                plan.highlight
                  ? "bg-green-400 text-black hover:bg-green-500"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Limited Availability */}
      <div className="mt-16 text-center">
        <p className="text-green-400 font-semibold flex justify-center items-center gap-2">
          ⚡ Limited Availability
        </p>
        <p className="text-gray-400 text-sm mt-2">
          We only onboard 8 new clients per month. 2 spots left for this month —
          secure yours today.
        </p>
      </div>

      {/* Special Offer */}
      <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold">
          Special Offer For Early Clients
        </h3>
        <p className="text-gray-400 mt-2">
          Get 10% OFF + Free Hosting Setup when you book this week.
        </p>
        <button className="mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition">
          Claim my 10% discount →
        </button>
      </div>
    </section>
  );
}
