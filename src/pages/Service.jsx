
import {
  FaPhoneAlt,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";
import gasStove from "../assets/images/gas_stove.webp"
import chemney from "../assets/images/cheminey.webp"
import bhatti from '../assets/images/bhatti.webp'
import hob from "../assets/images/hob.webp"
import cooking from "../assets/images/cooking.webp"



const services = [
  {
    title: "Gas Stove Repair",
    description:
      "Professional gas stove repair for all brands. We help diagnose ignition issues, burner problems, gas leakage concerns, and flame issues.",
    image: gasStove,
    alt: "Technician repairing a kitchen gas stove",
  },
  {
    title: "Hob Repair Service",
    description:
      "We repair built-in kitchen hobs, including auto ignition, burner replacement, glass-top issues, and performance problems.",
    image: hob,
    alt: "Expert repairing a built-in kitchen hob",
  },
  {
    title: "Commercial Bhatti Repair",
    description:
      "Expert commercial bhatti repair services for hotels, restaurants, and catering kitchens with fast repair and maintenance support.",
    image: bhatti,
    alt: "Commercial kitchen bhatti appliance",
  },
  {
    title: "Cooking Range Repair",
    description:
      "Professional cooking range repair, including ignition, burner replacement, heating issues, and complete maintenance.",
    image: cooking,
    alt: "Technician servicing a cooking range",
  },
  {
    title: "Chimney Repair Service",
    description:
      "We provide chimney repair, deep cleaning, motor replacement, filter cleaning, and maintenance for better kitchen ventilation.",
    image: chemney,
    alt: "Technician repairing a kitchen chimney",
  },
];

const Service = () => {
  return (
    <main id="service" className="min-h-screen overflow-hidden bg-[#101212] text-white">
      {/* Page Heading */}
      <section className="px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
          What We Repair
        </p>

        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Professional Kitchen{" "}
          <span className="text-orange-500">Repair Services</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          We provide reliable, affordable, and professional kitchen
          appliance repair services for all types of kitchen appliances.
          Our goal is to deliver quality workmanship and convenient
          service at your doorstep.
        </p>
      </section>

      {/* Service Cards */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e1e] transition duration-300 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-xl hover:shadow-orange-500/5"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  width="500"
                  height="350"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-sm font-bold text-orange-400 backdrop-blur">
                  0{index + 1}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold leading-snug transition group-hover:text-orange-400">
                  {service.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                <a
                  href="tel:+917300116190"
                  aria-label={`Call now for ${service.title}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  <FaPhoneAlt />
                  Call Now
                  <FaArrowRight className="ml-auto" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#171a1a] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-[#272019] to-[#171a1a] p-8 text-center sm:p-10 md:flex-row md:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <FaTools className="text-2xl text-orange-500" />

              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                Need Expert Help?
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Let’s Fix Your Kitchen Appliance.
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Call AK Kitchen Center to discuss your repair needs.
            </p>
          </div>

          <a
            href="tel:+917300116190"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
          >
            <FaPhoneAlt />
            +91 7300116190
          </a>
        </div>
      </section>
    </main>
  );
};

export default Service;
