
import {
  FaUserCheck,
  FaBolt,
  FaTools,
  FaTags,
  FaHouseUser,
  FaArrowRight,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUserCheck,
    number: "01",
    title: "Expert Technicians",
    description:
      "Our skilled technicians handle gas stoves, hobs, chimneys, and cooking ranges with professional care.",
  },
  {
    icon: FaBolt,
    number: "02",
    title: "Fast Response",
    description:
      "We aim to respond quickly and arrange convenient repair appointments according to availability.",
  },
  {
    icon: FaTools,
    number: "03",
    title: "Quality Spare Parts",
    description:
      "We focus on quality replacement parts and reliable repair methods for lasting performance.",
  },
  {
    icon: FaTags,
    number: "04",
    title: "Transparent Pricing",
    description:
      "Know the repair charges before work begins, with clear communication about the expected cost.",
  },
  {
    icon: FaHouseUser,
    number: "05",
    title: "Doorstep Service",
    description:
      "Get convenient kitchen appliance repair at your home or commercial kitchen.",
  },
];

const WhyChooseUs = () => {
  return (
    <main id="whychooseus" className="overflow-hidden bg-[#101212] text-white">
      {/* Heading Section */}
      <section className="relative px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
        <div className="absolute left-1/2 top-20 h-52 w-52 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Why Choose Us
          </span>

          <h1 className="mt-6 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            Why Customers Trust{" "}
            <span className="text-orange-500">
              AK Kitchen Center
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            AK Kitchen Center is committed to providing fast,
            affordable, and professional kitchen appliance repair
            services. We focus on reliable solutions, clear pricing,
            and quality workmanship for homes and commercial kitchens.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 border-t-2 border-t-orange-500/70 bg-[#191c1c] p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500/60 hover:bg-[#202424]"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-sm font-bold text-white/20">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon />
                </div>

                <h2 className="mt-6 text-lg font-bold leading-snug">
                  {reason.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {reason.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-500">
                  <span>Reliable Service</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#171a1a] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Need appliance repair?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Let Our Team Help You.
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Contact AK Kitchen Center for your kitchen repair needs.
            </p>
          </div>

          <a
            href="tel:+917300116190"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Call Now: +91 7300116190
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUs;
