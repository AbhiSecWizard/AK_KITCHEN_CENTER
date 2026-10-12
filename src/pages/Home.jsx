
import {
  FaPhoneAlt,
  FaArrowRight,
  FaBolt,
  FaUserTie,
  FaShieldAlt,
  FaFire,
  FaTools,
} from "react-icons/fa";
import {
  MdOutlineKitchen,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import { GiKitchenTap } from "react-icons/gi";
import mainimg from "../assets/images/homemain.webp"
const services = [
  {
    title: "Gas Stove Repair",
    description: "Safe and reliable gas stove repairs.",
    icon: FaFire,
  },
  {
    title: "Hob Repair",
    description: "Built-in and freestanding hob service.",
    icon: MdOutlineKitchen,
  },
  {
    title: "Chimney Repair",
    description: "Cleaning, maintenance and repairs.",
    icon: GiKitchenTap,
  },
  {
    title: "Cooking Range Repair",
    description: "Professional cooking range servicing.",
    icon: FaTools,
  },
];

const features = [
  { title: "Fast Response", icon: FaBolt },
  { title: "Experienced Technicians", icon: FaUserTie },
  { title: "Transparent Pricing", icon: FaShieldAlt },
];

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#101212] text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-20">

          {/* Left Content */}
          <div className="relative z-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-base">
              AK Kitchen Center · Home Service Experts
            </p>

            <h1 className="text-4xl font-extrabold uppercase leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              Kitchen Appliance Repair,{" "}
              <span className="text-orange-500">Done Right.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Expert repair and service for gas stoves, hobs, chimneys
              and cooking ranges. Get your kitchen back to perfect
              working condition with reliable, professional and
              affordable service.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+917300116190"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <FaPhoneAlt />
                Call Now: +91 7300116190
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-orange-500 px-6 py-4 font-semibold transition hover:bg-orange-500"
              >
                Explore Services
                <FaArrowRight />
              </a>
            </div>

            {/* Features */}
            <div className="mt-9 flex flex-wrap gap-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200"
                  >
                    <Icon className="shrink-0 text-lg text-orange-500" />
                    <span>{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={mainimg}
                alt="Technician repairing a kitchen gas hob"
                width="900"
                height="1050"
                fetchPriority="high"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[530px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-2xl">
                    <MdOutlineHomeRepairService />
                  </div>

                  <div>
                    <h2 className="font-bold sm:text-lg">
                      Professional Kitchen Care
                    </h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Repair solutions for your kitchen appliances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="border-t border-white/10 bg-[#171a1a] px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              What We Repair
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Our Kitchen Repair Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              From everyday stove issues to chimney maintenance,
              get dependable service for your kitchen appliances.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-[#202323] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-[#252828]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10 text-3xl text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>

                  <a
                    href="tel:+917300116190"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400"
                  >
                    Book a Repair <FaArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-[#27201b] to-[#171a1a] p-8 text-center sm:p-12 md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Need a technician?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Let’s Get Your Kitchen Working Again.
            </h2>

            <p className="mt-3 text-gray-400">
              Contact us to discuss your appliance repair needs.
            </p>
          </div>

          <a
            href="tel:+917300116190"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
          >
            <FaPhoneAlt />
            Call Our Team
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
