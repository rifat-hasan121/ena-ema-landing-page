import Image from "next/image";

export default function TrustUs() {
  return (
    <section className="bg-gray-900 text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Businesses <span className="text-emerald-400">Trust Us</span> With
          Their Designs
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/RocketLaunch (1).png"
                alt="Rocket"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Proven Conversion Framework
            </h3>
            <p className="text-gray-400 text-sm">
              Designs based on 100+ tested layouts that actually convert
              visitors into customers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/Palette (1).png"
                alt="Palette"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Agency Level Design</h3>
            <p className="text-gray-400 text-sm">
              Modern, premium, and tailored for your brand - without the agency
              price tag.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/Lightning (1).png"
                alt="Bolt"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              5-day Guaranteed Delivery
            </h3>
            <p className="text-gray-400 text-sm">
              With a highly professional team, we deliver on time, every time.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/CurrencyDollar (1).png"
                alt="Dollar"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-400 text-sm">
              No hidden fees, just clear value. What you see is what you pay.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/ArrowsClockwise (1).png"
                alt="Sync"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Revisions Until You're Happy
            </h3>
            <p className="text-gray-400 text-sm">
              We keep working until it’s right. Your satisfaction is guaranteed.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="mb-4">
              <Image
                src="/icons/Trophy (1).png"
                alt="Trophy"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Results That Speak</h3>
            <p className="text-gray-400 text-sm">
              Our pages consistently outperform industry averages for
              conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
