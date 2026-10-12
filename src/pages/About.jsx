
import {
  FaCheckCircle,
  FaTools,
  FaClock,
  FaShieldAlt,
  FaRupeeSign,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import aboutImg from "../assets/images/aboutImg.webp"
const features = [
  {
    icon: FaTools,
    title: "Certified Technicians",
    description:
      "Experienced professionals for kitchen appliance repairs and maintenance.",
  },
  {
    icon: FaClock,
    title: "Same Day Service",
    description:
      "Quick response and convenient doorstep repair, subject to availability.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Spare Parts",
    description:
      "Quality replacement parts selected for reliable, long-lasting performance.",
  },
  {
    icon: FaRupeeSign,
    title: "Affordable Pricing",
    description:
      "Transparent repair charges with no hidden costs.",
  },
];

const About = () => {
  return (
    <main id="about" className="overflow-hidden bg-[#101212] text-white">
      {/* About Hero */}
      <section className="relative px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-400">
              <FaCheckCircle />
              About AK Kitchen Center
            </p>
            
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Your Trusted{" "}
              <span className="text-orange-500">
                Kitchen Appliance
              </span>{" "}
              Repair Experts
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              AK Kitchen Center provides professional kitchen
              appliance repair services for homes and commercial
              kitchens. We specialize in gas stove repair, hob
              repair, chimney repair, cooking range repair, and
              other kitchen appliance solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-400">
              Our team focuses on reliable doorstep service,
              quality spare parts, honest pricing, and professional
              workmanship. From minor maintenance to major repairs,
              we aim to get your kitchen running smoothly again.
            </p>

            {/* Call Button */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+917300116190"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <FaPhoneAlt />
                Call Now: +91 7300116190
              </a>

              <a
                href="/service"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-400"
              >
                Our Services
                <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1d1d] p-3 shadow-2xl">
              <img
                src={aboutImg}
                alt="Professional technician servicing a kitchen appliance"
                width="900"
                height="700"
                loading="lazy"
                decoding="async"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[430px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                  AK Kitchen Center
                </p>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                  Reliable Repairs. Better Kitchens.
                </h2>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-orange-500/30 bg-[#202323] p-4 shadow-xl sm:-left-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-2xl text-orange-500">
                <FaTools />
              </div>
              <div>
                <p className="font-bold">Professional Care</p>
                <p className="mt-1 text-xs text-gray-400">
                  For your kitchen appliances
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-white/10 bg-[#171a1a] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Service You Can Count On
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We focus on dependable repairs, clear communication,
              and a hassle-free customer experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-[#202323] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-2xl text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
  
    </main>
  );
};

export default About;
